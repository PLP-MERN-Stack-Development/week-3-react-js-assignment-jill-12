export default function Footer() {
  return (
    <footer className="mt-auto py-4 bg-gray-200 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
      <div>
        &copy; {new Date().getFullYear()} React Demo | 
        <a href="https://github.com/" target="_blank" className="ml-2 underline">GitHub</a>
      </div>
    </footer>
  );
}