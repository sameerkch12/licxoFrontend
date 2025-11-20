import React from "react";
import { Home, PlusCircle, User } from "lucide-react";

const useAuth = (): boolean => {
  return Boolean(localStorage.getItem("token"));
};

const NavigationBar: React.FC = () => {
  const isAuthenticated = useAuth();

  const handleAddHotel = (): void => {
    if (isAuthenticated) {
      window.location.href = "/addroom";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-gradient-to-r from-gray-700 to-gray-800 z-50 rounded-t-3xl lg:hidden shadow-lg">
      <ul className="flex justify-between items-center px-8 h-full max-w-md mx-auto">
        <li className="group mt-1">
          <a href="/" className="flex flex-col items-center gap-1">
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-white">Home</span>
          </a>
        </li>

        <li className="group -mt-8">
          <button
            onClick={handleAddHotel}
            className="flex flex-col items-center gap-1"
          >
            <div className="p-4 rounded-full bg-white shadow-lg group-hover:bg-gray-100 transition-colors">
              <PlusCircle className="w-6 h-6 text-gray-800" />
            </div>
            <span className="text-sm font-medium text-white">Add</span>
          </button>
        </li>

        <li className="group mt-1">
          <a href="/profile" className="flex flex-col items-center gap-1">
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <User className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-white">Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
