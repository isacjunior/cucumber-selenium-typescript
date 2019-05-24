export const findParam = (param: string) =>
  process.argv.join().match(`${param}=([^\\s]+)`)
