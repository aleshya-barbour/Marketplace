const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1000,
  currency: 'usd',
  payment_method_types: ['card'],
  receipt_email: 'jenny.rosen@example.com',
});

