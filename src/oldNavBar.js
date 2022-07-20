import "./styles.css"
export default function Navbar() {
  return (
    <nav className="nav">
      <a href ="/" className="site-title">
        uoGaming
      </a>
      <ul>
        <li className="active">
          <a href ="/meilleur">
            Meilleur
          </a>
        </li>
        <li className="active">
          <a href ="/nouveau">
            Nouveau
          </a>
        </li>
        <li className="active">
          <a href ="/avenir">
            A venir
          </a>
        </li>
      </ul>
    </nav>
  )
}
