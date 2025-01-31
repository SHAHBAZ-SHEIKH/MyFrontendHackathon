import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserSidebar from "../../components/UserSidebar/UserSidebar";
import "./UserDashboard.css";

const UserDashboard = ( { isSidebarOpen,
    toggleSidebar,
    setIsSidebarOpen}) => {
  return (
    <>
      <div className="admin-dashboard-container">
      {/* Navbar */}
      <UserNavbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Sidebar and Main Content */}
      <div className="admin-dashboard-content">
        <UserSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className={`admin-main-content ${isSidebarOpen ? "" : "expanded"}`}>
        <div className="admin-dashboard-stats">
      <div className="admin-stat-card">
        <h3>Total Students</h3>
        <p>5000+</p>
      </div>
      <div className="admin-stat-card">
        <h3>Cities</h3>
        <p>05</p>
      </div>
      <div className="admin-stat-card">
        <h3>Branches</h3>
        <p>10</p>
      </div>
      <div className="admin-stat-card">
        <h3>Courses</h3>
        <p>24+</p>
      </div>
    </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default UserDashboard;