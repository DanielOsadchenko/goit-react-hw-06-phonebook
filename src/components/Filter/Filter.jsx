import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/phonebookSlice';


export default function Filter () {
  
  
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterContact(e.currentTarget.value))
  }
  return <label>Find contacts by name <input
    type='text'
    name='filter'
    onChange={handleFilter}
  ></input></label>
    
}

Filter.propTypes = {
onFilter: PropTypes.func
}