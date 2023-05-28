
const playersList = ({ players }) => {

  return (
    <table width="90%" border="1">

      <tbody>
        {players.map((player) => (
          <th width="9%">{player.name}</th>
        ))}
      </tbody>
      <tbody>
        {players.map((player) => (
          <td>{player.initialValue}</td>
        ))}
      </tbody>
    </table>
  )
}

export default playersList