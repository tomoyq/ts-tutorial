export default function anySample() {
  //any型は基本使わない
  //let name: any = 'Torahack'
  let name: unknown = 'Torahack'
  console.log(typeof name, name)

  name = 28
  console.log(typeof name, name)
}
