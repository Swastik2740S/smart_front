'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    title: "Team Collaboration",
    description: "Invite team members, assign roles, and collaborate in real time.",
    icon: "👥",
  },
  {
    title: "Task Management",
    description: "Create, assign, and prioritize tasks with automatic tracking.",
    icon: "✅",
  },
  {
    title: "Project Activity",
    description: "Track team progress with a unified dashboard and live updates.",
    icon: "📈",
  },
  {
    title: "Role-Based Access",
    description: "Control who can view, edit, and manage via secure roles.",
    icon: "🔐",
  },
  {
    title: "JWT Authentication",
    description: "Secure your data and endpoints with robust token-based auth.",
    icon: "🔑",
  },
  {
    title: "Swagger API Docs",
    description: "In-app OpenAPI documentation for rapid integration.",
    icon: "📚",
  },
];


const testimonials = [
  {
    name: "Anjali R.",
    role: "Product Manager, TechGiant",
    quote: "SmartTask transformed our workflow. My team loves how intuitive – yet powerful – it is.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Prakash S.",
    role: "Developer, Startup.io",
    quote: "The best dashboard I’ve used. Everything is snappy. The animations are delightfully smooth.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Riya D.",
    role: "Team Lead, FinCloud",
    quote: "SmartTask makes juggling multiple projects stress-free. The role management rocks.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];


const pricing = [
  {
    name: "Free",
    price: "₹0",
    features: ["5 users", "Unlimited tasks", "Core dashboard", "Basic support"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹349/mo",
    features: [
      "50 users",
      "Advanced roles & audit logs",
      "Team reports",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: ["Unlimited users", "SSO/SAML", "Custom integrations", "Dedicated support"],
    highlight: false,
  },
];


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-white/70 backdrop-blur border-b border-gray-100 px-6 py-4 z-[100] shadow-sm transition-all duration-200">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-10 w-10 bg-blue-600 text-white text-2xl font-bold flex items-center justify-center rounded-full shadow-md select-none">
            ST
          </span>
          <span className="font-bold text-lg text-gray-800 tracking-wide">SmartTask</span>
        </Link>
        <div className="flex gap-4">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
        </div>
        <div className="flex gap-2">
          <Link href="/login" className="rounded border border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition">Login</Link>
          <Link href="/register" className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition shadow">Get Started</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-20 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-white relative overflow-hidden text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"
        >
          Enterprise Project Management, <span className="text-blue-700">Redefined</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-xl mx-auto mt-6 text-lg text-gray-600"
        >
          Assign tasks, manage teams, and track everything with a UI your users will love. 
          <br /> Powered by Next.js, Spring Boot, and <span className="font-semibold text-blue-700">SmartTask</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/register" className="w-full sm:w-auto rounded bg-blue-600 px-8 py-4 font-semibold text-xl text-white shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-all duration-200">
            Get Started Free
          </Link>
          <Link href="/login" className="w-full sm:w-auto rounded border border-blue-600 px-8 py-4 font-medium text-blue-600 bg-white hover:bg-blue-50 transition">
            Login
          </Link>
        </motion.div>

        <svg
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 top-[60%] opacity-30 blur-xl"
          width="700" height="120" fill="none"
        >
          <ellipse cx="350" cy="60" rx="360" ry="60" fill="#3B82F6" />
        </svg>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Features your team will love
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 * i, duration: 0.6, type: 'spring' }}
              className="rounded-xl border bg-gradient-to-br from-blue-50 to-white p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-4xl mb-2">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-blue-50 py-24 px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">User testimonials</h2>
        <div className="max-w-3xl mx-auto overflow-x-auto flex gap-6 scrollbar-hide py-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.7, type: 'spring' }}
              className="min-w-[320px] bg-white border rounded-xl shadow p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition"
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={64}
                height={64}
                className="rounded-full border-4 border-blue-200 mb-4 shadow"
              />
              <p className="text-gray-700 mb-3 text-base italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <span className="font-semibold text-gray-900">{t.name}</span>
              <span className="text-xs text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-white px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Pricing that scales with you</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.10 * i, duration: 0.7, type: 'spring' }}
              className={`rounded-2xl border p-8 flex flex-col items-center text-center shadow-sm ${
                plan.highlight
                  ? 'border-blue-600 bg-gradient-to-tr from-blue-100 to-white scale-105 z-10'
                  : 'bg-white border-gray-200'
              } hover:shadow-xl transition`}
            >
              <div className="text-lg font-bold uppercase tracking-wider mb-2">{plan.name}</div>
              <div className="text-3xl font-extrabold text-blue-700 mb-5">{plan.price}</div>
              <ul className="mb-7 space-y-2 text-gray-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 justify-center">
                    <span className="text-green-500">●</span> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.name === "Enterprise" ? "mailto:sales@smarttask.com" : "/register"}
                className={`w-full rounded px-6 py-3 font-semibold text-white ${
                  plan.highlight
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-400 hover:bg-gray-500'
                } transition`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center py-16 px-6 bg-gradient-to-tr from-blue-600 to-blue-400">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to boost your productivity?</h3>
        <p className="text-white mb-4">Sign up now and start managing your projects smarter with SmartTask.</p>
        <Link href="/register" className="inline-block rounded shadow-lg bg-white text-blue-700 font-semibold px-7 py-3 hover:bg-blue-50 transition-all text-lg">
          Start for Free
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 border-t py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SmartTask. All rights reserved.
      </footer>
    </main>
  );
}
