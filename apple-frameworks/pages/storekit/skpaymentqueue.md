> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue](https://developer.apple.com/documentation/storekit/skpaymentqueue)

# SKPaymentQueue (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A queue of payment transactions for the App Store to process.

> No longer supported.

## Declaration

```swift
class SKPaymentQueue
```

## Mentioned In

- [Restoring purchased products](restoring-purchased-products.md)
- [Testing transaction observer code](testing-transaction-observer-code.md)
- [Unlocking purchased content](unlocking-purchased-content.md)

<a id="overview"></a>

## Overview

The payment queue communicates with the App Store and presents a user interface so that the user can authorize payment. The contents of the queue are persistent between launches of your app.

To process a payment, first add at least one observer object ([SKPaymentTransactionObserver](skpaymenttransactionobserver.md)) to the queue (see [add(\_:)](skpaymentqueue/add%28__%29-5ciz2.md)). Then, add a payment object ([SKPayment](skpayment.md)) for the item the user wants to purchase. Each time you add a payment object, the queue creates a transaction object ([SKPaymentTransaction](skpaymenttransaction.md)) to process that payment and enqueues it to be processed. After payment is fulfilled, the queue updates the transaction object and then calls any observer objects to provide them the updated transaction. Your observer should process the transaction and then remove it from the queue.

The exact mechanism you use to process a processed transaction depends on the design of your app and the product being purchased. Here are a few common examples:

- If the product is a feature already built into your app, your app enables the feature to process the transaction.
- If the product includes downloadable content provided by the App Store, your app retrieves the [SKDownload](skdownload.md) objects from the transaction and ask the payment queue to download them. You provide the actual content files to be served by the App Store to App Store Connect when you create the product information.
- If the product represents downloadable content provided by your own server, your app might open a network connection to your server and download the content from there.

For more information on designing the payment processing portion of your app, see [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267).

## Topics

### Determining Whether the User Can Make Payments

- [canMakePayments()](skpaymentqueue/canmakepayments%28%29.md): Deprecated. A method that indicates whether the person can make purchases.

### Determining Store Content

- [storefront](skpaymentqueue/storefront.md): Deprecated. The App Store storefront of the device.

### Getting the Queue

- [default()](skpaymentqueue/default%28%29.md): Deprecated. Returns the default payment queue instance.

### Adding, Getting, and Removing Observers

- [add(\_:)](skpaymentqueue/add%28__%29-5ciz2.md): Deprecated. Adds an observer to the payment queue.
- [transactionObservers](skpaymentqueue/transactionobservers.md): Deprecated. An array of all active payment queue observers.
- [remove(\_:)](skpaymentqueue/remove%28__%29.md): Deprecated. Removes an observer from the payment queue.

### Managing Transactions

- [delegate](skpaymentqueue/delegate.md): Deprecated. A delegate that provides information needed to complete transactions.
- [transactions](skpaymentqueue/transactions.md): Deprecated. Returns an array of pending transactions.
- [add(\_:)](skpaymentqueue/add%28__%29-4vct1.md): Deprecated. Adds a payment request to the queue.
- [finishTransaction(\_:)](skpaymentqueue/finishtransaction%28__%29.md): Deprecated. Notifies the App Store that the app finished processing the transaction.

### Restoring Purchases

- [restoreCompletedTransactions()](skpaymentqueue/restorecompletedtransactions%28%29.md): Deprecated. Asks the payment queue to restore previously completed purchases.
- [restoreCompletedTransactions(withApplicationUsername:)](skpaymentqueue/restorecompletedtransactions%28withapplicationusername_%29.md): Deprecated. Asks the payment queue to restore previously completed purchases, providing an opaque identifier for the user’s account.

### Showing Price Consent

- [showPriceConsentIfNeeded()](skpaymentqueue/showpriceconsentifneeded%28%29.md): Deprecated. Asks the system to display the price consent sheet if the user hasn’t yet responded to a subscription price increase.

### Redeeming Codes

- [presentCodeRedemptionSheet()](skpaymentqueue/presentcoderedemptionsheet%28%29.md): Deprecated. Displays a sheet that enables customers to redeem offer codes that you configure in App Store Connect.

### Downloading Content

- [start(\_:)](skpaymentqueue/start%28__%29.md): Deprecated. Adds a set of downloads to the download list.
- [cancel(\_:)](skpaymentqueue/cancel%28__%29.md): Deprecated. Removes a set of downloads from the download list.
- [pause(\_:)](skpaymentqueue/pause%28__%29.md): Deprecated. Pauses a set of downloads.
- [resume(\_:)](skpaymentqueue/resume%28__%29.md): Deprecated. Resumes a set of downloads.

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

### Essentials

- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md): Enable your app to receive and handle transactions by adding an observer.
- [Offering, completing, and restoring in-app purchases](offering-completing-and-restoring-in-app-purchases.md): Fetch, display, purchase, validate, and finish transactions in your app.
- [SKPaymentTransactionObserver](skpaymenttransactionobserver.md): Deprecated. A set of methods that process transactions, unlock purchased functionality, and continue promoted In-App Purchases.
- [SKPaymentQueueDelegate](skpaymentqueuedelegate.md): Deprecated. The protocol that provides information needed to complete transactions.
- [SKRequest](skrequest.md): Deprecated. An abstract class that represents a request to the App Store.

# SKPaymentQueue (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A queue of payment transactions for the App Store to process.

> No longer supported.

## Declaration

```objectivec
@interface SKPaymentQueue : NSObject
```

## Mentioned In

- [Restoring purchased products](restoring-purchased-products.md)
- [Testing transaction observer code](testing-transaction-observer-code.md)
- [Unlocking purchased content](unlocking-purchased-content.md)

<a id="overview"></a>

## Overview

The payment queue communicates with the App Store and presents a user interface so that the user can authorize payment. The contents of the queue are persistent between launches of your app.

To process a payment, first add at least one observer object ([SKPaymentTransactionObserver](skpaymenttransactionobserver.md)) to the queue (see [addTransactionObserver:](skpaymentqueue/add%28__%29-5ciz2.md)). Then, add a payment object ([SKPayment](skpayment.md)) for the item the user wants to purchase. Each time you add a payment object, the queue creates a transaction object ([SKPaymentTransaction](skpaymenttransaction.md)) to process that payment and enqueues it to be processed. After payment is fulfilled, the queue updates the transaction object and then calls any observer objects to provide them the updated transaction. Your observer should process the transaction and then remove it from the queue.

The exact mechanism you use to process a processed transaction depends on the design of your app and the product being purchased. Here are a few common examples:

- If the product is a feature already built into your app, your app enables the feature to process the transaction.
- If the product includes downloadable content provided by the App Store, your app retrieves the [SKDownload](skdownload.md) objects from the transaction and ask the payment queue to download them. You provide the actual content files to be served by the App Store to App Store Connect when you create the product information.
- If the product represents downloadable content provided by your own server, your app might open a network connection to your server and download the content from there.

For more information on designing the payment processing portion of your app, see [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267).

## Topics

### Determining Whether the User Can Make Payments

- [canMakePayments](skpaymentqueue/canmakepayments%28%29.md): Deprecated. A method that indicates whether the person can make purchases.

### Determining Store Content

- [storefront](skpaymentqueue/storefront.md): Deprecated. The App Store storefront of the device.

### Getting the Queue

- [defaultQueue](skpaymentqueue/default%28%29.md): Deprecated. Returns the default payment queue instance.

### Adding, Getting, and Removing Observers

- [addTransactionObserver:](skpaymentqueue/add%28__%29-5ciz2.md): Deprecated. Adds an observer to the payment queue.
- [transactionObservers](skpaymentqueue/transactionobservers.md): Deprecated. An array of all active payment queue observers.
- [removeTransactionObserver:](skpaymentqueue/remove%28__%29.md): Deprecated. Removes an observer from the payment queue.

### Managing Transactions

- [delegate](skpaymentqueue/delegate.md): Deprecated. A delegate that provides information needed to complete transactions.
- [transactions](skpaymentqueue/transactions.md): Deprecated. Returns an array of pending transactions.
- [addPayment:](skpaymentqueue/add%28__%29-4vct1.md): Deprecated. Adds a payment request to the queue.
- [finishTransaction:](skpaymentqueue/finishtransaction%28__%29.md): Deprecated. Notifies the App Store that the app finished processing the transaction.

### Restoring Purchases

- [restoreCompletedTransactions](skpaymentqueue/restorecompletedtransactions%28%29.md): Deprecated. Asks the payment queue to restore previously completed purchases.
- [restoreCompletedTransactionsWithApplicationUsername:](skpaymentqueue/restorecompletedtransactions%28withapplicationusername_%29.md): Deprecated. Asks the payment queue to restore previously completed purchases, providing an opaque identifier for the user’s account.

### Showing Price Consent

- [showPriceConsentIfNeeded](skpaymentqueue/showpriceconsentifneeded%28%29.md): Deprecated. Asks the system to display the price consent sheet if the user hasn’t yet responded to a subscription price increase.

### Redeeming Codes

- [presentCodeRedemptionSheet](skpaymentqueue/presentcoderedemptionsheet%28%29.md): Deprecated. Displays a sheet that enables customers to redeem offer codes that you configure in App Store Connect.

### Downloading Content

- [startDownloads:](skpaymentqueue/start%28__%29.md): Deprecated. Adds a set of downloads to the download list.
- [cancelDownloads:](skpaymentqueue/cancel%28__%29.md): Deprecated. Removes a set of downloads from the download list.
- [pauseDownloads:](skpaymentqueue/pause%28__%29.md): Deprecated. Pauses a set of downloads.
- [resumeDownloads:](skpaymentqueue/resume%28__%29.md): Deprecated. Resumes a set of downloads.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Setting up the transaction observer for the payment queue](setting-up-the-transaction-observer-for-the-payment-queue.md): Enable your app to receive and handle transactions by adding an observer.
- [Offering, completing, and restoring in-app purchases](offering-completing-and-restoring-in-app-purchases.md): Fetch, display, purchase, validate, and finish transactions in your app.
- [SKPaymentTransactionObserver](skpaymenttransactionobserver.md): Deprecated. A set of methods that process transactions, unlock purchased functionality, and continue promoted In-App Purchases.
- [SKPaymentQueueDelegate](skpaymentqueuedelegate.md): Deprecated. The protocol that provides information needed to complete transactions.
- [SKRequest](skrequest.md): Deprecated. An abstract class that represents a request to the App Store.
