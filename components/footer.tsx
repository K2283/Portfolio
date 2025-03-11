import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-primary mb-4">Portfolio</div>
          <div className="flex items-center space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/venkata-gopinadh-kothapalli-180490283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:kvgopinadh@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <div className="text-center text-muted-foreground text-sm">
            <p>© {currentYear} Kothapalli Venkata Gopinadh. All rights reserved.</p>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

