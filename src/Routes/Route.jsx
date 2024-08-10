import DashBoad from '../Components/DashBoard/DashBoad';
import SideBar from '../Components/SideBar/SideBar';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import AddNewExpense from '../Components/AddNewExpense/AddNewExpense';
import { Route, Routes } from 'react-router';


const Router = () => {
    return (
        <>
            <Header />
            <SideBar />
            <Routes>
                <Route path='/' element={<DashBoad />} />
                <Route path='/add-new-expense' element={<AddNewExpense />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Router