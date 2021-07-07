import { useState } from "react";

// interface Joke {
//   id: number;
//   type: string;
//   setup: string;
//   punchline: string;
// }

interface DogPic {
  message: string;
  status: string;
}

function App() {
  // const [joke, setJoke] = useState<Joke>();
  const [pic, setPic] = useState<DogPic>();

  // const handleGetJoke = async () => {
  //   const response = await fetch(
  //     "https://official-joke-api.appspot.com/jokes/general/random"
  //   );
  //   const jsonBody: Joke[] = await response.json();
  //   setJoke(jsonBody[0]);
  // };

  const handleGetPic = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody: DogPic) => setPic(jsonBody));
  };

  // const handleGetPic = async () => {
  //   const response = await fetch(
  //     "https://dog.ceo/api/breeds/image/random"
  //   );
  //   const jsonBody: DogPic = await response.json();
  //   setPic(jsonBody)
  // }

  if (pic) {
    console.log(pic.message)
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          {/* <summary>{joke.setup}</summary>
          <p>{joke.punchline}</p>
          <p>{joke.type}</p> */}
          <img src={pic.message} alt="dog"/>
        </p>
        <hr />
        <button onClick={handleGetPic}>Get another pic</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          pic from an API!
        </p>
        <button onClick={handleGetPic}>Get pic</button>
      </div>
    );
  }
}

export default App;
