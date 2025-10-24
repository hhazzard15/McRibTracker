import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-blue-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
            ULTIMATE MCRIB TRACKER
          </h1>
        </header>

        {/* Hero Image */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 border-4 border-yellow-400 p-4 rounded-lg">
            <Image
              src="/mcrib-main.jpg"
              alt="McRib Pixel Art"
              width={400}
              height={300}
              className="pixelated"
              priority
            />
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-red-600 border-4 border-yellow-400 p-6 rounded-lg mb-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 animate-pulse">
            THE MCRIB IS CURRENTLY... [HIBERNATING]
          </h2>
        </div>

        {/* The Rib-Board Section */}
        <section className="mb-8">
          <h3 className="text-3xl font-bold text-yellow-400 text-center mb-6">
            THE RIB-BOARD
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* National Availability */}
            <div className="stat-card">
              <h4 className="text-yellow-400 text-sm mb-2">NATIONAL AVAILABILITY</h4>
              <p className="text-2xl font-bold text-white">1.2%</p>
            </div>

            {/* Price Watch High */}
            <div className="stat-card">
              <h4 className="text-yellow-400 text-sm mb-2">HIGHEST PRICE REPORTED</h4>
              <p className="text-lg font-bold text-white">$8.19</p>
              <p className="text-xs text-gray-300">(Boise, ID)</p>
            </div>

            {/* Price Watch Low */}
            <div className="stat-card">
              <h4 className="text-yellow-400 text-sm mb-2">LOWEST PRICE REPORTED</h4>
              <p className="text-lg font-bold text-white">$5.99</p>
              <p className="text-xs text-gray-300">(Mobile, AL)</p>
            </div>

            {/* Last Sighting */}
            <div className="stat-card">
              <h4 className="text-yellow-400 text-sm mb-2">LAST SIGHTING</h4>
              <p className="text-lg font-bold text-white">18 Hours Ago</p>
              <p className="text-xs text-gray-300">Dallas, TX</p>
            </div>

            {/* Longest Journey */}
            <div className="stat-card">
              <h4 className="text-yellow-400 text-sm mb-2">LONGEST CONFIRMED JOURNEY</h4>
              <p className="text-2xl font-bold text-white">342 Miles</p>
            </div>
          </div>
        </section>

        {/* Report Sighting Button */}
        <div className="text-center">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 rounded-lg text-xl border-4 border-black transform hover:scale-105 transition-transform duration-200 shadow-lg">
            🍖 REPORT A SIGHTING 🍖
          </button>
        </div>
      </div>
    </div>
  );
}
