import thankYouIcon from '../images/illustration-thank-you.svg';

function RatingSubmitted(props) {

  return (
    <div className="thankyou-container">
      <img
        src={thankYouIcon}
        alt="Thank you icon"
      />
      <p className="rating-selection">{`You selected ${props.rating} out of ${props.ratingRange}`}</p>
      <h2>Thank you!</h2>
      <p className="thankyou-message">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default RatingSubmitted;
