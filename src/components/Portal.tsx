import ConfirmationModal from '../components/ConfirmationModal';
import React, { useEffect, useState } from 'react';

interface PortalProps {
    portalOpen: boolean;
    setConfirmationPortalOpen: (state: boolean) => void;
    showContent: any;
}

const Portal: React.FC<PortalProps> = ({ portalOpen, setConfirmationPortalOpen, showContent }) => {
    
    return (
        <div className="portal">
    
            { portalOpen && (
            <ConfirmationModal
                isOpen={portalOpen}
                handleClose={ () => setConfirmationPortalOpen(!portalOpen)}
            >
                <div className="flex flex-col justify-between h-full w-full">
                <div className="absolute rounded top-0 left-0 w-full h-7 flex justify-between items-center px-3 bg-gray-300">
                    <div className="flex items-center justify-end ml-auto space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setConfirmationPortalOpen(!portalOpen)}></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer" onClick={() => setConfirmationPortalOpen(!portalOpen)}></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" onClick={() => setConfirmationPortalOpen(!portalOpen)}></div>
                    </div>
                </div>
                <div className="flex flex-col mt-auto items-center p-8">
                    {showContent}
                </div>

                </div>
            </ConfirmationModal>
            )}
        </div>
    );
}

export default Portal;