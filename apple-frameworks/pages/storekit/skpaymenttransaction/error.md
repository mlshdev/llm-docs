> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransaction/error](https://developer.apple.com/documentation/storekit/skpaymenttransaction/error)

# error (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object describing the error that occurred while processing the transaction.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The [error](error.md) property is undefined except when [transactionState](transactionstate.md) is set to [SKPaymentTransactionState.failed](../skpaymenttransactionstate/failed.md). Your application can read the [error](error.md) property to determine why the transaction failed. For a list of error constants, see SKErrorDomain in `StoreKit Constants`.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Getting Transaction Information

- [payment](payment.md): Deprecated. The payment for the transaction.
- [transactionIdentifier](transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [transactionDate](transactiondate.md): Deprecated. The date the transaction was added to the App Store’s payment queue.
- [original](original.md): Deprecated. The transaction that was restored by the App Store.
- [transactionReceipt](transactionreceipt.md): Deprecated. A signed receipt that records all information about a successful payment transaction.

# error (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object describing the error that occurred while processing the transaction.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

The [error](error.md) property is undefined except when [transactionState](transactionstate.md) is set to [SKPaymentTransactionStateFailed](../skpaymenttransactionstate/failed.md). Your application can read the [error](error.md) property to determine why the transaction failed. For a list of error constants, see SKErrorDomain in `StoreKit Constants`.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Getting Transaction Information

- [payment](payment.md): Deprecated. The payment for the transaction.
- [transactionIdentifier](transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [transactionDate](transactiondate.md): Deprecated. The date the transaction was added to the App Store’s payment queue.
- [originalTransaction](original.md): Deprecated. The transaction that was restored by the App Store.
- [transactionReceipt](transactionreceipt.md): Deprecated. A signed receipt that records all information about a successful payment transaction.
