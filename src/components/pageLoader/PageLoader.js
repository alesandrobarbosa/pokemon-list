import React from 'react';

const PageLoader = () => {
    return (
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Just a sec :)</div>
          </div>
          <p></p>
        </div>
      )
}

export default PageLoader;