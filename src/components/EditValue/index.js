import { useState } from "react";

const EditValue = ({ players, onSave }) => {
  const [addEntradaPlayer, setAddEntradaPlayer] = useState()
  const [addEntradaScore, setAddEntradaScore] = useState()

  const editValueCorreu = (index) => {
    const updatedplayers = [...players];
    updatedplayers[index].initialValue -= 1;
    if (updatedplayers[index].initialValue < 0) {
      updatedplayers[index].initialValue = 0
    }
    onSave(updatedplayers);
  };

  const editValuePerdeu = (index) => {
    const updatedplayers = [...players];
    updatedplayers[index].initialValue -= 2;
    if (updatedplayers[index].initialValue < 0) {
      updatedplayers[index].initialValue = 0
    }
    onSave(updatedplayers);
  };

  const novaEntrada = (index, score) => {
    const updatedplayers = [...players];
    updatedplayers[index].entrada = updatedplayers[index].entrada + 1;
    updatedplayers[index].initialValue = score;
    onSave(updatedplayers);
  }
  return (
    <>

      <table width="60%" border="1">
        <tbody>
          <td width="20%" >Jogadores</td>
          <td width="2%">Pontos</td>
          <td width="2%">Correu</td>
          <td width="2%">Perdeu</td>
        </tbody>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              {player.initialValue === 0 ? (
                <td style={{textDecoration: "line-through"}} width="20%">{player.name} - {player.entrada} entrada </td>
                ) : (
                  <>
                    {player.entrada > 0 ? (
                      <>
                        <td width="20%">{player.name} - {player.entrada} entrada</td>
                      </>
                    ) : (
                      <>
                        <td width="20%">{player.name}</td>
                      </>
                    )}
                  </>
              )}

              <td width="2%">{player.initialValue}</td>
              <td>
                <input type="button" value="Correu" onClick={() => editValueCorreu(index)} />
              </td>
              <td>
                <input type="button" value="Perdeu" onClick={() => editValuePerdeu(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <br />
      Quer adicionar algum jogador que caiu?<br />
      <select onChange={(e) => setAddEntradaPlayer(e.target.value)}>
        <option>Selecione um jogador</option>
        {players.map((value, index) => {
          if (value.initialValue === 0) {
            return <option value={index} key={index} >{value.name}</option>
          } 
        })}
      </select>
      <br/>
      Pontos inicial:
      <br />
      <input type="number" size="35" value={addEntradaScore} min={0} max={7} onChange={event => setAddEntradaScore(event.target.value)} />
      &nbsp; &nbsp;
      <input type="button" size="35" value="Adicionar" onClick={()=> novaEntrada(addEntradaPlayer, addEntradaScore)} />
    </>
  )
}

export default EditValue