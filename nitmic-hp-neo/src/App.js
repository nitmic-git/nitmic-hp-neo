import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute"
import PublicRoute from "./components/PublicRoute"
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
        <Routes>
          <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
          <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
          <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
          <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;