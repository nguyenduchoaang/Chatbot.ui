/**
 * v0 by Vercel.
 * @see https://v0.dev/t/94ethdNZ7oJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import { Textarea } from "../components/ui/textarea"
import { Link } from "react-router-dom"
import Logo from "../assets/logo.jpg"
import { Picture } from "../based/icon/configIcon"
import { useState, useRef, useEffect } from "react"

const dataChatBot = [
  {
    id: 1,
    message: "Can you explain airplane turbulence to someone who has never flown before? Make it conversational and concise.",
    reply: "Of course! Imagine you're in a car driving down a bumpy road, and the ride isn't perfectly smooth. Sometimes, you hit small potholes or bumps, right? Well, when you're in an airplane, it's kind of like that, but in the sky. Airplane turbulence happens when the plane encounters pockets of air that are moving differently. It's like sailing a boat on choppy water. These air pockets can make the plane feel like it's bouncing or shaking a bit. It's completely normal and usually not dangerous at all."
  },
  
]
export default function Component() {
   const [formData, setFormData] = useState({
    message: "",
    reply: "",
  })
  const [listChat, setListChat] = useState(dataChatBot)
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const handleSendMessage = () => {
    let temp = {
      id: listChat.length + 1,
      message: formData.message,
      reply: "... thinking",
    }
    setListChat([...listChat, temp])
    setFormData({ message: "" })
    setLoading(true)
    setTimeout(() => {
      temp.reply = "I'm sorry, I'm not sure what you mean. Can you provide more details?"
      setLoading(false)
      setListChat([...listChat, temp])
    }, 1000)
  }
  useEffect(() => {
    if (messagesEndRef.current) {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [listChat])


  return (
    <div className="flex min-h-screen w-full">
      <div className="w-[20%] border-r bg-background md:block">
        <div className="flex h-full flex-col">
          <div className="sticky top-0 z-10 border-b bg-background px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href="#" prefetch={false}>
                  <MountainIcon className="h-6 w-6" />
                  <span className="sr-only">Chat Heroes</span>
                </Link>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <div className="grid gap-4 p-4">
              <div className="px-2 text-xs font-medium text-muted-foreground">Today</div>
              <Link
                href="#"
                className="flex-1 block rounded-md p-2 text-sm transition-colors hover:bg-muted/50"
                prefetch={false}
              >
                Airplane Turbulence: Sky's Rollercoaster
              </Link>
              <Link
                href="#"
                className="flex-1 block rounded-md p-2 text-sm transition-colors hover:bg-muted/50"
                prefetch={false}
              >
                How to make a chat app with React
              </Link>
              <Link
                href="#"
                className="flex-1 block rounded-md p-2 text-sm transition-colors hover:bg-muted/50"
                prefetch={false}
              >
                Cooking recipe for disaster
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-background px-4 py-3 border-b">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>
                <img src={Logo} alt="Logo" />
              </AvatarFallback>
            </Avatar>
            <div className="font-medium">Chat Heroes</div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <SearchIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <SettingsIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <UserIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div
        className="flex-1 flex flex-col items-start gap-8 px-4 mx-auto max-w-3xl mt-6 ">
          {listChat.map((item, index) => (
              <>
          <div className="flex items-start gap-4">
            <Avatar className="w-6 h-6 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>
                <img src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/326567839_728178938913039_8460555307718174222_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEUaGooZSVqJvD5-IHSdfEpS04nVothzVJLTidWi2HNUjhnbKABbCOX13wNJKTRGb2hgmsH9pve4c87bw52svep&_nc_ohc=-DR7wyCsHAgQ7kNvgF0RR08&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYCGauoLrxkOwMeHhObdYcEqagMU1ILyT4uO3bO9S4DFTw&oe=66B6BCFC" alt="Image" />
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">You</div>
              <div className="prose text-muted-foreground">
                <p>
                 {item.message}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-6 h-6 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>
                <img src ={Logo} alt="Logo" />  
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">Chat Heroes</div>
              <div className="prose text-muted-foreground">
                <p>
                  {item.reply}
                </p>
      
              </div>
              {index === listChat.length - 1 &&  (
                <div
                ref={messagesEndRef}
                className="flex items-center gap-2 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <ClipboardIcon className="w-4 h-4" />
                  <span className="sr-only">Copy</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span className="sr-only">Upvote</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <ThumbsDownIcon className="w-4 h-4" />
                  <span className="sr-only">Downvote</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <RefreshCcwIcon className="w-4 h-4" />
                  <span className="sr-only">Regenerate</span>
                </Button>
              </div>
              )}
            </div>
          </div>
              </>
          ))}
        </div>
        <div className="max-w-3xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background outline-none
          max-h-[120px]
        ">
          <div className="relative">
            <Textarea
              placeholder="Message Chat Heroes..."
              name="message"
              id="message"
              rows={1}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
            />
             <Button variant="picture" size="icon" className="absolute w-8 h-8 top-3 right-[50px]"  >
              <Picture className="w-4 h-4" />
            </Button>
            <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3"
              onClick={() => handleSendMessage()} 
            disabled={formData.message === ''}>
              <ArrowUpIcon className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
          <p className="text-xs font-medium text-center text-neutral-700">
            Chat Heroes can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  )
}

function ArrowUpIcon(props) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function RefreshCcwIcon(props) {
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
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
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
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
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