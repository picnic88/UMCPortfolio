import { useParams } from "react-router-dom";
import { projectList } from "./MyMovieLog.tsx"



const PrjDetail = () => {
    const { id } = useParams();
    const prj = projectList.find(
        item => item.id === Number(id)
    );
    return (
        <>
            {prj?.id != 3 && (
                <>
                    <div className="flex mt-[40px] ml-[60px]">
                        <img
                            className="mt-[80px] w-48 h-90 rounded-lg mr-[10px] p-4 backdrop-blur-md border-1 border-black-200/20 shadow-sm"
                            src={prj?.poster} alt="프로젝트 이미지" />
                        <div className="ml-[60px] mt-[80px]">
                            {prj?.introduce && (
                                <><div className="w-[1000px] h-[40px] pl-[10px] rounded-[4px] flex items-center bg-[#FF271D] text-white">작품 소개</div>
                                    <div className="mt-[40px] ml-[20px] mb-[100px] whitespace-pre-line">{prj?.introduce}</div>
                                </>
                            )}

                            <div className="w-[1000px] h-[40px] pl-[10px] rounded-[4px] flex items-center bg-[#FF271D] text-white">후기</div>
                            <div className="mt-[40px] ml-[20px] whitespace-pre-line">{prj?.detail}</div>
                        </div>

                    </div>
                    <div className="w-[1250px] h-[40px] pl-[10px] rounded-[4px] flex items-center bg-[#FF271D] text-white flex gap-4 mt-45 ml-[60px]">
                        갤러리
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-26 ml-[60px] mb-[60px]">
                        {prj?.posters.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`poster-${idx}`}
                                className="w-[250px] h-[460px] rounded-lg mr-[10px] p-5 backdrop-blur-md border-1 border-gray-200/20 shadow-sm"
                            />
                        ))}
                    </div>
                </>
            )}
            {prj?.id == 3 && (
                <>
                    <div className="flex mt-[60px]">
                        <img
                            className="mt-[40px] w-98 h-52"
                            src={prj?.poster1} alt="프로젝트 이미지" />
                        <div className="ml-[20px] mt-[40px]">
                            <div className="w-[880px] h-[40px] pl-[10px] rounded-[4px] flex items-center bg-[#FF271D] text-white">후기</div>
                            <div className="mt-[40px] ml-[20px] whitespace-pre-line">{prj?.detail}</div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default PrjDetail;