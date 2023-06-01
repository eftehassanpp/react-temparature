import React from 'react';

export default class TemparatureInput extends React.Component {
  state = { temparature: '' };
  constructor(props: {}) {
    super(props);
  }
  render(): React.ReactNode {
    const { temparature } = this.state;
    const { scale } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter Temparature in {scale}</legend>
          <input type="text" value={temparature} />
        </fieldset>
      </div>
    );
  }
}
