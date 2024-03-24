import { PLAYER_ACTION, PLAER_NAME, STATUS, PLAYER } from '../../constants';
import { InformationLayot } from './information-layout';
import { useReduxState } from '../../redux-manager';

export const Information = () => {
    const { status, currentPlayer } = useReduxState();

    const playerAction = PLAYER_ACTION[status];
    const playerName = PLAER_NAME[currentPlayer];
  
    const information = 
        status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

    return <InformationLayot information={information} />;
};