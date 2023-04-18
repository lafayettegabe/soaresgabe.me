import React, { useEffect, useState } from 'react';
import ReactPortal from './ReactPortal';

interface ConfirmationModalProps {
  children: any;
  isOpen: boolean;
  handleClose: () => void;
}

const ConfirmationModal = ({
  children,
  isOpen,
  handleClose, 
} : ConfirmationModalProps) => {

  // close modal on escape key press
  useEffect(() => {
    const closeOnEscapeKeyDown = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return () => document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
}, [handleClose]);

  // close modal on click outside of modal
  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      const modal = document.getElementById('portal');
      if (modal && !modal.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.body.addEventListener('click', closeOnOutsideClick);
    return () => document.body.removeEventListener('click', closeOnOutsideClick);
  }, [handleClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-neutral-800 opacity-50" />
        <div id="portal" className="fixed translate-y-14 rounded flex flex-col box-border min-w-fit p-5 bg-gray-100 inset-y-20 inset-x-40 z-50">
          <div className="box-border">{children}</div>
        </div>
      </>
    </ReactPortal>
  );
};

export default ConfirmationModal;