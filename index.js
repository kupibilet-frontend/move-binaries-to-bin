const fs = require('fs')

const unlink = (path) => new Promise((resolve, reject) => {
  fs.unlink(path, (err) => {
    if (err) return reject(err)
    return resolve()
  })
})

const stat = (path) => new Promise((resolve, reject) => {
  fs.stat(path, (err, stats) => {
    if (err) return reject(err)
    return resolve(stats)
  })
})

const symlink = (target, path, type) => new Promise((resolve, reject) => {
  fs.symlink(target, path, type, (err) => {
    if (err) return reject(err)
    return resolve()
  })
})


const nodeModules = `${process.cwd()}/node_modules`

const deps = [
  'eslint',
  'stylelint',
  'prettier',
]

const pathToBinary = {
  eslint: 'eslint/bin/eslint.js',
  stylelint: 'stylelint/bin/stylelint.js',
}

module.exports = () => deps.forEach((item) => {
  const binary = pathToBinary[item]
  const getStat = () => stat(`${nodeModules}/${binary}`)

  unlink(`${nodeModules}/.bin/${item}`).then(
    getStat,
    getStat
  ).then(
    () => symlink(`${nodeModules}/${binary}`, `${nodeModules}/.bin/${item}`).then(
      () => console.log(`symlink for ${item} created`)
    ),
    () => console.log(`${binary} not found, ${item} is skipped`)
  )
})
