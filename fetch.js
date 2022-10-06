#!/bin/node
import shell from 'shelljs'
import chalk from 'chalk'

let dirs = ['core', 'tim', 'gsim-core-go', 'gsim-tim-go']
dirs.forEach( dir => {
    shell.cd('/home/gustavo/Projects/' + dir)
    shell.echo(chalk.blue('analisando... ') + chalk.red(dir))
    shell.exec('git fetch')
})
shell.echo(chalk.green('Feito'))
