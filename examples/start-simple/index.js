import React from "react";
import { render } from "react-dom";
import { Wizard, Steps, Step } from "react-albus";
import Navigation from "./Navigation";

const StartSimple = () => (
  <div className="row pad-t">
    <div className="col-xs-6 col-xs-offset-3">
      <Wizard>
        <Steps>
          <Step id="gandalf">
            <h1 className="text-align-center">Gandalf</h1>
          </Step>
          <Step id="dumbledore">
            <h1 className="text-align-center">Dumbledore</h1>
          </Step>
          <Step id="ice king">
            <h1 className="text-align-center">Ice King</h1>
          </Step>
        </Steps>
        <Navigation />
      </Wizard>
    </div>
  </div>
);

render(<StartSimple />, document.getElementById("start-simple"));
