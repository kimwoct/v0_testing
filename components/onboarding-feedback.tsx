import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export function OnboardingFeedback() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md">Onboarding Feedback</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <FeedbackCard
            name="Olivia Smith"
            role="HR Manager"
            department="Human Resources"
            feedback="The orientation was well-organized and thorough, providing all the necessary information about company policies, benefits, and responsibilities. The team was very welcoming."
            image="/placeholder.svg?height=48&width=48"
          />
          <FeedbackCard
            name="Derek Hughes"
            role="Operations Coordinator"
            department="Operations"
            feedback="The onboarding process was efficient, but I would have appreciated more hands-on training related to my specific role. The general information was helpful, but more role-specific guidance would be valuable."
            image="/placeholder.svg?height=48&width=48"
          />
          <FeedbackCard
            name="Laura Smith"
            role="Network Administrator"
            department="IT"
            feedback="I found the document submission process a bit cumbersome and unclear at times. I would recommend simplifying the process and ensuring that submission guidelines were communicated clearly."
            image="/placeholder.svg?height=48&width=48"
          />
          <FeedbackCard
            name="Michael Johnson"
            role="Software Engineer"
            department="Engineering"
            feedback="The technical training session was excellent and very relevant to my work. However, the session was too short and I would have appreciated more time to understand the company culture fully."
            image="/placeholder.svg?height=48&width=48"
          />
        </div>
      </CardContent>
    </Card>
  )
}

function FeedbackCard({ name, role, department, feedback, image }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="mb-3 flex items-center gap-3">
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">
            {role} · {department}
          </p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{feedback}</p>
    </div>
  )
}

