import React from 'react';
import '../css/LogedInPage.css'
import '../css/PetPage.css'
import { useNavigate , useLocation} from 'react-router-dom';

const PetPage = () => {
   const navigate = useNavigate()
   const location = useLocation()
   const takeToDogSection =()=>{
    navigate("/LogedInPage")
  }
  
  return (
    <>
        <div className='main-container-logedinpage'>
            <div className="header-container">
                <header>
                    <h1>Details</h1>
                </header>
                <div className='dog-pic-container'>
                    <div className="image-container">
                        <img src={require(`../assests/${location.state.url}.jpg`)}/>
                    </div>
                </div>
                <div className='name-conatainer'><span style={{fontWeight:'bold'}}> Name :</span> {location.state.name}</div>
                <div className='details-container'> <span style={{fontWeight:'bold',paddingBottom:'2%'}}>About</span> {location.state.details}</div>
                <div><button onClick={takeToDogSection}>Return to Selection</button></div>
            </div>
        </div>
    </>
  );
};

export default PetPage;
