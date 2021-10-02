import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [         //данные приходят из базы данных, ктр далее предаем в EmployeesList
                {name:"Артем Борисов", salary:"900", increase:true, rise:false, id: 1},     //id - уникальный key у каждого
                {name:"Аркадий Артемов", salary:"1200", increase:false, rise:false, id: 2 },
                {name:"Людмила Александрова", salary:"1400", increase:false, rise:true, id: 3},
                {name:"Эдуард Борисов", salary:"1500", increase:false, rise:false, id: 4}
            ],
            term: '',   //будет приходить из SearchPanel, а туда попадать при внесение инфо в value польз.
            filter: 'all' //по умолчанию отражаются все сотрудники
        }

        this.maxId = 5;
    }

    deleteItem = (id) => {      //удаляем эл. при нажатии на урно, id эл. на ктр нажали
        this.setState(({data}) => {
            return{
                data: data.filter(elem => elem.id !== id)  //filter - создаст новый [] без эл. id, ктр совпал с нажатым на кнопку урно эл.  
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {   //шаблон нового поста 
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]; //...data - все содержание data + новый пост 

            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {            //id - приходит при нажатии на кнопку с cookie или star
        this.setState(({data}) => ({       //возвращаем объект 
            data: data.map(item => {       //map создает новый []
                if(item.id === id) {        //если при переборе id эл. совпадем с id приходящего эл.    
                    return{...item, [prop]: !item[prop]}   //[prop]: !item[prop] - это если бы записали increase: !item.increase , создается новый объект с изменненным в нем increase на противоположен.
                }else {
                    return item;   //если не совпадает id с приходящим, то ничего не эл. не меняется и он возращается без изм
                }
            })
        }))
    }

    //настройка поиска сотр.
    searchEmp = (items, term) => {  //items - все данные, т.е. this.state.data, term - строка поиска
        if(term.length === 0){     //если польз. ничего не внес, то отражаются все данные
            return items;
        }else {
            return items.filter(item => {
                return item.name.indexOf(term) > -1  //фильр.все данные и там находят кусочки строк(indexOf), ктр с совпадают с поиском(term) и показываем если такой есть(> -1)
            })    
        } 
        
        
    }

    onUpdateSearch = (term) => {  //эти данные будут приходить из SearchPanel
        this.setState({
            term: term
        });    //обновится состояние в гл. файле
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'increase':                                    //тоже самое если бы записали if(filter ==='increase'){
                return items.filter(item => item.increase);    
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items;
               
        }
    }
    
    onFilter = (filter) => {
        this.setState({
            filter: filter
        });
    }
    render(){
            
        const {data, term, filter} = this.state;
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

        const allEmployees = data.length; //кол-во всех сотрудн.
        const allIncrease = data.filter(elem => elem.increase).length; //filter- создает новый [] c increase(true) и получаем их кол-во
        const allLiked = data.filter(elem => elem.rise).length; 
        
        return(
            <div className='app'>
                <AppInfo 
                    allEmployees ={allEmployees}
                    allIncrease ={allIncrease}
                    allLiked = {allLiked}
                />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        filter={filter}
                        onFilter ={this.onFilter}
                    />
                </div>
                <EmployeesList 
                    data={visibleData}   //будут отражаться нужные данные
                    onDelete = {this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd ={this.addItem}/>
            </div>
        )
    }

}

//обработчики событий обозначют через on, например onAdd

export default App;