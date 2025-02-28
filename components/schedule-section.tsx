import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function ScheduleSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md">Schedule</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <PlusCircle className="h-4 w-4" />
          <span className="sr-only">Add schedule</span>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScheduleItem
          date="October 19, 2020 · 9:00 AM"
          title="Orientation Session"
          person={{
            name: "Olivia Smith",
            role: "HR Manager",
          }}
        />
        <ScheduleItem
          date="October 20, 2020 · 1:00 PM"
          title="Technical Training"
          person={{
            name: "Michael Johnson",
            role: "Software Engineer",
          }}
        />
        <ScheduleItem
          date="October 21, 2020 · 11:00 AM"
          title="Operations Management Training"
          person={{
            name: "Derek Hughes",
            role: "Operations Coordinator",
          }}
        />
        <ScheduleItem
          date="October 24, 2020 · 10:00 AM"
          title="Network Systems Orientation"
          person={{
            name: "Laura Smith",
            role: "Network Administrator",
          }}
        />
      </CardContent>
    </Card>
  )
}

function ScheduleItem({ date, title, person }) {
  return (
    <div className="flex items-start justify-between rounded-md border p-3">
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">{date}</p>
        <p className="font-medium">{title}</p>
        <div className="flex items-center gap-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src="/placeholder.svg?height=20&width=20" alt={person.name} />
            <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="text-xs text-muted-foreground">
            {person.name} · {person.role}
          </p>
        </div>
      </div>
      <Button variant="outline" size="icon" className="h-6 w-6 rounded-full">
        <PlusCircle className="h-4 w-4" />
        <span className="sr-only">Add to calendar</span>
      </Button>
    </div>
  )
}

