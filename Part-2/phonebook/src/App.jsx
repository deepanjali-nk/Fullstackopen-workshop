import { useState } from 'react'
import Filter from './Filter'
import Person from './Person' 

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const  nameExists = persons.find(person => person.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    }
    else{
      setPersons(persons.concat({ name: newName, number: newNumber }))
    }
    setNewName('');
    setNewNumber('');

  }

  const handleChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const filteredPersons= persons.filter(person=> person.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <Person personsToShow={filteredPersons} />
      </div>
    </div>
  )
}

export default App