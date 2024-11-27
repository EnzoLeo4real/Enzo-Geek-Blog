import { getPostData, getAllPostIds } from '@/lib/posts'
import { SiteHeader } from '@/components/site-header'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SiteHeader />
      <main className="container py-8">
        <article className="prose dark:prose-invert lg:prose-xl mx-auto">
          <div
            className="aspect-video w-full bg-cover bg-center mb-8 rounded-lg"
            style={{ backgroundImage: `url(${postData.image})` }}
          />
          <h1 className="mb-4">{postData.title}</h1>
          <div className="text-gray-500 dark:text-gray-400 mb-8">
            {new Date(postData.date).toLocaleDateString()}
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.content || '' }} />
        </article>
      </main>
    </div>
  )
} 