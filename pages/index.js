import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [lang, setLang] = useState("ar");
  const t = {
    ar: {
      title: "البدري | Al-Badry",
      nav: ["الرئيسية", "من نحن", "خدماتنا", "معرض الأعمال", "مدونة", "نصائح", "تعليمي", "تواصل معنا", "تسجيل دخول"],
      welcome: "مرحبًا بك في معرض البدري",
      desc: "هنا تجد جميع أعمالي، مقالاتي، ونصائحي في التصميم والإبداع.",
      projects: [
        { title: "مشروع هوية بصرية", desc: "تصميم شعار وهوية بصرية كاملة لمطعم شرقي.", img: "/project1.jpg" },
        { title: "موقع تعريفي لشركة", desc: "برمجة وتصميم موقع شركة خدمات لوجستية.", img: "/project2.jpg" },
        { title: "تطبيق موبايل", desc: "واجهة مستخدم لتطبيق حجوزات عراقي.", img: "/project3.jpg" }
      ]
    },
    en: {
      title: "Al-Badry | البدري",
      nav: ["Home", "About", "Services", "Portfolio", "Blog", "Tips", "Learning", "Contact", "Login"],
      welcome: "Welcome to Al-Badry Portfolio",
      desc: "Explore my projects, blog articles, and creative advice all in one place.",
      projects: [
        { title: "Brand Identity Project", desc: "Logo and full identity design for a Middle Eastern restaurant.", img: "/project1.jpg" },
        { title: "Company Website", desc: "Design and development of a logistics company site.", img: "/project2.jpg" },
        { title: "Mobile App UI", desc: "User interface for a local booking app.", img: "/project3.jpg" }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="flex items-center gap-4">
          <Image src="/albadry-logo.png" alt="Al-Badry Logo" width={50} height={60} />
          <h1 className="text-2xl font-bold">{t[lang].title}</h1>
        </div>
        <button
          onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          className="px-3 py-1 border rounded shadow-sm"
        >
          {lang === "ar" ? "EN" : "عربي"}
        </button>
      </div>

      <nav className="flex flex-wrap justify-center gap-4 py-6 bg-white shadow-sm">
        {t[lang].nav.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/${item}`.toLowerCase()} className="text-lg font-medium hover:text-yellow-600 transition">
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>

      <section className="text-center py-16 px-6">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t[lang].welcome}
        </motion.h2>
        <motion.p
          className="text-lg max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t[lang].desc}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t[lang].projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={proj.img} alt={proj.title} width={500} height={300} className="w-full h-60 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
