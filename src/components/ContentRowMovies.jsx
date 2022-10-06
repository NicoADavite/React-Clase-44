import PropTypes from 'prop-types';

const ContentRowMovies = ({ title, number, color, icon }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
              >
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {number}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas fa-${icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRowMovies;

ContentRowMovies.defaultProps = {
  title: "Titulo Default",
  number: 100,
  color: "primary",
  icon: "user",
}

ContentRowMovies.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
