import { useEffect, useState } from "react";

function Details({ info }) {
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(url + info?.id + '.json');
      const user = await response.json();
      setUser(user);
    }
    if (info) {
      fetchUser();
    }

  }, [info])

  return (
    <>
      {info && <div className="user-details">
        <div className="user-details-item"><img src={user?.avatar} alt="" /></div>
        <div className="user-details-item">{user?.name}</div>
        <div className="user-details-item">City: {user?.details.city}</div>
        <div className="user-details-item">Company: {user?.details.company}</div>
        <div className="user-details-item">Position: {user?.details.position}</div>
      </div>}
    </>
  )
}

export default Details;