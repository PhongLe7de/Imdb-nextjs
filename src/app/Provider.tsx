'use client'

import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({children}: ProviderProps) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700
        min-h-screen select-none transition-colors duration-300
        '>
            {children}
        </div>
    </ThemeProvider>
  )
}
