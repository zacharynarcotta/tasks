import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import ts_logo from "./assets/Typescript_logo_2020.svg.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Fancy Heading!</h1>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr /> Modified by Zachary Narcotta
            <ChangeType></ChangeType>
            <p>Hello World!</p>
            <Container>
                <Row>
                    <Col>
                        <img src={ts_logo} alt="TypeScript Logo" />
                    </Col>
                    <Col>
                        <ul>
                            <p>TODO:</p>
                            <li>Make the perfect React app</li>
                            <li>Get an A in the class</li>
                            <li>Master TypeScript skills</li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <div
                        style={{
                            width: 200,
                            height: 50,
                            backgroundColor: "red",
                        }}
                    ></div>
                </Row>
            </Container>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
