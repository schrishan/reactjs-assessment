class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  decrease() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      alert("Count can't be less than 0");
    }
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default Counter;