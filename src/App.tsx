import React from 'react';
import { Clock, Truck, CreditCard, Star, Shield, Phone, MapPin, Zap, Heart, Award } from 'lucide-react';

function App() {
  const handleOrderClick = () => {
    window.open('https://entrega.logzz.com.br/pay/memxlore8/qxkiz-1-unidadee', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5522992613485?text=Ola!%20Vim%20do%20a%C3%BAncio%20no%20google%2C%20tenho%20interesse%20no%20perfume%20Sauvage%20Dior%2025%20ml!', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        <div className="container mx-auto px-4 py-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                <Zap className="w-4 h-4 mr-2" />
                OFERTA LIMITADA
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Dior Sauvage
                </span>
                <br />
                <span className="text-white">Original</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                O "rei dos elogios" entre os perfumes masculinos. 
                <span className="text-amber-400 font-semibold"> Decant 25ml</span> com a mesma fórmula original.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-green-600/20 border border-green-500 px-4 py-2 rounded-lg">
                  <Truck className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-semibold">Frete GRÁTIS</span>
                </div>
                <div className="flex items-center bg-blue-600/20 border border-blue-500 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="font-semibold">Entrega 24h</span>
                </div>
                <div className="flex items-center bg-purple-600/20 border border-purple-500 px-4 py-2 rounded-lg">
                  <CreditCard className="w-5 h-5 mr-2 text-purple-400" />
                  <span className="font-semibold">Pague na entrega</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-1 rounded-2xl">
                <div className="bg-black rounded-xl p-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">PREÇO ESPECIAL</p>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-4xl lg:text-5xl font-bold text-amber-400">R$ 90</span>
                      <div className="text-left">
                        <p className="text-gray-400 line-through text-lg">R$ 900</p>
                        <p className="text-green-400 font-semibold">90% OFF</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-2">Decant 25ml • Fórmula Original</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleOrderClick}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                🔥 COMPRAR AGORA - ENTREGA 24H
              </button>

              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Falar com Suporte no WhatsApp
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                <img 
                  src="/SAUVAG.png" 
                  alt="Dior Sauvage Decant 25ml" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  ESTOQUE LIMITADO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            🔥 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Por que você vai amar</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Fragrância Icônica</h3>
              <p className="text-gray-300">O "rei dos elogios" entre os perfumes masculinos. Reconhecido mundialmente pela Dior.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Alto Desempenho</h3>
              <p className="text-gray-300">Fixação e projeção de alto nível. Mesma fórmula do frasco original, apenas fracionada.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Versátil</h3>
              <p className="text-gray-300">Ideal para uso diário ou ocasiões especiais. Versátil, elegante e marcante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Decant Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                O que é um <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Decant?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Um decant é o perfume original fracionado em um frasco menor (vidro com borrifador). 
                Você leva o mesmo Sauvage que custa quase R$ 900 no frasco grande, mas:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold">💰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-400 mb-1">Economiza</h4>
                    <p className="text-gray-300">Experimente sem compromisso por apenas R$ 90.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold">🎒</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-400 mb-1">Portátil</h4>
                    <p className="text-gray-300">Leve para onde quiser – cabe no bolso ou nécessaire.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold">🧪</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-400 mb-1">Teste na Pele</h4>
                    <p className="text-gray-300">Avalie evolução e fixação antes de investir no frasco completo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/ws.png" 
                  alt="Decant Sauvage" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <img 
                  src="/ww.png" 
                  alt="Dior Sauvage Original" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Como comprar <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">AGORA</span>
            <br />
            <span className="text-lg text-gray-400 font-normal">(super simples!)</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">Clique e Agende</h3>
                <p className="text-gray-300">Clique no botão e preencha seu endereço no link de agendamento.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">Agendamos a Rota</h3>
                <p className="text-gray-300">Nós organizamos a entrega e agendamos o motoboy para sua região.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">Receba e Pague</h3>
                <p className="text-gray-300">Motoboy entrega em até 24h. Você paga só na entrega!</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-green-400">100% Sem Risco!</h3>
              </div>
              <p className="text-center text-gray-300">
                Você paga somente na entrega (dinheiro ou Pix direto ao motoboy). 
                <br />
                <span className="text-green-400 font-semibold">Sem compromisso, sem risco!</span>
              </p>
            </div>

            <div className="text-center space-y-4">
              <button 
                onClick={handleOrderClick}
                className="w-full max-w-md mx-auto block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                🚀 AGENDAR ENTREGA AGORA
              </button>
              
              <p className="text-gray-400 text-sm">
                Clique acima para acessar o link de agendamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
            Áreas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Entrega</span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold text-amber-400">Antes de mais nada, entregamos APENAS nas seguintes cidades:</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-300">
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Arujá</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Barueri</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Carapicuíba</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Cotia</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Diadema</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Embu das Artes</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Ferraz de Vasconcelos</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Guarulhos</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Itapevi</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Itaquaquecetuba</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Jandira</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Mauá</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Mogi das Cruzes</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Osasco</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Poá</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Santo André</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">São Bernardo do Campo</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">São Caetano do Sul</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">São Paulo</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Suzano</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Taboão da Serra</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Caieiras</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Cajamar</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Campo Limpo Paulista</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Francisco Morato</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Franco da Rocha</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Jundiaí</div>
              <div className="bg-gray-800/50 p-2 rounded-lg text-center">Mairiporã</div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Se sua cidade não está na lista acima, infelizmente não realizamos entregas na sua região.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/50 to-orange-900/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ⚡ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Garanta já o seu!</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Estoque <span className="text-red-400 font-bold">LIMITADO</span> para essa remessa. 
              <br />
              Clique no link, agende e sinta o poder do Dior Sauvage ainda amanhã. 💥
            </p>

            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/50 mb-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-amber-400">R$ 90</div>
                  <div className="text-gray-400">Preço Especial</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">24h</div>
                  <div className="text-gray-400">Entrega Rápida</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">0%</div>
                  <div className="text-gray-400">Frete Grátis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">100%</div>
                  <div className="text-gray-400">Sem Risco</div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleOrderClick}
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse"
            >
              🔥 ÚLTIMAS UNIDADES - COMPRAR AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400">
              <p>© 2024 - Dior Sauvage Original Decant</p>
              <p className="text-sm">Produto original fracionado • Entrega rápida e segura</p>
            </div>
            
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Suporte WhatsApp
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;