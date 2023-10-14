import Image from 'next/image';
import plus from '../../public/icons/plus.png';
import edit from '../../public/icons/edit.png';
import mailIcon from '../../public/icons/mail.png';
import phoneIcon from '../../public/icons/phone.png';
import instagramIcon from '../../public/icons/instagram.png';
import youtubeIcon from '../../public/icons/youtube.png';

import { useState } from 'react';

export default function ProfileCard() {
    const [profileAdded, setProfileAdded] = useState(false);
    const [profileFormPage, setProfileFormPage] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');

    const [userDetails, setUserDetails] = useState({});

    function openModal() {
        setName(userDetails.name);
        setEmail(userDetails.email);
        setPhone(userDetails.phone);
        setInstagram(userDetails.instagram);
        setYoutube(userDetails.youtube);
        setProfileFormPage(0);

        setIsModalOpen(true);
    }

    function gotoSecondPage() {
        const form = document.getElementById('basic-form');

        if (form.checkValidity()) {
            const regex = new RegExp(/^[6-9][0-9]{9}$/);

            if (regex.test(phone)) {
                setProfileFormPage(1);
            } else {
                const phoneTextBox = document.getElementById('phone');
                phoneTextBox.setCustomValidity('Please enter a valid phone number.');
            }
        }
    }

    function submitProfileForm() {
        setProfileAdded(true);
        setUserDetails({
            name,
            email,
            phone,
            instagram,
            youtube,
        });

        setIsModalOpen(false);
    }

    return (
        <div className='flex grow flex-col items-center justify-center space-y-2'>
            {!profileAdded ? (
                <>
                    <div
                        className='flex h-[76px] w-[76px] cursor-pointer items-center justify-center rounded-full bg-[#F2F2F2]'
                        onClick={openModal}
                    >
                        <Image src={plus} className='h-[51px] w-[51px] ' alt=''/>
                    </div>
                    <p className='text-[16px] font-semibold text-[#858585]'>Add Profile</p>
                </>
            ) : (
                <div className='flex w-full grow flex-col'>
                    <div className='flex items-center'>
                        <p className='flex grow text-[24px] font-semibold'>{userDetails.name}</p>
                        <Image src={edit} className='h-[20px] w-[20px] cursor-pointer' onClick={openModal} alt=''/>
                    </div>
                    <div className='my-6 grid grow grid-cols-2 items-center px-5 gap-x-10'>
                        <div className='flex items-center space-x-2'>
                            <div className='flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#E9F9EB]'>
                                <Image src={phoneIcon} alt=''/>
                            </div>
                            <p className='text-[14px] underline'>{userDetails.phone}</p>
                        </div>
                        <div className={`flex items-center space-x-2 ${userDetails.instagram ? '' : 'hidden'}`}>
                            <div className='flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#FFE9EC]'>
                                <Image src={instagramIcon} alt=''/>
                            </div>
                            <p className='text-[14px] underline'>{userDetails.instagram}</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#EBE6F9]'>
                                <Image src={mailIcon} alt=''/>
                            </div>
                            <p className='text-[14px] underline'>{userDetails.email}</p>
                        </div>
                        <div className={`flex items-center space-x-2 ${userDetails.youtube ? '' : 'hidden'}`}>
                            <div className='flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#FFE9E9]'>
                                <Image src={youtubeIcon} alt=''/>
                            </div>
                            <p className='text-[14px] underline'>{userDetails.youtube}</p>
                        </div>
                    </div>
                </div>
            )}

            <dialog id='profileDetailsModal' className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
                <div className='modal-box p-0'>
                    <p className='border-b-2 border-[#F2F2F2] px-5 py-3 text-[20px] font-semibold'>Add New Profile</p>
                    <div className='flex flex-col p-4'>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='flex flex-col'>
                                <p className='flex grow justify-center p-2 align-middle text-[16px] font-semibold'>
                                    Basic
                                </p>
                                <div
                                    className={`h-1 ${
                                        !profileFormPage ? 'bg-[#3F84F8]' : 'bg-[#D9D9D9]'
                                    } rounded-lg transition duration-500 ease-in-out`}
                                ></div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='flex grow justify-center p-2 align-middle text-[16px] font-semibold'>
                                    Contact
                                </p>
                                <div
                                    className={`h-1 ${
                                        profileFormPage ? 'bg-[#3F84F8]' : 'bg-[#D9D9D9]'
                                    } rounded-lg transition duration-500 ease-in-out`}
                                ></div>
                            </div>
                        </div>
                        <div>
                            {!profileFormPage ? (
                                <form
                                    className='flex flex-col space-y-6 p-6 pb-0'
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                    }}
                                    id='basic-form'
                                >
                                    <div className='flex flex-col'>
                                        <p className='mb-1 text-[16px]'>Enter Name*</p>
                                        <input
                                            type='text'
                                            required
                                            className='rounded-md border-2 p-2 text-[16px] outline-black invalid:outline-[#C9523C]'
                                            placeholder='Eg. John Doe'
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        ></input>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='mb-1 text-[16px]'>Enter Email*</p>
                                        <input
                                            type='email'
                                            required
                                            className='rounded-md border-2 p-2 text-[16px] outline-black invalid:outline-[#C9523C]'
                                            placeholder='Eg. John@xyz.com'
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        ></input>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='mb-1 text-[16px]'>Enter Phone*</p>
                                        <input
                                            type='tel'
                                            required
                                            className='rounded-md border-2 p-2 text-[16px] outline-black invalid:outline-[#C9523C]'
                                            placeholder='Eg.  9123456789'
                                            value={phone}
                                            onChange={(event) => {
                                                setPhone(event.target.value);
                                                const phoneTextBox = document.getElementById('phone');
                                                phoneTextBox.setCustomValidity('');
                                            }}
                                            id={'phone'}
                                        ></input>
                                    </div>
                                    <div className='flex flex-row-reverse'>
                                        <button
                                            className='btn rounded-xl bg-[#3E84F8] text-[14px] text-white'
                                            onClick={gotoSecondPage}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form
                                    className='flex flex-col space-y-6 p-6 pb-0'
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                    }}
                                >
                                    <div className='flex flex-col'>
                                        <div className='flex space-x-1'>
                                            <p className='mb-1 text-[16px]'>Instagram Link</p>
                                            <p className='mb-1 text-[16px] text-[#999CA0]'>(Optional)</p>
                                        </div>
                                        <input
                                            type='text'
                                            className='rounded-md border-2 p-2 text-[16px] outline-black invalid:outline-[#C9523C]'
                                            placeholder='Eg. www.instagram.com/username'
                                            value={instagram ? instagram : ''}
                                            onChange={(event) => setInstagram(event.target.value)}
                                        ></input>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex space-x-1'>
                                            <p className='mb-1 text-[16px]'>Youtube Link</p>
                                            <p className='mb-1 text-[16px] text-[#999CA0]'>(Optional)</p>
                                        </div>
                                        <input
                                            type='text'
                                            className='rounded-md border-2 p-2 text-[16px] outline-black invalid:outline-[#C9523C]'
                                            placeholder='Eg. www.youtube.com/@username'
                                            value={youtube ? youtube : ''}
                                            onChange={(event) => setYoutube(event.target.value)}
                                        ></input>
                                    </div>
                                    <div className='flex flex-row-reverse space-x-4 space-x-reverse'>
                                        <div>
                                            <button
                                                className='btn rounded-xl bg-[#3E84F8] text-[14px] text-white'
                                                onClick={submitProfileForm}
                                            >
                                                Done
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className='btn rounded-xl border-2 border-[#999CA0] bg-white text-[14px] text-black'
                                                onClick={() => setProfileFormPage(0)}
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    <button
                        className='btn btn-sm btn-circle btn-ghost absolute right-5 top-3 outline-none'
                        onClick={() => setIsModalOpen(false)}
                    >
                        ✕
                    </button>
                </div>
            </dialog>
        </div>
    );
}
