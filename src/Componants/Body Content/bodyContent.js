import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import './body.css';
import CardData from './bodyCard'

function BodyContant() {
    return (
        <div style={{ height: "100vh", overflow: "auto", backgroundColor: "#f4f5f7" }}>
            <Container className="container-sm px-5 content-padding">
                <h4 className="header">Bird Farm</h4>
                <h6 className="sub-header">Liquidity Mining &amp; Stacking</h6>

                <Row className="align-center mr-0">
                    <Col md="6">
                        <h6 class="sub-header">Total EGGS Supply:
                            <span class="highlighted-text"> 10,000,000</span> | Rewards Per Block:
                            <span class="highlighted-text"> 1000</span> | BIRD Balance:
                            <span class="highlighted-text"> 50</span>
                        </h6>
                    </Col>
                    <Col md="6">
                        <Row className="g-3" style={{ marginTop: "-24px" }}>
                            <Col >
                                <Input className="form-control form-control-sm form-control-custom search-control" placeholder="  Search Bird Farm pairs and tokens" />
                            </Col>
                            <Col>
                                <button type="submit" className="btn btn-custom">Connect Wallet</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                    <CardData />
            </Container>
        </div>

    );
}

export default BodyContant;
