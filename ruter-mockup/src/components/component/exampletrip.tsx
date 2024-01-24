/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zM0bLzhFCiL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ExampleTrip() {
  return (
      <div className="bg-[#1E1E1E] min-h-screen text-white p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Find journey</h1>
          <PanelTopCloseIcon className="text-white" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-[#333333] rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <LocateIcon className="text-blue-500" />
              <span>Your location</span>
            </div>
            <ChevronDownIcon className="text-blue-500" />
          </div>
          <div className="flex items-center justify-between bg-[#333333] rounded-lg p-4">
            <span>Stockholms södra station</span>
            <ChevronDownIcon className="text-blue-500" />
          </div>
          <div className="flex space-x-2">
            <Button className="bg-[#333333] rounded-lg px-4 py-2">Change time</Button>
            <Button className="bg-[#333333] rounded-lg px-4 py-2">Filter</Button>
          </div>
          <div className="space-y-4">
            <div className="bg-[#333333] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">14:00 - 20:55</span>
                <span>6 h and 54 min</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <MoveIcon className="bg-red-600 text-white rounded-full p-2" />
                  <TrainTrackIcon className="bg-blue-500 text-white rounded-full p-2" />
                  <AlertCircleIcon className="text-yellow-400" />
                  <BusIcon className="text-white" />
                </div>
                <div className="flex space-x-2 ml-auto">
                  <ClockIcon className="text-green-500" />
                  <span>2h</span>
                  <WalletIcon className="text-green-500" />
                  <span>$15</span>
                  <LeafIcon className="text-green-500" />
                  <span>20kg</span>
                </div>
                <ChevronRightIcon className="text-white" />
              </div>
            </div>
            <div className="bg-[#333333] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">14:02 - 20:55</span>
                <span>6 h and 52 min</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Badge variant="secondary">33</Badge>
                  <TrainTrackIcon className="bg-blue-500 text-white rounded-full p-2" />
                  <Badge variant="secondary">42</Badge>
                </div>
                <div className="flex space-x-2 ml-auto">
                  <ClockIcon className="text-green-500" />
                  <span>1.5h</span>
                  <WalletIcon className="text-green-500" />
                  <span>$12</span>
                  <LeafIcon className="text-green-500" />
                  <span>18kg</span>
                </div>
                <ChevronRightIcon className="text-white" />
              </div>
            </div>
            <div className="bg-[#333333] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">16:15 - 22:50</span>
                <span>6 h and 34 min</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <MoveIcon className="text-white" />
                  <TrainTrackIcon className="bg-red-600 text-white rounded-full p-2" />
                  <BusIcon className="text-white" />
                  <MoveIcon className="text-white" />
                </div>
                <div className="flex space-x-2 ml-auto">
                  <ClockIcon className="text-green-500" />
                  <span>2.5h</span>
                  <WalletIcon className="text-green-500" />
                  <span>$18</span>
                  <LeafIcon className="text-green-500" />
                  <span>22kg</span>
                </div>
                <ChevronRightIcon className="text-white" />
              </div>
            </div>
            <div className="bg-[#333333] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">16:14 - 22:50</span>
                <span>6 h and 35 min</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Badge variant="secondary">33</Badge>
                  <TrainTrackIcon className="bg-blue-500 text-white rounded-full p-2" />
                  <Badge variant="secondary">42</Badge>
                </div>
                <div className="flex space-x-2 ml-auto">
                  <ClockIcon className="text-green-500" />
                  <span>2h</span>
                  <WalletIcon className="text-green-500" />
                  <span>$15</span>
                  <LeafIcon className="text-green-500" />
                  <span>20kg</span>
                </div>
                <ChevronRightIcon className="text-white" />
              </div>
            </div>
          </div>
          <Button className="bg-blue-600 w-full rounded-lg py-3">Show more</Button>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-[#333333] p-4 flex justify-between">
          <BusIcon className="text-blue-500" />
          <TicketIcon className="text-white" />
          <UserIcon className="text-white" />
        </div>
      </div>
  )
}

function AlertCircleIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
  )
}


function BusIcon(props) {
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
        <path d="M8 6v6" />
        <path d="M15 6v6" />
        <path d="M2 12h19.6" />
        <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
        <circle cx="7" cy="18" r="2" />
        <path d="M9 18h5" />
        <circle cx="16" cy="18" r="2" />
      </svg>
  )
}


function ChevronDownIcon(props) {
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
        <path d="m6 9 6 6 6-6" />
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


function ClockIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
  )
}


function LeafIcon(props) {
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
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
  )
}


function LocateIcon(props) {
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
        <line x1="2" x2="5" y1="12" y2="12" />
        <line x1="19" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="5" />
        <line x1="12" x2="12" y1="19" y2="22" />
        <circle cx="12" cy="12" r="7" />
      </svg>
  )
}


function MoveIcon(props) {
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
        <polyline points="5 9 2 12 5 15" />
        <polyline points="9 5 12 2 15 5" />
        <polyline points="15 19 12 22 9 19" />
        <polyline points="19 9 22 12 19 15" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="22" />
      </svg>
  )
}


function PanelTopCloseIcon(props) {
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
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="3" x2="21" y1="9" y2="9" />
        <path d="m9 16 3-3 3 3" />
      </svg>
  )
}


function TicketIcon(props) {
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
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
  )
}


function TrainTrackIcon(props) {
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
        <path d="M2 17 17 2" />
        <path d="m2 14 8 8" />
        <path d="m5 11 8 8" />
        <path d="m8 8 8 8" />
        <path d="m11 5 8 8" />
        <path d="m14 2 8 8" />
        <path d="M7 22 22 7" />
      </svg>
  )
}


function UserIcon(props) {
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
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
  )
}


function WalletIcon(props) {
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
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
  )
}
