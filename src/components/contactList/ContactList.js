import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./contactListItem/ContactListItem";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactActions";

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <ol>
      {contacts
        .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map((contact) => (
          <ContactListItem key={contact.id} {...contact} onDeleteContact={onDeleteContact} />
        ))}
    </ol>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.filter,
});

export default connect(mapStateToProps, { onDeleteContact: deleteContact })(ContactList);
