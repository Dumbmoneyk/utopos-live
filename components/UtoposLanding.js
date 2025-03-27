export default function UtoposLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-4xl font-bold tracking-wide">UTOPOS</h1>
        <p className="text-sm text-gray-400">The Codex Hunt Begins</p>
      </header>

      <main className="p-6 space-y-12">
        <section className="text-center">
          <img src="/banner.png" alt="Utopos Banner" className="mx-auto w-full max-w-5xl rounded-2xl shadow-lg" />
          <h2 className="text-2xl mt-6 font-semibold">Are You a Seeker?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2">
            Discover hidden clues, decode fragments of the Codex, and earn your place in the future of Utopos.
          </p>
          <a href="#quiz" className="inline-block mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-800 rounded-xl text-lg font-medium">
            Take the Seeker Quiz
          </a>
        </section>

        <section className="bg-gray-800 rounded-2xl p-6">
          <h4 className="text-lg font-semibold mb-4">Codex Tier Progression</h4>
          <div className="flex space-x-6 overflow-x-auto">
            {[
              { tier: 'Seeker', description: 'Initiates who hear the signal.' },
              { tier: 'Decoder', description: 'Solve glyphs and decode fragments.' },
              { tier: 'Warden', description: 'Defenders of lore.' },
              { tier: 'Oracle', description: 'Chosen lore-keepers.' },
              { tier: 'Ascendant', description: 'Completed the Codex.' }
            ].map(({ tier, description }) => (
              <div key={tier} className="bg-black border border-purple-700 rounded-2xl p-4 min-w-[200px] text-center hover:shadow-xl transition">
                <div className="text-purple-400 font-bold text-xl mb-2">{tier}</div>
                <p className="text-gray-300 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="p-4 text-center text-gray-500 border-t border-gray-800">
        &copy; 2025 Utopos. All rights reserved.
      </footer>
    </div>
  );
}
