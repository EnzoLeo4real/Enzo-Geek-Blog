import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/blog-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold">Enzo Geek Space</h1>
        <p className="mb-8 max-w-2xl text-lg">
          We explore the frontiers of technology and science. Our mission is to
          inspire and inform a new generation of innovators.
        </p>
        <div className="flex w-full max-w-md items-center space-x-2">
          <Input
            className="bg-gray-800 text-white placeholder:text-gray-400"
            placeholder="Search"
            type="search"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Go</Button>
        </div>
      </div>
    </div>
  )
}

