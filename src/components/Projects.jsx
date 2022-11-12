const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="box0">
              <div className="row">
                <div className="col-md-6">date</div>
                <div className="col-md-6">star</div>
              </div>
              <div className="h5">Project Name</div>

              <div className="row">
                <button
                  className="col-md-4"
                  style={{ "content-align": "left" }}
                >
                  Demo
                </button>
                <button
                  className="col-md-4"
                  style={{ "content-align": "left" }}
                >
                  Sourc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
