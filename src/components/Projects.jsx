const Projects = () => {
  
  return (
    <div>
      <h2>Projects</h2>
      <div className="container pro">
        <div className="row">
          <div className="col-md-4">
            
            <div className="box0">
              <div className="row">
                <div className="col-md-6">date</div>
                <div className="col-md-6">star</div>
              </div>
              <div className="h5 pname">Project Name</div>
              <div className="container btncontainer">
                <div className="row">
                  <button
                    className="col-md-4"
                    style={{ "content-align": "left" }}
                  >
                    Demo
                  </button>
                  <div className="col-md-4"></div>
                  <button
                    className="col-md-4"
                    style={{ "content-align": "right" }}
                  >
                    Sourc
                  </button>
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
