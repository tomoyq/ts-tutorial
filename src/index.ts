// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

//03.基本の型定義
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

//04.関数の型定義
import { isUserSignedIn, isUserSignedIn2, sumPoductsPrice } from './function/parameters'
import { logMessage } from './function/basic'

logMessage('Hello World')
isUserSignedIn('ABC', 'Torahack')
isUserSignedIn('EFG')
isUserSignedIn2('ABC')
const sum = sumPoductsPrice(100, 200, 300, 400, 500)
console.log('Function parameters sample 5:', sum)
