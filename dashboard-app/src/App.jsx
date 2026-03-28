import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 1200 },
  { name: "May", users: 900 },
];

function App() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <ul className="space-y-3">
          <li>Home</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="bg-white p-4 shadow">
          <h2 className="text-xl font-semibold">Analytics Overview</h2>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-2 gap-6">

          {/* Chart */}
          <div className="bg-white p-5 rounded-xl shadow col-span-2">
            <h3 className="mb-4 font-semibold">User Growth</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Cards */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-2xl font-bold mt-2">$12,000</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Users</h3>
            <p className="text-2xl font-bold mt-2">1,200</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;