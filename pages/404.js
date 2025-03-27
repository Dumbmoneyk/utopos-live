export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center p-10">
      <h1 className="text-4xl font-bold mb-4">You've Wandered from the Codex...</h1>
      <p className="text-gray-400 mb-6">The path is hidden, but not lost. Seek the signal to return.</p>
      <a href="/" className="text-purple-500 hover:underline">Return to Utopos</a>
    </div>
  );
}
