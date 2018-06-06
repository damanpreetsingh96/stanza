import React, {Component} from 'react';
import Link from '../link';
import './CollegeSelector.css'

const CITY_VS_COLLEGE_OPTIONS_MAP = {
  'northDelhi': ['stStephensCollege', 'shriRamCollegeOfCommerce'],
  'southDelhi': ['bhartiCollege','kamlaNehruCollege'],
  'delhi': ['gargiCollege', 'dyalSinghCollege'],
  'noida': ['amityUniversity', 'jaypee'],
  'greaterNoida': ['shardaUniversity', 'galgotiasUniversity'],
};

const COLLEGE_VALUE_VS_NAME = {
  'stStephensCollege' : 'St Stephen\'s College',
  'shriRamCollegeOfCommerce' : 'Shri Ram College of Commerce',
  'bhartiCollege' : 'Bharti College',
  'kamlaNehruCollege' : 'Kamla Nehru College',
  'gargiCollege' : 'Gargi College',
  'dyalSinghCollege' : 'Dayal Singh College',
  'amityUniversity' : 'Amity University',
  'jaypee' : 'jaypee',
  'shardaUniversity' : 'Sharda University',
  'galgotiasUniversity' : 'Galgotias University',
};

class CollegeSelector extends Component {
  constructor() {
    super();
    this.state = {
      city: 'city',
      college: 'college',
    }
  }

  handleCityClick = event => {
    this.setState({city: event.target.value})
  };

  handleCollegeClick = event => {
    this.setState({college: event.target.value})
  };

  renderCollegeOptions() {
    const city = this.state.city;
    const colleges = CITY_VS_COLLEGE_OPTIONS_MAP[city];
    const options = [];
    colleges.forEach(college => {
      options.push(<option value={college}>{COLLEGE_VALUE_VS_NAME[college]}</option>)
    });
    return options;
  }

  render() {
    return (
      <form>
        <ul className='res-select-form'>
          <li>
            <div className='city'></div>
            <select value={this.state.city} className='stanza-select' onChange={this.handleCityClick}>
              <option value='city' hidden>city</option>
              <option value='northDelhi'>North Delhi</option>
              <option value='southDelhi'>South Delhi</option>
              <option value='delhi'>Delhi</option>
              <option value='noida'>Noida</option>
              <option value='greaterNoida'>Greater Noida</option>
            </select>
          </li>
          <li>
            <div className='college'></div>
            <select value={this.state.college} className='stanza-select' onChange={this.handleCollegeClick}>
              <option value='college' hidden>college</option>
              {this.state.city !== 'city' ? this.renderCollegeOptions() : <option disabled>No results found</option>}
            </select>
          </li>
          <li><div className='go'><Link>Go</Link></div></li>
        </ul>
      </form>
    );
  }
}

export default CollegeSelector;
