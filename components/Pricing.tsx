export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
      Simple, Transparent Pricing
    </h2>
    <p className="text-lg text-gray-600 text-center mb-12">
      Everything you need to streamline your workflow
    </p>
    
    <div className="max-w-md mx-auto">
      <div className="bg-white border-2 border-blue-600 rounded-lg shadow-sm p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">FlowSync Platform</h3>
        <div className="mb-6">
          <span className="text-5xl font-bold text-slate-900">$29</span>
          <span className="text-gray-600"> one-time</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            AI-Powered Workflow Automation
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            Real-Time Team Collaboration Tools
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            200+ Native Integrations
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            Advanced Analytics & Reporting Dashboard
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            Enterprise-Grade Security & Compliance
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            Custom API Access & Developer Tools
          </li>
        </ul>
        
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
          className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started - $29
        </button>
        
        <p className="text-sm text-gray-500 text-center mt-4">
          One-time payment. Lifetime access.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}