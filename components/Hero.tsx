export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://picsum.photos/1920/1080" 
      alt="Modern office workspace with collaborative team" 
      className="w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
  </div>

  {/* Centered Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
      <span className="text-sm font-medium text-white">Trusted by 50,000+ teams worldwide</span>
    </div>

    {/* Main Headline */}
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
      AI-Powered Workflow
      <br />
      Automation for Modern Teams
    </h1>

    {/* Subheadline */}
    <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
      FlowSync streamlines your operations with intelligent automation, real-time collaboration, 
      and seamless integration across 200+ business tools. Work smarter, not harder.
    </p>

    {/* Key Value Props */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Automation</h3>
        <p className="text-slate-300 text-sm">Intelligent workflows that adapt and optimize automatically</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Real-Time Collaboration</h3>
        <p className="text-slate-300 text-sm">Keep your entire team synchronized and productive</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">200+ Integrations</h3>
        <p className="text-slate-300 text-sm">Connect all your favorite tools in one unified platform</p>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 w-full sm:w-auto">
        Start Free Trial
      </button>
      <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all duration-200 w-full sm:w-auto">
        Watch Demo
      </button>
    </div>

    {/* Trust Indicators */}
    <div className="mt-16 pt-8 border-t border-white/20">
      <p className="text-slate-400 text-sm mb-6">Trusted by industry leaders</p>
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
        <div className="text-white font-semibold text-lg">MICROSOFT</div>
        <div className="text-white font-semibold text-lg">SALESFORCE</div>
        <div className="text-white font-semibold text-lg">SHOPIFY</div>
        <div className="text-white font-semibold text-lg">SLACK</div>
        <div className="text-white font-semibold text-lg">DROPBOX</div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
    <div className="flex flex-col items-center gap-2 animate-bounce">
      <span className="text-slate-400 text-sm">Scroll to explore</span>
      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</section>
  );
}