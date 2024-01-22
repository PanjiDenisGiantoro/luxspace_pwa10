import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Browser from "./components/Browser";
import Arrived from "./components/Arrived";
import AsideMenu from "./components/AsideMenu";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Offline from "./components/Offline";


function App() {
    const [items, setItems] = React.useState([]);
    const [offlineStatus, setOfflineStatus] = React.useState(!navigator.onLine);

    function handleOfflineStatus() {
        setOfflineStatus(!navigator.onLine);
    }
    React.useEffect(function (){
        (async function(){
            const response = await fetch('https://bwacharity.fly.dev/items',{
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            const { nodes } = await response.json();
            setItems(nodes);
            const script = document.createElement("script");
            script.src = "/carousel.js";
            script.async = false;
            document.body.appendChild(script);

            handleOfflineStatus();
            window.addEventListener("online", handleOfflineStatus);
            window.addEventListener("offline", handleOfflineStatus);

            return function() {
                window.removeEventListener("online", handleOfflineStatus);
                window.removeEventListener("offline", handleOfflineStatus);
            }
        })();
    },[offlineStatus])
  return (
      <>
          {offlineStatus && <Offline/>}
        <Header/>
        <Hero/>
        <Browser/>
        <Arrived items={items}/>
        <Clients />
        <AsideMenu />
        <Footer />
      </>
  );
}

export default App;
