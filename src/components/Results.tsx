import { IMovie } from '@/types/movie'
import React from 'react'

interface ResultsProps {
    results: IMovie[]
}

export default function Results({results}: ResultsProps) {
  return (
    <div>
        {results.map(result => (
            <div key={result.id}>
                <h2>{result.original_title}</h2>
            </div>
        ))}
    </div>
  )
}
