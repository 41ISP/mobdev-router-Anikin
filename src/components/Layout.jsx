import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
    return (
        <>
        <Header/> 
        <main className="page-area">
            <Outlet  />
        </main>
        </>
    )
}
export default Layout