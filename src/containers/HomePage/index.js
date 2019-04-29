import React, { Component } from 'react';
import { HomePageLoader } from './styled';

class HomePage extends Component {
  state = {
    isPreloading: false
  }

  render() {
    const {isPreloading} = this.state;

    return (
      <HomePageLoader>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-flat-ball">
          <defs>
            <mask id="lds-flat-ball-mask-0d59ebe06f35a">
              <circle cx="50" cy="50" r="45" fill="#fff"></circle>
            </mask>
          </defs>
          <circle cx="50" cy="50" r="45" ng-attr-fill="{{config.base}}" fill="#bf2121"></circle>
          <path mask="url(#lds-flat-ball-mask-0d59ebe06f35a)" fill="rgb(154, 27, 27)" d="M 37.2721 40.7651 L 62.7279 15.3093 L 162.728 115.309 L 137.272 140.765 Z">
            <animate attributeName="d" calcMode="spline" values="M 37.27207793864214 40.72792206135786 L 62.72792206135786 15.272077938642143 L 162.72792206135784 115.27207793864214 L 137.27207793864216 140.72792206135784 Z;M 37.27207793864214 84.72792206135786 L 62.72792206135786 59.27207793864214 L 162.72792206135784 159.27207793864216 L 137.27207793864216 184.72792206135784 Z;M 37.27207793864214 40.72792206135786 L 62.72792206135786 15.272077938642143 L 162.72792206135784 115.27207793864214 L 137.27207793864216 140.72792206135784 Z" keyTimes="0;0.5;1" dur="2" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" begin="0s" repeatCount="indefinite"></animate>
          </path>
          <circle cx="50" cy="28.0372" r="18" fill="#f2f2f2">
            <animate attributeName="cy" calcMode="spline" values="28;72;28" keyTimes="0;0.5;1" dur="2" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" begin="0s" repeatCount="indefinite"></animate>
          </circle>
        </svg>
      </HomePageLoader>
    );
  }
}

export default HomePage;