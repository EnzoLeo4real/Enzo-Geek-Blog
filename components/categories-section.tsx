import { Button } from "@/components/ui/button"
import { Brain, Cpu, FlaskRoundIcon as Flask, MoreHorizontal, Rocket, Zap, MonitorSmartphone } from 'lucide-react'

export function CategoriesSection() {
  return (
    <div className="py-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Categories</h2>
      <div className="flex flex-wrap gap-4">
        <Button variant="secondary" className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
          <Brain className="h-4 w-4" />
          AI
        </Button>
        <Button variant="secondary" className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
          <MonitorSmartphone className="h-4 w-4" />
          Robotics
        </Button>
        <Button variant="secondary" className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
          <Rocket className="h-4 w-4" />
          Space
        </Button>
        <Button variant="secondary" className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
          <Cpu className="h-4 w-4" />
          Neurotech
        </Button>
        <Button variant="secondary" className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
          <Zap className="h-4 w-4" />
          Energy
        </Button>
        <Button variant="secondary" className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
          <Flask className="h-4 w-4" />
          Biotech
        </Button>
        <Button variant="secondary" className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
          <MoreHorizontal className="h-4 w-4" />
          More
        </Button>
      </div>
    </div>
  )
}

