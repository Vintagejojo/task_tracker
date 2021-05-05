import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {  //This is destructuring to clean things up and simplify things on line 5
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>      
        </header>
    )
}


Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


//Css in js
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header;
