#!/bin/node
import shell from 'shelljs'
import chalk from 'chalk'
import fs from 'fs'

const projects_dir = '/home/gustavo/Projects/'

const files = fs.readdirSync(projects_dir, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)

async function fetch(dir) {
    shell.cd(projects_dir + dir, { async: true })
    shell.exec('git fetch', { async: true })
    shell.echo(chalk.green(`fetched ${projects_dir}` + dir))
}

let searches = new Promise((resolve, reject) => {
    files.forEach(async (dir) => {
        shell.echo(chalk.blue('analising... ') + chalk.red(dir))
        await fetch(dir)
        resolve()
    })
})

searches.then(() => {
    shell.echo(chalk.green('Done'))
})
