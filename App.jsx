import React, { useState } from "react";
import { Leaf, Trees, MapPin, Phone, Mail, CalendarDays, Users2, Utensils, Clock, BadgeIndianRupee, ChevronRight, CheckCircle2, Instagram, Map } from "lucide-react";

const BRAND = { primary: "#196C43", secondary: "#D6A11D", accent: "#7C5F41", neutral: "#F7F4EE" };

const CTA_WHATSAPP = "https://wa.me/919353118319?text=Hi%20ReRoot%20Space!%20I'd%20like%20to%20book%20a%20spot.";
const EMAIL = "mailto:rerootspace@gmail.com";
const INSTA = "https://www.instagram.com/reroot_space?igsh=MWRrZHgzM28wb3pmbA%3D%3D&utm_source=qr";
const MAPS_LINK = "https://maps.app.goo.gl/xDRTZQhQn2BDirbS8?g_st=ipc";

const HERO_IMG = "/hero.jpg";
const IMG_STUDIO1 = "/circle-session.jpg";
const IMG_STUDIO2 = "/studio-exterior.jpg";
const IMG_GARDEN  = "/fields.jpg";
const IMG_FLOWERS = "/driveway-gate.jpg";
const IMG_ROOM    = "/stay-room.jpg";
const IMG_CANAL   = "/canal-float.jpg";

const UPCOMING = [ { dates: "24–26 Oct", label: "Weekend Movement Retreat", slots: 8 } ];

export default function ReRootSite() {
  const [open, setOpen] = useState(false);
  const go = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); setOpen(false); };

  return (
    <div className="min-h-screen bg-[--neutral] text-stone-800" style={{ ['--primary'] : BRAND.primary, ['--secondary']: BRAND.secondary, ['--accent']: BRAND.accent, ['--neutral']: BRAND.neutral }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-stone-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => go('top')}>
            <div className="h-9 w-9 rounded-full grid place-items-center bg-[--primary] text-white"><Leaf size={18} /></div>
            <div><div className="font-serif text-lg leading-tight">ReRoot Space</div><div className="text-xs text-stone-500 leading-none">Movement • Nature • Community</div></div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => go('about')} className="hover:text-[--primary]">About</button>
            <button onClick={() => go('programs')} className="hover:text-[--primary]">Programs</button>
            <button onClick={() => go('facilities')} className="hover:text-[--primary]">Facilities</button>
            <button onClick={() => go('dates')} className="hover:text-[--primary]">Dates</button>
            <button onClick={() => go('teachers')} className="hover:text-[--primary]">For Teachers</button>
            <a href={INSTA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[--primary]"><Instagram size={16}/> Instagram</a>
            <a href={EMAIL} className="inline-flex items-center gap-1 bg-[--primary] text-white px-3 py-2 rounded-full">Enquire <ChevronRight size={16}/></a>
          </nav>
          <button className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-full border border-stone-300" onClick={() => setOpen(!open)}>Menu</button>
        </div>
        {open && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="px-4 py-3 grid gap-3 text-sm">
              {['about','programs','facilities','dates','teachers'].map((id)=> (<button key={id} onClick={() => go(id)} className="text-left p-2 rounded hover:bg-stone-50">{id[0].toUpperCase()+id.slice(1)}</button>))}
              <a href={INSTA} target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-stone-50 inline-flex items-center gap-2"><Instagram size={16}/> Instagram</a>
              <a href={EMAIL} className="p-2 rounded bg-[--primary] text-white inline-flex items-center justify-center gap-2">Enquire <ChevronRight size={16}/></a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="h-full w-full bg-gradient-to-b from-emerald-50 via-amber-50 to-stone-50"/>
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[--secondary]/20 blur-2xl"/>
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[--primary]/20 blur-2xl"/>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">ReRoot Space</h1>
            <p className="mt-4 text-stone-700 text-lg">A dance studio in a farmhouse setting near Maddur (2 hrs from Bengaluru) for intimate movement retreats, workshops and residencies. Small groups, shared meals, deep practice.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CTA_WHATSAPP} target="_blank" className="px-5 py-3 rounded-full bg-[--primary] text-white inline-flex items-center gap-2">Book your spot <CalendarDays size={18}/></a>
              <button onClick={() => go('about')} className="px-5 py-3 rounded-full border border-stone-300 inline-flex items-center gap-2">Learn more <ChevronRight size={18}/></button>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-stone-700">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Max 8 participants</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Stay & meals included</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> 5 guided sessions per retreat</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Simple, earthy living</li>
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-stone-200 bg-cover bg-center" style={{backgroundImage:`url(${HERO_IMG})`}} aria-label="studio"/>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl text-stone-900">About ReRoot Space</h2>
            <p className="mt-4 text-stone-700">We host intimate movement retreats in a nature-forward farmhouse. A dance studio in a farmhouse setting for deep, small-group practice. Home-cooked meals are provided — we offer both vegetarian and non-vegetarian options.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-stone-700 text-sm">
              <div className="p-4 rounded-2xl border bg-stone-50 flex items-start gap-3"><Trees className="text-emerald-700"/><span>2 hours from Bengaluru • Maddur</span></div>
              <div className="p-4 rounded-2xl border bg-stone-50 flex items-start gap-3"><Users2 className="text-emerald-700"/><span>Small groups (max 8)</span></div>
              <div className="p-4 rounded-2xl border bg-stone-50 flex items-start gap-3"><Utensils className="text-emerald-700"/><span>Home-cooked meals (veg & non-veg)</span></div>
              <div className="p-4 rounded-2xl border bg-stone-50 flex items-start gap-3"><MapPin className="text-emerald-700"/><span>Farmhouse with open gardens</span></div>
            </div>
          </div>
          <div className="p-6 rounded-2xl border bg-stone-50">
            <h3 className="font-medium">Photos</h3>
            <div className="mt-3 grid gap-3">
              <img src={IMG_STUDIO1} alt="circle session" className="rounded-lg"/>
              <img src={IMG_GARDEN} alt="fields" className="rounded-lg"/>
              <img src={IMG_STUDIO2} alt="studio exterior" className="rounded-lg"/>
              <img src={IMG_ROOM} alt="shared room" className="rounded-lg"/>
              <img src={IMG_FLOWERS} alt="driveway and trees" className="rounded-lg"/>
              <img src={IMG_CANAL} alt="canal float" className="rounded-lg"/>
            </div>
          </div>
        </div>
      </section>

      {/* Programs / Services */}
      <section id="programs" className="py-16 md:py-24 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl text-stone-900">Programs</h2>
          <p className="mt-2 text-stone-700">Weekend retreats • Workshops • Artist residencies • Community jams</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {title:"Weekend Movement Retreats", desc:"2.5 days • 5 sessions • stay + meals", icon: CalendarDays},
              {title:"Workshops & Intensives", desc:"Contemporary, Yoga, Martial Arts, Animal Flow, Calisthenics", icon: Clock},
              {title:"Residencies", desc:"Quiet time to research, create, and reset", icon: Map},
            ].map((c)=> (
              <div key={c.title} className="rounded-2xl border bg-white p-6">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-100 text-emerald-800 mb-3">
                  {React.createElement(c.icon, {size:20})}
                </div>
                <h3 className="font-medium text-stone-900">{c.title}</h3>
                <p className="text-sm text-stone-700 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl text-stone-900">Facilities</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-4 text-sm">
            {[
              {icon: Trees, text: "Spacious studio in nature"},
              {icon: Users2, text: "Shared accommodation (8 beds)"},
              {icon: Utensils, text: "Fresh, home-cooked meals (veg & non-veg)"},
              {icon: MapPin, text: "Open gardens and green spaces"},
            ].map((f)=> (
              <div key={f.text} className="p-4 rounded-2xl border bg-stone-50 flex items-center gap-3">
                {React.createElement(f.icon, {className:"text-emerald-700"})}
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dates & Pricing */}
      <section id="dates" className="py-16 md:py-24 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl text-stone-900">Upcoming Dates & Pricing</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {UPCOMING.map((d)=> (
              <div key={d.dates} className="rounded-2xl border bg-white p-6 flex flex-col justify-between">
                <div>
                  <div className="text-stone-500 text-sm">Weekend Movement Retreat</div>
                  <div className="text-xl font-medium text-stone-900 mt-1">{d.dates}</div>
                  <div className="mt-3 text-sm text-stone-700">Includes 5 sessions, shared stay, and meals. Max {d.slots} participants. Transport not included.</div>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div className="text-stone-900">
                    <div className="text-sm text-stone-500">Weekend fee</div>
                    <div className="text-2xl font-semibold inline-flex items-center gap-1"><BadgeIndianRupee size={22}/>5,500</div>
                  </div>
                  <a href={CTA_WHATSAPP} target="_blank" className="px-4 py-2 rounded-full bg-[--primary] text-white inline-flex items-center gap-2">Reserve <ChevronRight size={18}/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Teachers */}
      <section id="teachers" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl text-stone-900">For Teachers – Host with ReRoot</h2>
          <p className="mt-2 text-stone-700 max-w-3xl">Bring your community for a weekend retreat. You set the schedule; we handle space, stay, and meals. Write to us to host your weekend.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-5 rounded-2xl border bg-stone-50">
              <div className="text-stone-500">Model</div>
              <div className="font-medium">Flat Facilitation Fee (Honorarium)</div>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-stone-700">
                <li>Typical: ₹8,000–₹10,000 for 4 sessions</li>
                <li>Small groups (max 8) for depth</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl border bg-stone-50">
              <div className="text-stone-500">Spaces</div>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-stone-700">
                <li>Studio + open grounds</li>
                <li>Shared participant stay; separate teacher room</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <a href={EMAIL} className="px-4 py-2 rounded-full border border-stone-300">Email us</a>
            <a href={CTA_WHATSAPP} target="_blank" className="px-4 py-2 rounded-full bg-[--primary] text-white">WhatsApp us</a>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section id="map" className="py-16 md:py-24 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl text-stone-900">Getting Here</h2>
          <p className="mt-2 text-stone-700">Maddur, Karnataka – approx. 2 hours from Bengaluru. Exact location shared upon booking.</p>
          <div className="mt-6 rounded-2xl overflow-hidden border bg-white p-6 flex items-center justify-between">
            <div><div className="font-medium">Open in Google Maps</div><div className="text-sm text-stone-600">Tap below to view the pin.</div></div>
            <a href={MAPS_LINK} target="_blank" className="px-4 py-2 rounded-full bg-[--primary] text-white inline-flex items-center gap-2">Open Maps <ChevronRight size={18}/></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-serif text-lg">ReRoot Space</div>
            <div className="text-stone-600 mt-1">Maddur, Karnataka • 2 hrs from Bengaluru</div>
            <div className="mt-3 flex items-center gap-3 text-stone-700">
              <a href={INSTA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[--primary]"><Instagram size={16}/> Instagram</a>
              <a href={EMAIL} className="inline-flex items-center gap-2 hover:text-[--primary]"><Mail size={16}/> Email</a>
              <a href={CTA_WHATSAPP} target="_blank" className="inline-flex items-center gap-2 hover:text-[--primary]"><Phone size={16}/> WhatsApp</a>
            </div>
          </div>
          <div>
            <div className="font-medium">Quick links</div>
            <ul className="mt-2 space-y-1">
              <li><button onClick={() => go('about')} className="hover:text-[--primary]">About</button></li>
              <li><button onClick={() => go('dates')} className="hover:text-[--primary]">Dates & Pricing</button></li>
              <li><button onClick={() => go('teachers')} className="hover:text-[--primary]">For Teachers</button></li>
              <li><button onClick={() => go('programs')} className="hover:text-[--primary]">Programs</button></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Notes</div>
            <ul className="mt-2 space-y-1 text-stone-600">
              <li>Includes stay & meals • 5 sessions</li>
              <li>Transport not included</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-stone-500 text-center pb-6">© {new Date().getFullYear()} ReRoot Space. All rights reserved.</div>
      </footer>
    </div>
  );
}
