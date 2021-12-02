import { HashRouter, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Main from './pages/Main';
import Contents from './pages/Contents';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Loading} />
      <Route path="/main" component={Main} />
      <Route path="/contents" component={Contents} />
    </HashRouter>
  );
}

export default App;
