import React, { Component} from 'react';
/* { useEffect, useState }
import sanityClient from '../client.js';
import backgroundComputerScience from '../background_computer_science.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';*/

// toute la partie pour utiliser three.js
import ReactDOM from "react-dom";
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import backgroundImage from '../portfolio2021.png'

/**
 * ce que fait mon three.js
 */
class App extends Component {
    
    // animations avec three.js
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    camera.position.z = 30;
    
    // objets à ajouter
    var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    var material = new THREE.MeshStandardMaterial( { color: 0xff6347  } );
    var torus = new THREE.Mesh( geometry, material );
    scene.add( torus );
    
    // pour ajouter beaucoup d'étoiles
    function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial( {color: 0xffffff})
    const star = new THREE.Mesh( geometry, material);
    const [x,y,z] = Array(3).fill().map( ()=> THREE.MathUtils.randFloatSpread(100));
    star.position.set(x,y,z);
    scene.add(star);
    }
    Array(200).fill().forEach(addStar);

    // ajouter des textures (image de fond au lieu du vide par exemple)
    const spaceTexture = new THREE.TextureLoader().load(backgroundImage);
    scene.background = spaceTexture;
    
    // lumières
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5,5,5);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);
    
    // pour m'aider lors du développement à visualiser comment placer mes éléments
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200,50);
    scene.add(lightHelper, gridHelper);
    
    // contrôles
    const controls = new OrbitControls(camera, renderer.domElement);
    
    // gère l'animation des objets
    var animate = function () {
      requestAnimationFrame( animate );
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      controls.update();
      renderer.render( scene, camera );
    };
    animate();
  }

  //   ce que l'on va afficher
  render() {
    return (
        <main>
            <h1> test</h1>
        <div  ref={ref => (this.mount = ref)} className="fixed "> </div>
      </main>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/*
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}
*/
export default function About() {
    /*const [author, setAuthor] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "author"] {
            name,
            bio,
            "authorImage": image.asset->url,
        }`).then((data) => setAuthor(data[0])).catch(console.error);
        }, []);
        if(!author) return <div> En cours de chargement...</div>;
        */
        return <div></div> /*(
            <main className="relative"> 
                <img src={backgroundComputerScience} alt="setup pour programmer" className="absolute w-full" />
                <div className="p-10 lg:pt-48 container mx-auto relative">
                    <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                        <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt= {author.name} />
                        <div className="text-lg flex flex-col justify-center">
                            <h1 className="cursive text-6xl text-green-300 mb-4"> Salut ! Je suis {" "} 
                            <span className="text-green-100"> {author.name} </span></h1>
                            <div className="prose lg:prose-xl text-white">
                                <BlockContent blocks={author.bio} projectId="48fh369m" dataset="production" />
                            </div>
                        </div>
                    </section>
                </div>
            </main> 
        )*/
}