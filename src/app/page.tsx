import Results from "@/components/Results";
import { IMovie } from "@/types/movie";

const API_KEY = process.env.TMDB_API_KEY;

interface IHomeProps {
  searchParams: Record<string, string | undefined>;
}

async function Home({ searchParams }: IHomeProps) {
  const genre = searchParams?.genre || "fetchTrending";
  try {
    const endpoint =
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week";

    const res = await fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    const results = data.results as IMovie[]
    
    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    return <div>Failed to load movies. Please try again later.</div>;
  }
}

export default Home;
