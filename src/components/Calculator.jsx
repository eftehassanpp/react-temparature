import React from 'react';
import { convert, toCelsius, toFarhenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TempInput';
export default class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: 'c',
  };
  onHandleChange = (e, scale) => {
    console.log(e.target.value);
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celcius =
      scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const farhenheit =
      scale === 'c' ? convert(temperature, toFarhenheit) : temperature;
    return (
      <>
        <TemperatureInput
          temperature={celcius}
          scale="c"
          onTemperatureChange={this.onHandleChange}
        />
        <TemperatureInput
          temperature={farhenheit}
          scale="f"
          onTemperatureChange={this.onHandleChange}
        />
        <BoilingVerdict temperature={celcius} />
      </>
    );
  }
}
