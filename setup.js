require('@babel/register')({
  extensions: ['.js', '.ts'],
  presets: [
    ['@babel/preset-env', { targets: 'node 10' }],
    ['@babel/preset-typescript', { allExtensions: true }]
  ]
})
