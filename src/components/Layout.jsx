import React from 'react'

import challenges from '../data/challenges'

function Layout() {

  
  return (
    <div>
      <ul className="challenges">
        {challenges.map((item) => (
          <li key={item.day} className={`challenge-${item.day} frame center`}>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Layout
