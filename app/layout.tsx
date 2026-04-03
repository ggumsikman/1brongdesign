import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '일비롱디자인 | 가장 가까운 디자인 파트너',
  description: '가까운 곳에서, 꼭 필요한 디자인을 전합니다. 현수막, 포멕스, 티셔츠, 포토카드 등 맞춤 디자인 제작.',
  openGraph: {
    title: '일비롱디자인 | 가장 가까운 디자인 파트너',
    description: '가까운 곳에서, 꼭 필요한 디자인을 전합니다.',
    siteName: '일비롱디자인',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
