import { loadStripe, Stripe as StripeJS } from '@stripe/stripe-js';

// Load Stripe on the client side
let stripePromise: Promise<StripeJS | null>;
export const getStripe = () => {
  if (!stripePromise) {
    // Replace with your actual Stripe publishable key
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');
  }
  return stripePromise;
};

// Define the donation item type
export type DonationItem = {
  amount: number;
  currency: string;
  name: string;
  description: string;
  quantity: number;
};

// Define the checkout session type
export type CheckoutSession = {
  id: string;
  url: string;
};

// Define the PIX payment type
export type PixPayment = {
  qrCodeImage: string;
  qrCodeText: string;
  expiresAt: string;
  paymentId: string;
};

// Function to generate a fake PIX QR code for testing
export const generateTestPixQRCode = (amount: number): PixPayment => {
  // In a real implementation, this would call your backend to generate a real PIX
  const pixKey = "pix@example.com"; // Your PIX key
  const description = `Doação ${amount.toFixed(2)}`;
  const randomId = Math.random().toString(36).substring(2, 15);

  return {
    qrCodeImage: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`${pixKey};${amount};${description};${randomId}`)}`,
    qrCodeText: `${pixKey};${amount};${description};${randomId}`,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Expires in 24 hours
    paymentId: randomId
  };
};

// Function to check PIX payment status (simulated)
export const checkPixPaymentStatus = async (paymentId: string): Promise<'pending' | 'completed' | 'expired'> => {
  // In a real implementation, this would call your backend to check the status
  // For demonstration, we'll randomly return a status
  const random = Math.random();
  if (random < 0.7) return 'pending';
  if (random < 0.9) return 'completed';
  return 'expired';
};