import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, SetMovieRating] = useState(0);
  function handleMovieRating(rating) {
    SetMovieRating(rating);
  }
  return (
    <div>
      <StarRating maxRating={10} onSetRating={handleMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={'sss'}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating
      maxRating={5}
      color={'red'}
      className="test"
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
