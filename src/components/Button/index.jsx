import styles from "./Button.module.scss";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
};

export default Button;
