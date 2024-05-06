import{ Routes, Route} from "react-router-dom"

function Main(){
    return(
        <div className="Navigation">
       <ul>
          <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/about"> About</NavLink></li>
          <li><NavLink activeClassName="active" to="/contacts">Contacts</NavLink></li>
       </ul>
            
        </div>
    )
}