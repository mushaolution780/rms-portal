import React, { useState, useEffect } from 'react'
import SideBar from './SideBar'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import { BaseUrl } from '../Constants/BaseUrl'

import moment from 'moment'
import { useDispatch, useSelector } from "react-redux"
import CreateClassModal from './CreateClassModal'
import { useNavigate } from "react-router-dom"
import * as DataAction from "../Store/DataAction"
import * as BiIcon from "react-icons/io"
import * as BiiIcon from "react-icons/bi"
import * as AiIcon from "react-icons/ai"
const AllSchool = () => {
    const allStudent = useSelector((state) => state.date.allStudent)
    const { schoolId } = useParams();

    const [allSchools, setAllSchols] = useState([])
    const [SchoolDetails, setSchoolDetails] = useState()
    const dispatch = useDispatch()


    const [search, setSearch] = useState("")
    const [create, setCreate] = useState(false)
    const navigate = useNavigate()

    // const GetAllStudent = () => {
    //     dispatch(DataAction.GetALlStudents())
    // }

    const GetSchoolDetails = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "schoolId": schoolId?.toString()
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BaseUrl}api/getSchoolById`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    setSchoolDetails(result?.data)
                }
            })
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        GetSchoolDetails()


    }, [])

    return (
        <div className="w-full h-screen bg-back bg-cover flex items-center">
            <div className="w-full h-screen bg-opacityBgColor flex">
                <div className="mt-2">
                    <SideBar />
                </div>
                <div className={"w-100 overflow-auto bg-glass  ml-4 mr-4 mt-2.5 mb-8 rounded-3xl"}>
                    <div className={"w-100 overflow-auto bg-glass   mb-8 rounded-3xl p-4 bg-[#164370]"}>

                        <div className='h-16 w-100 flex justify-between items-center '>
                            <div className='flex flex-row justify-center items-center'>
                                <h4 className='text-white font-bold'>{SchoolDetails?.SchoolName}</h4>

                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <div className='flex flex-row justify-between items-center bg-white  pr-3 ml-4'>
                                    <input onChange={(e) => setSearch(e.target.value)} className='h-10  focus:border-gray-500 w-80 text-lg p-2' />
                                    <div className='flex justify-center items-center '>
                                        <BiIcon.IoMdSearch />
                                    </div>

                                </div>
                                <div onClick={() => { setCreate(true) }} className='cursor-pointer text-[2.8rem] text-white ml-4'>
                                    <BiIcon.IoMdAddCircle />
                                </div>
                            </div>

                        </div>
                        <div className='bg-white h-[90%] p-5 rounded-2xl overflow-auto'>
                            {
                                SchoolDetails && <div>
                                    {
                                        SchoolDetails?.ClassList?.map((i) => {
                                            console.log(i?.thumbnail, "SchoolDet")
                                            return (
                                                <div className='h-40 w-ful mb-3 rounded-lg bg-[#eef3f5] p-2  flex ' >
                                                    <div className='h-full w-1/4  rounded-md'>
                                                        <img className='h-[100%] w-[100%]' src={`${i?.thumbnail}`} />
                                                    </div>
                                                    <div className='ml-2 justify-center  flex flex-col text-[0.8rem]'>
                                                        <h1 className="text-[1.5rem] font-semibold">{i?.className}</h1>
                                                        <div className='flex items-center ]'>
                                                            <div className='mr-2 text=[#104871] '>
                                                                <AiIcon.AiFillClockCircle />
                                                            </div>

                                                            <div>
                                                                <p>{`Start Time: ${i?.startDate}`}</p>
                                                            </div>
                                                        </div>

                                                        <div className='flex items-center'>
                                                            <div className='mr-2'>
                                                                <AiIcon.AiFillClockCircle />
                                                            </div>

                                                            <div>
                                                                <p>{`Start Time: ${i?.startDate}`}</p>
                                                            </div>
                                                        </div>


                                                        <div className='flex items-center'>
                                                            <div className='mr-2'>
                                                                <BiiIcon.BiGroup />
                                                            </div>

                                                            <div>
                                                                <p>{`Students: ${i?.count}`}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                        {
                            create && <CreateClassModal schoolId={schoolId} onCancel={() => {
                                GetSchoolDetails()
                                setCreate(false)
                            }} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSchool