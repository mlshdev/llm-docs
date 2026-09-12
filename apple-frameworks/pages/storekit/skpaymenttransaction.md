> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransaction](https://developer.apple.com/documentation/storekit/skpaymenttransaction)

# SKPaymentTransaction (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object in the payment queue.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
class SKPaymentTransaction
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)
- [Restoring purchased products](restoring-purchased-products.md)

<a id="overview"></a>

## Overview

A payment transaction is created whenever a payment is added to the payment queue. The system delivers transactions to your app when the App Store finishes processing the payment. Completed transactions provide a receipt and transaction identifier that your app can use to save a permanent record of the processed payment.

## Topics

### Getting Transaction Information

- [payment](skpaymenttransaction/payment.md): Deprecated. The payment for the transaction.
- [transactionIdentifier](skpaymenttransaction/transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [transactionDate](skpaymenttransaction/transactiondate.md): Deprecated. The date the transaction was added to the App Store’s payment queue.
- [original](skpaymenttransaction/original.md): Deprecated. The transaction that was restored by the App Store.
- [error](skpaymenttransaction/error.md): Deprecated. An object describing the error that occurred while processing the transaction.
- [transactionReceipt](skpaymenttransaction/transactionreceipt.md): Deprecated. A signed receipt that records all information about a successful payment transaction.

### Getting Downloads

- [downloads](skpaymenttransaction/downloads.md): Deprecated. An array of download objects representing the downloadable content associated with the transaction.

### Getting Transaction State

- [transactionState](skpaymenttransaction/transactionstate.md): Deprecated. The current state of the transaction.
- [SKPaymentTransactionState](skpaymenttransactionstate.md): Deprecated. Values representing the state of a transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Purchases

- [Requesting a payment from the App Store](requesting-a-payment-from-the-app-store.md): Submit a payment request to the App Store when a customer selects a product to buy.
- [Processing a transaction](processing-a-transaction.md): Register a transaction queue observer to get and handle transaction updates from the App Store.
- [SKPayment](skpayment.md): Deprecated. A request to the App Store to process payment for additional functionality that your app offers.
- [SKMutablePayment](skmutablepayment.md): Deprecated. A mutable request to the App Store to process payment for additional functionality that your app offers.

# SKPaymentTransaction (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object in the payment queue.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@interface SKPaymentTransaction : NSObject
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)
- [Restoring purchased products](restoring-purchased-products.md)

<a id="overview"></a>

## Overview

A payment transaction is created whenever a payment is added to the payment queue. The system delivers transactions to your app when the App Store finishes processing the payment. Completed transactions provide a receipt and transaction identifier that your app can use to save a permanent record of the processed payment.

## Topics

### Getting Transaction Information

- [payment](skpaymenttransaction/payment.md): Deprecated. The payment for the transaction.
- [transactionIdentifier](skpaymenttransaction/transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [transactionDate](skpaymenttransaction/transactiondate.md): Deprecated. The date the transaction was added to the App Store’s payment queue.
- [originalTransaction](skpaymenttransaction/original.md): Deprecated. The transaction that was restored by the App Store.
- [error](skpaymenttransaction/error.md): Deprecated. An object describing the error that occurred while processing the transaction.
- [transactionReceipt](skpaymenttransaction/transactionreceipt.md): Deprecated. A signed receipt that records all information about a successful payment transaction.

### Getting Downloads

- [downloads](skpaymenttransaction/downloads.md): Deprecated. An array of download objects representing the downloadable content associated with the transaction.

### Getting Transaction State

- [transactionState](skpaymenttransaction/transactionstate.md): Deprecated. The current state of the transaction.
- [SKPaymentTransactionState](skpaymenttransactionstate.md): Deprecated. Values representing the state of a transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Purchases

- [Requesting a payment from the App Store](requesting-a-payment-from-the-app-store.md): Submit a payment request to the App Store when a customer selects a product to buy.
- [Processing a transaction](processing-a-transaction.md): Register a transaction queue observer to get and handle transaction updates from the App Store.
- [SKPayment](skpayment.md): Deprecated. A request to the App Store to process payment for additional functionality that your app offers.
- [SKMutablePayment](skmutablepayment.md): Deprecated. A mutable request to the App Store to process payment for additional functionality that your app offers.
