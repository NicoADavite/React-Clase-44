import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import MoviesTable from "./MoviesTable";
import Footer from "./Footer";

const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <ContentRowTop />
        <MoviesTable />
      </div>
      <Footer />
    </div>
  );
};

export default ContentWrapper;
