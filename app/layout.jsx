import MainAside from "./components/aside";
import "./global.css";

export const metadata = {
  title: "Chaos Funserver | WoW Funserver",
  description:
    "Venha alinhar suas habilidades como player de World of Warcraft no melhor server private do Brasil. Traga seus amigos, pois aqui não é só mais um servidor, mas sim um ambiente pra ter a melhor diversão.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/icon.png" type="image/icon type" />
      <body className="w-full">
        <MainAside />
        <main className=" flex w-full  justify-end  bg-white">
          <div className="flex flex-col w-2/3 ">{children} </div>
        </main>
      </body>
    </html>
  );
}
