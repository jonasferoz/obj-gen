import React from 'react';
import styles from './displaycolor.module.css';


const DisplayColor = (props) => {



    
    return(
        <div className={styles.containerStyle}>
        
            {/* <div className={styles.blue}></div>
            <div className={styles.red}></div>
            <div className={styles.yellow}></div>
            <div className={styles.orange}></div>
            <div className={styles.green}></div>
            <div className={styles.purple}></div>
            <div className={styles.black}></div> */}

    




            {
                props.blue === true ?
                <div className={styles.blue}></div> :
                null

            }
            
            {
                props.red === true ?
                <div className={styles.red}></div> :
                null

            }
            {
                props.yellow === true ?
                <div className={styles.yellow}></div> :
                null

            }
            
            {
                props.orange === true ?
                <div className={styles.orange}></div> :
                null
            }
            {
                props.green === true ?
                <div className={styles.green}></div> :
                null

            }
            {
                props.purple === true ?
            <div className={styles.purple}></div> :
                null

            }
            {
                props.black === true ?
            <div className={styles.black}></div> :
            null
            }



        </div>
    );
};
export default DisplayColor;