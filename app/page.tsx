const SERVICES = [
  { emoji: '🪧', title: '현수막', desc: '유치원·학교·행사용 현수막\n기본 디자인부터 맞춤 제작까지' },
  { emoji: '🖼️', title: '포멕스', desc: '실내외 포멕스 현수막\n깔끔하고 고급스러운 마감' },
  { emoji: '👕', title: '커스텀 티셔츠', desc: '단체복·기념품 맞춤 인쇄\n소량 주문도 가능' },
  { emoji: '📸', title: '포토카드 · 생일북', desc: '생일·기념일 특별한 선물\n감성 디자인으로 제작' },
  { emoji: '🎨', title: '디자인 템플릿', desc: '선생님들이 직접 편집 가능한\n교육·행사용 템플릿' },
  { emoji: '✨', title: '맞춤 디자인', desc: '원하는 디자인 무엇이든\n카카오톡으로 편하게 문의' },
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
        <div className="relative max-w-xl mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center font-black text-gray-900 text-xl shadow-lg">
                BR
              </div>
              <span className="text-3xl font-black tracking-tight" style={{ background: 'linear-gradient(135deg, #D4A84B, #F5D98B, #C19A2E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                일비롱디자인
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-3">
            가장 가까운<br />
            <span style={{ background: 'linear-gradient(135deg, #D4A84B, #F5D98B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              디자인 파트너
            </span>
          </h1>
          <p className="text-gray-400 text-sm mb-10 leading-relaxed">
            선생님들의 일상에 작은 여유와 미소를 전합니다
          </p>

          {/* ── 핵심 채널 3개 ── */}
          <div className="flex flex-col gap-3">
            <a
              href="https://smartstore.naver.com/1brongdesign"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-white text-base shadow-lg transition hover:scale-[1.02] bg-green-500 hover:bg-green-400"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">🛒</span>
                <span>네이버 스마트스토어</span>
              </span>
              <span className="text-sm font-normal opacity-80">바로가기 →</span>
            </a>
            <a
              href="https://m.gmarket.co.kr/n/minishop/1brongdesign"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-white text-base shadow-lg transition hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #e31837, #ff6b35)' }}
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">🛍️</span>
                <span>G마켓 미니샵</span>
              </span>
              <span className="text-sm font-normal opacity-80">바로가기 →</span>
            </a>
            <a
              href="https://pf.kakao.com/_xdxcRUb"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-gray-900 text-base shadow-lg transition hover:scale-[1.02] bg-yellow-400 hover:bg-yellow-300"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <span>카카오톡 채널 상담</span>
              </span>
              <span className="text-sm font-normal opacity-60">바로가기 →</span>
            </a>
            <a
              href="https://ilbirong.vercel.app"
              className="flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-white text-base shadow-lg transition hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #ec4899, #9333ea)' }}
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">📋</span>
                <span>웹 주문서 작성하기</span>
              </span>
              <span className="text-sm font-normal opacity-80">바로가기 →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 브랜드 스토리 ── */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-600 font-semibold text-sm tracking-widest uppercase mb-2">Our Story</p>
            <h2 className="text-2xl font-black text-gray-900">교사로서의 마음이 만든 브랜드</h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm space-y-5 text-gray-700 leading-relaxed text-[15px]">
            <p>
              담임교사로 근무하던 시절, 저는 임신 중이었어요.<br />
              다음해 일을 쉬려고 결심했는데, 그때 원장님께서 개인적인 사정으로 6개월 정도
              자리를 비우시게 되어 원장님의 자리를 대신해 선생님들을 도와달라고 요청해주셨어요.
            </p>
            <p>
              그 시기, 저는 원장 역할과 동시에 교사이면서 <span className="font-semibold text-gray-900">&apos;조력자&apos;</span>의 역할을 하게 되었죠.
            </p>
            <p>
              행사 준비를 함께하고, 도안을 만들고, 교구를 만들어 반별로 나눠드렸어요.<br />
              퇴근이 빨라지는 선생님들의 모습을 볼 때마다 정말 마음 깊이 행복했습니다.
            </p>
            <div className="border-l-4 border-yellow-400 pl-5 py-1 bg-yellow-50 rounded-r-2xl">
              <p className="text-gray-800 font-semibold text-base">
                &ldquo;모든 교사들이 이런 도움을 받을 수 있다면 얼마나 좋을까?&rdquo;
              </p>
              <p className="text-gray-600 text-sm mt-1">그 마음 하나로 시작된 게 바로 <span className="font-bold text-yellow-700">&apos;도안 나눔&apos;</span>이었어요.</p>
            </div>
            <p>
              이 경험이 지금의 일비롱디자인을 만들었습니다.<br />
              저는 여전히 그때처럼, 바쁜 교사들을 위해 행사 준비를 돕고,
              아이들이 즐겁게 활동할 수 있는 자료를 디자인합니다.
            </p>
            <p className="text-gray-500 text-sm">
              앞으로도 선생님들의 편안한 교직생활, 아이들의 즐거운 놀이활동,
              풍부한 놀이자료를 통한 교육 발전을 돕는 일비롱디자인으로 함께하겠습니다.
            </p>
            <p className="text-center font-bold text-gray-900 pt-2">
              선생님들의 일상에 작은 여유와 미소를 전하는,<br />
              <span style={{ background: 'linear-gradient(135deg, #D4A84B, #C19A2E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                일비롱디자인.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 서비스 소개 ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
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
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold text-sm tracking-widest uppercase mb-2">How to Order</p>
            <h2 className="text-2xl font-black text-gray-900">이렇게 주문해요</h2>
          </div>
          <div className="space-y-4">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-5 items-start">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-gray-900 shadow"
                  style={{ background: 'linear-gradient(135deg, #D4A84B, #F5D98B)' }}
                >
                  {step.num}
                </div>
                <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                  <p className="font-bold text-gray-900">{step.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://pf.kakao.com/_xdxcRUb"
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-6 py-4 rounded-2xl font-bold text-gray-900 text-center bg-yellow-400 hover:bg-yellow-300 transition hover:scale-[1.02] shadow"
            >
              💬 카카오톡 상담
            </a>
            <a
              href="https://ilbirong.vercel.app"
              className="flex-1 px-6 py-4 rounded-2xl font-bold text-white text-center transition hover:scale-[1.02] shadow"
              style={{ background: 'linear-gradient(135deg, #ec4899, #9333ea)' }}
            >
              📋 주문서 작성
            </a>
          </div>
        </div>
      </section>

      {/* ── SNS ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
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
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-black text-gray-900 text-xs">
              BR
            </div>
            <span className="font-bold text-white">일비롱디자인</span>
          </div>
          <p className="text-sm mb-6">선생님들의 일상에 작은 여유와 미소를 전합니다</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
            <a href="https://smartstore.naver.com/1brongdesign" target="_blank" rel="noreferrer" className="hover:text-white transition">스마트스토어</a>
            <a href="https://m.gmarket.co.kr/n/minishop/1brongdesign" target="_blank" rel="noreferrer" className="hover:text-white transition">G마켓</a>
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
