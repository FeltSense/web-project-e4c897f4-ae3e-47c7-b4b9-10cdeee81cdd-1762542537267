export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Powerful Features for Modern Teams
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        FlowSync combines intelligent automation with seamless collaboration to streamline your workflow and boost productivity.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          AI-Powered Workflow Automation
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Leverage advanced AI to automate repetitive tasks, optimize processes, and eliminate manual work. Smart automation that learns from your team's patterns.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Real-Time Team Collaboration
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Work together seamlessly with live updates, shared workspaces, and instant notifications. Keep everyone aligned and productive across time zones.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          200+ Native Integrations
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Connect your entire tech stack effortlessly. Pre-built integrations with all major platforms ensure your tools work together harmoniously.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3 lg:max-w-md lg:mx-auto">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Advanced Analytics & Reporting
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Gain deep insights into team performance, workflow efficiency, and bottlenecks. Customizable dashboards and detailed reports help you make data-driven decisions.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}