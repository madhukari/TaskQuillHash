import React, {Component} from 'react';
import Contacts from './SampleApi/Contacts';
import Dropdown from './DropDowns/Dropdown';
import LineChart from './Charts/LineChart';

    class App extends Component {

      state = {
        contacts: []
      }

      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }
      render () {
        return (
          // JSX to render goes here...
          <div>
            {/* <Dropdown /> */}
            {/* <Contacts contacts={this.state.contacts} />  */}
            <LineChart/>
            
          </div>
        );
      }      
    }

    export default App;