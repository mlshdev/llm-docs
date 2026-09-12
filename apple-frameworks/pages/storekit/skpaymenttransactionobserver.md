> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionobserver](https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver)

# SKPaymentTransactionObserver (Swift)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A set of methods that process transactions, unlock purchased functionality, and continue promoted In-App Purchases.

> Use StoreKit 2 Transaction APIs.

## Declaration

```swift
protocol SKPaymentTransactionObserver : NSObjectProtocol
```

## Mentioned In

- [Testing In-App Purchases in Xcode](testing-in-app-purchases-in-xcode.md)
- [Promoting In-App Purchases](promoting-in-app-purchases.md)
- [Processing a transaction](processing-a-transaction.md)
- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md)
- [Testing transaction observer code](testing-transaction-observer-code.md)
- [Choosing a receipt validation technique](choosing-a-receipt-validation-technique.md)
- [Supporting Family Sharing in your app](supporting-family-sharing-in-your-app.md)
- [Testing resubscribing from the subscriptions page](testing-resubscribing-from-the-subscriptions-page.md)

<a id="overview"></a>

## Overview

Observers of [SKPaymentQueue](skpaymentqueue.md) objects implement the methods of this protocol.

The system calls an observer when the queue updates or removes transactions. An observer needs to process all successful transactions, unlock the functionality the user purchases, and then finish the transaction by calling the payment queue’s [finishTransaction(\_:)](skpaymentqueue/finishtransaction%28__%29.md) method.

## Topics

### Handling transactions

- [paymentQueue(\_:updatedTransactions:)](skpaymenttransactionobserver/paymentqueue%28__updatedtransactions_%29.md): Deprecated. Tells an observer that one or more transactions have been updated.
- [paymentQueue(\_:removedTransactions:)](skpaymenttransactionobserver/paymentqueue%28__removedtransactions_%29.md): Deprecated. Tells an observer that one or more transactions have been removed from the queue.

### Restoring transactions

- [paymentQueue(\_:restoreCompletedTransactionsFailedWithError:)](skpaymenttransactionobserver/paymentqueue%28__restorecompletedtransactionsfailedwitherror_%29.md): Deprecated. Tells the observer that an error occurred while restoring transactions.
- [paymentQueueRestoreCompletedTransactionsFinished(\_:)](skpaymenttransactionobserver/paymentqueuerestorecompletedtransactionsfinished%28__%29.md): Deprecated. Tells the observer that the payment queue has finished sending restored transactions.

### Handling promoted in-app purchases

- [Promoting In-App Purchases](promoting-in-app-purchases.md): Show promoted In-App Purchases on your product page and handle purchases that customers initiate on the App Store.
- [paymentQueue(\_:shouldAddStorePayment:for:)](skpaymenttransactionobserver/paymentqueue%28__shouldaddstorepayment_for_%29.md): Deprecated. Tells the observer when a user initiates an in-app purchase from the App Store.

### Revoking entitlements

- [paymentQueue(\_:didRevokeEntitlementsForProductIdentifiers:)](skpaymenttransactionobserver/paymentqueue%28__didrevokeentitlementsforproductidentifiers_%29.md): Deprecated. Tells an observer that the customer is no longer entitled to one or more Family Sharing purchases.

### Changing the storefront

- [paymentQueueDidChangeStorefront(\_:)](skpaymenttransactionobserver/paymentqueuedidchangestorefront%28__%29.md): Deprecated. Tells the observer that the storefront for the payment queue has changed.

### Handling download actions

- [paymentQueue(\_:updatedDownloads:)](skpaymenttransactionobserver/paymentqueue%28__updateddownloads_%29.md): Deprecated. Tells the observer that the payment queue has updated one or more download objects.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md): Enable your app to receive and handle transactions by adding an observer.
- [Offering, completing, and restoring in-app purchases](offering-completing-and-restoring-in-app-purchases.md): Fetch, display, purchase, validate, and finish transactions in your app.
- [SKPaymentQueue](skpaymentqueue.md): Deprecated. A queue of payment transactions for the App Store to process.
- [SKPaymentQueueDelegate](skpaymentqueuedelegate.md): Deprecated. The protocol that provides information needed to complete transactions.
- [SKRequest](skrequest.md): Deprecated. An abstract class that represents a request to the App Store.

# SKPaymentTransactionObserver (Objective-C)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A set of methods that process transactions, unlock purchased functionality, and continue promoted In-App Purchases.

> Use StoreKit 2 Transaction APIs.

## Declaration

```objectivec
@protocol SKPaymentTransactionObserver <NSObject>
```

## Mentioned In

- [Testing In-App Purchases in Xcode](testing-in-app-purchases-in-xcode.md)
- [Promoting In-App Purchases](promoting-in-app-purchases.md)
- [Processing a transaction](processing-a-transaction.md)
- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md)
- [Testing transaction observer code](testing-transaction-observer-code.md)
- [Choosing a receipt validation technique](choosing-a-receipt-validation-technique.md)
- [Supporting Family Sharing in your app](supporting-family-sharing-in-your-app.md)
- [Testing resubscribing from the subscriptions page](testing-resubscribing-from-the-subscriptions-page.md)

<a id="overview"></a>

## Overview

Observers of [SKPaymentQueue](skpaymentqueue.md) objects implement the methods of this protocol.

The system calls an observer when the queue updates or removes transactions. An observer needs to process all successful transactions, unlock the functionality the user purchases, and then finish the transaction by calling the payment queue’s [finishTransaction:](skpaymentqueue/finishtransaction%28__%29.md) method.

## Topics

### Handling transactions

- [paymentQueue:updatedTransactions:](skpaymenttransactionobserver/paymentqueue%28__updatedtransactions_%29.md): Deprecated. Tells an observer that one or more transactions have been updated.
- [paymentQueue:removedTransactions:](skpaymenttransactionobserver/paymentqueue%28__removedtransactions_%29.md): Deprecated. Tells an observer that one or more transactions have been removed from the queue.

### Restoring transactions

- [paymentQueue:restoreCompletedTransactionsFailedWithError:](skpaymenttransactionobserver/paymentqueue%28__restorecompletedtransactionsfailedwitherror_%29.md): Deprecated. Tells the observer that an error occurred while restoring transactions.
- [paymentQueueRestoreCompletedTransactionsFinished:](skpaymenttransactionobserver/paymentqueuerestorecompletedtransactionsfinished%28__%29.md): Deprecated. Tells the observer that the payment queue has finished sending restored transactions.

### Handling promoted in-app purchases

- [Promoting In-App Purchases](promoting-in-app-purchases.md): Show promoted In-App Purchases on your product page and handle purchases that customers initiate on the App Store.
- [paymentQueue:shouldAddStorePayment:forProduct:](skpaymenttransactionobserver/paymentqueue%28__shouldaddstorepayment_for_%29.md): Deprecated. Tells the observer when a user initiates an in-app purchase from the App Store.

### Revoking entitlements

- [paymentQueue:didRevokeEntitlementsForProductIdentifiers:](skpaymenttransactionobserver/paymentqueue%28__didrevokeentitlementsforproductidentifiers_%29.md): Deprecated. Tells an observer that the customer is no longer entitled to one or more Family Sharing purchases.

### Changing the storefront

- [paymentQueueDidChangeStorefront:](skpaymenttransactionobserver/paymentqueuedidchangestorefront%28__%29.md): Deprecated. Tells the observer that the storefront for the payment queue has changed.

### Handling download actions

- [paymentQueue:updatedDownloads:](skpaymenttransactionobserver/paymentqueue%28__updateddownloads_%29.md): Deprecated. Tells the observer that the payment queue has updated one or more download objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md): Enable your app to receive and handle transactions by adding an observer.
- [Offering, completing, and restoring in-app purchases](offering-completing-and-restoring-in-app-purchases.md): Fetch, display, purchase, validate, and finish transactions in your app.
- [SKPaymentQueue](skpaymentqueue.md): Deprecated. A queue of payment transactions for the App Store to process.
- [SKPaymentQueueDelegate](skpaymentqueuedelegate.md): Deprecated. The protocol that provides information needed to complete transactions.
- [SKRequest](skrequest.md): Deprecated. An abstract class that represents a request to the App Store.
