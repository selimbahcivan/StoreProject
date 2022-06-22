import { ContactPage } from '@mui/icons-material';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import HomePage from '../../features/home/HomePage';
import Header from './Header';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? 'eaeaea' : '#121212'
      }
    }
  })
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <ThemeProvider theme={theme}>

        <ToastContainer position='bottom-right' hideProgressBar theme='colored' />

        <CssBaseline />

        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />

        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:id' element={<ProductDetails />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Container>

      </ThemeProvider>
    </>
  );
}

export default App;
