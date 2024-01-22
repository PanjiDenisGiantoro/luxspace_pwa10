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
import Splash from "./pages/Splash";


function App() {
    const [items, setItems] = React.useState([]);
    const [offlineStatus, setOfflineStatus] = React.useState(!navigator.onLine);

    const [isLoading, setIsLoading] = React.useState(true);

    function handleOfflineStatus() {
        setOfflineStatus(!navigator.onLine);
    }

    React.useEffect(function () {
        (async function () {
            const response = await fetch('https://bwacharity.fly.dev/items', {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            const {nodes} = await response.json();
            setItems(nodes);


            handleOfflineStatus();
            window.addEventListener("online", handleOfflineStatus);
            window.addEventListener("offline", handleOfflineStatus);

            setTimeout(function () {
                setIsLoading(false);
            }, 1500)
            return function () {
                window.removeEventListener("online", handleOfflineStatus);
                window.removeEventListener("offline", handleOfflineStatus);
            }
        })();
    }, [offlineStatus])
    return (
        <>
            {isLoading === true ? <Splash/> :
                (
                    <>
                        {offlineStatus && <Offline/>}
                        <Header/>
                        <Hero/>
                        <Browser/>
                        <Arrived items={items}/>
                        <Clients/>
                        <AsideMenu/>
                        <Footer/>

                    </>)}
        </>
    );
}

export default App;
