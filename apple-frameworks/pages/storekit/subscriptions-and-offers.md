> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptions-and-offers](https://developer.apple.com/documentation/storekit/subscriptions-and-offers)

# Subscriptions and offers

**Interface languages:** Swift, Objective-C

**Framework:** StoreKit  
**Kind:** API Collection

Offer customers additional time-based content and services through purchases they make within your app.

## Topics

### Essentials

- [Handling Subscriptions Billing](handling-subscriptions-billing.md): Build logic around the date and time constraints of subscription products, while planning for all scenarios where you control access to content.
- [Enabling App Store Server Notifications](enabling-app-store-server-notifications.md): Configure your server and provide an HTTPS URL to receive notifications about in-app purchase events and unreported external purchase tokens.
- [Offering a Subscription Across Multiple Apps](offering-a-subscription-across-multiple-apps.md): Support a single auto-renewable subscription across multiple apps.
- [Reducing Involuntary Subscriber Churn](reducing-involuntary-subscriber-churn.md): Prevent unintentional loss of subscribers due to billing issues.

### Introductory offers

Provide discount pricing for new customers to encourage them to subscribe.

- [Implementing introductory offers in your app](implementing-introductory-offers-in-your-app.md): Offer introductory pricing for auto-renewable subscriptions to eligible users.
- [Testing introductory offers](testing-introductory-offers.md): Test your introductory pricing in a variety of user scenarios.
- [SKProductDiscount](skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.

### Promotional offers

Provide discount pricing for existing or previously subscribed customers to encourage them to renew.

- [Setting up promotional offers](setting-up-promotional-offers.md): Generate a key and configure offers for auto-renewable subscriptions in App Store Connect.
- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md): Offer discounted pricing for auto-renewable subscription products to eligible subscribers.
- [Generating a signature for promotional offers](generating-a-signature-for-promotional-offers.md): Create a signature to validate a promotional offer using your private key.
- [Generating a Promotional Offer Signature on the Server](generating-a-promotional-offer-signature-on-the-server.md): Generate a signature using your private key and lightweight cryptography libraries.
- [SKPaymentDiscount](skpaymentdiscount.md): Deprecated. The signed discount to apply to a payment.

### Offer codes

Provide offer codes to customers to acquire, retain, and win back subscribers.

- [Implementing offer codes in your app](implementing-offer-codes-in-your-app.md): Enable customers to redeem offer codes through the App Store or within an app that uses receipts.

### Subscription service entitlement

- [Determining service entitlement on the server](determining-service-entitlement-on-the-server.md): Identify a customer’s entitlement to your service, offers, and messaging by analyzing a validated receipt and the state of their subscription.
