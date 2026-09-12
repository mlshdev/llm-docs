> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpayment](https://developer.apple.com/documentation/storekit/skpayment)

# SKPayment (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A request to the App Store to process payment for additional functionality that your app offers.

> Use Product.purchase(confirmIn:options:).

## Declaration

```swift
class SKPayment
```

## Mentioned In

- [Promoting In-App Purchases](promoting-in-app-purchases.md)
- [Testing a payment request](testing-a-payment-request.md)

<a id="overview"></a>

## Overview

A payment object identifies a product and the quantity of those items the user would like to purchase.

## Topics

### Creating Payments

- [init(product:)](skpayment/init%28product_%29.md): Deprecated. Returns a new payment for the specified product.

### Getting Payment Details

- [productIdentifier](skpayment/productidentifier.md): Deprecated. A string used to identify a product that can be purchased from within your app.
- [quantity](skpayment/quantity.md): Deprecated. The number of items the user wants to purchase.
- [requestData](skpayment/requestdata.md): Deprecated. Reserved for future use.
- [applicationUsername](skpayment/applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.

### Simulating Purchases for Testing

- [simulatesAskToBuyInSandbox](skpayment/simulatesasktobuyinsandbox.md): Deprecated. A Boolean value that produces an “ask to buy” flow for this payment in the sandbox.

### Getting Discount Details

- [paymentDiscount](skpayment/paymentdiscount.md): Deprecated. The details of the discount offer to apply to the payment.
- [SKPaymentDiscount](skpaymentdiscount.md): Deprecated. The signed discount to apply to a payment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKMutablePayment](skmutablepayment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Purchases

- [Requesting a payment from the App Store](requesting-a-payment-from-the-app-store.md): Submit a payment request to the App Store when a customer selects a product to buy.
- [Processing a transaction](processing-a-transaction.md): Register a transaction queue observer to get and handle transaction updates from the App Store.
- [SKMutablePayment](skmutablepayment.md): Deprecated. A mutable request to the App Store to process payment for additional functionality that your app offers.
- [SKPaymentTransaction](skpaymenttransaction.md): Deprecated. An object in the payment queue.

# SKPayment (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A request to the App Store to process payment for additional functionality that your app offers.

> Use Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@interface SKPayment : NSObject
```

## Mentioned In

- [Promoting In-App Purchases](promoting-in-app-purchases.md)
- [Testing a payment request](testing-a-payment-request.md)

<a id="overview"></a>

## Overview

A payment object identifies a product and the quantity of those items the user would like to purchase.

## Topics

### Creating Payments

- [paymentWithProduct:](skpayment/init%28product_%29.md): Deprecated. Returns a new payment for the specified product.
- [paymentWithProductIdentifier:](skpayment/paymentwithproductidentifier_.md): Deprecated. Returns a new payment with the specified product identifier.

### Getting Payment Details

- [productIdentifier](skpayment/productidentifier.md): Deprecated. A string used to identify a product that can be purchased from within your app.
- [quantity](skpayment/quantity.md): Deprecated. The number of items the user wants to purchase.
- [requestData](skpayment/requestdata.md): Deprecated. Reserved for future use.
- [applicationUsername](skpayment/applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.

### Simulating Purchases for Testing

- [simulatesAskToBuyInSandbox](skpayment/simulatesasktobuyinsandbox.md): Deprecated. A Boolean value that produces an “ask to buy” flow for this payment in the sandbox.

### Getting Discount Details

- [paymentDiscount](skpayment/paymentdiscount.md): Deprecated. The details of the discount offer to apply to the payment.
- [SKPaymentDiscount](skpaymentdiscount.md): Deprecated. The signed discount to apply to a payment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKMutablePayment](skmutablepayment.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Purchases

- [Requesting a payment from the App Store](requesting-a-payment-from-the-app-store.md): Submit a payment request to the App Store when a customer selects a product to buy.
- [Processing a transaction](processing-a-transaction.md): Register a transaction queue observer to get and handle transaction updates from the App Store.
- [SKMutablePayment](skmutablepayment.md): Deprecated. A mutable request to the App Store to process payment for additional functionality that your app offers.
- [SKPaymentTransaction](skpaymenttransaction.md): Deprecated. An object in the payment queue.
