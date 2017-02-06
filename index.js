const { symlinkSync, unlinkSync, statSync } = require('fs')

const nodeModules = `${process.cwd()}/node_modules`

const deps = [
  'eslint',
  'stylelint',
]

const pathToBinary = {
  eslint: 'eslint/bin/eslint.js',
  stylelint: 'stylelint/bin/stylelint.js',
}

deps.forEach((item) => {
  const binary = pathToBinary[item]
  try {
    unlinkSync(`${nodeModules}/.bin/${item}`)
  } catch (error) {
  }

  try {
    statSync(`${nodeModules}/${binary}`)
  } catch (err) {
    console.log(`${binary} not found, ${item} is skipped`)
    return false
  }

  symlinkSync(`${nodeModules}/${binary}`, `${nodeModules}/.bin/${item}`)
  console.log(`binary for ${item} is created`)
})
