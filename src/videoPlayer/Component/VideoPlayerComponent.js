import React, { Component } from "react";
import styles from "./Css/VideoPlayerComponent.module.css";
import GeneralLoader from "../../General/GeneralLoader";
export default class VideoPlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModuleid: "",
      currentVideUrl:
        "https://oldassets.omnicuris.com/courses/video/13_0…%20and%20Role%20of%20Thyroid%20in%20Pregnancy.mp4"
    };
  }
  componentDidMount() {
    if (!this.props.moduleList) {
      this.props.getModuleList();
    }
    this.props.getExpertDetails();
  }
  getModuleDetails = (moduleId, id) => {
    this.setState({
      currentModuleid: id + 1
    });
    this.props.getModuleDetails(moduleId);
  };
  setCurrentVideo = currentVideUrl => {
    this.setState({
      currentVideUrl
    });
  };
  showModuleDetails = () => {
    if (this.props.moduleDetailsLoading) {
      return <GeneralLoader />;
    }
    return (
      this.props.moduleDetails &&
      this.props.moduleDetails[0].userChapterDetails.map((details, id) => {
        return (
          <div
            className={styles.moduleDetailsCardContent}
            key={id}
            onClick={() => {
              this.setCurrentVideo(details.content);
            }}
          >
            <div className={styles.cardIcon}>
              <img
                src={details.chapterExperts[0].profilePic}
                alt="Omnicuris_image"
                width="50"
                className={styles.CardImageRound}
              />
            </div>
            <div className={styles.moduleCardContentTitle}>
              {" "}
              <span className={styles.moduleTitle}>Chapter {id + 1} </span>
              <div> {details.title}</div>
              <span className={styles.timerClock}>
                {" "}
                &#x1F556; {details.durationStr}
              </span>
            </div>
          </div>
        );
      })
    );
  };
  showExperts = () => {
    return this.props.expertDetails.map((expert, id) => {
      return (
        <div className={styles.expertsCard} key={id}>
          <div className={styles.expertImageNameWrapper}>
            <div className={styles.expertsIamge}>
              {" "}
              <img
                src={expert.profilePic}
                alt="Omnicuris_image"
                width="100%"
                className={styles.expertImageCard}
              />
            </div>
            <div className={styles.doctorName}>
              {expert.title} {expert.expertName}
            </div>
            <div className={styles.expertDesignation}>
              {expert.qualification}
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    if (!this.props.moduleList) {
      return (
        <div className={styles.mainLoader}>
          <GeneralLoader />
        </div>
      );
    }

    return (
      <div className={styles.base}>
        <h2 className={styles.thyroidHeading}>Thyroid in Pregnancy</h2>
        <div className={styles.videoPlayerModuleWrapper}>
          <div className={styles.videoPlayer}>
            <iframe
              src={this.state.currentVideUrl}
              title="W3Schools Free Online Web Tutorials"
              width="100%"
              height="100%"
              style={{
                boxShadow: "2px 3px 4px 0px #757474"
              }}
            />
          </div>
          <div className={styles.moduleListContent}>
            <div className={styles.moduleListWrapper}>
              {this.props.moduleList &&
                this.props.moduleList.modules &&
                this.props.moduleList.modules.map((module, id) => {
                  return (
                    <div className={styles.moduleCard} key={module["id"]}>
                      <div
                        className={styles.wrapper}
                        onClick={() => this.getModuleDetails(module["id"], id)}
                      >
                        <div className={styles.moduleCardContent}>
                          <div className={styles.cardIcon}>
                            <img
                              src={module.moduleExperts[0].profilePic}
                              alt="Omnicuris_image"
                              width="50"
                              className={styles.CardImageRound}
                            />
                          </div>
                          <div className={styles.moduleCardContentTitle}>
                            <span>
                              {" "}
                              <span className={styles.moduleTitle}>
                                {module.title} -{" "}
                              </span>
                              {module.name}
                            </span>
                            <span className={styles.timerClock}>
                              {" "}
                              &#x1F556; {module.durationStr}
                            </span>
                          </div>
                        </div>
                        {this.state.currentModuleid &&
                        this.state.currentModuleid === id + 1
                          ? this.showModuleDetails()
                          : null}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className={styles.expertDetailsWrapper}>
          <div className={styles.expertTitle}>Experts Panel</div>
          <div className={styles.expertsCardWrapper}>
            {this.props.expertDetails && this.showExperts()}
          </div>
        </div>
      </div>
    );
  }
}
