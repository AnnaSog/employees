import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onLocalSearch = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        });
        this.props.onUpdateSearch(term);  //передаем в app.js данные ктр получили и там изм.данные на визуальной части сотр.
    }

    render(){
        return(
            <input type="text"
                className="form-control search-input" //классы идут из bootstrap
                placeholder='Найти сотрудника' 
                value={this.state.term}
                onChange={this.onLocalSearch}/>
        )
    }
 
}

export default SearchPanel;