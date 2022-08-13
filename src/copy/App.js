import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  function closeModal() {
    setToggleModal(false);
  }

  return (
    <div className="App">
      <div className="top_bar">
        <h1>Company Name</h1>
        <nav>
          <a href="localhost:3000">Home</a>
          <a href="localhost:3000">Articles</a>
          <a href="localhost:3000">News</a>
          <a href="localhost:3000">Forum</a>
          <a href="localhost:3000">Contact</a>
        </nav>
      </div>

      <main>
        <p>
          I'm baby kickstarter pickled occupy tumblr tbh tofu craft beer, subway
          tile you probably haven't heard of them cray hexagon bitters raw
          denim. Blue bottle slow-carb food truck, subway tile lyft polaroid
          poke godard kitsch. DIY 3 wolf moon meditation, street art art party
          bitters mlkshk williamsburg bicycle rights paleo direct trade
          literally. Artisan roof party mixtape, etsy neutra copper mug poke
          live-edge. Fam chicharrones trust fund, pabst meggings cornhole
          vaporware tofu...
        </p>
        <button onClick={() => setToggleModal(true)}>Read more</button>
        <Modal toggleModal={toggleModal} onClick={closeModal} />
      </main>
      <footer>Copyright by example.company</footer>
    </div>
  );
}

export default App;
