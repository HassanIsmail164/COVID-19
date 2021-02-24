// libs
import { Component } from 'react';

// components
import { Cards, Chart, CountryPicker } from './components';

// api
import { fetchData } from './api';

// styles
import styles from './App.module.css';

// images
import coronaImage from './images/image.png'

class App extends Component {

  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };
  
  render() {

    const { data, country } = this.state;
    return (
      <div className={styles.container} >
      <img className={styles.image} src={coronaImage} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart  data={data} country={country} />
      </div>
    )
  };
};

export default App;