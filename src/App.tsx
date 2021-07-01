import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';
import { AuthContextProvaider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvaider>
        <Route path="/" exact component={Home} />
        <Route path="/roons/new" component={NewRoom} />
      </AuthContextProvaider>
    </BrowserRouter>
  );
}
export default App;
