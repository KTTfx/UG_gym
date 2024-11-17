import { useState } from 'react';
import type { UserType } from '../types';
import SubscriptionCard from './SubscriptionCard';

const planPricing = {
  student: {
    walkIn: 10,
    monthly: 100,
    semesterly: 250,
    halfYearly: 400,
    yearly: 700,
  },
  staff: {
    walkIn: 15,
    monthly: 160,
    semesterly: 400,
    halfYearly: 700,
    yearly: 1200,
  },
  nonStudent: {
    walkIn: 20,
    monthly: 200,
    semesterly: 500,
    halfYearly: 800,
    yearly: 1400,
  },
  public: {
    walkIn: 25,
    monthly: 300,
    semesterly: 750,
    halfYearly: 1300,
    yearly: 2200,
  },
};

export default function PricingPlans() {
  const [userType, setUserType] = useState<UserType>('student');
  
  const plans = [
    {
      title: 'Daily Plan',
      price: planPricing[userType].walkIn,
      duration: 'day',
      features: [],
    },
    {
      title: 'Monthly Plan',
      price: planPricing[userType].monthly,
      duration: 'month',
      features: [],
      isPopular: true,
    },
    {
      title: 'Semester / Quarterly Plan',
      price: planPricing[userType].semesterly,
      duration: 'quarter',
      features: [],
    },
    {
      title: 'Half Yearly Plan',
      price: planPricing[userType].halfYearly,
      duration: 'half year',
      features: [],
    },
    {
      title: 'Yearly Plan',
      price: planPricing[userType].yearly,
      duration: 'year',
      features: [],
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#002147] text-center">Available Plans</h2>
      <div className="flex justify-center mb-6">
        <div className="text-center">
          <label className="block text-[#002147] font-medium mb-2">Select Your Status:</label>
          <select
            className="p-3 border-2 border-[#002147] rounded-md text-[#002147] font-semibold focus:outline-none focus:ring-2 focus:ring-[#002147]"
            value={userType}
            onChange={(e) => setUserType(e.target.value as UserType)}
          >
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="nonStudent">Non-Student</option>
            <option value="public">Public</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <SubscriptionCard key={index} {...plan} onSelect={() => {}} />
        ))}
      </div>
    </div>
  );
}
