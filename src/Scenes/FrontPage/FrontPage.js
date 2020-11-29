import React, {Component} from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import classes from './FrontPage.module.css'

class frontPage extends Component {

    render(){
        return(
            <div className={classes.FrontPage}>
                <headers className={classes.header}>Quninzical</headers>
                <button className={classes.button}>Start</button>
            </div>
        )
    }
}

export default frontPage;