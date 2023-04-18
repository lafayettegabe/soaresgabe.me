import { useState } from 'react';
import MacWindow from './MacWindow';
import Gabriel from './files/Gabriel';
import Lucas from './files/Lucas';
import Default from './files/Default';

type FileType = {
    type: "file";
    name: string;
    content: any;
};
  
type FolderType = {
    type: "folder";
    name: string;
    children: ContentType[];
};

type UserType = {
    type: "user";
    name: string;
    content: any;
};
  
type ContentType = FileType | FolderType | UserType ;
  
const home_content: FolderType = {
    type: "folder",
    name: "Home",
    children: [
      {
        type: "folder",
        name: "Team",
        children: [
          { type: "user", name: "Gabriel", content: <Gabriel />},
          { type: "user", name: "Lucas", content: <Lucas />},
        ],
      },
      {
        type: "folder",
        name: "Projects",
        children: [
          { type: "file", name: "Chess.txt", content: <Default /> },
          { type: "file", name: "Shogi.txt", content: <Default /> },
          { type: "file", name: "Gacha.txt", content: <Default /> },
        ],
      },
      { type: "file", name: "About.txt", content: <Default /> },
      { type: "file", name: "Contact.txt", content: <Default /> },
    ],
};

interface WindowProps {
    fileClick: (folder: any) => void;
}

const Window: React.FC<WindowProps> = ({ fileClick }) => {
    const [currentFolder, setCurrentFolder] = useState<FolderType>(home_content);

    const handleFolderClick = (folder: FolderType) => {
        if (folder.type === "folder") {
            setCurrentFolder(folder);
        }
    };  

    const handleBackClick = () => {
        if (currentFolder !== home_content) {
            const parentFolder = home_content.children.find(
                (folder) => folder.type === "folder" && folder.children.includes(currentFolder)
            ) as FolderType;
            setCurrentFolder(parentFolder);
        }
        };

    return (
        <MacWindow
            title={currentFolder.name}
            contents={currentFolder.children}
            onBackClick={handleBackClick}
            onFolderClick={handleFolderClick}
            onFileClick={fileClick}
        />
    );
}

export default Window;