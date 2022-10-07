import PropTypes from 'prop-types'

const GenreCard = ({name}) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{name}</div>
      </div>
    </div>
  );
};

export default GenreCard;

GenreCard.defaultProps = {
    name: "no genre"
}

GenreCard.propTypes = {
    name: PropTypes.string.isRequired
}


