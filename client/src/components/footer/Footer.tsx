import React, { useState, useEffect } from 'react';
import './footer.css'

type Props = {
    toggles: object
}

export default function Footer(props: Props) {

    // TODO: Add note in small font on lower right for times i.e. *All times in British Standard Time (BST)
    return(
        <div className='footer'>
            Copyright     About      Report a bug     
        </div>
    );
}