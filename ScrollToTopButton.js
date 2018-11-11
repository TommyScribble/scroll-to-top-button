import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';

class ScrollToTopButton extends Component {

    render () {

        return (
            <div className="scroll-top">
                <ScrollToTop showUnder={1060} duration={650}>
                        <span className="scroll-top-button">
                            <i className="fa fa-angle-double-up white margin-none scroll-top-arrow" aria-hidden="true"></i><span className="scroll-top-text">Back to Top</span></span>
                </ScrollToTop>
            </div>

        )
    }
};

export default ScrollToTopButton;