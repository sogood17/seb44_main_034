import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import { styled } from 'styled-components';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
// import Footer from './components/footer/Footer';

const queryClient = new QueryClient();
const S = {
  Container: styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  max-width: 768px;
`
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Header />
        <S.Container>
          <Outlet />
        </S.Container>
        <Nav />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
