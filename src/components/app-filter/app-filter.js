import "./app-filter.css"

const AppFilter = (props) => {

    const buttonsData = [
        {name:'all', label: 'Все сотрудники'},
        {name:'increase', label: 'Премию получат'},
        {name:'rise', label: 'Лучшие сотрудники'},
        {name:'moreThen1000', label: 'З/П больше 1000$'}
    ]

    const button = buttonsData.map(({name, label}) => {   //map новый[] по этим данным
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : "btn-outline-light";
        return(
            <button 
                className={`btn ${clazz}`}
                key={name}
                type='button'
                onClick={() => props.onFilter(name)}>
                    {label}
            </button>
        )
    })


    return(
        <div className="btn-group">
            {button}
        </div>
    )
    
 
}

export default AppFilter;