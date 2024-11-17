import { User } from '../types'; // Make sure you have the correct type

interface UserDashboardProps {
  user: User;
}

export default function UserDashboard({ user }: UserDashboardProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#002147] mb-6">
        Welcome back, {user.name}
      </h1>
      
      {/* Your dashboard content */}
      <p>Your user type is: {user.userType}</p>
    </div>
  );
}
