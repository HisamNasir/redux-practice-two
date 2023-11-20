import AddUsers from "@/components/AddUsers";
import DisplayUsers from "@/components/DisplayUsers";

export default function Home() {
  return (
    <main>
      <div className="p-1 bg-slate-700 h-screen">
      <AddUsers/>
      <DisplayUsers/>

      </div>
    </main>
  )
}
