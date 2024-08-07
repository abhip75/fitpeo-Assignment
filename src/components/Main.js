import React from "react";
import { FaShoppingBasket, FaStar} from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { BiTargetLock } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";
import "../Main.css";
import ChartBar from "../components/ChartBar";
import MyTable from "../components/MyTable"
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { IoIosCheckmark } from "react-icons/io";


const Main = () => {

    const percentage = 70;

  return (
    <div className="main-container">
      <h3 className="dashboard-title mt-5">Dashboard</h3>
      <div className="dashboard-content">
        <div className="row g-6">
            <div className="col-md-2">
                <div className="card card-revenue">
                    <div className="card-body">
                        <div className="float-start">
                            <FaShoppingBasket className="icon-basket"/>
                            <div className="position-relative">
                            <GoPlus className="plus-icon" />
                            </div>
                            <p className="text">Total Orders</p>
                        </div>
                        <div className="bottom-text">
                            <div className="float-start">
                                <h4 className="small-header">75</h4>
                            </div>
                            <div className="float-end">
                                <div className="d-flex">
                                    <GoTriangleUp className="traingle-up"/>
                                     <p className="small-text">3 %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card card-revenue">
                    <div className="card-body">
                        <div className="float-start">
                            <IoBag className="icon-bag"/>
                            <div className="position-relative">
                            <IoIosCheckmark className="check-icon" />
                            </div>
                            <p className="text">Total Delivered</p>
                        </div>
                        <div className="bottom-text">
                            <div className="float-start">
                                <h4 className="small-header">70</h4>
                            </div>
                            <div className="float-end">
                                <div className="d-flex">
                                    <GoTriangleDown className="traingle-down"/>
                                    <p className="text-icon">3 %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card card-revenue">
                    <div className="card-body">
                        <div className="float-start">
                            <IoBag className="bag-icon"/>
                            <div className="position-relative">
                            <RxCross2 className="cross-icon" />
                            </div>
                            <p className="text">Total Cancelled</p>
                        </div>
                        <div className="bottom-text">
                            <div className="float-start">
                                <h4 className="small-header">05</h4>
                            </div>
                            <div className="float-end">
                                <div className="d-flex">
                                    <GoTriangleUp className="traingle-up"/>
                                    <p className="small-text">3 %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card card-revenue">
                    <div className="card-body">
                        <div className="float-start">
                            <HiOutlineCurrencyDollar className="icon-dollar"/>
                            <p className="text">Total Revenue</p>
                        </div>
                        <div className="bottom-text">
                            <div className="float-start">
                                <h4 className="small-header">$ 12K</h4>
                            </div>
                            <div className="float-end">
                                <div className="d-flex">
                                <GoTriangleDown className="traingle-down"/>
                                <p className="text-icon">3 %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-3">
                <div className="card bg-dark text-white h-100 card-profit">
                    <div className="card-body">
                        <h5 className="card-title title-profit">Net Profit</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="mb-0 netprofit-text">$6759.25</h2>
                            <div  className="progress-container">
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        textColor: '#fff',
                                        pathColor: '#49addb',
                                        trailColor: '#19365f',
                                        textSize: '12px', 
                                        strokeWidth:20,
                                    })}
                                />
                                <div  className="goal-completed">
                                    goal completed
                                </div>
                            </div>
                        </div>
                        {/* <span className="text-net-profit"><GoTriangleUp/> 3%</span> */}
                        <div className="text-net-profit-wrapper">
                            <span className="text-net-profit"><GoTriangleUp /> 3%</span>
                        </div>
                        {/* <small className="text-for-profit float-end">* The values here have been rounded off.</small> */}
                        <div className="text-for-profit float-end">
                            <p><small>* The values here have been rounded off.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="activity-content">
      <div className="row mt-4 g-8">
                <div className="col-md-8">
                    <div className="card card-chart">
                        <div className="d-flex justify-content-between align-items-center">
                        <h4 className="mt-3 text-activity">Activity</h4>
                        <h4 className="mt-3 text-weekly">
                            Weekly <GoTriangleDown />
                        </h4>
                        </div>
                        <div className="card-body">
                        <ChartBar />
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                <div className="card popular-card">
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <h4 className="mt-3"> <BiTargetLock className="target-icon" /> <span className="text-popular">Goals</span></h4>
                        <h4 className="mt-3">
                             <FaAngleRight  className="popular-icons"/>
                        </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="mt-3"> <LiaHamburgerSolid className="burger-icon"/> <span className="text-popular"> Popular Dishes</span></h4>
                        <h4 className="mt-3">
                             <FaAngleRight  className="popular-icons"/>
                        </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="mt-3"> <BiDish className="menu-icon"/> <span className="text-popular">Menus</span></h4>
                        <h4 className="mt-3">
                             <FaAngleRight  className="popular-icons"/>
                        </h4>
                </div>
                </div>
            </div>
        </div>
      </div>
        
      <div className="table-feedback-content">
      <div className="row mt-4">
            <div className="col-md-8">
                <div className="card card-table">
                <div className="float-start recent-orders mt-3">
                    <h4>Recent Orders</h4>
                </div>
                    <MyTable/>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card rating-card">
                    <SimpleBar style={{ maxHeight: '400px' , color:"#b0b0b0" }} className="simple-bar">
                    <div className="float-start feedback mt-3">
                        <h4>Customer's Feedback</h4>
                    </div>
                    <div className="d-flex align-items-center mt-5">
                        <img src="/images/avatar.png" alt="avatar" className="avatar-feedback" />
                        <div className="ml-2 avatar-name">
                        Jenny Wilson
                        </div>
                    </div>
                    <span className="stars mt-2">
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="reg-icon" />
                    </span>
                    <div className="rating-text mt-2">
                        <p>
                        The food was excellent and so was the service. I had the<br />
                        mushroom risotto with scallops which was awesome. I had a burger<br />
                        over greens (gluten-free) which was also very good. They were<br />
                        very conscientious about gluten allergies.
                        </p>
                    </div>
                    <hr className="line"/>

                    <div className="d-flex align-items-center mt-4">
                        <img src="/images/avatar.png" alt="avatar" className="avatar-feedback" />
                        <div className="ml-2 avatar-name">
                            Dianne Russell
                        </div>
                    </div>
                    <span className="stars mt-2">
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="reg-icon" />
                    </span>
                    <div className="rating-text mt-2">
                        <p>
                            We enjoyed the Eggs Benedict served on homemade focaccia<br/>
                            bread and hot coffee. Perfect service.
                        </p>
                    </div>
                    <hr className="line"/>

                    <div className="d-flex align-items-center mt-4">
                        <img src="/images/avatar.png" alt="avatar" className="avatar-feedback" />
                        <div className="ml-2 avatar-name">
                        Jenny Wilson
                        </div>
                    </div>
                    <span className="stars mt-2">
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="reg-icon" />
                    </span>
                    <div className="rating-text mt-2">
                    <p>
                            We enjoyed the Eggs Benedict served on homemade focaccia<br/>
                            bread and hot coffee. Coffee and bread was tasty.<br/>
                            I tried other things also that was also good.<br/>
                            Perfect service.
                        </p>
                    </div>
                    </SimpleBar>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
