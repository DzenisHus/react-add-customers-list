import './App.css';
import { useState } from 'react';
import Description from './components/description';
import Form from './components/form.js';
import ResultList from './components/result-list';
import UsersContext from './constants/users.js';

function App() {
  const [users, setUsers] = useState({});

  return (
    <div className="App">
      <div className='relative flex min-h-screen items-center justify-center overflow-hidden py-6 sm:py-12'>
        <div className='p-10 ring-1 ring-gray-200 rounded-md bg-white shadow-2xl max-w-[90%]'>
          <Description />
          <UsersContext.Provider value={{users, setUsers}}>
              <Form />
              <ResultList />
          </UsersContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
