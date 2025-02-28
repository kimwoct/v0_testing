import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal } from "lucide-react"

export function NewHiresProfile() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md">New Hires Profile</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <ProfileCard
            name="Olivia Smith"
            role="HR Manager"
            startDate="October 20, 2020"
            years={5}
            image="/placeholder.svg?height=80&width=80"
          />
          <ProfileCard
            name="Derek Hughes"
            role="Operations Coordinator"
            startDate="October 23, 2020"
            years={3}
            image="/placeholder.svg?height=80&width=80"
          />
        </div>
      </CardContent>
    </Card>
  )
}

function ProfileCard({ name, role, startDate, years, image }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16 rounded-full border-4 border-white shadow">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <div className="text-xs text-muted-foreground">New Hire Profile</div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-xs">Start Date</div>
        <Badge variant="outline" className="rounded-sm text-xs font-normal">
          {startDate}
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-xs">Experience</div>
        <Badge variant="outline" className="rounded-sm text-xs font-normal">
          {years} Years
        </Badge>
      </div>
      <Tabs defaultValue="orientation">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="orientation">Orientation</TabsTrigger>
          <TabsTrigger value="full-time">Full-time</TabsTrigger>
          <TabsTrigger value="remote">Remote</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

