import './App.css'
import { one, two,t1,t2,t3,t4,t5,t6,t7,t8 } from './assets'
function App() {

  return (
    <div className="App">
      <div className="intro">
        <div className="intro-header">
          <h1>Karina</h1>
          <h2>Кыз Узатуу          </h2>
        </div>
      </div>
    <div className='pad'>
      <div className="intro-footer">
        <p>Урматтуу коноктор!</p>
      </div>
      <div className="poem">
        <p>Сиздерди кызыбыз Каринанын кыз узатуу тоюна арналган салтанаттуу ак дасторкон үстүндө кадырлуу коногубуз болуп, ак батаңыздарды берип кетүүгө чакырабыз!.</p>
      </div>   
      <div className="invitation">
        <p>Your invitation text goes here...</p>
      </div>
      <div className="details">
        <p>17.09.2024 | 12:00</p>
        <p>Үйүбүздүн дареги : 
        Бишкек шаары, Азия 3</p>
        <p>Сиздерди Урматтоо менен той ээлери: Ниязбек,
        Эльвира</p>
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
