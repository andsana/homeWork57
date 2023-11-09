import Toolbar from './components/Toolbar/Toolbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

function App() {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <div className="row mt-2">
          <div className="col-4">
            <UserForm/>
          </div>
          <div className="col-4">
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
