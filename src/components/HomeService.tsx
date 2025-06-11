import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomeService() {
    return (
        <HanzHeaderContainer title="Professional Services" buttonText="" buttonPath="">
            <strong>Industry Experience:</strong>
            <ul>
                <li>Software Engineer, Sampath IT Solutions (2024 - Present)</li>
                <li>Co-Founder, <a href="https://unleashalpha.com/collections/all" target="_blank" rel="noopener noreferrer">UnleashAlpha.com</a> (2024 - Present)</li>


                
            </ul>
            
            <strong>Open Source Contributions:</strong>
            <ul>
                <li>WalletGen - Crypto Wallet Generator (2024)</li>
                
            </ul>

            <strong>Research Interests:</strong>
            <ul>
                <li> Machine Learning & Applied AI</li>
                <li> IoT & Edge Computing</li>
                <li> Blockchain & Decentralized Tools</li>
            </ul>
        </HanzHeaderContainer>
    );
}
