import Link from "next/link"
import { LayoutDashboard, Mail, Calendar, Briefcase, Users, ClipboardList, Tag, UserPlus } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-48 border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-purple-100">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-purple-500" fill="none">
              <rect x="4" y="4" width="16" height="4" fill="#d8b4fe" />
              <rect x="4" y="10" width="16" height="4" fill="#d8b4fe" />
              <rect x="4" y="16" width="16" height="4" fill="#d8b4fe" />
            </svg>
          </div>
          <span className="text-lg font-semibold text-purple-500">Hirezy</span>
        </div>
      </div>
      <nav className="space-y-1 p-2">
        <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" href="#" />
        <SidebarItem icon={<Mail className="h-4 w-4" />} label="Inbox" href="#" badge="1" />
        <SidebarItem icon={<Calendar className="h-4 w-4" />} label="Calendar" href="#" />
        <SidebarItem icon={<Briefcase className="h-4 w-4" />} label="Jobs" href="#" />
        <SidebarItem icon={<Users className="h-4 w-4" />} label="Candidates" href="#" />
        <SidebarItem icon={<ClipboardList className="h-4 w-4" />} label="Recruitment Board" href="#" />
        <SidebarItem icon={<Tag className="h-4 w-4" />} label="Offers" href="#" />
        <SidebarItem icon={<UserPlus className="h-4 w-4" />} label="Onboarding" href="#" active />
      </nav>
    </div>
  )
}

function SidebarItem({ icon, label, href, badge, active }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm ${
        active ? "bg-purple-100 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className={active ? "text-purple-700" : "text-gray-500"}>{icon}</span>
      <span>{label}</span>
      {badge && (
        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {badge}
        </span>
      )}
    </Link>
  )
}

