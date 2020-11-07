import bttnstyle from './dist/css/tkg-button.css'
import cardhoverstyle from './dist/css/tkg-card-hover.css'
import pager from './dist/css/tkg-pager.css'
import accordian from './dist/css/tkg-accordian.css'
import { TKGButton } from './dist/js/tkg-templates/tkg-button'
import { TKGHoverCard } from './dist/js/tkg-templates/tkg-card-hover'
import { TKGPager } from './dist/js/tkg-templates/tkg-pager'
import { TKGAccordian } from './dist/js/tkg-templates/tkg-accordian'
import logo from './logo.svg';
import $ from "jquery";
import './App.css';
let defaultAPP = ''
function App() {
  return (
    <div className="App">
      
      <tkg-accordian>
          <ul className='ta-sub-ul'>
            <li className='ta-sub-bttn'>
              <h2 id='caption'>Development</h2>
            </li>
            <li className='ta-sub-bttn'>
              <h2 id='caption'>Resume</h2>
            </li>
            <li className='ta-sub-bttn'>
              <h2 id='caption'>Github</h2>
              
            </li>
      
            <li className='ta-sub-cont'>
              <div id='cont' className='cont1'>
                <h2>TEST CONTENT 1</h2>
                <h2>TEST CONTENT 1</h2>
              </div>
            </li>
            <li className='ta-sub-cont'>
              <div id='cont' className='cont2'>
                <h2>TEST CONTENT 2</h2>
                <h2>TEST CONTENT 2</h2>
              </div>
            </li>
            <li className='ta-sub-cont'>
              <div id='cont' className='cont3'>
                <h2>Check out my Github Repositories</h2>
                <h4><a href="https://github.com/tgraha09/Personal-Projects/tree/main/TKGAPP%20-%20React%20%2B%20Electron%20%2B%20Webpack">
                  TKG APP (Testing Envrionment) </a></h4>
              </div>
            </li>
            
          </ul>
          
        </tkg-accordian>

    </div>
  );
}

export default App;
