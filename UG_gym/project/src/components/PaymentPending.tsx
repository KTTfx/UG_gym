import { Moon } from 'lucide-react';

interface PaymentPendingProps {
  planTitle: string;
}

export default function PaymentPending({ planTitle }: PaymentPendingProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center mb-4">
          <Moon className="h-12 w-12 text-[#002147]" />
        </div>
        
        <h1 className="text-2xl font-bold text-[#002147] text-center mb-4">
          Payment Pending
        </h1>
        
        <p className="text-gray-600 text-center mb-6">
          You've selected the {planTitle}. Please proceed to make your payment at the gym's front desk.
        </p>
        
        <div className="bg-[#FFD700] bg-opacity-10 border-2 border-[#FFD700] rounded-lg p-4 mb-6">
          <p className="text-[#002147] text-center">
            Your subscription will be activated once the payment is confirmed by our staff.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="font-bold text-[#002147] mb-3">Next Steps:</h2>
          <ol className="space-y-2 text-gray-600">
            <li className="flex items-center space-x-2">
              <span className="flex-shrink-0 w-6 h-6 bg-[#002147] text-white rounded-full flex items-center justify-center text-sm">1</span>
              <span>Visit the University of Ghana Gym</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="flex-shrink-0 w-6 h-6 bg-[#002147] text-white rounded-full flex items-center justify-center text-sm">2</span>
              <span>Present your ID at the front desk</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="flex-shrink-0 w-6 h-6 bg-[#002147] text-white rounded-full flex items-center justify-center text-sm">3</span>
              <span>Make your payment</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="flex-shrink-0 w-6 h-6 bg-[#002147] text-white rounded-full flex items-center justify-center text-sm">4</span>
              <span>Your subscription will be activated immediately</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}