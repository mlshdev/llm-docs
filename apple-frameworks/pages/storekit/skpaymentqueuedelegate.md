> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueuedelegate](https://developer.apple.com/documentation/storekit/skpaymentqueuedelegate)

# SKPaymentQueueDelegate (Swift)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The protocol that provides information needed to complete transactions.

> No longer supported.

## Declaration

```swift
protocol SKPaymentQueueDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol includes a method that lets your app determine whether to continue a transaction if the customer’s App Store storefront changes.

## Topics

### Continuing transactions

- [paymentQueue(\_:shouldContinue:in:)](skpaymentqueuedelegate/paymentqueue%28__shouldcontinue_in_%29.md): Deprecated. Asks the delegate whether to continue the transaction if the device’s App Store storefront changes during a transaction.

### Showing price consent

- [paymentQueueShouldShowPriceConsent(\_:)](skpaymentqueuedelegate/paymentqueueshouldshowpriceconsent%28__%29.md): Deprecated. Asks the delegate whether to immediately display a price consent sheet.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md): Enable your app to receive and handle transactions by adding an observer.
- [Offering, completing, and restoring in-app purchases](offering-completing-and-restoring-in-app-purchases.md): Fetch, display, purchase, validate, and finish transactions in your app.
- [SKPaymentQueue](skpaymentqueue.md): Deprecated. A queue of payment transactions for the App Store to process.
- [SKPaymentTransactionObserver](skpaymenttransactionobserver.md): Deprecated. A set of methods that process transactions, unlock purchased functionality, and continue promoted In-App Purchases.
- [SKRequest](skrequest.md): Deprecated. An abstract class that represents a request to the App Store.

# SKPaymentQueueDelegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The protocol that provides information needed to complete transactions.

> No longer supported.

## Declaration

```objectivec
@protocol SKPaymentQueueDelegate <NSObject>
```

<a id="overview"></a>

## Overview

This protocol includes a method that lets your app determine whether to continue a transaction if the customer’s App Store storefront changes.

## Topics

### Continuing transactions

- [paymentQueue:shouldContinueTransaction:inStorefront:](skpaymentqueuedelegate/paymentqueue%28__shouldcontinue_in_%29.md): Deprecated. Asks the delegate whether to continue the transaction if the device’s App Store storefront changes during a transaction.

### Showing price consent

- [paymentQueueShouldShowPriceConsent:](skpaymentqueuedelegate/paymentqueueshouldshowpriceconsent%28__%29.md): Deprecated. Asks the delegate whether to immediately display a price consent sheet.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md): Enable your app to receive and handle transactions by adding an observer.
- [Offering, completing, and restoring in-app purchases](offering-completing-and-restoring-in-app-purchases.md): Fetch, display, purchase, validate, and finish transactions in your app.
- [SKPaymentQueue](skpaymentqueue.md): Deprecated. A queue of payment transactions for the App Store to process.
- [SKPaymentTransactionObserver](skpaymenttransactionobserver.md): Deprecated. A set of methods that process transactions, unlock purchased functionality, and continue promoted In-App Purchases.
- [SKRequest](skrequest.md): Deprecated. An abstract class that represents a request to the App Store.
