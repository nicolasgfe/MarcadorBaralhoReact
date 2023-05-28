import { useState } from "react"

const PlayersForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [initialValue, setInitialValue] = useState(7);

  const save = () => {
    const player = {
      name,
      initialValue,
      entrada: 0
    }

    onSave(player)
    clearForm()
  }

  const clearForm = () => {
    setName('');
    setInitialValue(7);
  }

  return (
    <>
      Nome:
      <br />
      <input type="text" size="35" value={name} onChange={event => setName(event.target.value)} />
      <br /> <br />

      Pontos inicial:
      <br />
      <input type="number" size="35" value={initialValue} min={0} max={10} onChange={event => setInitialValue(event.target.value)} />

      <br />
      <input type="button" value="Salvar" onClick={save} /> &nbsp;
      <input type="button" value="Cancelar" onClick={clearForm} />
    </>
  )

}

export default PlayersForm