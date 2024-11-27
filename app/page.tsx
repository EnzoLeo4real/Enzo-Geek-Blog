import { ArticleCard } from "@/components/article-card"
import { CategoriesSection } from "@/components/categories-section"
import { HeroSection } from "@/components/hero-section"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { getSortedPostsData } from '@/lib/posts'

export default function Home() {
  const articles = getSortedPostsData()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <div className="container py-8">
          <section>
            <h2 className="mb-6 text-2xl font-bold">Latest</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  image={article.image}
                  href={`/articles/${article.id}`}
                />
              ))}
            </div>
          </section>
          <CategoriesSection />
          <section className="py-8">
            <h2 className="mb-6 text-2xl font-bold">About Enzo Geek Space</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Enzo Geek Space is a hub for the latest news, insights, and analyses
              from the world of technology and science. We cover everything from AI
              and robotics to space exploration and biotechnology, offering a
              unique blend of expert opinions, in-depth features, and
              thought-provoking essays.
            </p>
            <Button variant="secondary" className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
              Follow Enzo Geek Space
            </Button>
          </section>
        </div>
      </main>
    </div>
  )
}

