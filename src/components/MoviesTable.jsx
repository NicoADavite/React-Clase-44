import TableRow from "./TableRow";

import { tableHeaders, movies } from "../data/data";

const MoviesTable = () => {
  return (
    <div className="container-fluid">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            {tableHeaders.map((header, i) => (
              <th scope="col" key={i}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, i) => (
            <TableRow {...movie} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MoviesTable;
