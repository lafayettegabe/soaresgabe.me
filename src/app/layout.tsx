import './globals.css'

export const metadata = {
  title: 'Argo Studios',
  description: 'Argo Studios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
