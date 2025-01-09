import { IMovie } from '@/types/movie'
import React from 'react'
import Card from './Card'

interface ResultsProps {
    results: IMovie[]
}

export default function Results({results}: ResultsProps) {
  return (
    <div className='sm:grid sm:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 '>
        {results.map(result => (
          <Card key={result.id} result={result}/>
        ))}
    </div>
  )
}
