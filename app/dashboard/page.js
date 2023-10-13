'use client';

import Image from 'next/image';
import notification from '../../public/icons/notification.png';
import avatar from '../../public/avatar.png';
import search from '../../public/icons/search.png';

import revenue from '../../public/icons/revenue.png';
import transactions from '../../public/icons/transactions.png';
import likes from '../../public/icons/likes.png';
import users from '../../public/icons/users.png';

import DashboardCard from '../components/DashboardCard';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import { Bar } from 'react-chartjs-2';

export default function Dashboard() {
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

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const options = {
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

    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Guest',
                data: [10, 20, 30, 40],
                backgroundColor: '#EE8484',
                barThickness: 42,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: 'rgba(0, 0, 0, 0)',
            },
            {
                label: 'User',
                data: [40, 30, 20, 10],
                backgroundColor: '#98D89E',
                barThickness: 42,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: 'rgba(0, 0, 0, 0)',
            },
        ],
    };

    return (
        <div className='flex min-h-screen bg-[#F8FAFF] px-10 py-8'>
            <div className='flex w-[280px] rounded-[20px] bg-gradient-to-b from-[#4285F4] to-[#3C83F9] px-10 py-12 text-white'>
                <div className='flex w-full flex-col space-y-2'>
                    <p className='mb-[50px] font-montserrat text-[36px] font-bold'>Board.</p>
                    <div className='flex h-[100%] grow'>items</div>
                    <p className='font-montserrat text-[14px]'>Help</p>
                    <p className='font-montserrat text-[14px]'>Contact Us</p>
                </div>
            </div>
            <div className='flex grow flex-col space-y-6 px-10 py-4'>
                <div className='flex'>
                    <p className='font-montserrat text-[24px] font-bold'>Dashboard</p>
                    <div className='flex grow flex-row-reverse items-center'>
                        <Image src={avatar} className='ml-2 h-[30px] w-[30px] cursor-pointer rounded-full' />
                        <Image src={notification} className='mx-2 h-[21px] w-[18px] cursor-pointer' />
                        <div className='relative mx-2 flex w-[197px] items-center bg-white font-lato text-[14px]'>
                            <input type='text' placeholder='Search...' className='px-2 py-1 outline-gray-400'></input>
                            <Image src={search} className='absolute right-2 h-[12px] w-[12px]' />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-8 xl:grid-cols-4'>
                    {CardsData.map((card, index) => {
                        return <DashboardCard key={index} {...card} />;
                    })}
                </div>

                <div className='relative flex h-[280px] flex-col rounded-2xl border-[2px] border-[#E0E0E0] bg-white p-6 shadow-lg'>
                    <p className='absolute font-montserrat text-[18px] font-bold'>Activities</p>
                    <p className='absolute top-12 font-montserrat text-[14px] text-[#858585]'>May - June 2021</p>
                    <Bar options={options} data={data} className='mt-6 flex grow' />
                </div>
                <div></div>
            </div>
        </div>
    );
}
