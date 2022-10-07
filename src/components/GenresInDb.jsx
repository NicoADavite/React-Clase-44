import Row from "./Row";
import GenreCard from "./GenreCard";

import { genres } from '../data/data';

const GenresInDb = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <Row>
            { genres.map((genre, i) => (
              <GenreCard name={genre} key={i}/>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default GenresInDb;
