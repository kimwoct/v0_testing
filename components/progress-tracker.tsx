import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProgressTracker() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md">Progress Tracker</CardTitle>
        <Select defaultValue="marketing">
          <SelectTrigger className="h-8 w-[130px]">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
            <SelectItem value="hr">HR</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="space-y-4">
        <ProgressItem
          name="Olivia Smith"
          role="Marketing Strategist"
          progress={100}
          status="Orientation Completed"
          image="/placeholder.svg?height=40&width=40"
        />
        <ProgressItem
          name="Laura Smith"
          role="SEO Specialist"
          progress={60}
          status="Training Sessions In Progress"
          image="/placeholder.svg?height=40&width=40"
        />
        <ProgressItem
          name="Michael Johnson"
          role="Copywriter"
          progress={100}
          status="Document Submission Completed"
          image="/placeholder.svg?height=40&width=40"
        />
        <ProgressItem
          name="Derek Hughes"
          role="Social Media Manager"
          progress={40}
          status="Orientation In Progress"
          image="/placeholder.svg?height=40&width=40"
        />
      </CardContent>
    </Card>
  )
}

function ProgressItem({ name, role, progress, status, image }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span>Progress:</span>
          <span className={progress === 100 ? "text-green-500" : "text-amber-500"}>{status}</span>
        </div>
        <Progress
          value={progress}
          className={`h-2 ${progress === 100 ? "bg-green-100" : "bg-amber-100"}`}
          indicatorClassName={progress === 100 ? "bg-green-500" : "bg-amber-500"}
        />
      </div>
    </div>
  )
}

