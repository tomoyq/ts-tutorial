//オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameters sample 2: User is not signed in!')
    return false
  }
}

//デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, userName = 'No Name'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameters sample 4: User is not signed in!')
    return false
  }
}

//レストパラメーターを持つ関数
export const sumPoductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}

//呼び出しシグネチャ（省略記法）
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
  console.log('Function parameters sample 6:', message)
}

//完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMessage7: FullLogMessage = (message) => {
  console.log('Function parameters sample 7:', message)
}
