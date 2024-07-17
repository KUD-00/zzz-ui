import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface PostPreviewProps {
    imgUrl: string;
    avatarUrl: string;
    title: string;
    userName: string;
    content: string;
}

const PostPreview: React.FC<PostPreviewProps> = ({ imgUrl, avatarUrl, title, userName, content }) => {
    return (
        <div className="relative max-w-xs rounded-t-2xl rounded-l-2xl overflow-hidden shadow-lg bg-gray-950 border-gray-950 hover:border-yellow-300 border-4">
            <div className="relative">
                <img className="w-full max-h-96 object-cover" src={imgUrl} alt="Card image" />
                <div className="absolute top-0 left-0 p-4 w-full flex items-center justify-between">
                    <div className='flex gap-2 justify-center'>
                        <VisibilityIcon className='text-white' />
                        <span className="text-white font-black">6690</span>
                    </div>
                </div>
                <div className="relative w-full">
                    <div className="absolute bottom-0 left-1/7 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 bg-white rounded-full overflow-hidden border-8 border-gray-950">
                        <img src={avatarUrl} className="w-full h-full object-cover" alt="Avatar" />
                    </div>
                </div>
            </div>
            <div className="mt-2 pl-20 text-gray-500 text-md font-black" style={{ marginLeft: 'calc(14.285714% - 40px)' }}>
                {userName}
            </div>
            <div className="m-4 mt-4">
                <div className="text-gray-400 text-lg mb-2 font-black">{title}</div>
                <p className="text-gray-400 text-base font-black">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default PostPreview;
