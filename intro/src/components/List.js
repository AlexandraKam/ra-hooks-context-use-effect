
function List({ users, onClick }) {

  return (
    <div className="user-list">
      {
        users.map(user =>
          <div className="user-list-item" onClick={() => onClick(user)} key={user.id}>{user.name}</div>
        )
      }
    </div>
  )
}

export default List;