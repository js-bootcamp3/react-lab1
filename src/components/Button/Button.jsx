import './Button.css'

const Button = (props) => {
  const { color, onClick, children } = props;

  return (
    <button 
      style={{backgroundColor: color }}
      onClick={onClick}
      className="button"
    >
      {children}
    </button>
  )
}

export default Button;
