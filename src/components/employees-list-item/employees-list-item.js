
import './employees-list-item.css';

const EmployeesListItem = ({name, salary, onDelete, onToggleProp, increase, rise}) =>  {  //каждый отдельный сотрудник; props приходят из EmployeesList, а оттуда из app.js

    let classNames = 'list-group-item d-flex justify-content-between';

    if(increase){          //если increase true
        classNames += ' increase'; //то к классам добавляется стиль increase и ВАЖНО указать пробел, т.к.добавляется к строке
    }

    if(rise){          //если rise true
        classNames += ' rise'; //то к классам добавляется стиль rise и ВАЖНО указать пробел, т.к.добавляется к строке
    }
    
    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle='increase'>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/> 
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp} data-toggle='increase'> 
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>

                <button type="button"
                        className="btn-star btn-sm "
                        onClick={onToggleProp} data-toggle='rise'>
                    <i className="fas fa-star"></i>
                </button>
            </div>
        </li>
    )
    
 
}

//defaultValue - значение по умолчанию

export default EmployeesListItem;




