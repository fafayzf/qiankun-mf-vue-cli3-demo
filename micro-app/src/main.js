const app = import("./bootstrap")

export async function bootstrap(...params) {
  return (await app).bootstrap(...params)
}
export async function mount(...params) {
  return (await app).mount(...params)
}
export async function unmount(...params) {
  return (await app).unmount(...params)
}

// 增加 update 钩子以便主应用手动更新微应用
export async function update(...params) {
  return (await app).update(...params)
}