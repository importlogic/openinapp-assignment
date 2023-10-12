import Image from 'next/image';
import github from '../public/icons/github.png';
import twitter from '../public/icons/twitter.png';
import linkedin from '../public/icons/linkedin.png';
import discord from '../public/icons/discord.png';
import google from '../public/icons/google.png';
import apple from '../public/icons/apple.png';

export default function Login() {
    return (
        <div className='select-none'>
            <div
                className='flex min-h-screen p-10'
                style={{ background: 'linear-gradient(98deg, #4285F4 40%, #F8FAFF calc(40% + 1px));' }}
            >
                <div className='flex w-[35%] flex-col'>
                    <div className='font-poppins flex grow text-[24px] font-bold text-white'>LOGO</div>
                    <div className='font-montserrat flex grow items-center justify-center text-[72px] font-bold text-white'>
                        Board.
                    </div>
                    <div className='flex grow items-end justify-center space-x-8'>
                        <Image src={github} className='h-[32px] w-[32px] cursor-pointer invert' />
                        <Image src={twitter} className='h-[32px] w-[32px] cursor-pointer invert' />
                        <Image src={linkedin} className='h-[32px] w-[32px] cursor-pointer invert' />
                        <Image src={discord} className='h-[32px] w-[32px] cursor-pointer invert' />
                    </div>
                </div>
                <div className='flex grow'></div>
                <div className='flex w-[55%] px-48 py-20'>
                    <div className='flex grow flex-col'>
                        <p className='font-montserrat text-[32px] font-bold'>Sign In</p>
                        <p className='font-lato text-[16px]'>Sign in to your account</p>
                        <div className='mt-6 flex space-x-5'>
                            <div className='font-montserat flex h-[33px] grow cursor-pointer items-center justify-center space-x-5 rounded-lg bg-white text-[12px] text-[#858585]'>
                                <Image src={google} className='mb-0.5' />
                                <p>Sign in with Google</p>
                            </div>
                            <div className='font-montserat flex h-[33px] grow cursor-pointer items-center justify-center space-x-5 rounded-lg bg-white text-[12px] text-[#858585]'>
                                <Image src={apple} className='mb-1' />
                                <p>Sign in with Apple</p>
                            </div>
                        </div>
                        <form className='mt-6 items-center space-y-4 rounded-lg bg-white p-4'>
                            <p className='font-lato text-[16px]'>Email Address</p>
                            <input
                                type='text'
                                placeholder='Email'
                                className='font-lato mt-2 h-[48px] w-full rounded-md bg-[#F5F5F5] px-4 py-2 text-[16px] text-black'
                                defaultValue='johndoe@gmail.com'
                            />
                            <p className='font-lato text-[16px]'>Password</p>
                            <input
                                type='password'
                                placeholder='Password'
                                className='font-lato mt-2 h-[48px] w-full rounded-md bg-[#F5F5F5] px-4 py-2 text-[16px] text-black'
                                defaultValue='123456789'
                            />
                            <p className='font-lato cursor-pointer text-[16px] text-[#346BD4]'>Forgot Password?</p>

                            <button className='font-montserrat h-[44px] w-full rounded-lg bg-[#4285F4] text-[16px] font-bold text-white'>
                                Sign In
                            </button>
                        </form>

                        <div className='flex font-lato text-[16px] justify-center space-x-1'>
                            <p className='text-[#858585]'>Don't have an account?</p>
                            <p className='text-[#346BD4] cursor-pointer'>Register here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
