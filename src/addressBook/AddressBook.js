import React, { Component } from 'react';

import Card from '../Card'
import '../Card.css'

class AddressBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {
          firstName: 'Jane Smith',
          initials: 'JS',
          favorite: true,
          phone: '123-1234-1234',
          email: 'jane@email.com'
        },
        {
          firstName: 'Sarah Carter',
          initials: 'SN',
          favorite: false,
          phone: '123-1234-1234',
          email: 'Sarahjane@email.com'
        },
        {
          firstName: 'Mike Peterson',
          initials: 'MP',
          favorite: false,
          phone: '123-1234-1234',
          email: 'mike@email.com'
        },
      ]
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevStateString = JSON.stringify(prevState.contacts)
    const updatedStateString = JSON.stringify(this.state.contacts)

    if(prevStateString !== updatedStateString) {
      console.log("Save this:", updatedStateString)
      localStorage.setItem('contacts', updatedStateString)
    }
  }

  componentDidMount() {
    const savedStateFromLocalStorage = localStorage.getItem('contacts')
    if (savedStateFromLocalStorage) {
      this.setState({
        contacts: JSON.parse(savedStateFromLocalStorage)
      })
    }
  }

  handleFavoriteToggle = (contactIndex) => {
    const newContactsState = [...this.state.contacts]
    newContactsState[contactIndex] = {
      ...newContactsState[contactIndex],
      favorite: !newContactsState[contactIndex].favorite
    }
    this.setState({
      contacts: newContactsState
    })
  }

  render() {
    const {
      contacts
    } = this.state

    return (
      <>
      <h3>Address Book</h3>
      { !contacts.length && <p>No contacts!</p> }

      {contacts.map((contact, index) => {
        return (
          <Card
            contact={contact}
            handleFavoriteToggle={this.handleFavoriteToggle}
            index={index}
            key={index}
          />
        )
      })}
      </>
    )
  }
}

export default AddressBook;