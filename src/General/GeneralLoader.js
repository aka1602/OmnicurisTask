import React, { Component } from "react";
import styles from "./GeneralLoader.module.css";
class GeneralLoader extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div
          className={styles.ldsRing}
          style={{ marginTop: this.props.margin }}
        >
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default GeneralLoader;
GeneralLoader.defaultProps = {
  margin: "25%",
};
