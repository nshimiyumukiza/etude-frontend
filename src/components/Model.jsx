import { Modal } from "antd";
import { useState } from "react";

const Model = () => {
    const [isOpenModel, setIsOpenModal] = useState(false);

    const openModel = () =>{
        setIsOpenModal(true)
    }
    const closeModal = () => {
        setIsOpenModal(false);
    }
    return (
        <div >
            <div>
                <h1 className=" text-lg p-8 text-center text-blue-500">Study How Modal Work</h1>
                <button className="ml-10 mt-10 border rounded-md px-3 py-2 bg-black text-white hover:bg-blue-500" onClick={openModel}>Open omodal</button>
            </div>
           <Modal 
           open={isOpenModel}
           onClose={closeModal}
           onCancel={closeModal}
           footer={null}>
            <h1 className="text-2xl text-green-500 underline p-4"> I'M Erneste Sagagaga</h1>
            <p className="text-lg
            ">i will be a good fullstack develop and get more more moneny to change the hiastory for my fammilly!</p>
            <button className="border rounded-md px-2 py-1 bg-blue-500 text-white text-center">Send </button>
           
           </Modal>
        </div>
    )
}

export default Model