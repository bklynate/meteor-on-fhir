import { IndexLinkContainer } from 'react-router-bootstrap';
import { List, ListItem } from 'material-ui/List';
import React from 'react';
import ReactMixin from 'react-mixin';

import { ReactMeteorData } from 'meteor/react-meteor-data';

export class AuthenticatedSidebar extends React.Component {
  getMeteorData() {
    let data = {
      style: {
        position: 'fixed',
        top: '0px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2.4rem',
        opacity: Session.get('globalOpacity')
      },
      listItem: {
        display: 'inline-block',
        position: 'relative'
      }
    };

    return data;
  }

  render () {
    return(
      <List style={{paddingLeft: '20px', position: 'static'}}>

        <IndexLinkContainer to='/weblog'>
           <ListItem primaryText='Healthlog' href='/weblog' />
        </IndexLinkContainer>

        <IndexLinkContainer to='/forum'>
           <ListItem primaryText='Forum' href='/forum' />
        </IndexLinkContainer>

        <IndexLinkContainer to='/'>
           <ListItem primaryText='Index' href='/' />
        </IndexLinkContainer>

        <IndexLinkContainer to='/users'>
           <ListItem primaryText='Users' href='/users' />
        </IndexLinkContainer>

        <IndexLinkContainer to='/patients'>
           <ListItem primaryText='Patients' href='/patients' />
        </IndexLinkContainer>

        <IndexLinkContainer to='/practitioners'>
           <ListItem primaryText='Practitioners' href='/practitioners' />
        </IndexLinkContainer>

        <IndexLinkContainer to='/theming'>
           <ListItem primaryText='Theming' href='/theming' />
        </IndexLinkContainer>

        <IndexLinkContainer to='/about'>
           <ListItem primaryText='About' href='/about' />
        </IndexLinkContainer>

      </List>
    );
  }
}
AuthenticatedSidebar.propTypes = {};
AuthenticatedSidebar.defaultProps = {};
ReactMixin(AuthenticatedSidebar.prototype, ReactMeteorData);
