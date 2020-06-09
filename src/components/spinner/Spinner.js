import React from 'react';

const Spinner = () => {

    return (
        <div className="column LazyLoading">
            <div className="ui fluid card">
                <div className="image">
                    <div className="ui placeholder">
                        <div className="square image"></div>
                    </div>
                </div>
                <div className="content">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="very short line"></div>
                            <div className="medium line"></div>
                        </div>
                        <div className="paragraph">
                            <div className="short line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner;