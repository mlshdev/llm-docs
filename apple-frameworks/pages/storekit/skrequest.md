> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skrequest](https://developer.apple.com/documentation/storekit/skrequest)

# SKRequest (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An abstract class that represents a request to the App Store.

> No longer supported.

## Declaration

```swift
class SKRequest
```

<a id="overview"></a>

## Overview

To make a request, initialize a subclass of [SKRequest](skrequest.md)—such as [SKProductsRequest](skproductsrequest.md) or [SKReceiptRefreshRequest](skreceiptrefreshrequest.md)—set the [delegate](skrequest/delegate.md) property, and call the [start()](skrequest/start%28%29.md) method.

## Topics

### Controlling the Request

- [start()](skrequest/start%28%29.md): Deprecated. Sends the request to the Apple App Store.
- [cancel()](skrequest/cancel%28%29.md): Deprecated. Cancels a previously started request.

### Accessing the Delegate

- [delegate](skrequest/delegate.md): Deprecated. The delegate of the request object.
- [SKRequestDelegate](skrequestdelegate.md): Deprecated. Common methods that are implemented by delegates for any subclass of the `SKRequest` abstract class.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKProductsRequest](skproductsrequest.md)
- [SKReceiptRefreshRequest](skreceiptrefreshrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md): Enable your app to receive and handle transactions by adding an observer.
- [Offering, completing, and restoring in-app purchases](offering-completing-and-restoring-in-app-purchases.md): Fetch, display, purchase, validate, and finish transactions in your app.
- [SKPaymentQueue](skpaymentqueue.md): Deprecated. A queue of payment transactions for the App Store to process.
- [SKPaymentTransactionObserver](skpaymenttransactionobserver.md): Deprecated. A set of methods that process transactions, unlock purchased functionality, and continue promoted In-App Purchases.
- [SKPaymentQueueDelegate](skpaymentqueuedelegate.md): Deprecated. The protocol that provides information needed to complete transactions.

# SKRequest (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An abstract class that represents a request to the App Store.

> No longer supported.

## Declaration

```objectivec
@interface SKRequest : NSObject
```

<a id="overview"></a>

## Overview

To make a request, initialize a subclass of [SKRequest](skrequest.md)—such as [SKProductsRequest](skproductsrequest.md) or [SKReceiptRefreshRequest](skreceiptrefreshrequest.md)—set the [delegate](skrequest/delegate.md) property, and call the [start](skrequest/start%28%29.md) method.

## Topics

### Controlling the Request

- [start](skrequest/start%28%29.md): Deprecated. Sends the request to the Apple App Store.
- [cancel](skrequest/cancel%28%29.md): Deprecated. Cancels a previously started request.

### Accessing the Delegate

- [delegate](skrequest/delegate.md): Deprecated. The delegate of the request object.
- [SKRequestDelegate](skrequestdelegate.md): Deprecated. Common methods that are implemented by delegates for any subclass of the `SKRequest` abstract class.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKProductsRequest](skproductsrequest.md)
- [SKReceiptRefreshRequest](skreceiptrefreshrequest.md)

## See Also

### Essentials

- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md): Enable your app to receive and handle transactions by adding an observer.
- [Offering, completing, and restoring in-app purchases](offering-completing-and-restoring-in-app-purchases.md): Fetch, display, purchase, validate, and finish transactions in your app.
- [SKPaymentQueue](skpaymentqueue.md): Deprecated. A queue of payment transactions for the App Store to process.
- [SKPaymentTransactionObserver](skpaymenttransactionobserver.md): Deprecated. A set of methods that process transactions, unlock purchased functionality, and continue promoted In-App Purchases.
- [SKPaymentQueueDelegate](skpaymentqueuedelegate.md): Deprecated. The protocol that provides information needed to complete transactions.
