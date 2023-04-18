import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFile, faUser } from '@fortawesome/free-solid-svg-icons';

type ContentType = { type: string; name: string; children?: ContentType[] };

interface MacWindowProps {
  title: string;
  contents: ContentType[];
  onBackClick: () => void;
  onFolderClick: (folder: any) => void;
  onFileClick: (folder: any) => void;
}

const MacWindow: React.FC<MacWindowProps> = ({ contents = [], onFileClick, onBackClick}) => {
  const [openFolder, setOpenFolder] = useState<ContentType | null>(null);
  const [title, setTitle] = useState<string>('Home');

  const handleFolderClick = (folder: ContentType) => {
    if (folder.type === 'folder') {
      if (folder.children) {
        setOpenFolder(folder);
        setTitle(folder.name);
    }}
  };

  const handleBackClick = () => {
    if (openFolder?.children) {
      setOpenFolder(null);
      setTitle('Home');
    }
  };

  const renderFolderContents = (folder: ContentType) => {
    const children = folder.children || [];

    return (
      <>
        {children.map((content: ContentType, index: number) => (
          <div className={'flexbox items-center mb-2 p-2 rounded text-center'} key={index} onClick={() => onFileClick(content)}>
            <div className={'max-w[60] max-h[60] w-16 h-16 mr-2 flex justify-center items-center'}>
            {content.type === 'folder' ? (
                <div className='text-blue-200 text-7xl'>
                  <FontAwesomeIcon icon={faFolder} />
                </div>
              ) : content.type === 'file' ? (
                <div className='text-blue-200 text-7xl'>
                  <FontAwesomeIcon icon={faFile} />
                </div>
              ) : content.type === 'user' ? (
                <div className='text-blue-200 text-7xl'>
                  <FontAwesomeIcon icon={faUser} />
                </div>
              ) : null}
            </div>
            <div className={'text-sm mt-2 font-normal'}>{content.name}</div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={"relative w-[640px] h-[480px] bg-gray-100 border-gray-100 border-solid border rounded-md text-base left-72"}>
      <div className={"absolute top-0 left-0 w-full h-7 flex justify-between items-center bg-gray-200 px-2 py-0 rounded-md"}>  

        <div className={"text-sm font-bold m-auto"}>{title}</div>
        <div className={"flex justify-end items-center"}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-2" onClick={handleBackClick}>
            <button className="p-1 -ml-1 bg-gray-100 rounded-md">
              <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className={"w-3 h-3 ml-1 cursor-pointer rounded-full bg-red-500"} />
          <div className={"w-3 h-3 ml-1 cursor-pointer rounded-full bg-yellow-500"} />
          <div className={"w-3 h-3 ml-1 cursor-pointer rounded-full bg-green-500"} />
        </div>
      </div>
      <div className={'pt-7 pb-2 pr-2 pl-2 h-full overflow-y-auto mt-4 ml-1'}>
        <div className={'flex flex-wrap justify-items-start items-start'}>
          {openFolder ? (
            renderFolderContents(openFolder)
          ) : (
            contents.length > 0 &&
            contents.map((content: ContentType, index: number) => (
              <div
                className={'flexbox items-center mb-2 p-2 rounded text-center'}
                key={index}
                onClick={() => {
                  if (content.type === 'file') onFileClick(content)
                  else if (content.type === 'folder') handleFolderClick(content)}
                }>
                  
            <div className={'max-w[60] max-h[60] w-16 h-16 mr-2 flex justify-center items-center'}>
              {content.type === 'folder' ? (
                <div className='text-blue-200 text-7xl'>
                  <FontAwesomeIcon icon={faFolder} />
                </div>
              ) : content.type === 'file' ? (
                <div className='text-blue-200 text-7xl'>
                  <FontAwesomeIcon icon={faFile} />
                </div>
              ) : content.type === 'user' ? (
                <div className='text-blue-200 text-7xl'>
                  <FontAwesomeIcon icon={faUser} />
                </div>
              ) : null}
            </div>
                <div className={'text-sm mt-2 font-normal'}>{content.name}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );  
};

export default MacWindow;
