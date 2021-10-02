import './app-info.css'

const AppInfo = ({allEmployees, allIncrease, allLiked}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании "Elcode"</h1>
            <h2>Общее количество сотрудников: {allEmployees}</h2>
            <h2>Премию получат: {allIncrease} </h2>
            <h2>Лучшие сотрудники: {allLiked} </h2>
        </div>
    )
}

export default AppInfo;