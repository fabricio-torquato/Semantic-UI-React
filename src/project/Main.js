import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default()=> {

    return(
      <div>

        <header>
          <Header/>
        </header>

        <Body/>

        <footer>
          <Footer/>
        </footer>
        
      </div>
    )

}
