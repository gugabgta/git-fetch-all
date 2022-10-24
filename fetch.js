#!/bin/node
import shell from 'shelljs'
import chalk from 'chalk'
import fs from 'fs'

const files = fs.readdirSync('/home/gustavo/Projects/', { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)

async function fetch(dir) {
    shell.cd('/home/gustavo/Projects/' + dir, {'async': false})
    await shell.exec('git fetch', {'async': true})
    shell.echo(chalk.green('fetched /home/gustavo/Projects/' + dir))
}

let searches = new Promise((resolve, reject) => {
    files.forEach(async (dir) => {
        shell.echo(chalk.blue('analisando... ') + chalk.red(dir))
        await fetch(dir)
        resolve()
    })
})

searches.then(() => {
    shell.echo(chalk.green('Feito'))
})
