import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCamera, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Logo from '../../logo2.png';

const Header = ({ type }) => {

    const { user } = useContext(AuthContext);

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 0
    })

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, date, options } })
        navigate("/hotels", { state: { destination, date, options } });
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <div className='h-container'>
            <div className="h-row">
                <div className="h-col">
                    <Link to="/"><img src={Logo} /></Link>
                </div>
                <div className="h-col">
                    {user ?

                        <>
                            <button>{user.username}</button>
                            <button onClick={handleLogout}>Salir</button>
                        </>
                        : (
                            <>
                                <Link to="/register">
                                    <button>Registrarse</button>
                                </Link>
                                <Link to="/login">
                                    <button>Iniciar sesión</button>
                                </Link>
                            </>
                        )}
                </div>
            </div>
            <div className="h-row">
                <div className={type === "smallHeader" ? "h-col smallHeader" : "h-col"}>
                    <div className="icons">
                        <div className="icon">
                            <Link to='/'>Inicio</Link>
                        </div>
                        <div className="icon active">
                            <FontAwesomeIcon icon={faBed} />
                            <Link to='/'>Habitaciones</Link>
                        </div>

                        <div className="icon">
                            <Link to='/'>Servicios</Link>
                        </div>
                        <div className="icon">
                            <Link to='/'>Contacto</Link>
                        </div>
                        <div className="icon">
                            <Link to='/'>Eventos</Link>
                        </div>
                    </div>
                </div>
                {type !== "smallHeader" &&
                    <>
                        <div className="h-col">
                            <h3>Haz tu reservación</h3>
                        </div>
                        <div className="h-col">
                            <div className="search">
                                <div className="search-item">
                                    <FontAwesomeIcon icon={faBed} />
                                    <input type="text" onChange={(e) => setDestination(e.target.value)} placeholder='Tipo de habitacion' />
                                </div>

                                <div className="search-item">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} a ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

                                    {openDate && (<DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date} className="date"
                                        minDate={new Date()}
                                    />)
                                    }
                                </div>

                                <div className="search-item">
                                    <FontAwesomeIcon icon={faPerson} />
                                    <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adultos - ${options.children} niños - ${options.room} mascotas`}</span>
                                    {
                                        openOptions && (
                                            <div className="options">
                                                <div className="optionsItem">
                                                    <span>Adultos</span>
                                                    <div className="optionsButton">
                                                        <button onClick={() => handleOption("adult", "decrement")} className='optionsBtn' disabled={options.adult <= 1}>-</button>
                                                        <span>{options.adult}</span>
                                                        <button onClick={() => handleOption("adult", "increment")} className='optionsBtn'>+</button>
                                                    </div>
                                                </div>
                                                <div className="optionsItem">
                                                    <span>Niños</span>
                                                    <div className="optionsButton">
                                                        <button onClick={() => handleOption("children", "decrement")} className='optionsBtn' disabled={options.children <= 0}>-</button>
                                                        <span>{options.children}</span>
                                                        <button onClick={() => handleOption("children", "increment")} className='optionsBtn'>+</button>
                                                    </div>
                                                </div>
                                                <div className="optionsItem">
                                                    <span>Mascotas</span>
                                                    <div className="optionsButton">
                                                        <button onClick={() => handleOption("room", "decrement")} className='optionsBtn' disabled={options.room <= 1}>-</button>
                                                        <span>{options.room}</span>
                                                        <button onClick={() => handleOption("room", "increment")} className='optionsBtn'>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="search-item">
                                    <button className='btnSearch' onClick={handleSearch}>Buscar</button>
                                </div>
                            </div>

                        </div>

                    </>
                }
            </div>
        </div>
    )
}

export default Header
