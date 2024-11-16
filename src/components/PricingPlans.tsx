import type { UserType } from '../types';
import SubscriptionCard from './SubscriptionCard';

interface PricingPlansProps {
  userType: UserType;
}

export default function PricingPlans({ userType }: PricingPlansProps) {
  const isUniversityMember = userType === 'student' || userType === 'staff';
  
  const plans = [
    {
      title: 'Basic Plan',
      price: isUniversityMember ? 30 : 50,
      duration: 'month',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment'
      ]
    },
    {
      title: 'Premium Plan',
      price: isUniversityMember ? 80 : 130,
      duration: 'quarter',
      features: [
        'All Basic Plan features',
        'Personal trainer consultation',
        'Access to fitness classes',
        'Nutrition guidance'
      ],
      isPopular: true
    },
    {
      title: 'Elite Plan',
      price: isUniversityMember ? 300 : 450,
      duration: 'year',
      features: [
        'All Premium Plan features',
        'Unlimited personal training',
        'Priority class booking',
        'Complimentary supplements',
        'Guest passes'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#002147]">Available Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <SubscriptionCard key={index} {...plan} onSelect={() => {}} />
        ))}
      </div>
    </div>
  );
}