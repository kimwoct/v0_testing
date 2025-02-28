import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export function DocumentSubmission() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md">Document Submission</CardTitle>
        <div className="flex items-center gap-2">
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
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="reviewed">Reviewed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">New Hires Name</TableHead>
              <TableHead>ID Verification</TableHead>
              <TableHead>Contract</TableHead>
              <TableHead>Tax Form</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Olivia Smith</TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>Oct 25, 2020</TableCell>
              <TableCell>
                <StatusBadge status="reviewed" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Laura Smith</TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="incomplete" />
              </TableCell>
              <TableCell>Oct 24, 2020</TableCell>
              <TableCell>
                <StatusBadge status="pending" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Michael Johnson</TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="incomplete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>Oct 22, 2020</TableCell>
              <TableCell>
                <StatusBadge status="overdue" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Derek Hughes</TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>Oct 26, 2020</TableCell>
              <TableCell>
                <StatusBadge status="reviewed" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Anna Lee</TableCell>
              <TableCell>
                <StatusIcon status="incomplete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="complete" />
              </TableCell>
              <TableCell>
                <StatusIcon status="incomplete" />
              </TableCell>
              <TableCell>Oct 23, 2020</TableCell>
              <TableCell>
                <StatusBadge status="pending" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function StatusIcon({ status }) {
  if (status === "complete") {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
        <Check className="h-4 w-4 text-green-600" />
      </div>
    )
  }
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
      <X className="h-4 w-4 text-red-600" />
    </div>
  )
}

function StatusBadge({ status }) {
  if (status === "reviewed") {
    return <Badge className="bg-blue-100 text-blue-700">Reviewed</Badge>
  }
  if (status === "pending") {
    return <Badge className="bg-amber-100 text-amber-700">Pending</Badge>
  }
  return <Badge className="bg-red-100 text-red-700">Overdue</Badge>
}

