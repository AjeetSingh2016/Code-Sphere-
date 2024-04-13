import React from "react";
import { Timeline, Grid, Row, Col } from "rsuite";

const AlignTimeline = ({ align }) => (
  <Timeline align={align}>
    <Timeline.Item>
      <p>2018-03-01</p>
      <p>Your order starts processing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-02</p>
      <p>Order out of stock</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-10</p>
      <p>Arrival</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-12</p>
      <p>Order out of the library</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-15</p>
      <p>Sending you a piece</p>
    </Timeline.Item>
  </Timeline>
);

const Journey = () => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Grid fluid>
        <Row>
          <Col xs={8}>
            <AlignTimeline align="left" />
          </Col>
          <Col xs={8}>
            <AlignTimeline align="alternate" />
          </Col>
          <Col xs={8}>
            <AlignTimeline align="right" />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
export default Journey;
