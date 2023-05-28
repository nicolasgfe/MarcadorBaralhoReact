import { useEffect, useState } from "react"
import ExpensesForm from "./components/Form"
import ExpensesList from './components/List'
import { expenseService } from "./services"
import EditValue from "./components/EditValue"
import { clearList } from "./services/players"

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const expenses = expenseService.getItems()
    setItems(expenses)
  }, [])

  const updateList = (expense) => {
    const newExpenses = [...items, expense]

    setItems(newExpenses)
    expenseService.save(newExpenses)
  }

  const editList = (expense) => {
    setItems(expense)
    expenseService.clearList()
    expenseService.save(items)
  }

  const clear = () => {
    clearList();
    setItems([]);
  }

  return (
    <div>
      <h1>Marcador cacheta</h1>
      <ExpensesForm onSave={updateList} />
      &nbsp; &nbsp;
      <input 
        type="button" 
        value="Nova Partida" 
        onClick={clear} 
        disabled={(!items.length > 0)}
        />
      <br /><br />
      {items.length > 0 && (
        <>
          <EditValue players={items} onSave={editList} />
          <br /><br />
          <ExpensesList players={items} />
        </>
      )}
    </div>
  )
}


export default App