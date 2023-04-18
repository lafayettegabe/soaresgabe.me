"use client";

import { useState } from 'react';
import Portal from '@/components/Portal';
import Window from '@/components/Window';
import Logo from '@/components/Logo';

export default function Home() {
  const [portalState, setPortalState] = useState<boolean>(false);
  const [portalContent, setPortalContent] = useState<any>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="page">

        <Portal portalOpen={portalState} setConfirmationPortalOpen={setPortalState} showContent={portalContent} />
        <Logo />
        <Window fileClick={(content : any) => { setPortalContent(content.content); setPortalState(true); }} /> 

      </div>
    </main>
  );
}