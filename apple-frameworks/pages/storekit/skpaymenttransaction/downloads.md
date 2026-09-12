> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransaction/downloads](https://developer.apple.com/documentation/storekit/skpaymenttransaction/downloads)

# downloads (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

An array of download objects representing the downloadable content associated with the transaction.

> Hosted content is no longer supported.

## Declaration

```swift
var downloads: [SKDownload] { get }
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

The contents of this property are undefined except when [transactionState](transactionstate.md) is set to [SKPaymentTransactionState.purchased](../skpaymenttransactionstate/purchased.md). The [SKDownload](../skdownload.md) objects stored in this property must be used to download the transaction’s content before the transaction is finished. After the transaction is finished, the download objects are no longer queueable.

# downloads (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

An array of download objects representing the downloadable content associated with the transaction.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SKDownload *> * downloads;
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

The contents of this property are undefined except when [transactionState](transactionstate.md) is set to [SKPaymentTransactionStatePurchased](../skpaymenttransactionstate/purchased.md). The [SKDownload](../skdownload.md) objects stored in this property must be used to download the transaction’s content before the transaction is finished. After the transaction is finished, the download objects are no longer queueable.
