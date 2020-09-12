import React, { Component } from "react";

import classnames from "classnames";

import Loading from './Loading'


class Dashboard extends Component {
  state = {loading: true}

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    
    const dashboardClasses = classnames("dashboard");
    
    return <main className={dashboardClasses} />;
  }
}

export default Dashboard;
