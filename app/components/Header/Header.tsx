export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-orange-400 text-white flex items-center justify-center font-bold">
          Q
        </div>
        <span className="font-semibold text-lg">Qrio</span>
      </div>
    </header>
  );
}
