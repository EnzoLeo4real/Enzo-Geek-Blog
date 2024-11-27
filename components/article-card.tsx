import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ArticleCardProps {
  title: string
  image: string
  href: string
}

export function ArticleCard({ title, image, href }: ArticleCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div
          className="aspect-video w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <CardContent className="p-4">
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}

