import ticket from "../img/ticket.png"
import profile from "../img/profile.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="pl-[40px] pr-[40px] h-[60px] text-[24px] font-bold text-[#FF271D] justify-between items-center flex
            backdrop-blur-md border-b border-gray-200/20 shadow-sm">
                <span
                    className="cursor-pointer"
                    onClick={() => {
                        navigate("/");
                    }}>Seed</span>
                <div className="flex gap-[20px]">
                    <img src={ticket} alt="ticket" className="w-[30px] h-[30px] cursor-pointer"
                        onClick={() => {
                            navigate("/my");
                        }} />
                    <img src={profile} alt="profile" className="w-[30px] h-[30px] cursor-pointer"
                    />
                </div>
            </div >
        </>
    )

}

export default Navbar;