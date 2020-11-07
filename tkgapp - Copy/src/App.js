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
      <tkg-card-hover>
        <h2>TEST</h2>
        
      </tkg-card-hover>

    </div>
  );
}

export default App;
