import React from 'react';
import NavBar from './NavBar';
import Slide from './Slide';
import Cards from './Cards';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <NavBar />
        <main ref="main">
          <Slide />
          <Cards />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
