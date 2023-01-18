import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <ul className='nav'>
                <li className='nav__container'>
                    <div className='nav__title'>
                        Mobiles & Tablets
                        <BiChevronDown className='fa ml__4' />
                    </div>
                    <div className='nav__description'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Smartphones</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>SMARTWATCHES</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Accessories</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Tablet Accessories</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Mobile Accessories</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Mobile Grips & Stands</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Car Mobile Holders</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Memory Cards</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Cables & Cords</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Chargers & Adapters</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Headphones & Headsets</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Tablets & eReaders</Link>
                                    </li>

                                    <li className='nav__description__subitem'>
                                        <Link>Every Day use Tablets below 15000</Link>
                                    </li>

                                    <li className='nav__description__subitem'>
                                        <Link>Premium Tablets, Above 15001</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Power Banks</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>eSlates</Link>
                                    </li>
                                </ul>

                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>AI Learning Robots</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='nav__container'>
                    <div className='nav__title'>
                        Televisions
                        <BiChevronDown className='fa ml__4' />
                    </div>

                    <div className='nav__description'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li className='nav__description__item'>Televisions</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Smart TVs</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>32 Inch TVs</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>43 Inch TVs</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>55 Inch TVs</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Android TVs</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>Gaming</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Gaming Consoles</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Gaming Accessories</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Gaming Titles</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Projectors</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Streaming Devices</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Reconnect Disney | Marvel Audio Collection</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>TV & Audio Accessories</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Virtual Reality Headsets</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Stabilizers & Surge Protectors</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='nav__container'>
                    <div className='nav__title'>
                        Audio
                        <BiChevronDown className='fa ml__4' />
                    </div>

                    <div className='nav__description'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li className='nav__description__item'>Headphones & Headsets</li>
                                    <li className='nav__description__subitem'>
                                        <Link>True Wireless</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Bluetooth Neckbands</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Wired Earphones</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>On Ear Headphones</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Noise Cancelling Headphones</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>Bluetooth & WiFi Speakers</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Bluetooth Speakers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Smart Speakers</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>TV Speakers & Soundbars</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Soundbars</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Home Theatre Systems</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Party speakers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Multimedia</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>Musical Instruments</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Guitars and Ukuleles</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Microphones</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Musical Keyboards</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='nav__container'>
                    <div className='nav__title'>
                        Home Appliances
                        <BiChevronDown className='fa ml__4' />
                    </div>

                    <div className='nav__description'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li className='nav__description__item'>Air Conditioners</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Split Air Conditioners</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Window Air Conditioners</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Smart Air Conditioners</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Energy Efficient Air Conditioners</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>1 ton Air Conditioners</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>1.5 ton Air Conditioners</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>5 star Air Conditioners</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Air Coolers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Air Purifiers</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>Washing Machines</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Fully Automatic Front Load</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Fully Automatic Top Load</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Semi-Automatic Top Load</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Refrigerators</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Single Door</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Double Door</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Side by Side Refrigerators</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Convertible</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>Vacuum Cleaners</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Robotic Vacuum Cleaners</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Dishwashers</li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Fans</li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Cloth Dryers</li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Geysers</li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Room Heaters</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='nav__container'>
                    <div className='nav__title'>
                        Computers
                        <BiChevronDown className='fa ml__4' />
                    </div>

                    <div className='nav__description'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li className='nav__description__item'>Laptops</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Basic use laptops</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Student Laptops</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Thin and light Laptops</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Multi-Tasking Laptops</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Gaming Laptops</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Content creator Laptops</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Computer Monitors</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Desktops & All-In-Ones</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Bluetooth & WiFi Speakers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Internet Connectivity Devices</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Routers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>WiFi Range Extenders</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Wireless USB Adapters</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Printers & Inks</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Printers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Toners & Ink Cartridges</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Data Storage Devices</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Memory Cards</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Pen Drives & OTG Drives</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Hard Disks & SSD</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>Computer Accessories</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Upto 72% Off, Only on Reliancedigital.in</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Computer Networking Cables</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Laptop Chargers & Adaptor</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Laptop Batteries</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Hubs & Docks</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Laptop Bags & Sleeves</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Laptop Cooling Pad</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Laptop Screen Protectors</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Laptop Tables & Stands</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Mouse Pads</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Input Devices</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Keyboards</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Computer Mouse</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Stylus Pens</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='nav__container'>
                    <div className='nav__title'>
                        Cameras
                        <BiChevronDown className='fa ml__4' />
                    </div>

                    <div className='nav__description'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>DSLR Cameras</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Mirrorless Cameras</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Point & Shoot Cameras</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>ProSumer Cameras</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Action Cameras</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Photo Storage Devices</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Memory Cards</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Pen Drives</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Binoculars</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Camera Lens</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Digital Camera Accessories</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Camera Batteries & Chargers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Camera bags & cases</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Tripods & Monopods</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Action Camera Accessories</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='nav__container'>
                    <div className='nav__title'>
                        Kitchen Appliances
                        <BiChevronDown className='fa ml__4' />
                    </div>

                    <div className='nav__description'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Microwave Ovens</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Water Purifiers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Fruits and Vegetable Cleaner</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Oven Toaster Grillers (OTG)</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Cookwares</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Juicer Mixer Grinders</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Juicers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Hand Mixers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Mixer Grinders</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Choppers & Slicers</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Induction Cookers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Food Processors</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Blenders</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Kitchen Hobs & Gas Stoves</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Kitchen Chimneys</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Rice Cookers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Sandwich Makers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Popup Toasters</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Coffee Makers & Grinders</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Reconnect Disney|Marvel Kitchen Collection</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Air Fryers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Specialty Appliances</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Electric Kettles</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Water Dispensers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Wet Grinders</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Flour Mills</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='nav__container'>
                    <div className='nav__title'>
                        PERSONAL CARE
                        <BiChevronDown className='fa ml__4' />
                    </div>

                    <div className='nav__description'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Shavers & Trimmers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Epilators</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Hair Dryers & Stylers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Weighing Scales</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Irons</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Reconnect Disney|Marvel Grooming Collection</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Hygiene & Personal Care</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Digital Thermometers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Massagers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Misc. Care Devices</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Garment Steamers</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='nav__container'>
                    <div className='nav__title'>
                        Accessories
                        <BiChevronDown className='fa ml__4' />
                    </div>

                    <div className='nav__description'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Bags, Cases & Sleeves</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Smart Devices</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Smart Plugs</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Smart Cameras</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Smart Sensors</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Smart Lights</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Smart Speakers</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Smart Tracking Devices</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Batteries</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Power Banks</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Cables & Cords</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Chargers & Adapters</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Bluetooth & WiFi Speakers</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Reconnect Disney | Marvel Accessories</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>Data Storage Devices</li>
                                    <li className='nav__description__subitem'>
                                        <Link>Memory Cards</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Pen Drives & OTG Drives</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Hard Disks & SSD</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Mounts & Stands</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Air Conditioner Stands</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Tripods & Monopods</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Selfie Sticks</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Car Mobile Holders</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Laptop Stands</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Mobile Grips & Stands</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Surge Protectors</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Webcams</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Headphones & Headsets</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Cleaners & Protectors</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Computer Mouse</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Keyboards</Link>
                                    </li>
                                </ul>
                                
                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Indoor Lighting</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Office Electronics</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Laminators</Link>
                                    </li>
                                    <li className='nav__description__subitem'>
                                        <Link>Paper Shredders</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Tyre Inflators</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Routers</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Screen Guards & Protectors</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Power Strips & Extension Cords</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='nav__description__item'>
                                        <Link>Stabilizers</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar