import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import Container from './Container';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  

  //adding one when user clicks on button
  
  handleIncrement = btnId => {
    this.setState(prevState => ({ [btnId]: prevState[btnId] + 1 }));
  };
    
  //counting total feedback

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  //counting positive feedback precentage

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const percentage = (good * 100) / (good + neutral + bad);

    return good ? Math.round(percentage) : 0;
  }

  render() {
    //Destructurisation
    const { good, neutral, bad } = this.state;
    const { handleIncrement, countTotalFeedback, countPositiveFeedbackPercentage, state } = this;
    const noFeedback = good || neutral || bad;


    return (
      <Container>
    <Section title={'Please leave a feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleIncrement} />
        {noFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
          /> ): (<Notification message={ 'There is no feedback'} /> )}
        </Section>
      </Container>
    )
  
  }
};

export default App;