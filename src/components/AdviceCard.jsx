import SpinnerDots from './SpinnerDots';
import useAdvice from '../hooks/useAdvice';

function AdviceCard() {
  const { advice, adviceId, isLoading, error, getAdvice } = useAdvice();

  return (
    <section
      className="card"
      aria-labelledby="advice-title">
      <div className="card__content">
        {isLoading ? (
          <SpinnerDots />
        ) : (
          <>
            <h1
              className="card__title"
              id="advice-title">
              Advice #<span className="card__title--id">{adviceId}</span>
            </h1>
            <blockquote className="card__text">
              {error ? (
                <p className="card__text--error">{error}</p>
              ) : (
                <q className="card__text--advice">{advice}</q>
              )}
            </blockquote>
          </>
        )}
      </div>
      <button
        className="card__button"
        id="button"
        onClick={getAdvice}
        disabled={isLoading}
        aria-label="Get new advice"
        aria-busy={isLoading}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <title>Advice Button Dice</title>
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
        <span className="visually-hidden">Click for advice</span>
      </button>
    </section>
  );
}

export default AdviceCard;
