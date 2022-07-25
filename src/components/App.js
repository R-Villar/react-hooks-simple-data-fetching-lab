// create your App component here
import { useState, useEffect } from "react";

function App() {
    const [ dogs, setDogs ] = useState()

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => {
                setDogs(data.message)
            }) 
    }, [])

    if (!dogs) return <p>Loading...</p>

    return <img src={dogs} alt='A Random Dog'/>
}

export default App