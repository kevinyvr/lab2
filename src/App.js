// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { albums } from "./data";
import AlbumListing from "./AlbumListing";
import "./style.css";
import AlbumDetail from "./AlbumDetail";

function App() {
  return (
    <div className="mainContent">
      <div className="albumDetails">
          <AlbumDetail
            id={albums[3].id}
            coverImg={albums[3].coverImg}
            name={albums[3].name}
            tracks={albums[3].tracks}
          />
      </div>
      <div className="albumList">
        <h3>Select an Album</h3>
        {albums.map((album) => (
          <AlbumListing
            id={album.id}
            coverImg={album.coverImg}
            name={album.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
