import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductComponent from './components/ProductComponent';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ProductComponent />
  </React.StrictMode>
);

reportWebVitals(() => {}); // ✅ Safe no-op function

