import Toolbar from './components/Toolbar/Toolbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {useState} from 'react';
import {User} from './types';

function App() {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Sana', email: 'sanadex@gmail.com', isActive: true, role: 'user',},
  ]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="p-3">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-4">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
