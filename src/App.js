import NavBar from "./NavBar"
import aVenir from "./Pages/aVenir"
import HomePage from "./Pages/HomePage"
import Meilleur from "./Pages/Meilleur"
import Nouveau from "./Pages/Nouveau"

function App(){
  /*let Component
  switch(window.location.pathname){
    case "/":
      Component = HomePage
    break
    case "/meilleur":
      Component = Meilleur
    break
    case "/nouveau":
      Component = Nouveau
    break
    case "/avenir":
      Component = aVenir
    break
  }*/
  return (
    <>
    <NavBar/>
      <div className="container">
            <ul>
                <h1>
                  Meilleur
                </h1>
                <Card  img="https://i.imgur.com/Th769dS.png" title="Zelda BOTW" platform="Plate-forme: Switch" score="Score: 9.5"/>
                <Card  img="https://i.imgur.com/2YBIR12.png" title="Elden Ring" platform="Plate-forme: PC" score="Score: 9.4"/>
                <Card  img="https://i.imgur.com/pfVB0kI.png" title="Endwalker" platform="Plate-forme: PS5" score="Score: 9.3"/>
            </ul>
            <ul>
                <h1>
                   Nouveau
                </h1>
                <Card  img="https://i.imgur.com/jXRubjE.png" title="13 Sentinels" platform="Plate-forme: PS4" score="Score: 8"/>
                <Card  img="https://i.imgur.com/b7n0X1Y.png" title="Stanley Parable" platform="Plate-forme: PC" score="Score: 7"/>
                <Card  img="https://i.imgur.com/9odsvz9.png" title="GhostWire: Tokyo" platform="Plate-forme: Wii U" score="Score: 8.5"/>
            </ul>
            <ul>
                <h1>
                   A venir
                </h1>
                <Card  img="https://i.imgur.com/LXbWqoh.png" title="ESO High Isle" platform="Xbox 360" score="Date de sortie: 01/01/2023"/>
                <Card  img="https://i.imgur.com/kYodhYY.png" title="TLOU Part I" platform="Xbox One" score="Date de sortie: 01/01/2024"/>
                <Card  img="https://i.imgur.com/5yiWYBp.png" title="God of War" platform="PS6" score="Date de sortie: 01/01/2025"/>
            </ul>
      </div>

    </>
  )
  
}

function Card(props){
  return (
      <div className="card">
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <img src={props.img} class="card__image" />
          <p className="card__platform">{props.platform}</p>
          <p className="card__score">{props.score}</p>
        </div>
      </div>
    );
}
export default App