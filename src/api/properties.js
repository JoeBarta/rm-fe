export async function getProperties() {
  try {
    const data = await fetch('http://localhost:4000/api/properties')
    return await data.json()
  } catch (err) {
    console.error(err)
  }
}
