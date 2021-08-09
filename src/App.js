import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import List from './components/List';
import Place from './components/Place';

function App() {

  const [fetchedData, setFetchedData] = useState(undefined);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
      fetch('https://610bb7502b6add0017cb3a35.mockapi.io/api/v1/places')
      .then((response) => { return response.json(); })
      .then((data) => { setFetchedData(data); })
      .catch((error) => { setErrorMsg("Too many fetch requests! Please refresh later.") })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <List data={ fetchedData } errorMsg = { errorMsg }/>
          </Route>
          <Route path="/places/:id">
            <Place data={ fetchedData }/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
