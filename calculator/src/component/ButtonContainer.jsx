import styles from './Button_Container.module.css';
function ButtonContainer(){
    const arr = ["1","2","3","+","4","5","6","-","7","8","*","9","/","0"];
    return(
        <div className={styles.buttonContainer}>
            {arr.map(buttonName => <button className={styles.buttons}>{buttonName}</button>)}
            </div>
    )
}
export default ButtonContainer;