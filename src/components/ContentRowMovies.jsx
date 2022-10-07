import Row from "./Row";
import ContentMoviesCard from "./ContentMoviesCard";

import { contentMoviesValues } from "../data/data";

const ContentRowMovies = () => {
  return (
    <Row>
      {contentMoviesValues.map((card, i) => (
        <ContentMoviesCard {...card} key={i} />
      ))}
    </Row>
  );
};

export default ContentRowMovies;
