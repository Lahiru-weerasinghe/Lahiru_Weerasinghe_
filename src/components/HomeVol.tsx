import React from 'react';
import aiesec_logo from "../assets/img/aiesec_logo.jpeg";
import cg_logo from "../assets/img/cg_logo.jpeg";
import uf_logo from "../assets/img/uf_logo.png";
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";


export function HomeVol() {
    return (
        <HanzHeaderContainer title="Volunteer and Leadership">
            <div className="row">
                <div className="col-lg-2 d-none d-lg-block"><img
                    className="rounded-circle hanz-edu-logo" src={uf_logo}/></div>
                <div className="col">
                    <h1 className="fs-5 hanz-edu-title"> Student Representative - Sri Lanka Institute of Information Technology<br/></h1>
                    <h1 className="fs-6 hanz-edu-subtitle"> Sep 2020 - Sep 2024</h1>
                </div>
            </div>
            <hr/>
            {/* <div className="row">
                <div className="col-lg-2 d-none d-lg-block"><img
                    className="rounded-circle hanz-edu-logo" src={cg_logo}/></div>
                <div className="col">
                    <h1 className="fs-5 hanz-edu-title">Welfare Vice President - CodeGen International<br/></h1>
                    <h1 className="fs-6 hanz-edu-subtitle"> Jan 2020 - Dec 2020</h1>
                </div>
            </div> */}
            <hr/>
            <div className="row">
                <div className="col-lg-2 d-none d-lg-block"><img
                    className="rounded-circle hanz-edu-logo" src={aiesec_logo}/></div>
                <div className="col">
                    <h1 className="fs-5 hanz-edu-title">Active Member - Leo Club of SLIIT <br/></h1>
                    <h1 className="fs-6 hanz-edu-subtitle">Aug 2016 - July 2017</h1>
                    <p className="hanz-edu-para">Volunteered as Outgoing Exchange National Coordinator </p>
                </div>
            </div>
        </HanzHeaderContainer>
    );
}