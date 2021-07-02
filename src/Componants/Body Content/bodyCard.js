import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import './body.css';

class CardData extends Component {
    constructor() {
        super();
        this.state = {
            people: [
                {
                    id: 1,
                    title: "Avi",
                    img1: "http://test-hooks-tp.herokuapp.com/static/media/client-01.0c874b1b.svg",
                    img2: "http://test-hooks-tp.herokuapp.com/static/media/logo.f843544f.svg"
                },
                {
                    id: 2,
                    title: "Colunmbary",
                    img1: "http://test-hooks-tp.herokuapp.com/static/media/client-02.c5604122.svg",
                    img2: "http://test-hooks-tp.herokuapp.com/static/media/logo.f843544f.svg"
                },
                {
                    id: 3,
                    title: "Volary",
                    img1: "http://test-hooks-tp.herokuapp.com/static/media/client-03.a5781491.svg",
                    img2: "http://test-hooks-tp.herokuapp.com/static/media/logo.f843544f.svg"
                },
                {
                    id: 4,
                    title: "Lock-Up",
                    img1: "http://test-hooks-tp.herokuapp.com/static/media/client-01.0c874b1b.svg",
                    img2: "http://test-hooks-tp.herokuapp.com/static/media/logo.f843544f.svg"
                },
                {
                    id: 5,
                    title: "Coop",
                    img1: "http://test-hooks-tp.herokuapp.com/static/media/client-02.c5604122.svg",
                    img2: "http://test-hooks-tp.herokuapp.com/static/media/logo.f843544f.svg"
                },
                {
                    id: 6,
                    title: "Dovecote",
                    img1: "http://test-hooks-tp.herokuapp.com/static/media/client-03.a5781491.svg",
                    img2: "http://test-hooks-tp.herokuapp.com/static/media/logo.f843544f.svg"
                }
            ]
        }
    }

    render() {
        let peopleCards = this.state.people.map(person => {
            return (
                <Col md="4" className="pt-4" key={person.id}>
                    <Card className="card-custom token-list-card">
                        <CardBody>
                            <div className="mb-4">
                                <div className="tempnail">
                                    <img className="temp-img" src={person.img1} alt="logo" />
                                </div>
                                <div className="tempnail temp-client">
                                    <img className="temp-img" src={person.img2} alt="logo" />
                                </div>
                            </div>
                            <h5 className="card-title header mb-4 token-list-card-header">{person.title}</h5>
                            <h6 className="card-subtitle mb-4 sub-header highlighted-text">TBD % APY</h6>
                            <p className="token-list-card-content">Deposit
                                <span className="token-id-text"> BIRD_ETH UNI-V2 LP</span>
                                to earn EGG</p>
                            <a href="/" className="btn btn-custom">Enter</a>
                        </CardBody>
                    </Card>
                </Col>

            )
        })

        return (
            <Row className="mt-4">
                {peopleCards}
            </Row>
        );
    }
}

export default CardData;
