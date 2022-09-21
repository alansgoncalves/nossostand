export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 main1-text">
            <div className="about-text main1-about">
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <button className="search-btn2">COMO FUNCIONA</button>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 main1-pic">
            <p>É meu&nbsp;&nbsp;</p>
            <p>É seu&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;É nosso&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
};
