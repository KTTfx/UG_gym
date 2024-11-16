import { useState } from 'react';
import type { User, Subscription } from '../types';
import SubscriptionStatus from './SubscriptionStatus';
import PricingPlans from './PricingPlans';

interface UserDashboardProps {
  user: User;
  subscription?: Subscription;
}

export default function UserDashboard({ user, subscription }: UserDashboardProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#002147] mb-6">
        Welcome back, {user.name}
      </h1>
      
      <div className="space-y-8">
        {subscription ? (
          <SubscriptionStatus subscription={subscription} />
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
            You don't have an active subscription
          </div>
        )}

        <PricingPlans userType={user.userType} />
      </div>
    </div>
  );
}