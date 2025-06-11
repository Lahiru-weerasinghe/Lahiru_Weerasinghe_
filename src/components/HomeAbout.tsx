import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomeAbout() {
    return (<HanzHeaderContainer title="About Me" buttonText="Read More" buttonPath="/about">
            <p id="hanz-home-about-p" className="fw-normal">I recently graduated with a degree in software engineering and have a strong interest in applying new technologies
 to practical challenges. I thrive in challenging work environments, as they motivate me to succeed not only in my
 academic pursuits but also to contribute positively to the global tech industry. I love to share the knowledge I
 have gained from my experiences with the rest of the world, and I am dedicated to using technology to make the
 world a better place for all living beings, so I am committed to making impactful changes toward this goal.</p>
        </HanzHeaderContainer>
    );
}