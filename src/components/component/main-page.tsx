
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"
import ContactPage from "../contact/contact";

import { GaugeIcon } from "lucide-react";

export function MainPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className=" text-white px-4 lg:px-6 h-14 flex items-center justify-between w-[90%] p-[15px] rounded-[5px] fixed top-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90 z-10   ">
        <Link className="flex items-center gap-2" href="#">
          <GaugeIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">CESTY ING</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          
          <Link className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300" href="#products">
              Produits
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300" href="#services">
              Services
            </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300"
            href="#about"
          >
            À propos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-300"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
        <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only  ">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-xs bg-gray-100 dark:bg-gray-800 p-6" side="right">
              <div className="flex flex-col gap-6">
                <SheetClose asChild>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#about">
                  À propos
                </Link> 
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#services">
                  Services
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#products">
                  Produits
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#contact">
                  Contact
                </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
      </header>
      <main className="flex flex-col items-center justify-center">
        <section className="bg-[#404040] text-white py-12 md:py-24 lg:py-32 topo">
          <div className="container px-4 md:px-6 grid gap-6 md:gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Propulser l&apos;excellence industrielle
              </h1>
              <p className="text-[#d9d9d9] max-w-[600px] text-lg">
                CESTY ING est un fournisseur de premier plan d&apos;équipements industriels de haute qualité, offrant des
                solutions innovantes aux entreprises de divers secteurs.
              </p>
              <div className="flex gap-4">
              <Link href="#products">
                <Button className="bg-[#004080] hover:bg-[#0073e6] text-white">Découvrir nos produits</Button></Link>
                <Link href="#contact">
                <Button
                  className="bg-[#ff6600] border-[#d9d9d9] text-white hover:bg-[#d9d9d9] hover:text-[#404040]"
                  variant="outline"
                >
                  Nous contacter
                </Button></Link>
              </div>
            </div>
            <img
              alt="img de l'héros"
              className="rounded-lg object-cover w-full "
              height={400}
              src="/intro.jpeg"
              width={600}
            />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32" id="products">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Notre catalogue de produits</h2>
              <p className="text-[#404040] max-w-[600px] mx-auto text-lg">
                Découvrez notre large gamme d&apos;équipements industriels haute performance, conçus pour répondre à vos
                besoins diversifiés.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#404040] rounded-lg shadow-lg overflow-hidden">
                <img
                  alt="Pompes de précision"
                  className="w-full  object-cover"
                  height={300}
                  src="/pompe.jpeg"
                  width={400}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Pompes de précision</h3>
                  <p className="text-[#404040] dark:text-[#d9d9d9]">
                    Pompes industrielles haute efficacité pour des applications exigeantes.
                  </p>
                
                </div>
              </div>
              <div className="bg-white dark:bg-[#404040] rounded-lg shadow-lg overflow-hidden">
                <img
                  alt="vanne"
                  className="w-full  object-cover"
                  height={300}
                  src="/vanne.jpeg"
                  width={400}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Vannes robustes</h3>
                  <p className="text-[#404040] dark:text-[#d9d9d9]">
                    Vannes industrielles durables et fiables pour des applications critiques.
                  </p>
                 
                </div>
              </div>
              <div className="bg-white dark:bg-[#404040] rounded-lg shadow-lg overflow-hidden">
                <img
                  alt="Presse Plieuse Hydraulique"
                  className="w-full  object-cover"
                  height={300}
                  src="/presse.jpeg"
                  width={400}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Presse Plieuse Hydraulique</h3>
                  <p className="text-[#404040] dark:text-[#d9d9d9]">
                  Nos presses plieuse hydraulique sont conçues pour offrir une précision et une fiabilité inégalées dans le pliage des métaux.
                  </p>
               
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#404040] dark:bg-[#404040] py-12 md:py-24 lg:py-32" id="services">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-[#d9d9d9] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nos services</h2>
              <p className="text-[#d9d9d9] dark:text-[#d9d9d9] max-w-[600px] mx-auto text-lg">
                Découvrez comment nos services complets peuvent soutenir vos besoins industriels.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#404040] rounded-lg shadow-lg p-6 space-y-4">
                <SettingsIcon className="h-10 w-10 text-[#004080]" />
                <h3 className="text-xl font-bold">Installation d&apos;équipements</h3>
                <p className="text-[#404040] dark:text-[#d9d9d9]">
                  Nos techniciens experts assurent une installation et une intégration fluides de votre équipement
                  industriel.
                </p>
              </div>
              <div className="bg-white dark:bg-[#404040] rounded-lg shadow-lg p-6 space-y-4">
                <WrenchIcon className="h-10 w-10 text-[#004080]" />
                <h3 className="text-xl font-bold">Maintenance et réparation</h3>
                <p className="text-[#404040] dark:text-[#d9d9d9]">
                  Fiez-vous à nos services de maintenance et de réparation complets pour maintenir votre équipement à
                  son meilleur niveau de performance.
                </p>
              </div>
              <div className="bg-white dark:bg-[#404040] rounded-lg shadow-lg p-6 space-y-4">
                <TruckIcon className="h-10 w-10 text-[#004080]" />
                <h3 className="text-xl font-bold">Logistique et livraison</h3>
                <p className="text-[#404040] dark:text-[#d9d9d9]">
                  Nous gérons la logistique de la livraison de votre équipement, assurant un transport rapide et
                  sécurisé.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6 grid gap-6 md:gap-10 lg:grid-cols-2 lg:items-center">
            <img
              alt="À propos de l&apos;img"
              className="rounded-lg object-cover w-full "
              height={400}
              src="/about.jpeg"
              width={600}
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">À propos de CESTY ING</h2>
              <p className="text-[#404040] dark:text-[#d9d9d9] text-lg">
                CESTY ING est un fournisseur de premier plan d&apos;équipements industriels de haute qualité, servant les
                entreprises de divers secteurs depuis plus de deux décennies. Notre engagement envers l&apos;innovation, la
                fiabilité et la satisfaction des clients en fait un partenaire de confiance pour les solutions
                industrielles.
              </p>
              <p className="text-[#404040] dark:text-[#d9d9d9] text-lg">
                Avec une équipe de professionnels expérimentés et des installations à la pointe de la technologie, nous
                nous efforçons de fournir des produits de pointe et des services exceptionnels qui stimulent les progrès
                industriels.
              </p>
              
            </div>
          </div>
        </section>
       
        <section className="bg-[#d9d9d9] dark:bg-[#404040] py-12 md:py-24 lg:py-32 container mb-10" id="contact">
          <ContactPage />
        </section>
      </main>
      <footer className="  py-8 dark:bg-gray-800 dark:text-white ">
          <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className=" dark:text-gray-400 mt-4 ">© 2024 CESTY ING.</p>
          <p className=" dark:text-gray-400 "> Tous droits réservés.</p>
          </div>
          <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className=" dark:text-gray-400 mt-4 ">3 Rue du Colonel Fabien</p>
          <p className=" dark:text-gray-400  ">93300 Aubervilliers</p>
          <p className=" dark:text-gray-400 mt-4 ">contact@cesty-ing.fr</p>
          <p className=" dark:text-gray-400 mt-4 ">TEL: 01 84 21 09 92</p>
          </div>
       
      </footer>
    </div>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}





function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function WrenchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
