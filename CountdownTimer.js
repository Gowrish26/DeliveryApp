import React from 'react';
import Countdown from 'react-native-countdown-component';

const CountdownTimer = ({ timeInSeconds, onFinish }) => (
  <Countdown
    until={timeInSeconds}
    onFinish={onFinish}
    timeToShow={['H', 'M', 'S']}
    size={20}
  />
);

export default CountdownTimer;
