import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons';

interface IMenuItemsProps {
    title: string,
    address:string,
    Icon:  IconType,
}

export default function MenuItems({title, address, Icon}:IMenuItemsProps ) {
  return (
    <Link href={address}  className='hover:text-amber-500'>
      <Icon className='text-2xl sm:hidden'/>
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
