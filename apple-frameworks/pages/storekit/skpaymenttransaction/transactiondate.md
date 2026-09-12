> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransaction/transactiondate](https://developer.apple.com/documentation/storekit/skpaymenttransaction/transactiondate)

# transactionDate (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The date the transaction was added to the App Store’s payment queue.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
var transactionDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

The contents of this property are undefined except when [transactionState](transactionstate.md) is set to [SKPaymentTransactionState.purchased](../skpaymenttransactionstate/purchased.md) or [SKPaymentTransactionState.restored](../skpaymenttransactionstate/restored.md).

## See Also

### Getting Transaction Information

- [payment](payment.md): Deprecated. The payment for the transaction.
- [transactionIdentifier](transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [original](original.md): Deprecated. The transaction that was restored by the App Store.
- [error](error.md): Deprecated. An object describing the error that occurred while processing the transaction.
- [transactionReceipt](transactionreceipt.md): Deprecated. A signed receipt that records all information about a successful payment transaction.

# transactionDate (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The date the transaction was added to the App Store’s payment queue.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * transactionDate;
```

<a id="Discussion"></a>

## Discussion

The contents of this property are undefined except when [transactionState](transactionstate.md) is set to [SKPaymentTransactionStatePurchased](../skpaymenttransactionstate/purchased.md) or [SKPaymentTransactionStateRestored](../skpaymenttransactionstate/restored.md).

## See Also

### Getting Transaction Information

- [payment](payment.md): Deprecated. The payment for the transaction.
- [transactionIdentifier](transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [originalTransaction](original.md): Deprecated. The transaction that was restored by the App Store.
- [error](error.md): Deprecated. An object describing the error that occurred while processing the transaction.
- [transactionReceipt](transactionreceipt.md): Deprecated. A signed receipt that records all information about a successful payment transaction.
