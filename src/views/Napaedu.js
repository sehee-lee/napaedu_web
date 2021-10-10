import { useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/NapaeduHeader.js";

const Napaedu = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      napaEdu
                    </h6>
                    <h2 className="mb-0">salsas</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                salsas 설명
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      napaEdu
                    </h6>
                    <h2 className="mb-0">nadaepyoda</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                nadaepyoda 설명
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      napaEdu
                    </h6>
                    <h2 className="mb-0">nasearch</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                nasearch 설명
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Napaedu;
