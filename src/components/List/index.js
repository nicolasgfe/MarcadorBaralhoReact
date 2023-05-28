
const playersList = ({ players }) => {

  return (
    <table width="90%" border="1">

      <tbody>
        {players.map((player, index) => (
          <>
            {player.initialValue > 0 ? (
              <th width="9%">{player.name}</th>
              ) : (
              <th style={{textDecoration: "line-through"}} width="9%">{player.name}</th>
              )}
            </>
        ))}
      </tbody>
      <tbody>
        {players.map((player) => (
          <>
          {player.initialValue > 0 ? (
            <td align="center">{player.initialValue}</td>
            ) : (
            <td align="center">{player.initialValue}</td>
            )}
          </>
        ))}
      </tbody>
    </table>
  )
}

export default playersList