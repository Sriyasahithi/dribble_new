import React from 'react'
import Project from './Project'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpg'
import img8 from '../img/img8.jpg'
import img9 from '../img/img9.jpg'
import img10 from '../img/img10.jpg'
import img11 from '../img/img11.jpg'
import img12 from '../img/img12.jpg'
import img13 from '../img/img13.jpg'
const Projects = () => {
  return (
    <div className="flex flex-wrap max-w-7xl justify-evenly mt-10">
        <Project images={{image:img2, team:'Books',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img3, team:'Library',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img4, team:'Motivation',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img5, team:'Scenary',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img6, team:'Flowers',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img7, team:'Work',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img8, team:'Place',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img9, team:'Shop',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img10, team:'Room',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img11, team:'Mountain',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img12, team:'Coast',views:'2.3K',likes:'679'}}/>
        <Project images={{image:img13, team:'Coast',views:'2.3K',likes:'679'}}/>
    </div>
  )
}

export default Projects