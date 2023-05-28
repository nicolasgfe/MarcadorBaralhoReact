const EditValue = ({ players, onSave }) => {

  const editValueCorreu = (index) => {
    const updatedplayers = [...players];
    updatedplayers[index].initialValue -= 1;
    onSave(updatedplayers);
  };
  const editValuePerdeu = (index) => {
    const updatedplayers = [...players];
    updatedplayers[index].initialValue -= 2;
    onSave(updatedplayers);
  };

  return (
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
            <td width="20%">{player.name}</td>
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
  )
}

export default EditValue