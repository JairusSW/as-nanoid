let urlAlphabet = ['M','o','d','u','l','e','S','y','m','b','h','a','s','O','w','n','P','r','-','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','N','R','V','f','g','c','t','i','U','v','z','_','K','q','Y','T','J','k','L','x','p','Z','X','I','j','Q','W']

export function nanoid(length: number = 21): string {
  let id = ''
  for (let i = 0; i < length; i++) {
    id += urlAlphabet[i32(Math.floor(Math.random() * 64))]
  }
  return id
}