import { useEffect, useState } from 'react';
import './App.css';
import SelectRating from './Components/SelectRating';
import RatingSubmitted from './Components/RatingSubmitted';

const RATING_OPTIONS = [1, 2, 3, 4, 5];

function App() {
  const [path, setPath] = useState('/select-rating');
  const [rating, setRating] = useState(null);

  useEffect(() => {
    if(window.location.pathname === '/rating-submitted') {
      setPath('/rating-submitted');
    }
  },[window.location.pathname])

  switch (path) {
    case '/rating-submitted':
      return (
        <RatingSubmitted
          setPath={setPath}
          rating={rating}
          ratingRange={RATING_OPTIONS.length}
        />
      );
    default:
      return (
        <SelectRating setPath={setPath} rating={rating} setRating={setRating} />
      );
  }
}

export default App;
