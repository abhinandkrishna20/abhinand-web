import frontend from "./front.png";
const Services = () => {
  return (
    <div className="container services ">
      <h1>Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card card-design bg-dark">
            <img src={frontend} alt="Frontend design" />
            <div className="container ">
              <h2>Frontend</h2>
              <h5>
                We design user friendly UI/UX . Our clients may choose their own
                design Templates
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-design bg-dark">
            <img src={frontend} alt="Frontend design" />
            <div className="container ">
              <h2>Backend</h2>
              <h5>
                Back end serice including buy your domain with your preferable domain name with cost effective.
                 design TemplatesBa
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-design bg-dark">
            <img src={frontend} alt="Frontend design" />
            <div className="container ">
              <h2>Fullstack</h2>
              <h5>
                We also provide Full stack combo pack.
                 We choose cost effective domain like Amazon, Google, 
                 Microsoft based cloud resource
                
              </h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Services;
