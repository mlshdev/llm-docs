> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skmutablepayment](https://developer.apple.com/documentation/storekit/skmutablepayment)

# SKMutablePayment (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A mutable request to the App Store to process payment for additional functionality that your app offers.

> Use Product.purchase(confirmIn:options:).

## Declaration

```swift
class SKMutablePayment
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)

<a id="overview"></a>

## Overview

A mutable payment object identifies a product and the quantity of that item the user would like to purchase.

When a mutable payment is added to the payment queue, the payment queue copies the contents into an immutable request before queueing the request. Your app can safely change the contents of the mutable payment object.

## Topics

### Getting and Setting Attributes

- [productIdentifier](skmutablepayment/productidentifier.md): Deprecated. A string that identifies a product that can be purchased from within your app.
- [quantity](skmutablepayment/quantity.md): Deprecated. The number of items the user wants to purchase.
- [requestData](skmutablepayment/requestdata.md): Deprecated. Reserved for future use.
- [applicationUsername](skmutablepayment/applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.

### Simulating Buy for Testing

- [simulatesAskToBuyInSandbox](skmutablepayment/simulatesasktobuyinsandbox.md): Deprecated. A Boolean value that produces an “ask to buy” flow for this payment in the sandbox.

### Getting and Setting Discount Details

- [paymentDiscount](skmutablepayment/paymentdiscount.md): Deprecated. The details of the discount offer to apply to the payment.

## Relationships

### Inherits From

- [SKPayment](skpayment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Purchases

- [Requesting a payment from the App Store](requesting-a-payment-from-the-app-store.md): Submit a payment request to the App Store when a customer selects a product to buy.
- [Processing a transaction](processing-a-transaction.md): Register a transaction queue observer to get and handle transaction updates from the App Store.
- [SKPayment](skpayment.md): Deprecated. A request to the App Store to process payment for additional functionality that your app offers.
- [SKPaymentTransaction](skpaymenttransaction.md): Deprecated. An object in the payment queue.

# SKMutablePayment (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A mutable request to the App Store to process payment for additional functionality that your app offers.

> Use Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@interface SKMutablePayment : SKPayment
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)

<a id="overview"></a>

## Overview

A mutable payment object identifies a product and the quantity of that item the user would like to purchase.

When a mutable payment is added to the payment queue, the payment queue copies the contents into an immutable request before queueing the request. Your app can safely change the contents of the mutable payment object.

## Topics

### Getting and Setting Attributes

- [productIdentifier](skmutablepayment/productidentifier.md): Deprecated. A string that identifies a product that can be purchased from within your app.
- [quantity](skmutablepayment/quantity.md): Deprecated. The number of items the user wants to purchase.
- [requestData](skmutablepayment/requestdata.md): Deprecated. Reserved for future use.
- [applicationUsername](skmutablepayment/applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.

### Simulating Buy for Testing

- [simulatesAskToBuyInSandbox](skmutablepayment/simulatesasktobuyinsandbox.md): Deprecated. A Boolean value that produces an “ask to buy” flow for this payment in the sandbox.

### Getting and Setting Discount Details

- [paymentDiscount](skmutablepayment/paymentdiscount.md): Deprecated. The details of the discount offer to apply to the payment.

## Relationships

### Inherits From

- [SKPayment](skpayment.md)

## See Also

### Purchases

- [Requesting a payment from the App Store](requesting-a-payment-from-the-app-store.md): Submit a payment request to the App Store when a customer selects a product to buy.
- [Processing a transaction](processing-a-transaction.md): Register a transaction queue observer to get and handle transaction updates from the App Store.
- [SKPayment](skpayment.md): Deprecated. A request to the App Store to process payment for additional functionality that your app offers.
- [SKPaymentTransaction](skpaymenttransaction.md): Deprecated. An object in the payment queue.
