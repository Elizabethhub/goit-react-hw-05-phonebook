import React from "react";
import PropTypes from "prop-types";
import { FilterStyled } from "./FilterStyled";
import { connect } from "react-redux";
import { setFilter } from "../../redux/contacts/contactActions";

const Filter = ({ setFilter, filter }) => {
  return (
    <FilterStyled>
      <label className="labelFilter">
        Find contacts by name:
        <input
          className="inputFilter"
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </FilterStyled>
  );
};

Filter.propTypes = {
  handleInputChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

// const mapDispatchToProps = (dispatch) => ({
//   handleInputChange: (e) => dispatch(setFilter(e.target.value)),
// });

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
