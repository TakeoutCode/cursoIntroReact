import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Root principal
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// Portal
const modalRoot = document.getElementById('modal');
if (modalRoot) {
  createPortal(<App />, modalRoot);
}