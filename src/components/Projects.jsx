const Projects = () => {
  return (
    <div className="projects container">
      <h2>Projects</h2>
      <div className="container container-center">
        <div className="row">
          <div className="bg-dark p-1">
            <div style={{"z-index": 0}}>
            <div className="row row-w">
              <div className="col-md-3 card-design1">
                <div className="h5 p-1 L1">23-Sep-2022</div>
                <div className="h3 p-1">Project 1</div>
                <div className="btn-bg p-1">Source</div>
              </div>

              <div className="col-md-3 card-design1">
                <div className="h5 p-1 L1">18-Oct-2022</div>
                <div className="h3 p-1">Project 2</div>
                <div className="btn-bg p-1">Source</div>
              </div>

              <div className="col-md-3 card-design1">
                <div className="h5 p-1 L1">20-Nov-2022</div>
                <div className="h3 p-1">Project </div>
                <div className="btn-bg p-1">Source</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
