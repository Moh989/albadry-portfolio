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
    },
    en: {
      title: "Al-Badry | البدري",
      nav: ["Home", "About", "Services", "Portfolio", "Blog", "Tips", "Learning", "Contact", "Login"],
      welcome: "Welcome to Al-Badry Portfolio",
      desc: "Explore my projects, blog articles, and creative advice all in one place.",
    },
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
      </section>
    </main>
  );
}
