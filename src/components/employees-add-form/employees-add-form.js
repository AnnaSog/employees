import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //в name попадет, то что написал польз. 
        });  
    }
  

    onSubmit = (e) => {
        const {onAdd} = this.props;
        const {name, salary} = this.state;
       
        e.preventDefault();
        if(name && salary !== '') {
            onAdd(name, salary) //в  state заменяется на новый пост по шаблону onAdd с инфо от польз.
            this.setState({
                name: '',
                salary: ''      //после отправки информации, input снова очищается 
            })
        }
     
    }

    render(){
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"  //ВАЖНО! onSubmit указывается в form, а не в button
                    onSubmit={this.onSubmit}>   
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"            //name и value мы дописываем 
                        value={name}            //сюда попадают данные из изменного состояния, если не прописать value, то внесенные данные будут храниться только на сайте
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"               //name и value мы дописываем 
                        value={salary}                  
                        onChange={this.onValueChange} />
    
                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;