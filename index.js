const { symlinkSync, unlinkSync } = require('fs')

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
    symlinkSync(`${nodeModules}/${binary}`, `${nodeModules}/.bin/${item}`)
  } catch (error) {
    console.log(`${binary} not found, ${item} is skipped`)
  }
})
