import starIcon from '../images/icon-star.svg';

const RATING_OPTIONS = [1, 2, 3, 4, 5];

function SelectRating(props) {
  const onSubmitHandler = () => {
    window.location.assign('/rating-submitted');
  };

  return (
    <div className="container">
      <img className="rounded-background" src={starIcon} alt="star icon" />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul>
        {RATING_OPTIONS.map((option) => (
          <li key={option}>
            <button
              className={
                props.rating === option
                  ? `rating-button rounded-background selected`
                  : 'rating-button rounded-background'
              }
              onClick={() => props.setRating(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onSubmitHandler} className="submit-button">
        Submit
      </button>
    </div>
  );
}

export default SelectRating;
