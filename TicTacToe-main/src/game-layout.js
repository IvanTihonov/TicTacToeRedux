import PropTypes from 'prop-types';
import { Field } from './components/field/field';
import { Information } from './components/information/information';
import styles from './game.module.css';

export const GameLayout = ({ handleRestart }) => (
    <div className={styles.game}>
        <Information />
        <Field />
        <button className={styles.restartButton} onClick={handleRestart}>Начать заново</button>
    </div>
);

GameLayout.propTypes = {
    handleRestart: PropTypes.func,
}; 