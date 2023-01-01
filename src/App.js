import './App.css';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sky from './assets/stars.jpg';
import garden from './models/sunday_garden_fun.glb';

function App() {
  const loader = new GLTFLoader();

  loader.load(garden, (d) => {
    const entity = document.getElementById("garden");
    entity.object3D.add(d.scene);
  })

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={sky}/>
      </a-assets>

      <a-sky
        color = "#FFFFFF"
        material="src: #sky"
        rotation="0 0 0"
        >

        </a-sky>
        <a-entity id="garden" position="17 -30 60" scale="15 15 15">
          
        </a-entity>
    </a-scene>
  )
}

export default App;
