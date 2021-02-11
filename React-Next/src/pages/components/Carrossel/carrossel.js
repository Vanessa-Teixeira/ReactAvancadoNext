import React from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";


class MasksPage extends React.Component {
 
    render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow className="mt-4">
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text"></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView>
            
              <img
                src="https://programadorviking.com.br/wp-content/uploads/2019/03/javascript-ola-mundo-380x249.jpg"
                className="img-fluid"
                alt=""
                
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text"></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text"></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text"></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text"></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView>
              <img
                src="data:image/jpeg;base64,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"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text"></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://bognarjunior.files.wordpress.com/2014/12/1417589451_html-256.png?w=256"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text"></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://elvisherlan.files.wordpress.com/2020/11/css.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text"></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text"></p>
              </MDBMask>
            </MDBView>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;