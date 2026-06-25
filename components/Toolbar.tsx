export default function Toolbar() {
  return (
    <div className="flex flex-wrap gap-3 mt-8">

      <button className="bg-blue-600 px-4 py-2 rounded-lg">
        Validate
      </button>

      <button className="bg-green-600 px-4 py-2 rounded-lg">
        Format
      </button>

      <button className="bg-orange-600 px-4 py-2 rounded-lg">
        Minify
      </button>

      <button className="bg-purple-600 px-4 py-2 rounded-lg">
        Copy
      </button>

      <button className="bg-pink-600 px-4 py-2 rounded-lg">
        Download
      </button>

    </div>
  );
}