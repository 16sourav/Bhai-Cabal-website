import React from 'react';
import { Twitter, MessageCircle, Users, Heart, Globe, Sparkles, Zap, Party, Crown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500">
      <nav className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-amber-400 hover:scale-110 transition-transform cursor-pointer transform hover:rotate-3">
                🔥 BHAI CABAL 🔥
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com/BhaiNeBola"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-400 hover:text-white hover:scale-125 transition-all"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://t.me/bhaibhaibhaibhaibhaibhaibhaibhai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-400 hover:text-white hover:scale-125 transition-all"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-6xl md:text-7xl font-black text-white mb-6 animate-bounce-slow">
                  WELCOME TO THE
                  <br />
                  <span className="text-black bg-amber-400 px-4 py-2 inline-block transform -rotate-2 my-4">
                    BHAI-VERSE
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-white font-bold mb-6 animate-pulse">
                  WHERE EVERY BHAI IS A GIGABHAI! 🚀
                </p>
                <p className="text-xl text-white/90 mb-12 font-semibold">
                  NO CAP, JUST VIBES - WE'RE ALL GONNA MAKE IT BHAIS! 💪
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://t.me/bhaibhaibhaibhaibhaibhaibhaibhai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-black text-amber-400 text-xl font-black rounded-xl hover:bg-amber-400 hover:text-black transition-all hover:scale-110 flex items-center gap-2 justify-center transform hover:-rotate-2 border-4 border-amber-400 hover:border-black"
                  >
                    <MessageCircle className="group-hover:rotate-12 transition-transform" size={24} />
                    ENTER THE BHAI-VERSE
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96 hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://scontent.fblr1-10.fna.fbcdn.net/v/t39.30808-6/464100381_9202235559805358_3538834375892432116_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=dI3xoHGYGjsQ7kNvgFbhSVg&_nc_zt=23&_nc_ht=scontent.fblr1-10.fna&_nc_gid=Ae8IJysxkOgt6Cq68JvzGL2&oh=00_AYC2hQ_K37ojqqVqYjefDuIXsZdDyErmLOIWENL4h9tEfg&oe=678886B8"
                    alt="Bhai Cabal Icon"
                    className="rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] object-cover animate-float border-4 border-black"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-amber-400 text-black px-4 py-2 rounded-lg font-black transform rotate-6 border-4 border-black">
                    WAGMI 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-black/90 py-24 skew-y-3 -mt-12 border-y-8 border-amber-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -skew-y-3">
            <h2 className="text-4xl font-black text-center text-amber-400 mb-4 uppercase">
              THE BHAI CODE 📜
            </h2>
            <p className="text-center text-white text-2xl font-bold mb-16">
              CERTIFIED BHAI MOMENTS ONLY 💯
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-8 rounded-2xl transform hover:scale-105 transition-transform border-4 border-black hover:-rotate-3">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-amber-400" size={40} />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 text-center uppercase">
                  BHAI FOR ALL
                  <br />
                  ALL FOR BHAI
                </h3>
                <p className="text-black font-bold text-center text-lg">
                  ONE BHAI, TWO BHAI, THREE BHAI, FLOOR! 🎯
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-8 rounded-2xl transform hover:scale-105 transition-transform border-4 border-black hover:rotate-3">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-amber-400" size={40} />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 text-center uppercase">
                  NO BHAI-ASES
                  <br />
                  JUST VIBES
                </h3>
                <p className="text-black font-bold text-center text-lg">
                  PURE SUPPORT, ZERO SHILLS - TRUST THE PROCESS 🤝
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-8 rounded-2xl transform hover:scale-105 transition-transform border-4 border-black hover:-rotate-3">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="text-amber-400" size={40} />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 text-center uppercase">
                  WORLDWIDE
                  <br />
                  BHAI-NDNESS
                </h3>
                <p className="text-black font-bold text-center text-lg">
                  FROM MUMBHAI TO THE MOON 🌍
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-black rounded-3xl p-12 hover:scale-[1.02] transition-transform border-8 border-amber-400">
              <Sparkles className="mx-auto mb-6 animate-spin-slow text-amber-400" size={64} />
              <h2 className="text-4xl font-black text-amber-400 mb-6 uppercase">
                READY TO BE A BHAI-LLIONAIRE? 🤑
              </h2>
              <p className="text-2xl mb-8 max-w-2xl mx-auto text-white font-bold">
                JOIN THE MOST BASED WEB3 COMMUNITY THIS SIDE OF THE BHAI-VERSE!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://twitter.com/BhaiNeBola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-amber-400 text-black rounded-xl hover:bg-white transition-all hover:scale-110 flex items-center gap-2 justify-center font-black text-xl border-4 border-amber-400 transform hover:rotate-3"
                >
                  <Twitter className="group-hover:rotate-12 transition-transform" size={24} />
                  BHAI-RAL TWEETS
                </a>
                <a
                  href="https://t.me/bhaibhaibhaibhaibhaibhaibhaibhai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-amber-400 text-black rounded-xl hover:bg-white transition-all hover:scale-110 flex items-center gap-2 justify-center font-black text-xl border-4 border-amber-400 transform hover:-rotate-3"
                >
                  <MessageCircle className="group-hover:rotate-12 transition-transform" size={24} />
                  JOIN THE BHAI-VE
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-amber-400 font-bold text-lg">
            <p>© 2024 BHAI CABAL • BHAI-ING THE FUTURE OF WEB3 TOGETHER 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;