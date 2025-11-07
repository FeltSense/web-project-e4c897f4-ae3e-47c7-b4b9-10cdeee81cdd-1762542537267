export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Trusted by Teams Worldwide
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        See how FlowSync helps organizations streamline their workflows and boost productivity
      </p>
    </div>

    {/* Featured Large Quote */}
    <div className="mb-16 bg-slate-50 rounded-lg p-12 shadow-sm border border-slate-200">
      <div className="max-w-4xl mx-auto">
        <svg className="w-12 h-12 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="text-2xl font-medium text-slate-900 mb-8 leading-relaxed">
          "FlowSync transformed how our entire organization operates. We've reduced project completion time by 40% and eliminated the chaos of scattered communication. It's the single best investment we've made in our operational infrastructure."
        </blockquote>
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-semibold text-lg mr-4">
            SH
          </div>
          <div>
            <div className="font-semibold text-slate-900">Sarah Henderson</div>
            <div className="text-slate-600">VP of Operations, TechVenture Inc</div>
          </div>
        </div>
      </div>
    </div>

    {/* Grid of Additional Testimonials */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold mr-3">
            MC
          </div>
          <div>
            <div className="font-semibold text-slate-900">Michael Chen</div>
            <div className="text-sm text-slate-600">Product Manager</div>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed">
          "The automation features saved our team 15 hours per week. We can now focus on strategic work instead of manual data entry and status updates."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold mr-3">
            EP
          </div>
          <div>
            <div className="font-semibold text-slate-900">Emily Parker</div>
            <div className="text-sm text-slate-600">Director of Marketing</div>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed">
          "Cross-department collaboration has never been easier. FlowSync's intuitive interface means our team adopted it within days, not weeks."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold mr-3">
            JR
          </div>
          <div>
            <div className="font-semibold text-slate-900">James Rodriguez</div>
            <div className="text-sm text-slate-600">Engineering Lead</div>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed">
          "The real-time visibility into project status has been game-changing. We catch bottlenecks early and keep everything moving smoothly."
        </p>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="mt-16 pt-12 border-t border-slate-200">
      <div className="grid grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">10,000+</div>
          <div className="text-slate-600">Active Users</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
          <div className="text-slate-600">Satisfaction Rate</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-slate-900 mb-2">40%</div>
          <div className="text-slate-600">Time Saved</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}