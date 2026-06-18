import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    return (
        <>
            {/* <div className="flex flex-col h-screen"> */}
            <div>
                <Navbar />
                {/* <main className="flex-1 flex"> */}
                <main className="ml-[60px] mr-[60px]">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default HomeLayout;