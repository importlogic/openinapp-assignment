'use client';

import Image from 'next/image';
import notification from '../../public/icons/notification.png';
import search from '../../public/icons/search.png';

import revenue from '../../public/icons/revenue.png';
import transactions from '../../public/icons/transactions.png';
import likes from '../../public/icons/likes.png';
import users from '../../public/icons/users.png';

import dashboard from '../../public/icons/dashboard.png';
import schedules from '../../public/icons/schedules.png';
import user from '../../public/icons/user.png';
import settings from '../../public/icons/settings.png';

import DashboardCard from '../components/DashboardCard';
import ProfileCard from '../components/ProfileCard';

import { useState, useEffect } from 'react';

import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import { Bar, Doughnut } from 'react-chartjs-2';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

export default function Dashboard() {
    const session = useSession();
    const router = useRouter();
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');

    function signOutGoogle() {
        signOut('google');
    }

    useEffect(() => {
        if (session && session.status === 'authenticated') {
            setAvatar(session.data.user.image);
            setName(session.data.user.name);
        } else {
            router.push('/');
        }
    }, [session]);

    const [menuOpen, setMenuOpen] = useState(false);

    ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    boxHeight: 5,
                },
                align: 'end',
            },
        },
        scales: {
            y: {
                ticks: {
                    maxTicksLimit: 6,
                },
            },
        },
    };

    const doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    boxHeight: 10,
                },
                position: 'right',
            },
        },
    };

    // dashboard cards data
    const CardsData = [
        {
            title: 'Total Revenues',
            value: '$2,129,430',
            change: '+2.5',
            icon: revenue,
            icon_bg: 'bg-[#7FCD93]',
        },
        {
            title: 'Total Transactions',
            value: '1,204',
            change: '-0.6',
            icon: transactions,
            icon_bg: 'bg-[#DEBF85]',
        },
        {
            title: 'Total Likes',
            value: '9721',
            change: '+1.4',
            icon: likes,
            icon_bg: 'bg-[#ECA4A4]',
        },
        {
            title: 'Total Users',
            value: '9721',
            change: '+4.2',
            icon: users,
            icon_bg: 'bg-[#A9B0E5]',
        },
    ];

    // bar chart data
    const barChartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Guest',
                data: [10, 20, 30, 40],
                backgroundColor: '#EE8484',
                maxBarThickness: 42,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: 'rgba(0, 0, 0, 0)',
            },
            {
                label: 'User',
                data: [40, 30, 20, 10],
                backgroundColor: '#98D89E',
                maxBarThickness: 42,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: 'rgba(0, 0, 0, 0)',
            },
        ],
    };

    //doughnut chart data
    const doughnutChartLabels = ['Basic Tees', 'Custom Short Pants', 'Custom Hoodies'];
    const doughnutChartRawData = [46, 31, 14];
    const doughnutChartTotal = doughnutChartRawData.reduce((a, b) => a + b, 0);
    const doughnutChartPercentage = doughnutChartRawData.map(
        (value) => ((value / doughnutChartTotal) * 100).toFixed(1) + '%'
    );

    const doughnutChartData = {
        labels: doughnutChartLabels.map((value, index) => [value, doughnutChartPercentage[index]]),
        datasets: [
            {
                data: doughnutChartRawData,
                backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
                cutout: 70,
            },
        ],
    };

    return (
        <div
            className={`flex min-h-screen flex-col ${
                menuOpen ? 'bg-slate-700' : 'bg-[#F8FAFF]'
            } px-4 py-3 transition duration-1000 ease-in-out md:flex-row md:px-10 md:py-8`}
        >
            <div className='flex items-center md:hidden'>
                <label className='swap swap-rotate'>
                    <input type='checkbox' checked={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />

                    {/* hamburger icon */}
                    <svg
                        className='swap-off fill-current'
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 512 512'
                    >
                        <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
                    </svg>

                    {/* close icon */}
                    <svg
                        className='swap-on fill-white'
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 512 512'
                    >
                        <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
                    </svg>
                </label>
                <p
                    className={`grow text-center font-montserrat text-[36px] font-bold transition duration-1000 ease-in-out ${
                        menuOpen ? 'text-white' : 'text-black'
                    }`}
                >
                    Board.
                </p>
                <div className='dropdown dropdown-end'>
                    <Image
                        src={avatar}
                        tabIndex={0}
                        className='h-[40px] w-[40px] cursor-pointer rounded-full'
                        alt=''
                        width={40}
                        height={40}
                    />
                    <ul
                        tabIndex={0}
                        className='dropdown-content menu bg-base-100 rounded-box z-[1] mt-2 w-52 border-[2px] border-[#E0E0E0] p-2 shadow-lg'
                    >
                        <li disabled className='pointer-events-none'>
                            <p>Hi {name}</p>
                        </li>
                        <li onClick={signOutGoogle}>
                            <p>Logout</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`flex grow flex-col justify-center space-y-8 p-5 ${!menuOpen ? 'hidden' : ''}`}>
                <p className='cursor-pointer font-montserrat text-[36px] font-bold text-white'>Dashboard</p>
                <p className='cursor-pointer font-montserrat text-[36px] text-white'>Transactions</p>
                <p className='cursor-pointer font-montserrat text-[36px] text-white'>Schedules</p>
                <p className='cursor-pointer font-montserrat text-[36px] text-white'>Users</p>
                <p className='cursor-pointer font-montserrat text-[36px] text-white'>Settings</p>
            </div>
            <div className={`flex flex-col space-y-4 p-5 ${!menuOpen ? 'hidden' : ''}`}>
                <p className='cursor-pointer font-montserrat text-[16px] text-white'>Help</p>
                <p className='cursor-pointer font-montserrat text-[16px] text-white'>Contact Us</p>
            </div>

            <div className='hidden w-[280px] select-none rounded-[20px] bg-gradient-to-b from-[#4285F4] to-[#3C83F9] px-10 py-12 text-white md:flex'>
                <div className='flex w-full flex-col space-y-2'>
                    <p className='mb-[50px] font-montserrat text-[36px] font-bold'>Board.</p>
                    <div className='flex grow flex-col space-y-10'>
                        <div className='flex items-center space-x-4'>
                            <Image src={dashboard} className='h-[18px] w-[18px]' alt='' />
                            <p className='cursor-pointer font-montserrat text-[18px] font-bold'>Dashboard</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <Image src={transactions} className='h-[18px] w-[18px]' alt='' />
                            <p className='cursor-pointer font-montserrat text-[18px]'>Transactions</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <Image src={schedules} className='h-[18px] w-[18px]' alt='' />
                            <p className='cursor-pointer font-montserrat text-[18px]'>Schedules</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <Image src={user} className='h-[18px] w-[18px]' alt='' />
                            <p className='cursor-pointer font-montserrat text-[18px]'>Users</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <Image src={settings} className='h-[18px] w-[18px]' alt='' />
                            <p className='cursor-pointer font-montserrat text-[18px]'>Settings</p>
                        </div>
                    </div>
                    <p className='cursor-pointer font-montserrat text-[14px]'>Help</p>
                    <p className='cursor-pointer font-montserrat text-[14px]'>Contact Us</p>
                </div>
            </div>
            <div
                className={`flex grow flex-col space-y-6 px-0 py-4 transition duration-1000 ease-in-out md:px-10 ${
                    menuOpen ? 'hidden' : ''
                }`}
            >
                <div className='hidden md:flex'>
                    <p className='font-montserrat text-[24px] font-bold'>Dashboard</p>
                    <div className='flex grow flex-row-reverse items-center space-x-4 space-x-reverse'>
                        <div className='dropdown dropdown-end'>
                            <Image
                                src={avatar}
                                tabIndex={0}
                                className='h-[30px] w-[30px] cursor-pointer rounded-full'
                                alt=''
                                width={30}
                                height={30}
                            />

                            <ul
                                tabIndex={0}
                                className='dropdown-content menu bg-base-100 rounded-box z-[1] mt-2 w-52 border-[2px] border-[#E0E0E0] p-2 shadow-lg'
                            >
                                <li disabled className='pointer-events-none'>
                                    <p>Hi {name}</p>
                                </li>

                                <li onClick={signOutGoogle}>
                                    <p>Logout</p>
                                </li>
                            </ul>
                        </div>

                        <Image src={notification} className='h-[21px] w-[18px] cursor-pointer' alt='' />
                        <div className='relative flex w-[197px] items-center bg-white font-lato text-[14px]'>
                            <input type='text' placeholder='Search...' className='px-2 py-1 outline-gray-400'></input>
                            <Image src={search} className='absolute right-2 h-[12px] w-[12px]' alt='' />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
                    {CardsData.map((card, index) => {
                        return <DashboardCard key={index} {...card} />;
                    })}
                </div>

                <div className='relative flex h-[280px] flex-col rounded-2xl border-[2px] border-[#E0E0E0] bg-white p-6 pb-2 shadow-lg'>
                    <p className='absolute font-montserrat text-[18px] font-bold'>Activities</p>
                    <p className='absolute top-12 font-montserrat text-[14px] text-[#858585]'>May - June 2021</p>
                    <Bar options={barChartOptions} data={barChartData} className='mt-6 flex grow' />
                </div>

                <div className='grid grid-cols-1 gap-8 xl:grid-cols-2'>
                    <div className='relative flex h-[256px] flex-col space-y-2 rounded-2xl border-[2px] border-[#E0E0E0] p-5 shadow-lg'>
                        <div className='flex items-center'>
                            <p className='flex grow font-montserrat text-[18px] font-bold'>Top Products</p>
                            <p className='font-montserrat text-[12px] text-[#858585]'>May - June 2021</p>
                        </div>
                        <Doughnut
                            options={doughnutChartOptions}
                            data={doughnutChartData}
                            className='absolute bottom-1 flex grow'
                        />
                    </div>
                    <div className='flex h-[256px] rounded-2xl border-[2px] border-[#E0E0E0] p-5 shadow-lg'>
                        <ProfileCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
