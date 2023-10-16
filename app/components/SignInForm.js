import Image from 'next/image';

import google from '../../public/icons/google.png';
import apple from '../../public/icons/apple.png';

import { signIn } from 'next-auth/react';

export default function SignInForm() {
    function signInGoogle() {
        signIn('google', {callback: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard}`});
    }

    return (
        <div className='flex grow justify-center lg:items-center'>
            <div className='w-[350px] md:w-[386px] lg:w-[422px]'>
                <p className='font-montserrat text-[32px] font-bold'>Sign In</p>
                <p className='font-lato text-[16px]'>Sign in to your account</p>
                <div className='mt-6 flex flex-col space-y-3 lg:flex-row lg:space-x-5 lg:space-y-0'>
                    <div
                        className='btn font-montserat flex grow cursor-pointer items-center justify-center space-x-5 rounded-lg bg-white text-[12px] text-[#858585]'
                        onClick={signInGoogle}
                    >
                        <Image src={google} className='mb-0.5' alt='' />
                        <p>Sign in with Google</p>
                    </div>
                    <div className='btn font-montserat flex grow cursor-pointer items-center justify-center space-x-5 rounded-lg bg-white text-[12px] text-[#858585]'>
                        <Image src={apple} className='mb-1' alt='' />
                        <p>Sign in with Apple</p>
                    </div>
                </div>
                <form className='mt-6 items-center space-y-4 rounded-lg bg-white p-4'>
                    <p className='font-lato text-[16px]'>Email Address</p>
                    <input
                        type='text'
                        placeholder='Email'
                        className='mt-2 h-[48px] w-full rounded-md bg-[#F5F5F5] px-4 py-2 font-lato text-[16px] text-black outline-black'
                        defaultValue='johndoe@gmail.com'
                    />
                    <p className='font-lato text-[16px]'>Password</p>
                    <input
                        type='password'
                        placeholder='Password'
                        className='mt-2 h-[48px] w-full rounded-md bg-[#F5F5F5] px-4 py-2 font-lato text-[16px] text-black outline-black'
                        defaultValue='123456789'
                    />
                    <p className='cursor-pointer font-lato text-[16px] text-[#346BD4]'>Forgot Password?</p>

                    <button
                        className='btn h-[44px] w-full rounded-lg bg-[#4285F4] font-montserrat text-[16px] font-bold text-white hover:bg-[#4285F4]'
                        onClick={(event) => {
                            event.preventDefault();
                        }}
                    >
                        Sign In
                    </button>
                </form>

                <div className='flex justify-center space-x-1 font-lato text-[16px]'>
                    <p className='text-[#858585]'>Don&apos;t have an account?</p>
                    <p className='cursor-pointer text-[#346BD4]'>Register here</p>
                </div>
            </div>
        </div>
    );
}
