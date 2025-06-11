import React from 'react';
import uf_logo from "../assets/img/uf_logo.png";
import uom_logo from "../assets/img/uom_logo.png";
import images from "../assets/img/kaplan_logo.webp";
import kcc from "../assets/img/images.jpeg";
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomeEdu() {
    return (
        <HanzHeaderContainer title="Education" buttonText="V I E W &nbsp;&nbsp;&nbsp;&nbsp; A L L">
            <div className="row">
                <div className="col-lg-2 d-none d-lg-block"><img className="rounded-circle hanz-edu-logo"
                                                                 src={images}/></div>
                <div className="col">
                    <h1 className="fs-5 hanz-edu-title">Master of Information Technology (Extension) - Kaplan Business School Adelaide</h1>
                    <h1 className="fs-6 hanz-edu-subtitle"></h1>
                    <p className="hanz-edu-para">Jul 2025 - Present <br/> Web and Mobile Development <br/>
                        Current GPA: </p>
                </div>
                <div className="col-lg-9"></div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-lg-2 d-none d-lg-block"><img className="rounded-circle hanz-edu-logo"
                                                                 src={uf_logo}/></div>
                <div className="col">
                    <h1 className="fs-5 hanz-edu-title">BSc (Hons) in Information Technology Specialising in Software Engineering</h1>
                    <h1 className="fs-6 hanz-edu-subtitle"></h1>
                    <p className="hanz-edu-para">Sep 2020 - Sep 2024 <br/>GPA : 3.36 / 4.0 <br/>
                        </p>
                </div>
                <div className="col-lg-9"></div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-lg-2 d-none d-lg-block"><img className="rounded-circle hanz-edu-logo"
                                                                 src={kcc}/></div>
                <div className="col">
                    <h1 className="fs-5 hanz-edu-title">C.W.W Kannangara Central College Mathugama </h1>
                    <h1 className="fs-6 hanz-edu-subtitle"></h1>
                    <p className="hanz-edu-para">2010 - 2018 <br/> Higher Education, O/L & A/L<br/>
                        Physical Science stream</p>
                </div>
                <div className="col-lg-9"></div>
            </div>
        </HanzHeaderContainer>
    );
}