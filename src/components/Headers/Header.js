// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const NapaeduHeader = () => {
  return (
      <>
        <div className="header bg-gradient-success pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                          >
                            Info
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                          value 1
                        </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                          >
                            Partners
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                          value 2
                        </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-gradient-blue text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
  );
};

export default NapaeduHeader;
