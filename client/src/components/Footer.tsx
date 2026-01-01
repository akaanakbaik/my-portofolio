import { MessageCircle, Github, Youtube, Send, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/6281266950382", hoverColor: "hover:text-green-500" },
    { icon: Github, href: "https://github.com/akaanakbaik", hoverColor: "hover:text-gray-600 dark:hover:text-gray-300" },
    { icon: Youtube, href: "https://www.youtube.com/@always-aka", hoverColor: "hover:text-red-500" },
    { icon: Send, href: "https://t.me/akamodebaik", hoverColor: "hover:text-blue-500" },
    { icon: Mail, href: "mailto: furinabyaka@gmail.com", hoverColor: "hover:text-purple-500" },
  ];

  return (
    <footer className="py-12 px-4 md:px-6 lg:px-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-[65ch] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-neutral-600 dark:text-neutral-400">
              © 2026 Aka. Dibuat dengan ❤️ dan code
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-neutral-400 ${social.hoverColor} transition-colors duration-300`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
