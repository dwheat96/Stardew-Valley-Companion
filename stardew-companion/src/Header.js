import './Header.css';
import React from 'react'


function Header() {
  return (

    <div className="topbar">

        {/* <div className="topbar-item">
            <span>No User</span>
        </div> */}

        <div className="topbar-item">
            <button>Crafts Room</button> 
        </div>

        <div className="topbar-item">
            <button>Pantry</button>
        </div>

        <div className="topbar-item">
            <button>Fish Tank</button>
        </div>

        <div className="topbar-item">
            <button>Bulletin Board</button>
        </div>
            
        <div className="topbar-item">
            <button>Boiler Room</button>
        </div>

        <div className="topbar-item">
            <button>Vault</button>
        </div>

    </div>

  )
}

export default Header