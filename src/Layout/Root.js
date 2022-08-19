import React from 'react';
import Menu from 'Components/Menu/Menu';
import Header from 'Components/Header/Header';
import Main from 'Components/Main/Main';
import Footer from 'Components/Footer/Footer';
import { GlobalStyles } from 'Assets/Styles/GlobalStyles';

const Root = () => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Root;