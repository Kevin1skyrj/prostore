import Header from "@/components/shared/Header";
import Footer from "@/components/footer";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">
       {children}
      </main>
      <Footer />
   </div>
  )
}