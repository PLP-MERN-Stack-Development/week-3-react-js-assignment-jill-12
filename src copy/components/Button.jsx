const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

export default function Button({ variant = "primary", className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded transition-colors ${variants[variant]} ${className}`}
    />
  );
}