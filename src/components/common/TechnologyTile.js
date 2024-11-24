import { ReactComponent as PlaceHolder} from '../../icons/code.svg'
export const TechnologyTile = ({icon, name}) => {
    return (
        <li className="techTile">
            <div className='techTile--icon'>{icon}</div>
            <p className='techTile--name'>{name}</p>
        </li>
    )
}

TechnologyTile.defaultProps = {
    icon: <PlaceHolder /> ,
    name: "Empty",
}
export default TechnologyTile