import Link from 'next/link'

const SERVICES = [
  {
    emoji: '🪧',
    title: '현수막',
    desc: '유치원·학교·행사용 현수막\n기본 디자인부터 맞춤 제작까지',
  },
  {
    emoji: '🖼️',
    title: '포멕스',
    desc: '실내외 포멕스 현수막\n깔끔하고 고급스러운 마감',
  },
  {
    emoji: '👕',
    title: '커스텀 티셔츠',
    desc: '단체복·기념품 맞춤 인쇄\n소량 주문도 가능',
  },
  {
    emoji: '📸',
    title: '포토카드 · 생일북',
    desc: '생일·기념일 특별한 선물\n감성 디자인으로 제작',
  },
  {
    emoji: '🎨',
    title: '디자인 템플릿',
    desc: '직접 편집 가능한 템플릿\n네이버 스마트스토어에서 구매',
  },
  {
    emoji: '✨',
    title: '맞춤 디자인',
    desc: '원하는 디자인 무엇이든\n카카오톡으로 편하게 문의',
  },
]

const CHANNELS = [
  {
    name: '네이버 스마트스토어',
    desc: '현수막·포멕스·포토카드 구매',
    href: 'https://smartstore.naver.com/1brongdesign',
    bg: 'bg-green-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
      </svg>
    ),
  },
  {
    name: '카카오톡 채널',
    desc: '상담·주문·문의는 카카오톡으로',
    href: 'https://pf.kakao.com/_xdxcRUb',
    bg: 'bg-yellow-400',
    textColor: 'text-gray-800',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.638 1.674 4.961 4.197 6.318L5.25 21l4.383-2.92C10.314 18.356 11.146 18.5 12 18.5c5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
      </svg>
    ),
  },
  {
    name: '웹 주문서',
    desc: '온라인으로 간편하게 주문 접수',
    href: 'https://ilbirong.vercel.app',
    bg: 'bg-gradient-to-r from-pink-500 to-purple-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

const STEPS = [
  { num: '01', title: '카카오톡 문의 또는 주문서 작성', desc: '카카오톡 채널로 문의하거나 웹 주문서로 직접 접수' },
  { num: '02', title: '시안 제작', desc: '접수 후 영업일 기준 빠르게 시안 작업 진행' },
  { num: '03', title: '시안 확인 및 수정', desc: '링크로 시안 확인, 수정 요청 2회 무료' },
  { num: '04', title: '제작 · 배송', desc: '시안 확정 후 제작 및 배송 진행' },
]

const SNS = [
  { name: 'Instagram', handle: '@1brongdesign', href: 'https://www.instagram.com/1brongdesign', bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400', icon: '📷' },
  { name: 'YouTube', handle: '일비롱디자인', href: 'https://youtube.com/channel/UC4L3QS8kmLhumdVc0-7YKYg', bg: 'bg-red-500', icon: '▶️' },
  { name: 'Naver 블로그', handle: 'baealong', href: 'https://m.blog.naver.com/baealong', bg: 'bg-green-500', icon: '📝' },
  { name: 'Threads', handle: '@1brongdesign', href: 'https://www.threads.com/@1brongdesign', bg: 'bg-gray-900', icon: '🧵' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* ── Hero ── */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/30 via-gray-950 to-gray-950" />
        <div className="relative max-w-2xl mx-auto px-6 py-24 text-center">
          {/* 로고 텍스트 */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center font-black text-gray-900 text-xl shadow-lg">
                BR
              </div>
              <span className="text-3xl font-black tracking-tight" style={{ background: 'linear-gradient(135deg, #D4A84B, #F5D98B, #C19A2E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                일비롱디자인
              </span>
            </div>
            <p className="text-yellow-400/80 text-sm font-medium tracking-widest uppercase">1Brong Design</p>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
            가장 가까운<br />
            <span style={{ background: 'linear-gradient(135deg, #D4A84B, #F5D98B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              디자인 파트너
            </span>
          </h1>
          <p className="text-gray-400 text-base mb-10 leading-relaxed">
            가까운 곳에서, 꼭 필요한 디자인을 전합니다.<br />
            현수막부터 포토카드까지 — 빠르고 감각있게.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://ilbirong.vercel.app"
              className="px-8 py-4 rounded-2xl font-bold text-gray-900 text-base shadow-lg transition hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #D4A84B, #F5D98B)' }}
            >
              📋 주문서 작성하기
            </a>
            <a
              href="https://pf.kakao.com/_xdxcRUb"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl font-bold text-gray-900 bg-yellow-400 text-base shadow-lg transition hover:scale-105 hover:bg-yellow-300"
            >
              💬 카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* ── 서비스 소개 ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold text-sm tracking-widest uppercase mb-2">Services</p>
            <h2 className="text-2xl font-black text-gray-900">무엇이든 만들어드려요</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition text-center">
                <div className="text-3xl mb-3">{s.emoji}</div>
                <p className="font-bold text-gray-900 text-sm mb-1">{s.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 주문 프로세스 ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold text-sm tracking-widest uppercase mb-2">How to Order</p>
            <h2 className="text-2xl font-black text-gray-900">이렇게 주문해요</h2>
          </div>
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-gray-900 shadow"
                  style={{ background: 'linear-gradient(135deg, #D4A84B, #F5D98B)' }}>
                  {step.num}
                </div>
                <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                  <p className="font-bold text-gray-900">{step.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://ilbirong.vercel.app"
              className="px-8 py-4 rounded-2xl font-bold text-gray-900 text-center text-base shadow transition hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #D4A84B, #F5D98B)' }}
            >
              📋 지금 주문하기
            </a>
          </div>
        </div>
      </section>

      {/* ── 구매 채널 ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold text-sm tracking-widest uppercase mb-2">Channels</p>
            <h2 className="text-2xl font-black text-gray-900">여기서 만나요</h2>
          </div>
          <div className="space-y-3">
            {CHANNELS.map((ch) => (
              <a
                key={ch.name}
                href={ch.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl text-white shadow-sm hover:shadow-md transition hover:scale-[1.01] ${ch.bg}`}
              >
                <div className={`flex-shrink-0 ${ch.textColor || 'text-white'}`}>{ch.icon}</div>
                <div className={ch.textColor || 'text-white'}>
                  <p className="font-bold">{ch.name}</p>
                  <p className="text-sm opacity-80">{ch.desc}</p>
                </div>
                <div className={`ml-auto text-xl opacity-60 ${ch.textColor || 'text-white'}`}>→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SNS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold text-sm tracking-widest uppercase mb-2">Follow Us</p>
            <h2 className="text-2xl font-black text-gray-900">SNS에서 팔로우하세요</h2>
            <p className="text-gray-500 text-sm mt-2">작업 과정과 신규 디자인을 가장 먼저 만날 수 있어요</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {SNS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`${s.bg} text-white rounded-2xl p-5 shadow-sm hover:shadow-md transition hover:scale-[1.02] flex flex-col gap-2`}
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-bold text-sm">{s.name}</p>
                  <p className="text-xs opacity-80">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-black text-gray-900 text-xs">
              BR
            </div>
            <span className="font-bold text-white">일비롱디자인</span>
          </div>
          <p className="text-sm mb-6">가장 가까운 디자인 파트너</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
            <a href="https://smartstore.naver.com/1brongdesign" target="_blank" rel="noreferrer" className="hover:text-white transition">스마트스토어</a>
            <a href="https://pf.kakao.com/_xdxcRUb" target="_blank" rel="noreferrer" className="hover:text-white transition">카카오톡</a>
            <a href="https://www.instagram.com/1brongdesign" target="_blank" rel="noreferrer" className="hover:text-white transition">인스타그램</a>
            <a href="https://youtube.com/channel/UC4L3QS8kmLhumdVc0-7YKYg" target="_blank" rel="noreferrer" className="hover:text-white transition">유튜브</a>
            <a href="https://m.blog.naver.com/baealong" target="_blank" rel="noreferrer" className="hover:text-white transition">블로그</a>
            <a href="https://www.threads.com/@1brongdesign" target="_blank" rel="noreferrer" className="hover:text-white transition">스레드</a>
          </div>
          <p className="text-xs text-gray-600">© 2025 일비롱디자인. All rights reserved.</p>
        </div>
      </footer>

    </main>
  )
}
