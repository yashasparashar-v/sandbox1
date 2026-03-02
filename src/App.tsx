import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Screen = 'role' | 'teacher-signin' | 'student-signin' | 'student-profile' | 'home' | 'courses' | 'course-chat' | 'community' | 'projects' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('role');

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background-dark">
      <AnimatePresence mode="wait">
        {currentScreen === 'role' && <RoleSelection key="role" onNavigate={setCurrentScreen} />}
        {currentScreen === 'teacher-signin' && <TeacherSignIn key="teacher" onNavigate={setCurrentScreen} />}
        {currentScreen === 'student-signin' && <StudentSignIn key="student" onNavigate={setCurrentScreen} />}
        {currentScreen === 'student-profile' && <StudentProfileSetup key="profile" onNavigate={setCurrentScreen} />}
        {currentScreen === 'home' && <Home key="home" onNavigate={setCurrentScreen} />}
        {currentScreen === 'courses' && <Courses key="courses" onNavigate={setCurrentScreen} />}
        {currentScreen === 'course-chat' && <CourseChat key="course-chat" onNavigate={setCurrentScreen} />}
        {currentScreen === 'community' && <Community key="community" onNavigate={setCurrentScreen} />}
        {currentScreen === 'projects' && <Projects key="projects" onNavigate={setCurrentScreen} />}
        {currentScreen === 'profile' && <Profile key="profile" onNavigate={setCurrentScreen} />}
      </AnimatePresence>
    </div>
  );
}

function RoleSelection({ onNavigate }: { onNavigate: (screen: Screen) => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute inset-0 flex flex-col items-center justify-center p-6"
    >
      {/* Ambient Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJz48ZmlsdGVyIGlkPSdub2lzZSc+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuNjUnIG51bU9jdGF2ZXM9JzMnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbm9pc2UpJyBvcGFjaXR5PScwLjA1Jy8+PC9zdmc+')] opacity-30 mix-blend-overlay"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center h-full justify-center py-12">
        <div className="flex flex-col items-center gap-2 mb-12 w-full">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-[32px]">deployed_code</span>
            <h1 className="text-white text-[28px] font-semibold tracking-tight glow-text">sandbox</h1>
          </div>
          <h2 className="text-slate-200 text-[22px] font-medium tracking-tight text-center">Choose Your Access</h2>
        </div>

        <div className="flex flex-col gap-4 w-full justify-center">
          <button 
            onClick={() => onNavigate('student-signin')}
            className="group relative w-full h-[88px] bg-[#162a2d] hover:bg-[#1c3438] border border-white/10 rounded-2xl flex items-center p-0 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:border-primary/50 text-left"
          >
            <div className="h-full w-1 bg-primary absolute left-0 top-0"></div>
            <div className="flex items-center w-full px-5 pl-7 gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">school</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-white text-[16px] font-semibold tracking-wide group-hover:text-primary transition-colors">Student</span>
                <span className="text-slate-400 text-[13px] font-normal leading-tight">Join classes, collaborate, track progress</span>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                <span className="material-symbols-outlined text-primary">arrow_forward_ios</span>
              </div>
            </div>
          </button>

          <button 
            onClick={() => onNavigate('teacher-signin')}
            className="group relative w-full h-[88px] bg-[#162a2d] hover:bg-[#1c3438] border border-white/10 rounded-2xl flex items-center p-0 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:border-primary/50 text-left"
          >
            <div className="h-full w-1 bg-transparent group-hover:bg-primary absolute left-0 top-0 transition-colors duration-300"></div>
            <div className="flex items-center w-full px-5 pl-7 gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">person_book</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-white text-[16px] font-semibold tracking-wide group-hover:text-primary transition-colors">Teacher</span>
                <span className="text-slate-400 text-[13px] font-normal leading-tight">Manage courses, grade, mentor</span>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                <span className="material-symbols-outlined text-primary">arrow_forward_ios</span>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-auto pt-12 pb-6 flex flex-col items-center gap-4 w-full">
          <p className="text-slate-500 text-xs font-medium tracking-wide">Powered by sandbox</p>
          <div className="h-1 w-32 rounded-full bg-white/10"></div>
        </div>
      </div>
    </motion.div>
  );
}

function TeacherSignIn({ onNavigate }: { onNavigate: (screen: Screen) => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="absolute inset-0 flex flex-col h-full w-full max-w-md mx-auto relative"
    >
      <div className="absolute inset-0 z-0 opacity-40 bg-pixel-pattern pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 flex flex-col h-full w-full">
        <header className="flex items-center p-6 justify-between">
          <button onClick={() => onNavigate('role')} className="text-slate-100/70 hover:text-primary transition-colors flex size-10 shrink-0 items-center justify-center rounded-full active:bg-surface-dark">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h2 className="text-slate-100 text-lg font-bold tracking-tight text-center">Teacher Sign In</h2>
          <div className="size-10"></div>
        </header>

        <main className="flex-1 flex flex-col px-6 pt-6 pb-8">
          <div className="mb-10">
            <div className="size-12 rounded-xl bg-surface-dark border border-surface-border flex items-center justify-center mb-6 text-primary shadow-[0_0_20px_rgba(0,229,255,0.1)]">
              <span className="material-symbols-outlined text-[28px]">school</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-3">Welcome back,<br/><span className="text-primary">Professor</span>.</h1>
            <p className="text-slate-400 text-base font-normal leading-relaxed">
              Authenticate securely to access the sandbox ecosystem and manage your courses.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="group">
              <label className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-2 group-focus-within:text-primary transition-colors">Institutional Email</label>
              <div className="relative">
                <input className="w-full bg-surface-dark border border-surface-border rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 font-medium" placeholder="professor@university.edu" type="email"/>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-primary transition-colors">alternate_email</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-3">Verification Code</label>
              <div className="flex justify-between gap-2">
                {[1,2,3,4].map(i => (
                  <input key={i} className="w-full aspect-square bg-surface-dark border border-surface-border rounded-xl text-center text-2xl font-bold text-white focus:outline-none focus:border-primary transition-all duration-300 caret-primary focus:shadow-[0_0_0_1px_#00e5ff,0_0_15px_rgba(0,229,255,0.3)]" maxLength={1} placeholder="•" type="text"/>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xs text-slate-500">Code sent to email ending in ...@univ.edu</p>
                <button className="text-xs font-medium text-primary hover:text-white transition-colors">Resend Code</button>
              </div>
            </div>

            <button onClick={() => onNavigate('home')} className="mt-8 w-full bg-primary hover:bg-[#33ebff] text-background-dark font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2">
              <span>Enter Sandbox</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </main>

        <footer className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 opacity-60">
            <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">Powered by</span>
            <span className="text-sm font-bold text-slate-400 tracking-tighter">sandbox</span>
          </div>
          <div className="mt-6 flex justify-center gap-1">
            <div className="h-1 w-12 bg-slate-800 rounded-full"></div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}

function StudentSignIn({ onNavigate }: { onNavigate: (screen: Screen) => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="absolute inset-0 flex flex-col h-full w-full max-w-md mx-auto relative"
    >
      <header className="fixed top-0 w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center justify-between p-4 h-16 max-w-md mx-auto">
          <button onClick={() => onNavigate('role')} className="flex items-center justify-center text-white hover:text-primary transition-colors size-10 rounded-full hover:bg-white/5">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-white text-lg font-bold tracking-tight lowercase">sandbox</h2>
          <div className="size-10"></div>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center w-full max-w-md mx-auto px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pixel-texture opacity-100 pointer-events-none z-0"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
        
        <div className="relative z-10 w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-primary/10 rounded-2xl border border-primary/20 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
            </div>
            <h1 className="text-white text-3xl font-bold leading-tight mb-3">Student Sign In</h1>
            <p className="text-slate-400 text-base font-normal max-w-[280px] mx-auto">
              Enter your college email to access the academic ecosystem.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300 ml-1">College Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors">mail</span>
                </div>
                <input className="block w-full h-14 pl-12 pr-4 bg-input-bg border border-input-border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300" placeholder="student@university.edu" type="email"/>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-300 ml-1">Verification Code</label>
                <span className="text-xs text-primary font-medium cursor-pointer hover:underline">Resend in 0:24</span>
              </div>
              <div className="flex gap-2 justify-between">
                {[1,2,3,4,5,6].map(i => (
                  <input key={i} className="w-full aspect-[48/56] max-w-[48px] h-14 bg-input-bg border border-input-border rounded-lg text-center text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all caret-primary" maxLength={1} type="text" />
                ))}
              </div>
            </div>

            <button onClick={() => onNavigate('student-profile')} className="relative w-full h-14 mt-4 overflow-hidden rounded-xl bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 group shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center justify-center gap-2 text-background-dark text-base font-bold tracking-wide">
                Verify & Access
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              Having trouble? <a className="text-primary font-medium hover:underline decoration-2 underline-offset-4" href="#">Contact Support</a>
            </p>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

function StudentProfileSetup({ onNavigate }: { onNavigate: (screen: Screen) => void; key?: string }) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Coding', 'AI & ML', 'Physics']);

  const interests = ['Coding', 'Design', 'AI & ML', 'Robotics', 'Startup', 'Music', 'Physics', 'Literature'];

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="absolute inset-0 flex flex-col h-full w-full bg-background-dark"
    >
      <header className="flex items-center justify-between px-6 pt-14 pb-4 bg-background-dark shrink-0 z-10">
        <button onClick={() => onNavigate('student-signin')} className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-white/5 text-white transition-colors">
          <span className="material-symbols-outlined" style={{fontSize: '24px'}}>arrow_back</span>
        </button>
        <h1 className="text-[22px] font-medium text-white leading-tight tracking-tight">Complete Your Profile</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-32">
        <div className="max-w-md mx-auto space-y-8 pt-4">
          
          <div className="flex justify-center mb-6">
            <div className="relative group cursor-pointer" onClick={handleAvatarClick}>
              <div className="w-24 h-24 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center overflow-hidden">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-primary/50 text-4xl group-hover:text-primary transition-colors">person</span>
                )}
              </div>
              <div className="absolute bottom-0 right-0 bg-primary text-background-dark rounded-full p-1.5 border-4 border-background-dark flex items-center justify-center">
                <span className="material-symbols-outlined text-sm font-bold">add</span>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                className="hidden" 
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label className="text-slate-400 text-sm font-medium ml-1">Full Name</label>
              <div className="relative">
                <input className="w-full bg-input-bg border border-border-dark rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Enter your full name" type="text" defaultValue="Alex Chen"/>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-xl">person</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-slate-400 text-sm font-medium ml-1">Year</label>
              <div className="relative">
                <select className="w-full bg-input-bg border border-border-dark rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 appearance-none" defaultValue="2">
                  <option disabled value="">Select your year</option>
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Final Year</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">keyboard_arrow_down</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-slate-400 text-sm font-medium ml-1">Branch</label>
              <div className="relative">
                <select className="w-full bg-input-bg border border-border-dark rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 appearance-none" defaultValue="">
                  <option disabled value="">Select your branch</option>
                  <option value="cs">Computer Science</option>
                  <option value="ee">Electrical Engineering</option>
                  <option value="me">Mechanical Engineering</option>
                  <option value="ce">Civil Engineering</option>
                  <option value="bt">Biotech</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">keyboard_arrow_down</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex justify-between items-end mb-4 px-1">
              <h2 className="text-lg font-bold text-white">Interests</h2>
              <span className="text-xs text-slate-400">Select at least 3</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map(interest => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button 
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 flex items-center gap-2 ${
                      isSelected 
                        ? 'bg-primary/10 border border-primary text-primary hover:bg-primary/20' 
                        : 'bg-[#162224] border border-[#2a4649] text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {interest}
                    {isSelected && <span className="material-symbols-outlined text-[16px]">check</span>}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="h-8"></div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-background-dark/80 backdrop-blur-md border-t border-border-dark p-6 z-20">
        <div className="max-w-md mx-auto">
          <button onClick={() => onNavigate('home')} className="w-full bg-primary hover:bg-[#33ebff] text-background-dark font-bold text-base py-4 rounded-2xl shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300 transform active:scale-[0.98]">
            Complete Setup
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Home({ onNavigate }: { onNavigate: (screen: Screen) => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="absolute inset-0 flex flex-col h-full w-full bg-background-dark overflow-x-hidden pb-24 text-slate-100"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/5 bg-background-dark/80 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10">
            <img alt="User Avatar" className="h-full w-full object-cover" data-alt="Student profile portrait abstract" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJLedpeQmYR8kevp8f-Hd__IYDsq75ITwp6e9-Mq9D41MOnFV4YXm0bzGNjkmnryK9bUplC48sNmcmDr8crj0Ks53EvoP6SK2ZH_0yQLp5pWZ7td5logVnY8N7BaaOjNAe6KcGEauq7ChZ9C8OaG6tCoCahMj3uoZ-WIGQF7g1iFNRoIQBDVoEp2bjnr_XGT5p7hynHsDnrrgwZznzXeYphQbzap0QiEs8TdljwGXk5H3FXfaJnD6DMQHugAp9YuNbFUZP0lUIDYg"/>
          </div>
          <div>
            <h2 className="text-sm font-medium text-slate-400">Welcome back,</h2>
            <h1 className="text-lg font-bold leading-none tracking-tight text-white">Alex Chen</h1>
          </div>
        </div>
        <button className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-surface-dark transition-colors hover:border-primary/50 hover:text-primary">
          <span className="material-symbols-outlined text-xl group-hover:text-primary">notifications</span>
        </button>
      </header>
      <main className="flex-1 overflow-y-auto flex flex-col gap-6 p-4">
        {/* Classroom Hub Section */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Current Session</h3>
            <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Live
            </span>
          </div>
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface-dark">
            {/* Image Background with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-surface-dark/80 to-transparent z-10"></div>
              <img alt="Engineering Physics Lab" className="h-full w-full object-cover opacity-60 mix-blend-overlay" data-alt="Abstract physics wave pattern dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijKe1pbGj9NqOvmsqgr_K1_x0suKkSuG79vu31MEmYZ5r6A2y_dTzuHcqTpd-HTqwwOzc6cqHh7XGyCd78Wb-MNKfDHTejw8OH-DxzvAKDmF-a2YmvmKN9d2toEn1JRza3k0qfhSlrUxer6q_OS0LnxKIyY2IzPxj9eWv6w4Uup3vN31HzcMS_GT9dEKF2UERcEUPwMvf5jU68XeVau3coNXEYxdFpNrGoiGEnHqrY4Hhm5GntojL9VX6amONBnuHpv58XTcrBoc"/>
            </div>
            <div className="relative z-20 flex flex-col gap-4 p-5">
              <div className="flex justify-between items-start">
                <span className="rounded bg-white/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/5">PHY-101</span>
                <span className="text-xs font-mono text-primary">Due: 2h 15m</span>
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-white leading-tight">Engineering Physics</h2>
                <p className="text-sm text-slate-300 mt-1">Module 4: Quantum Mechanics Basics</p>
              </div>
              <div className="mt-2 flex flex-col gap-3 rounded-lg border border-white/5 bg-black/20 p-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">quiz</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">Active Quiz</span>
                    <span className="text-xs text-slate-400">12 questions remaining</span>
                  </div>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[65%] rounded-full bg-primary"></div>
                </div>
              </div>
              <button className="mt-2 w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-background-dark hover:bg-primary/90 transition-all">
                <span>Resume Session</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
        {/* Quick Stats Row */}
        <section className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 rounded-xl border border-white/5 bg-surface-dark p-4 hover:border-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl text-slate-400 mb-1">schedule</span>
            <span className="text-2xl font-bold text-white">87%</span>
            <span className="text-xs text-slate-400">Attendance Rate</span>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border border-white/5 bg-surface-dark p-4 hover:border-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl text-slate-400 mb-1">military_tech</span>
            <span className="text-2xl font-bold text-white">3.8</span>
            <span className="text-xs text-slate-400">Current GPA</span>
          </div>
        </section>
        {/* Community Feed */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Community Feed</h3>
            <button className="text-xs text-primary hover:text-white transition-colors">View All</button>
          </div>
          {/* Filter Chips */}
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            <button className="whitespace-nowrap rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
              Trending
            </button>
            <button className="whitespace-nowrap rounded-lg border border-white/5 bg-surface-dark px-4 py-2 text-xs font-medium text-slate-400 hover:bg-surface-highlight hover:text-white transition-colors">
              Engineering
            </button>
            <button className="whitespace-nowrap rounded-lg border border-white/5 bg-surface-dark px-4 py-2 text-xs font-medium text-slate-400 hover:bg-surface-highlight hover:text-white transition-colors">
              Campus Life
            </button>
            <button className="whitespace-nowrap rounded-lg border border-white/5 bg-surface-dark px-4 py-2 text-xs font-medium text-slate-400 hover:bg-surface-highlight hover:text-white transition-colors">
              Projects
            </button>
          </div>
          {/* Post Cards */}
          <div className="flex flex-col gap-3">
            {/* Post 1 */}
            <article className="flex flex-col gap-3 rounded-xl border border-white/5 bg-surface-dark p-4 transition-all hover:border-white/10 hover:bg-surface-highlight">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600"></div>
                  <span className="text-xs font-medium text-slate-300">u/Sarah_Eng</span>
                  <span className="text-xs text-slate-500">• 2h ago</span>
                </div>
                <span className="rounded bg-background-dark px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary border border-white/5">Help Needed</span>
              </div>
              <h4 className="text-base font-semibold text-white leading-snug">Best resources for thermodynamics final prep?</h4>
              <p className="text-sm text-slate-400 line-clamp-2">I'm struggling with the Carnot cycle concepts specifically. Does anyone have good video recommendations or simplified notes?</p>
              <div className="mt-1 flex items-center gap-4 border-t border-white/5 pt-3">
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">arrow_upward</span>
                  <span className="text-xs font-medium">42</span>
                </button>
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">chat_bubble</span>
                  <span className="text-xs font-medium">12</span>
                </button>
                <button className="ml-auto text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">bookmark</span>
                </button>
              </div>
            </article>
            {/* Post 2 */}
            <article className="flex flex-col gap-3 rounded-xl border border-white/5 bg-surface-dark p-4 transition-all hover:border-white/10 hover:bg-surface-highlight">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-green-500 to-teal-600"></div>
                  <span className="text-xs font-medium text-slate-300">u/DevTeam_Alpha</span>
                  <span className="text-xs text-slate-500">• 5h ago</span>
                </div>
                <span className="rounded bg-background-dark px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-400 border border-white/5">Showcase</span>
              </div>
              <h4 className="text-base font-semibold text-white leading-snug">Our robotics team just qualified for nationals! 🤖</h4>
              {/* Embedded Image Preview */}
              <div className="relative mt-1 h-32 w-full overflow-hidden rounded-lg border border-white/5">
                <img alt="Robot prototype" className="h-full w-full object-cover" data-alt="Mechanical robot arm blueprint dark blue" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMloCSlC8GxJyzEh7OcbIRieE-5EsPnfJJIrEBuOGphaY0gOcoJVUXWATL0F5SHRm2NGFzu3vpn0mxCDkXwq3TqoFRdP1uJDfEoxiLKqJZ6oQHTUF4nz15MXOXMcRIQbS-xoI47ZwiwH0AmXtqR6gmpx92KJPAedWLu70cN9UPegQg19B01e9iAq3aCHVhqd0CyBg7LwV5ZcEDAYBV32tWc8RqoLzypQQxr6UP9_cEzMsuAGTghWeH8S_kJfjx-cfvVccFRLkTqM"/>
              </div>
              <div className="mt-1 flex items-center gap-4 border-t border-white/5 pt-3">
                <button className="flex items-center gap-1.5 text-primary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg fill-current">arrow_upward</span>
                  <span className="text-xs font-medium">156</span>
                </button>
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">chat_bubble</span>
                  <span className="text-xs font-medium">34</span>
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-[#102123]/95 backdrop-blur-lg pb-4">
        <div className="flex items-center justify-around px-2 pt-2 pb-4">
          <a onClick={() => onNavigate('home')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-primary cursor-pointer">
            <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90 [font-variation-settings:'FILL'_1]">home</span>
            <span className="text-[10px] font-medium tracking-wide">Home</span>
          </a>
          <a onClick={() => onNavigate('courses')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">school</span>
            <span className="text-[10px] font-medium tracking-wide">Classroom</span>
          </a>
          <a onClick={() => onNavigate('community')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">groups</span>
            <span className="text-[10px] font-medium tracking-wide">Community</span>
          </a>
          <a onClick={() => onNavigate('profile')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">person</span>
            <span className="text-[10px] font-medium tracking-wide">Profile</span>
          </a>
        </div>
      </nav>
    </motion.div>
  );
}

function Courses({ onNavigate }: { onNavigate: (screen: Screen) => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="absolute inset-0 flex flex-col h-full w-full bg-background-dark overflow-x-hidden text-slate-100"
    >
      <div className="relative flex min-h-screen w-full flex-col bg-[url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.03\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E')] bg-cover">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-5 py-4">
          <h2 className="text-[22px] font-bold leading-tight tracking-tight text-white">Classrooms</h2>
          <button className="flex items-center justify-center rounded-full p-2 text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>
        </div>
        {/* Scrollable List */}
        <div className="flex-1 flex flex-col w-full pb-24">
          {/* Item 1: Active Quiz */}
          <div onClick={() => onNavigate('course-chat')} className="group flex cursor-pointer items-center gap-4 border-b border-white/5 px-5 py-4 hover:bg-white/[0.02] transition-colors">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10 text-white font-bold tracking-wider">
              OS
              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-neon-mint shadow-[0_0_8px_rgba(30,255,178,0.6)]"></div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-0.5 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="truncate text-[15px] font-bold text-white">Operating Systems</p>
                <span className="text-xs font-medium text-neon-mint">Quiz Active</span>
              </div>
              <p className="truncate text-sm font-normal text-slate-400">Project deadline extended to Friday.</p>
            </div>
          </div>
          {/* Item 2: Unread Count */}
          <div onClick={() => onNavigate('course-chat')} className="group flex cursor-pointer items-center gap-4 border-b border-white/5 px-5 py-4 hover:bg-white/[0.02] transition-colors">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10 text-white font-bold tracking-wider">
              DB
            </div>
            <div className="flex flex-1 flex-col justify-center gap-0.5 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="truncate text-[15px] font-bold text-white">Database Management</p>
                <span className="text-xs text-slate-500">10:42 AM</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="truncate text-sm font-normal text-slate-300">New quiz available: SQL Basics</p>
                <div className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary-alt px-1.5 text-[10px] font-bold text-background-dark shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                  3
                </div>
              </div>
            </div>
          </div>
          {/* Item 3: Standard */}
          <div onClick={() => onNavigate('course-chat')} className="group flex cursor-pointer items-center gap-4 border-b border-white/5 px-5 py-4 hover:bg-white/[0.02] transition-colors">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10 text-white font-bold tracking-wider">
              CA
            </div>
            <div className="flex flex-1 flex-col justify-center gap-0.5 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="truncate text-[15px] font-bold text-white">Computer Architecture</p>
                <span className="text-xs text-slate-500">Yesterday</span>
              </div>
              <p className="truncate text-sm font-normal text-slate-400">Lecture notes uploaded for Week 4.</p>
            </div>
          </div>
          {/* Item 4: Active Quiz & Unread */}
          <div onClick={() => onNavigate('course-chat')} className="group flex cursor-pointer items-center gap-4 border-b border-white/5 px-5 py-4 hover:bg-white/[0.02] transition-colors">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10 text-white font-bold tracking-wider">
              AL
              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-neon-mint shadow-[0_0_8px_rgba(30,255,178,0.6)]"></div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-0.5 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="truncate text-[15px] font-bold text-white">Algorithms II</p>
                <span className="text-xs text-slate-500">Yesterday</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="truncate text-sm font-normal text-slate-300">Grade released: Midterm Exam</p>
                <div className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary-alt px-1.5 text-[10px] font-bold text-background-dark shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                  1
                </div>
              </div>
            </div>
          </div>
          {/* Item 5: Standard */}
          <div onClick={() => onNavigate('course-chat')} className="group flex cursor-pointer items-center gap-4 border-b border-white/5 px-5 py-4 hover:bg-white/[0.02] transition-colors">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10 text-white font-bold tracking-wider">
              SE
            </div>
            <div className="flex flex-1 flex-col justify-center gap-0.5 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="truncate text-[15px] font-bold text-white">Software Engineering</p>
                <span className="text-xs text-slate-500">Mon</span>
              </div>
              <p className="truncate text-sm font-normal text-slate-400">Team assignments have been posted.</p>
            </div>
          </div>
          {/* Item 6: Standard */}
          <div onClick={() => onNavigate('course-chat')} className="group flex cursor-pointer items-center gap-4 border-b border-white/5 px-5 py-4 hover:bg-white/[0.02] transition-colors">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10 text-white font-bold tracking-wider">
              ML
            </div>
            <div className="flex flex-1 flex-col justify-center gap-0.5 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="truncate text-[15px] font-bold text-white">Machine Learning</p>
                <span className="text-xs text-slate-500">Mon</span>
              </div>
              <p className="truncate text-sm font-normal text-slate-400">Reminder: Read Chapter 5 before lab.</p>
            </div>
          </div>
          {/* Item 7: Standard */}
          <div onClick={() => onNavigate('course-chat')} className="group flex cursor-pointer items-center gap-4 border-b border-white/5 px-5 py-4 hover:bg-white/[0.02] transition-colors">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10 text-white font-bold tracking-wider">
              CN
            </div>
            <div className="flex flex-1 flex-col justify-center gap-0.5 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="truncate text-[15px] font-bold text-white">Computer Networks</p>
                <span className="text-xs text-slate-500">Sun</span>
              </div>
              <p className="truncate text-sm font-normal text-slate-400">Packet Tracer simulation due tomorrow.</p>
            </div>
          </div>
        </div>
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-[#102123]/95 backdrop-blur-lg pb-4">
          <div className="flex items-center justify-around px-2 pt-2 pb-4">
            <a onClick={() => onNavigate('home')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">home</span>
              <span className="text-[10px] font-medium tracking-wide">Home</span>
            </a>
            <a onClick={() => onNavigate('courses')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-primary cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90 [font-variation-settings:'FILL'_1]">school</span>
              <span className="text-[10px] font-medium tracking-wide">Classroom</span>
            </a>
            <a onClick={() => onNavigate('community')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">groups</span>
              <span className="text-[10px] font-medium tracking-wide">Community</span>
            </a>
            <a onClick={() => onNavigate('profile')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">person</span>
              <span className="text-[10px] font-medium tracking-wide">Profile</span>
            </a>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}

function CourseChat({ onNavigate }: { onNavigate: (screen: Screen) => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="absolute inset-0 flex flex-col h-full w-full bg-background-dark overflow-hidden"
    >
      {/* Top App Bar */}
      <header className="flex items-center justify-between p-4 bg-background-dark border-b border-slate-800 z-10 shrink-0">
        <button onClick={() => onNavigate('courses')} className="text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-tight">Advanced Calculus</h2>
          <p className="text-slate-400 text-xs font-medium tracking-wide uppercase">24 Members</p>
        </div>
        <button className="text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-2xl">more_vert</span>
        </button>
      </header>
      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 bg-background-dark bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]">
        {/* Timestamp */}
        <div className="flex justify-center my-2">
          <span className="text-xs font-medium text-slate-500 bg-slate-800 px-3 py-1 rounded-full">Today, 9:41 AM</span>
        </div>
        {/* Teacher Message (Left) */}
        <div className="flex items-end gap-3 self-start max-w-[85%] group">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0 ring-2 ring-background-dark" data-alt="Portrait of Dr. Aris" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHe9Kxbh_8TiMXIIOl5m5hgOSyF6_hYuHFeepdNmvU8L_ikHL1jjd9tztD_1xj_prOZjEvlD5S6L0Ce0R9Fs2MpNQ9rpvHYkt5S9AgFR-klB1YKN_duo4Rhblxb6GqO2iedNc8zcn9lmrrL1249BIGrbmLYHzTJyEpy8lMHu-IWbziHzMPDNewobLq5CphQHNx856pfQHH110CUi-ToMp50hZDSvdVprl6Wc8O2KQpqVQZHgfSFe-mW4ujHTqv19tA0D8sER3zNek")'}}></div>
          <div className="flex flex-col gap-1 items-start">
            <p className="text-slate-400 text-xs font-medium ml-1">Dr. Aris</p>
            <div className="relative text-base font-normal leading-relaxed rounded-2xl rounded-bl-none px-5 py-3 bg-message-teacher text-slate-100 shadow-sm border border-slate-800 overflow-hidden">
              {/* Neon Mint Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-mint"></div>
              <p className="pl-2">Good morning class. Please review the lecture notes on partial derivatives before tomorrow's lab.</p>
            </div>
          </div>
        </div>
        {/* Student Message (Right - You) */}
        <div className="flex items-end gap-3 self-end max-w-[85%] flex-row-reverse group">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0 ring-2 ring-background-dark" data-alt="Portrait of student" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnxoBJpRo4dBBEwXxtePgHL-U0Og7Cb-RJ210AY-rNk4SnLLQoJCd1bOBFhXAqNdSJQBCcUsaaqHucTOaLLIEPPHDqnhpc8MaIhgeFK4b0hGpHzNLsHPfErsZSoYG5qOwIzuHhaP_N-qVgXysCqX2Mwgjc7AICp7Eh8tjN9WHCAu7ucLRnFWiqQAOVmeBm9MjnusgbKD7t9btwgc9UFZ1tsoXuDWqe8PQaZ7nSRYa5nNo2G0LZtEJurIb1KobtcMRm24Da0NvqiK0")'}}></div>
          <div className="flex flex-col gap-1 items-end">
            <div className="text-base font-normal leading-relaxed rounded-2xl rounded-br-none px-5 py-3 bg-surface-dark text-slate-100 shadow-sm border border-slate-800">
              <p>Will the lab cover chain rule applications as well?</p>
            </div>
            <span className="text-[10px] text-slate-500 mr-1">Read 9:45 AM</span>
          </div>
        </div>
        {/* System Message: New Quiz */}
        <div className="w-full max-w-md mx-auto my-2">
          <div className="relative flex flex-col gap-3 rounded-2xl bg-surface-dark p-1 shadow-lg border border-slate-800 overflow-hidden">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-alt to-neon-mint"></div>
            <div className="flex items-stretch gap-4 p-4">
              <div className="flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary-alt text-xl">assignment</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-alt">Assignment</span>
                </div>
                <h3 className="text-white text-lg font-bold leading-tight">Chain Rule Quiz</h3>
                <p className="text-slate-400 text-sm">Due tomorrow at 11:59 PM</p>
              </div>
              <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0" data-alt="Abstract 3D geometric shape representing calculus" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbeQpUOF0I0Z1w3ugKWDTmvdMtP2uqCFKs0M1oQ9_Sgg4ZISLoHbYY_SKZhWSJ-zW2AFx-7WRMS96fUSxXlLe55FBCfH6Whf4rZKvc9O_GTHpALhlzD2HpzVoXDdMShNjRDpaBYahf8yW4rQsFDu_dvkWpZ1OlkUffuZ8PWL8PnI6LETXE5skpJq42otT3sb0XG5cA9MacgU6dduKvHjQ3zG5PBmY39m4a6HNKwRrRKOgczJ8nHGNu5o9iyJ7jriUBOZWInkqpD2o")'}}></div>
            </div>
            <button className="mx-4 mb-4 mt-1 flex items-center justify-center gap-2 rounded-xl border border-primary-alt text-primary-alt hover:bg-primary-alt hover:text-white transition-all h-10 text-sm font-semibold tracking-wide">
              <span>Attempt Now</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
        {/* Teacher Message (Left) */}
        <div className="flex items-end gap-3 self-start max-w-[85%] group">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0 ring-2 ring-background-dark" data-alt="Portrait of Dr. Aris" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpUwJKMkCc7o2jxDyi_oUgWmQXCDCOb443WFfrvIbsr7LUX4hTzc9dQC-46ZjypmtZj9ruGdk6YpOrAxKpLHD-VGsmAZOwHwPDnnffqKFrvYlGFPpeGzGLyn0m2wnATmpNlrd8A_aKfrbEbBOJs_sKW7VWIvltwCf1Gkg0sp-InyLp-qgKMr1JJeBabiPdKa6xVqn5HV1gK2aG7voBOOMZCrmvLrvVwEmZxHYcNeCrACJg-rtOu7-6F_OZE64D8bfGXEYxQQ6L3ck")'}}></div>
          <div className="flex flex-col gap-1 items-start">
            <p className="text-slate-400 text-xs font-medium ml-1">Dr. Aris</p>
            <div className="relative text-base font-normal leading-relaxed rounded-2xl rounded-bl-none px-5 py-3 bg-message-teacher text-slate-100 shadow-sm border border-slate-800 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-mint"></div>
              <p className="pl-2">Yes, specifically focusing on multivariable functions. Be prepared.</p>
            </div>
          </div>
        </div>
        {/* Spacer for input area */}
        <div className="h-16"></div>
      </main>
      {/* Bottom Input Area */}
      <footer className="p-4 bg-background-dark border-t border-slate-800 z-10 shrink-0">
        <div className="flex items-center gap-3">
          <button className="text-slate-500 hover:text-primary-alt transition-colors p-2 rounded-full hover:bg-slate-800">
            <span className="material-symbols-outlined text-2xl">add_circle</span>
          </button>
          <div className="flex-1 relative">
            <input className="w-full bg-surface-dark text-slate-100 placeholder-slate-500 text-base rounded-full border-none py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary-alt/50 shadow-sm" placeholder="Type a message..." type="text"/>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary-alt">
              <span className="material-symbols-outlined text-xl">sentiment_satisfied</span>
            </button>
          </div>
          <button className="flex items-center justify-center size-12 bg-primary-alt hover:bg-blue-600 text-white rounded-full shadow-lg shadow-primary-alt/30 transition-transform active:scale-95">
            <span className="material-symbols-outlined text-xl -ml-0.5 mt-0.5">send</span>
          </button>
        </div>
        {/* Home indicator bar approximation for iOS */}
        <div className="h-1 w-32 bg-slate-700 rounded-full mx-auto mt-6 mb-1"></div>
      </footer>
    </motion.div>
  );
}

function Community({ onNavigate }: { onNavigate: (screen: Screen) => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="absolute inset-0 flex flex-col h-full w-full bg-background-dark overflow-x-hidden text-slate-100"
    >
      <div className="relative flex min-h-screen w-full flex-col bg-[url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.03\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E')] bg-cover">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-border-dark">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => onNavigate('home')} className="flex h-10 w-10 items-center justify-center rounded-full text-slate-100 hover:bg-surface-dark transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-lg font-bold tracking-tight text-slate-100">Community</h1>
            <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-100 bg-primary-alt hover:bg-primary-alt/90 transition-colors shadow-[0_0_15px_rgba(6,127,249,0.3)]">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          {/* Segmented Control */}
          <div className="px-4 pb-0 mt-2">
            <div className="flex w-full border-b border-border-dark">
              <button className="flex-1 pb-3 text-sm font-medium text-primary-alt border-b-2 border-primary-alt transition-all">
                Connect
              </button>
              <button className="flex-1 pb-3 text-sm font-medium text-slate-400 hover:text-slate-200 border-b-2 border-transparent hover:border-border-dark transition-all">
                Resources
              </button>
              <button onClick={() => onNavigate('projects')} className="flex-1 pb-3 text-sm font-medium text-slate-400 hover:text-slate-200 border-b-2 border-transparent hover:border-border-dark transition-all">
                Projects
              </button>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 flex flex-col pt-4 px-4 pb-24 space-y-6">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-primary-alt transition-colors">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="block w-full rounded-xl border-none bg-surface-dark py-3.5 pl-11 pr-4 text-sm text-slate-100 placeholder:text-slate-400 focus:ring-1 focus:ring-primary-alt shadow-sm outline-none" placeholder="Search sandbox IDs..." type="text"/>
          </div>
          
          {/* Suggested Connection Card */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 pl-1">Suggested Connection</h3>
            <div className="bg-surface-dark rounded-xl p-4 border border-border-dark shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img alt="Student profile portrait" className="h-16 w-16 rounded-full object-cover border-2 border-border-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_gxQYx0tbRXEPZW4zYIMtS7FizmTqJePRLiLZ4-KCt61ovrIn8pymJ6qsMBp-GSNko_xcjVPNEJqLrQz9d3cncrUT2ZfmkwJdEHBrAOUrnOc4YuJpU5ZqTXFDdx5KKxvSjHXihzque7oujHKoitX2Rniw2asWQS9HFW8wYRP2F6vXFf3BmlZ03jome2ZRzP6hVZ4r6hcAvva7_a60EzI08kJrrE0IchwKlnhsrqLJjDXTZ-gtCdKaGiHaPZTDBc--FfczZDfPgd0"/>
                  <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-surface-dark"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-bold text-slate-100 truncate">Sarah Chen</h4>
                      <p className="text-xs text-primary-alt font-medium mt-0.5">CS | Year 3</p>
                    </div>
                    <button className="h-8 px-4 rounded-full border border-primary-alt text-primary-alt text-xs font-semibold hover:bg-primary-alt hover:text-white transition-colors">
                      Connect
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-surface-dark border border-border-dark text-slate-400">Python</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-surface-dark border border-border-dark text-slate-400">React Native</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-surface-dark border border-border-dark text-slate-400">UI/UX</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Direct Chats List */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-2 pl-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Direct Chats</h3>
              <button className="text-xs text-primary-alt font-medium hover:text-blue-400">View All</button>
            </div>
            <div className="flex flex-col space-y-1">
              {/* Chat Item 1 */}
              <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-surface-dark transition-colors cursor-pointer relative overflow-hidden">
                <div className="relative shrink-0">
                  <img alt="Male student portrait" className="h-12 w-12 rounded-full object-cover bg-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN46aJPrb97gdsaP_ab19Or1lq0-ACmxXT0rKs0uCWVbL9JUx7EZHQKO_pW5kyl1uTz9VnjC7QOThdxdJbHU7hS3OtiyRusF3LqoFRPxEMglSSUXv_5xa_Xx57vGP13cVE-CO0_xFwEOfyf1djcdJDEoKt9tkN4ANrz5ucq6dJZ4Fcm1l4yAVxEJyDA_kL10U5vt74i6yjIqWT7uXQJ_7eHSAGT2Ni3KEXQ8ZsJ8j73aPYDOGd77AXqi8_ZFVCDfi-lI6ko1voqAk"/>
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-background-dark"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="text-sm font-semibold text-slate-100 truncate">Marcus Johnson</h4>
                    <span className="text-[10px] text-primary-alt font-medium">12:45 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-slate-300 truncate pr-4">Can you review the circuit diagram for the...</p>
                    <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary-alt px-1.5 text-[10px] font-bold text-white shadow-[0_0_10px_rgba(6,127,249,0.4)]">2</span>
                  </div>
                </div>
              </div>
              {/* Chat Item 2 */}
              <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-surface-dark transition-colors cursor-pointer">
                <div className="relative shrink-0">
                  <img alt="Female student smiling" className="h-12 w-12 rounded-full object-cover bg-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtQ60X4mOOuBYTEMCuLXHE7hUhVsquVr_xvoO6HeXePoAW-U7E_G8meS5oFT6xK2QRSOgteTMXiu_cV-0wgj3UjF9fmO5C3GjdhiXFi4XKf726vAsu5Y0nkkH_Jz7P3-2Lg7F6DTZM2hiQsSaa1FJ1Rlq-LZEquW3BWPrMRZsloKkOSgC_viM68NqbSyT4DlPxcvEr5xpLKOjxZqILrlvjsDw32-v_BR0ZxWKtqAzgxv9bnpXW8aUe0NjZa8dKjBiM10gRl6h3piA"/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="text-sm font-semibold text-slate-100 truncate">Elena Rodriguez</h4>
                    <span className="text-[10px] text-slate-400">Yesterday</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-slate-400 truncate pr-4">Uploaded the CAD files to the shared folder.</p>
                  </div>
                </div>
              </div>
              {/* Chat Item 3 */}
              <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-surface-dark transition-colors cursor-pointer">
                <div className="relative shrink-0">
                  <img alt="Male student with glasses" className="h-12 w-12 rounded-full object-cover bg-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC30ZmaZuVvueKiBrE3K9lQohbmRwUu6anVnO-mY6N_A16SYOFMNlIG7aXYWLI1bOquKZq5ZXVpY4esWIxs09rNTDGzvfVVzCKUY_a9WxHeu313dfsCp8HqwheFqy5zy4vaz_aaTC-XoybWzHdWP-36UaYCSwwKYT05uuwKoRuD-ouBaSgtk2BByDwNOCvveC-IATe6IGF8qbGEO_39P4cg9WSCzlGY8FOaTQNn90aQzUpHLkRUl-Y4FC1owol9RtJ9QYfrlxAYAk"/>
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-500 ring-2 ring-background-dark"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="text-sm font-semibold text-slate-100 truncate">David Kim</h4>
                    <span className="text-[10px] text-slate-400">Mon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-slate-400 truncate pr-4">Let's meet at the lab around 2PM?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-[#102123]/95 backdrop-blur-lg pb-4">
          <div className="flex items-center justify-around px-2 pt-2 pb-4">
            <a onClick={() => onNavigate('home')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">home</span>
              <span className="text-[10px] font-medium tracking-wide">Home</span>
            </a>
            <a onClick={() => onNavigate('courses')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">school</span>
              <span className="text-[10px] font-medium tracking-wide">Classroom</span>
            </a>
            <a onClick={() => onNavigate('community')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-primary cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90 [font-variation-settings:'FILL'_1]">groups</span>
              <span className="text-[10px] font-medium tracking-wide">Community</span>
            </a>
            <a onClick={() => onNavigate('profile')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">person</span>
              <span className="text-[10px] font-medium tracking-wide">Profile</span>
            </a>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}

function Projects({ onNavigate }: { onNavigate: (screen: Screen) => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="absolute inset-0 flex flex-col h-full w-full bg-background-dark overflow-x-hidden text-slate-100"
    >
      <div className="relative flex min-h-screen w-full flex-col bg-[url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.03\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E')] bg-cover">
        {/* Header Section */}
        <div className="sticky top-0 z-20 bg-background-dark/95 backdrop-blur-md border-b border-border-dark">
          <div className="flex items-center justify-between p-4 pb-2">
            <button onClick={() => onNavigate('community')} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-surface-dark transition-colors">
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Community</h2>
            <button className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-surface-dark transition-colors">
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>
          {/* Segmented Control */}
          <div className="px-4 py-3">
            <div className="flex h-10 w-full items-center justify-center rounded-lg bg-surface-dark p-1">
              <label className="flex cursor-pointer h-full grow items-center justify-center rounded-[calc(0.5rem-2px)] transition-all bg-[#252a33] text-primary-alt shadow-sm text-sm font-semibold">
                <span className="truncate">Projects</span>
                <input defaultChecked className="hidden" name="view-type" type="radio" value="Projects"/>
              </label>
              <label onClick={() => onNavigate('community')} className="flex cursor-pointer h-full grow items-center justify-center rounded-[calc(0.5rem-2px)] transition-all text-slate-400 text-sm font-semibold hover:text-slate-300">
                <span className="truncate">Discussions</span>
                <input className="hidden" name="view-type" type="radio" value="Discussions"/>
              </label>
            </div>
          </div>
          {/* Filter Chips */}
          <div className="flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary-alt bg-primary-alt/10 px-4 transition-colors hover:bg-primary-alt/20">
              <span className="text-primary-alt text-xs font-bold uppercase tracking-wide">All</span>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-slate-700 bg-transparent px-4 transition-colors hover:border-primary-alt hover:text-primary-alt text-slate-400">
              <span className="text-xs font-medium">Robotics</span>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-slate-700 bg-transparent px-4 transition-colors hover:border-primary-alt hover:text-primary-alt text-slate-400">
              <span className="text-xs font-medium">Software</span>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-slate-700 bg-transparent px-4 transition-colors hover:border-primary-alt hover:text-primary-alt text-slate-400">
              <span className="text-xs font-medium">Electrical</span>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-slate-700 bg-transparent px-4 transition-colors hover:border-primary-alt hover:text-primary-alt text-slate-400">
              <span className="text-xs font-medium">AI</span>
            </button>
          </div>
        </div>
        
        {/* Main Content: Project List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
          {/* Featured Card */}
          <div className="relative overflow-hidden rounded-xl bg-surface-dark border border-slate-800 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
            <div className="h-48 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Futuristic autonomous drone hovering in a lab environment" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhK_lm7TSc2DX4NNpcob8SHD-g5_G784UJEjdyWe5f5_xHAFp1uuf_tLMwI2yDkFjWTrwwO-I7DqQrB25_ATUrW24lhrcJ-ydj3bazNbMbbL3tVpSQPixQFqKyMTYBaXFdOr4M00PSA_b_kGXZdnj9y5bfSlAiznr7bfvqnZUzaQV0Pqa5nYUdVpUbTSgvFAzQdgNsvF0oU6NmCitWtiDH-tcGnN8AK7hE82SR2g53NlhDYSRsLf-E6ySzk9-yAP8OHgGb0o3pFpI')"}}>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary-alt text-white">Featured</span>
                <span className="text-slate-300 text-xs font-medium">4 weeks left</span>
              </div>
              <h3 className="text-white text-xl font-bold leading-tight mb-1">Autonomous Drone Swarm</h3>
              <p className="text-slate-300 text-sm mb-4">Dr. Aris Thorne • Applied Robotics</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2 overflow-hidden">
                  <img alt="User Avatar" className="inline-block size-6 rounded-full ring-2 ring-surface-dark object-cover" data-alt="Portrait of a young female student" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsOoGWnlcyoAnjHjQ83xLwneCjJODkezou-NJr58Oa0IBX-soQ_Pgtos2vvn4AhSbPkIW9Vf9aA-mOkxVkNKgeF8XhQKKzC51scyaWRB4ZZVzRKoSGgc2tzeKiDdKtvJDWZLuc7ug8SK89Mu-Og2ocde3ZyZNO8LbZWuYVfnSfgrp64pALsB4k39CCkUlhYtPHQUhszy8QxzYpwvWh38TjdL9S4UjUTMZ7ZJVqqC35l2hN2WBKrxuGcbt4XVCadYQzPy5lQkpF6nM"/>
                  <img alt="User Avatar" className="inline-block size-6 rounded-full ring-2 ring-surface-dark object-cover" data-alt="Portrait of a young male student" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0kYofv7mKdbSGQhXffx9Gi4mSQVeXXovcStIoLUaSp9up_hUKGhXFd5zVYQjttDwQNmyFF-ThlLKjDZOqg9quPYLuB91XH-pa4jRbrR5ePrHCJh6HpBA8XfJfhPDOmvplqP5E40ADB6IjkWdQEqsLCW8GWcTn0JFyVXgDRNp3gntYwzq3SXU5e0Z5_uqT-cCHv3nEXjcjdCxClqtOTW34keKvXGqXdN2ZI71mHEN-PKvC9xpP1IThxLAcGqMppqa2RoO0PZ1kEBw"/>
                  <div className="flex size-6 items-center justify-center rounded-full bg-slate-700 ring-2 ring-surface-dark text-[10px] font-medium text-white">+12</div>
                </div>
                <button className="bg-white text-slate-900 hover:bg-slate-200 px-4 py-1.5 rounded-full text-xs font-bold transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          {/* Standard Card 1 */}
          <div className="flex flex-col gap-3 rounded-xl bg-surface-dark p-4 border border-slate-800 hover:border-primary-alt/50 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-lg font-bold leading-tight">Neural Network Visualizer</h3>
                <p className="text-slate-400 text-sm mt-1">Prof. Elena Volkov</p>
              </div>
              <span className="flex items-center justify-center size-8 rounded-full bg-slate-800 text-slate-400">
                <span className="material-symbols-outlined text-lg">bookmark</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-2 my-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-900/30 text-blue-300">Python</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-purple-900/30 text-purple-300">TensorFlow</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-teal-900/30 text-teal-300">Data Viz</span>
            </div>
            <div className="flex items-end justify-between mt-1 pt-3 border-t border-slate-800">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">group</span>
                  <span>24 Applicants</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>Ends in 5 days</span>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg border border-primary-alt text-primary-alt hover:bg-primary-alt hover:text-white text-sm font-bold transition-all uppercase tracking-wide">
                Apply
              </button>
            </div>
          </div>
          {/* Standard Card 2 */}
          <div className="flex flex-col gap-3 rounded-xl bg-surface-dark p-4 border border-slate-800 hover:border-primary-alt/50 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-lg font-bold leading-tight">Mars Rover Suspension System</h3>
                <p className="text-slate-400 text-sm mt-1">Dr. James Chen</p>
              </div>
              <span className="flex items-center justify-center size-8 rounded-full bg-slate-800 text-slate-400">
                <span className="material-symbols-outlined text-lg">bookmark</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-2 my-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-orange-900/30 text-orange-300">Mechanical</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-700/50 text-slate-300">CAD</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-900/30 text-red-300">Simulations</span>
            </div>
            <div className="flex items-end justify-between mt-1 pt-3 border-t border-slate-800">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">group</span>
                  <span>8 Applicants</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>Ends in 12 days</span>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg border border-primary-alt text-primary-alt hover:bg-primary-alt hover:text-white text-sm font-bold transition-all uppercase tracking-wide">
                Apply
              </button>
            </div>
          </div>
          {/* Standard Card 3 */}
          <div className="flex flex-col gap-3 rounded-xl bg-surface-dark p-4 border border-slate-800 hover:border-primary-alt/50 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-lg font-bold leading-tight">Eco-Friendly Concrete Research</h3>
                <p className="text-slate-400 text-sm mt-1">Civil Eng. Dept</p>
              </div>
              <span className="flex items-center justify-center size-8 rounded-full bg-slate-800 text-slate-400">
                <span className="material-symbols-outlined text-lg">bookmark</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-2 my-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-900/30 text-green-300">Materials</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-700/50 text-slate-300">Lab Work</span>
            </div>
            <div className="flex items-end justify-between mt-1 pt-3 border-t border-slate-800">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">group</span>
                  <span>45 Applicants</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>Closing Soon</span>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg border border-primary-alt text-primary-alt hover:bg-primary-alt hover:text-white text-sm font-bold transition-all uppercase tracking-wide">
                Apply
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-[#102123]/95 backdrop-blur-lg pb-4">
          <div className="flex items-center justify-around px-2 pt-2 pb-4">
            <a onClick={() => onNavigate('home')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">home</span>
              <span className="text-[10px] font-medium tracking-wide">Home</span>
            </a>
            <a onClick={() => onNavigate('courses')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">school</span>
              <span className="text-[10px] font-medium tracking-wide">Classroom</span>
            </a>
            <a onClick={() => onNavigate('community')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-primary cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90 [font-variation-settings:'FILL'_1]">groups</span>
              <span className="text-[10px] font-medium tracking-wide">Community</span>
            </a>
            <a onClick={() => onNavigate('profile')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[24px] transition-transform group-active:scale-90">person</span>
              <span className="text-[10px] font-medium tracking-wide">Profile</span>
            </a>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}
