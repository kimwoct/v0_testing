import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { ScheduleSection } from "@/components/schedule-section"
import { NewHiresProfile } from "@/components/new-hires-profile"
import { ProgressTracker } from "@/components/progress-tracker"
import { DocumentSubmission } from "@/components/document-submission"
import { OnboardingFeedback } from "@/components/onboarding-feedback"
import { Bell, Search } from "lucide-react"

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="flex items-center justify-between border-b bg-white px-6 py-3">
          <h1 className="text-xl font-semibold">Onboarding</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Andrew Sebastian" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Andrew Sebastian</p>
                <p className="text-xs text-muted-foreground">Lead HR</p>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md">October 2020</CardTitle>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <span className="sr-only">Previous month</span>
                      <ChevronLeftIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <span className="sr-only">Next month</span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" className="rounded-md border" />
                </CardContent>
              </Card>
              <ScheduleSection />
            </div>
            <div className="space-y-6">
              <NewHiresProfile />
              <ProgressTracker />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6">
            <DocumentSubmission />
            <OnboardingFeedback />
          </div>
        </main>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

