import Image from 'next/image';

export default function DashboardCard(props) {
    const { title, value, change, icon, icon_bg } = props;
    const positive = change >= 0;

    return (
        <div className='h-[120px] rounded-2xl border-[2px] border-[#E0E0E0] p-4 shadow-lg'>
            <div className={`mb-2 flex h-[32px] w-[32px] items-center justify-center rounded-full ${icon_bg}`}>
                <Image src={icon} />
            </div>
            <p className='font-lato text-[13px]'>{title}</p>
            <div className='flex'>
                <p className='grow font-sans text-[21px] font-bold'>{value}</p>
                <div
                    className={`flex w-[47px] items-center justify-center rounded-[34px] ${
                        positive ? 'bg-[#E9F9EB] text-[#3CC952]' : 'bg-[#F9EBE9] text-[#C9523C]'
                    }  text-[10px] font-semibold`}
                >
                    {change}%
                </div>
            </div>
        </div>
    );
}
