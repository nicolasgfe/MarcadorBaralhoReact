const STORAGE_KEY = 'cachetaMarcador'

export const getItems = () => {
  const tempList = localStorage.getItem(STORAGE_KEY)

  if (tempList != null) {
    return JSON.parse(tempList)
  }

  return []
}

export const save = (newPlayers) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newPlayers))
}

export const clearList = () => {
  localStorage.clear()
}
export const editInitalValue = () => {
  localStorage.setItem()
}
