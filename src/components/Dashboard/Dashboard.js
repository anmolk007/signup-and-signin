import React, { Component } from 'react'
import Notification from './Notification' 
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component{
    render(){
       // const {auth}= this.props;
        //if(!auth.uid) return<Redirect to='/signin' />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"></div>
                        <ProjectList />
                    {/* <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Dashboard 