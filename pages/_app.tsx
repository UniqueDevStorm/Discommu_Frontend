import '../styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
      <div>
          <Navbar />
          <div className='min-h-screen flex flex-col'>
              <div className='flex-grow'>
                  <Component {...pageProps} />
              </div>
              <Footer />
          </div>
      </div>
  )
}

library.add(fab)

export default MyApp
