import Card from "../components/Card";

export default function Home() {
  return (
    <Card>
      <h1 className="text-3xl font-bold mb-4">React + Tailwind Demo App</h1>
      <p className="mb-2">This app demonstrates:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Component architecture and reusability</li>
        <li>State management using hooks</li>
        <li>Theme switching with context</li>
        <li>API integration with loading, error & pagination</li>
        <li>Responsive design with Tailwind CSS</li>
      </ul>
    </Card>
  );
}