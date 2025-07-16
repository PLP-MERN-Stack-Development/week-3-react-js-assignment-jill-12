import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const PAGE_SIZE = 10;

export default function ApiDemo() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(r => r.json())
      .then(data => {
        // Simulate search
        let filtered = data;
        if (query) {
          filtered = data.filter(post =>
            post.title.toLowerCase().includes(query.toLowerCase())
          );
        }
        setTotal(filtered.length);
        setResults(filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE));
      })
      .catch(e => setError("Failed to fetch API data"))
      .finally(() => setLoading(false));
  }, [query, page]);

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">API Integration Demo</h2>
      <input
        className="border p-2 rounded w-full mb-4"
        placeholder="Search posts by title..."
        value={query}
        onChange={e => { setQuery(e.target.value); setPage(1); }}
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <ul className="divide-y">
            {results.map(post => (
              <li key={post.id} className="py-2">
                <b>{post.title}</b>
                <div className="text-sm text-gray-500">{post.body}</div>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-4 justify-end">
            <Button
              variant="secondary"
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
            >
              Prev
            </Button>
            <span>
              Page {page} / {Math.ceil(total / PAGE_SIZE)}
            </span>
            <Button
              variant="secondary"
              disabled={page * PAGE_SIZE >= total}
              onClick={() => setPage(p => p + 1)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </Card>
  );
}