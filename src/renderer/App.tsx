import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SetupWallet from './component/unauthorizedRoute/SetupWallet';
import RegisterWalletForm from './component/unauthorizedRoute/RegisterWalletForm';
import RecoverWallet from './component/unauthorizedRoute/RecoverWallet';
import ViewParaphase from './component/unauthorizedRoute/ViewParaphase';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SetupWallet />} />
        <Route path="/register-wallet" element={<RegisterWalletForm />} />
        <Route path="/recover-wallet" element={<RecoverWallet />} />
        <Route path="/view-paraphase" element={<ViewParaphase />} />{' '}
      </Routes>
    </Router>
  );
}
