import React from 'react';
import '../css/LogedInPage.css'
import {Link} from 'react-router-dom';

const LogedInPage = () => {
   
  return (
    <>
        <div className='main-container-logedinpage'>
            <div className="header-container">
                <header>
                    <h1>Dogs</h1>
                </header>
                <div className='dog-pic-container'>
                    <div className="image-container">
                        <img src={require("../assests/corgi.jpg")}/>
                            <Link className='links' to="/PetPage" state={{name:"Pembroke Welsh Corgi",details:"The Welsh Corgi is a small type of herding dog that originated in Wales. The name corgi is derived from the Welsh words cor and ci, meaning 'dwarf' and 'dog', respectively. Two separate breeds are recognized: the Pembroke Welsh Corgi and the Cardigan Welsh Corgi.",url:"corgi"}}>Breed : Corgi</Link>
                    </div>
                    <div className="image-container">
                        <img src={require("../assests/dash.jpg")}/>
                            <Link className='links' to="/PetPage" state={{name:"Dachshund",details:"The dachshund, also known as the wiener dog, badger dog, doxie, and sausage dog, is a short-legged, long-bodied, hound-type dog breed. The dachshund was bred to scent, chase, and flush out badgers and other burrow-dwelling animals.",url:"dash"}}>Breed : Dash</Link>
                    </div>
                    <div className="image-container">
                        <img src={require("../assests/lab.jpg")}/>
                            <Link className='links' to="/PetPage" state={{name:"Labrador Retriever",details:"The Labrador Retriever, or simply Labrador, is a British breed of retriever gun dog. It was developed in the United Kingdom from fishing dogs imported from the colony of Newfoundland, and was named after the Labrador region of that colony.",url:"lab"}}>Breed : Lab</Link>
                    </div>
                    <div className="image-container">
                        <img src={require("../assests/pomarian.jpg")}/>
                            <Link className='links' to="/PetPage" state={{name:"Pomeranian",details:"The Pomeranian is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. Classed as a toy dog breed because of its small size.",url:"pomarian"}}>Breed : Pomarian</Link>
                    </div>
                    <div className="image-container">
                        <img src={require("../assests/pug.jpg")}/>
                            <Link className='links' to="/PetPage" state={{name:"Pug",details:"The Pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colors, most often fawn or black, and a compact.",url:"pug"}}>Breed : Pug</Link>
                    </div>
                    <div className="image-container">
                        <img src={require("../assests/husky.jpg")}/>
                        <Link className='links' to="/PetPage" state={{name:'Siberian Husky',details:'The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute.', url:"husky"}}>Breed : Husky</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default LogedInPage;
