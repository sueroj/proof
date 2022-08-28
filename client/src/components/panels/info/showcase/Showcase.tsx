import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './showcase.css';

import Challenges, {AllChallengeCategories} from 'core/libs/challenges'
import Profile from 'core/objects/profile'
import { Achievement } from 'core/objects/challenge'
import Thumbnail from 'components/common/thumbnail/Thumbnail'
// import AchievementModal from 'components/common/modals/AchievementModal'

type Props = {
    profile: Profile
    challenges: Challenges
}

type ThumbnailListShortProps = {
    challenges: Challenges
    key_id: string
}

// TODO: Clean up due
export default function Showcase(props: Props) {
    const [modal, show_modal] = useState(false)

    return (
        <div className='showcase-panel'>
            {/* <Modal show={modal}/> */}

            <div className='showcase-panel-thumbnail-header'>Suggested</div>
            {/* <ThumbnailListShort achievements={props.profile.achievements}/> */}
            <ThumbnailListShort challenges={props.challenges} key_id={'suggested'}/>

            <div className='showcase-panel-thumbnail-header'>Almost</div>
            {/* <ThumbnailListShort achievements={props.profile.achievements}/> */}
            <ThumbnailListShort challenges={props.challenges} key_id={'almost'}/>

            {/* <div className='showcase-panel-thumbnail-header'>Most Recent</div>
            <ThumbnailListShort challenges={props.challenges}/> */}
            
            <div className='showcase-panel-spacer' />

            <div className='panel-button-wrapper'>
                {/* <button className='panel-button' onClick={() => toggle_modal()}>Open Achievements</button> */}
            </div>
        </div>
    );
}


export function ThumbnailListShort(props: ThumbnailListShortProps) {

    function draw_challenges() {
        let thumbnails: any[] = []
        props.challenges.all.forEach(challenge => {
            if (thumbnails.length < 3) {
                thumbnails.push(<Thumbnail key={`${props.key_id}-${challenge.challenge_id}`} challenge={challenge} />)
            }
        })
        return thumbnails
    }

    return (
        <div className='showcase-panel-thumbnail-list-short'>
            { draw_challenges() }
        </div>
    );
}
