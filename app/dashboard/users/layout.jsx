import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <YourLayoutOrRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
