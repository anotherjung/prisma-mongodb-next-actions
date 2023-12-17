import getUsers from "@/actions/get-users"

export default async function HomePage() {
  const users = await getUsers()
  return (
<>
{users.map((user)=>(
  <p key={user.id}>{user.email}</p>
))}
</>
  )
}
