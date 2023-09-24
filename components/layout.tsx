import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div  className="max-w-screen-xl mx-auto py-5 px-5">{children}</div>
  )
}

export default Layout