'use client';

import Image from 'next/image';
import github from '../public/icons/github.png';
import twitter from '../public/icons/twitter.png';
import linkedin from '../public/icons/linkedin.png';
import discord from '../public/icons/discord.png';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import SignInForm from './components/SignInForm';

import { useEffect } from 'react';

export default function Singin() {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session && session.status === 'authenticated') {
            router.push('/dashboard');
        }
    }, [session]);

    return (
        <div className='flex select-none'>
            <div
                className='hidden min-h-screen grow p-10 lg:flex'
                style={{ background: 'linear-gradient(98deg, #4285F4 40%, #F8FAFF calc(40% + 1px))' }}
            >
                <div className='flex w-[30%] flex-col xl:w-[35%]'>
                    <div className='flex grow font-poppins text-[24px] font-bold text-white'>LOGO</div>
                    <div className='flex grow items-center justify-center font-montserrat text-[72px] font-bold text-white'>
                        Board.
                    </div>
                    <div className='flex grow items-end justify-center space-x-8'>
                        <Image src={github} className='h-[32px] w-[32px] cursor-pointer invert' alt='' />
                        <Image src={twitter} className='h-[32px] w-[32px] cursor-pointer invert' alt='' />
                        <Image src={linkedin} className='h-[32px] w-[32px] cursor-pointer invert' alt='' />
                        <Image src={discord} className='h-[32px] w-[32px] cursor-pointer invert' alt='' />
                    </div>
                </div>
                <div className='flex grow'></div>

                <div className='flex w-[55%] grow justify-center'>
                    <SignInForm />
                </div>
            </div>

            <div className='flex min-h-screen grow flex-col lg:hidden'>
                <div className='mb-6 flex items-center justify-center font-montserrat text-[72px] font-bold'>
                    Board.
                </div>
                <SignInForm />
                <div className='flex grow justify-center my-12 space-x-8'>
                    <Image src={github} className='h-[32px] w-[32px] cursor-pointer' alt='' />
                    <Image src={twitter} className='h-[32px] w-[32px] cursor-pointer' alt='' />
                    <Image src={linkedin} className='h-[32px] w-[32px] cursor-pointer' alt='' />
                    <Image src={discord} className='h-[32px] w-[32px] cursor-pointer' alt='' />
                </div>
            </div>
        </div>
    );
}
