import { Component } from "react";

// a class based component that uses the componentDidCatch life cycle method is called an error boundary

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <p>Something went wrong</p>;
    return this.props.children;
  }
}

export default ErrorBoundary;
