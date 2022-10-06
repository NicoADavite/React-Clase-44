import PropTypes from "prop-types";

const TableRow = ({ id, title, length, rating, genres, awards }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{length}</td>
      <td>{rating}</td>
      <td>
        <ul>
          {genres.map((genre, i) => {
            return <li key={i}>{genre}</li>;
          })}
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  );
};
export default TableRow;

TableRow.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  length: PropTypes.number,
  rating: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  awards: PropTypes.number,
};
