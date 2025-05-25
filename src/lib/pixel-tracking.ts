// Pixel tracking for donation events
export interface DonationEventData {
  campaignId: string;
  donationAmount?: number;
  paymentMethod?: 'card' | 'pix';
  step: 'modal_opened' | 'amount_selected' | 'payment_initiated' | 'payment_completed' | 'payment_failed';
  timestamp: number;
  userAgent?: string;
  referrer?: string;
}

// Track donation funnel events
export function trackDonationEvent(eventData: Omit<DonationEventData, 'timestamp' | 'userAgent' | 'referrer'>) {
  const fullEventData: DonationEventData = {
    ...eventData,
    timestamp: Date.now(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
    referrer: typeof window !== 'undefined' ? document.referrer : undefined,
  };

  // Console log for development
  console.log('Donation Event Tracked:', fullEventData);

  // In production, send to analytics service
  if (typeof window !== 'undefined') {
    // Example: Send to Google Analytics, Facebook Pixel, etc.
    // gtag('event', 'donation_' + eventData.step, {
    //   campaign_id: eventData.campaignId,
    //   value: eventData.donationAmount,
    //   currency: 'BRL'
    // });

    // Example: Send to your own analytics endpoint
    // fetch('/api/analytics/donation-event', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(fullEventData)
    // }).catch(console.error);
  }
}

// Track page views
export function trackPageView(page: string, campaignId?: string) {
  const eventData = {
    page,
    campaignId,
    timestamp: Date.now(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
    referrer: typeof window !== 'undefined' ? document.referrer : undefined,
  };

  console.log('Page View Tracked:', eventData);

  // In production, send to analytics service
  if (typeof window !== 'undefined') {
    // Example implementations:
    // gtag('config', 'GA_MEASUREMENT_ID', { page_path: page });
    // fbq('track', 'PageView');
  }
}

// Track button clicks
export function trackButtonClick(buttonName: string, campaignId?: string, additionalData?: Record<string, any>) {
  const eventData = {
    event: 'button_click',
    buttonName,
    campaignId,
    additionalData,
    timestamp: Date.now(),
  };

  console.log('Button Click Tracked:', eventData);

  if (typeof window !== 'undefined') {
    // Send to analytics
  }
}