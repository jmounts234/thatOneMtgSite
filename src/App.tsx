
import './App.css';
import { FC } from 'react'
import ImageList from './components/ImageList'

const imageUrls = [
  'https://cards.scryfall.io/large/front/9/2/924e9db3-3f7b-4e07-b523-5ec236f99681.jpg?1681411424',
  'https://cards.scryfall.io/large/front/c/a/ca095559-ac77-4186-8d9b-b75ce0607582.jpg?1592710284',
  'https://cards.scryfall.io/large/front/4/8/48b597dd-f6eb-45da-977d-453e8c1433cc.jpg?1608911023',
];

const App: FC = () => {
  return (
    <div className="App">
      <h1>Some Mtg Site</h1>
      <div className='hand'>
        <ImageList imageUrls={imageUrls} />
      </div>
    </div>
  );
}

export default App;