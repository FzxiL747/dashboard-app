function App() {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "220px",
        background: "#111",
        color: "white",
        padding: "20px"
      }}>
        <h2>Dashboard</h2>
        <p>Home</p>
        <p>Analytics</p>
        <p>Settings</p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, background: "#f5f5f5" }}>
        
        {/* Topbar */}
        <div style={{
          background: "white",
          padding: "15px",
          borderBottom: "1px solid #ddd"
        }}>
          <h3>Welcome back</h3>
        </div>

        {/* Cards */}
        <div style={{
          display: "flex",
          gap: "20px",
          padding: "20px"
        }}>
          
          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1
          }}>
            <h4>Revenue</h4>
            <p>$12,000</p>
          </div>

          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1
          }}>
            <h4>Users</h4>
            <p>1,200</p>
          </div>

          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1
          }}>
            <h4>Orders</h4>
            <p>320</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;