import './App.css';
import List from './components/List';
import Details from './components/Details';
import { useEffect, useState } from 'react';

function App() {

  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers()

  }, []);

  function showDetails(user) {
    setUser(user);
  }

  return (
    <div className="App">
      <List users={users} onClick={showDetails} />
      <Details info={user} />

    </div>
  );
}

export default App;
