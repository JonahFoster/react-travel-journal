import headerIcon from "./src/images/header-icon.svg"

export default function Header() {
    return (
        <header>
            <img className="icon" src={headerIcon}/>
            <h1>my travel journal.</h1>
        </header>
    )
}