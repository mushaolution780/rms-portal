import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'

import LoginPage from "../Pages/Auth/LoginPage"
import Dashboard from "../Pages/Dashboard"

import ProtectedRoute from "../Components/ProtectedRoute"
import AllStudents from "../Components/AllStudents"
import AllSchool from "../Components/AllSchool"
import AllSchoolDetail from "../Components/AllSchoolDetail"
import StudentAddToClass from "../Pages/StudentAddToClass"

import ClassDashboard from "../Components/ClassDashboard"
import AllAsssignment from "../Components/AllAsssignment"
import AssignmentDetails from "../Components/AssignmentDetails"

import AllQuizes from "../Components/AllQuizes"
import QuizDetails from "../Components/QuizDetails"
import AllStudentByClass from "../Components/AllStudentByClass"
import AllNotes from "../Components/AllNotes"
import AllPastPapers from "../Components/AllPastPapers"
import AllAnnouncements from "../Components/AllAnnouncements"
import ALlRecordedLactures from "../Components/ALlRecordedLactures"

import DwfMapScreen from "../Components/DwfMapScreen"

const MainRoutes = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<ProtectedRoute Component={Dashboard} />} />
                <Route path="/students" element={<ProtectedRoute Component={AllStudents} />} />
                <Route path="/school" element={<ProtectedRoute Component={AllSchool} />} />
                <Route path="/schoolDetails/:schoolId" element={<ProtectedRoute Component={AllSchoolDetail} />} />
                <Route path="/addStudentToClass/:classId" element={<ProtectedRoute Component={StudentAddToClass} />} />
                <Route path="/allAssignment/:classId" element={<ProtectedRoute Component={AllAsssignment} />} />
                <Route path="/allQuizes/:classId" element={<ProtectedRoute Component={AllQuizes} />} />
                <Route path="/classDashboard/:classId" element={<ProtectedRoute Component={ClassDashboard} />} />
                <Route path="/assignmentDetails/:assignmentId" element={<ProtectedRoute Component={AssignmentDetails} />} />
                <Route path="/quizDetails/:quizId" element={<ProtectedRoute Component={QuizDetails} />} />
                <Route path="/AllStudentByClass/:classId" element={<ProtectedRoute Component={AllStudentByClass} />} />
                <Route path="/allNotes/:classId" element={<ProtectedRoute Component={AllNotes} />} />
                <Route path="/AllPastPapers/:classId" element={<ProtectedRoute Component={AllPastPapers} />} />
                <Route path="/AllAccouncements/:classId" element={<ProtectedRoute Component={AllAnnouncements} />} />
                <Route path="/ALlRecordedLactures/:classId" element={<ProtectedRoute Component={ALlRecordedLactures} />} />
                <Route path="/Dwf/GoogleMapTracking/:sessionId/:token" element={<DwfMapScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes