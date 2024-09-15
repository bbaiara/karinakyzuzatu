import './App.css'
import { one, two,t1,t2,t3,t4,t5,t6,t7,t8 } from './assets'
function App() {

  return (
    <div className="App">
      <div className="intro">
      </div>
    <div className='pad'>
      <div className="intro-footer">
      </div>
      
      <div className="poem">
      </div>   
      <div className="invitation">
      </div>
      <div className="details">
        
        <div className="map">
          {/* Embed Google Map or other map service here */}
        </div>
      </div>
    </div>
    <div className='gallery'>
      <img src={one} alt=''/>
      <img src={t1} alt=''/>
      <img src={t2} alt=''/>
      <img src={t7} alt=''/>
      <img src={two} alt=''/>
      <img src={t3} alt=''/>
      <img src={t4} alt=''/>
      <img src={t5} alt=''/>
      <img src={t6} alt=''/>
      <img src={t8} alt=''/>
    </div>
    </div>
  )
}

export default App
