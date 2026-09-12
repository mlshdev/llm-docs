> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransaction/transactionreceipt](https://developer.apple.com/documentation/storekit/skpaymenttransaction/transactionreceipt)

# transactionReceipt (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** tvOS  (deprecated in 18.0)

A signed receipt that records all information about a successful payment transaction.

> Use the app receipt instead, as described in [Receipt Validation Programming Guide](https://developer.apple.com/library/archive/releasenotes/General/ValidateAppStoreReceipt/Introduction.html#//apple_ref/doc/uid/TP40010573).

## Declaration

```swift
var transactionReceipt: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The contents of this property are undefined except when [transactionState](transactionstate.md) is set to [SKPaymentTransactionState.purchased](../skpaymenttransactionstate/purchased.md).

The receipt is a signed chunk of data that can be sent to the App Store to verify that the payment was successfully processed. This is most useful when designing a store that uses a server separate from the iPhone to verify that payment was processed. For more information on verifying receipts, see [Receipt Validation Programming Guide](https://developer.apple.com/library/archive/releasenotes/General/ValidateAppStoreReceipt/Introduction.html#//apple_ref/doc/uid/TP40010573).

## See Also

### Getting Transaction Information

- [payment](payment.md): Deprecated. The payment for the transaction.
- [transactionIdentifier](transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [transactionDate](transactiondate.md): Deprecated. The date the transaction was added to the App Store’s payment queue.
- [original](original.md): Deprecated. The transaction that was restored by the App Store.
- [error](error.md): Deprecated. An object describing the error that occurred while processing the transaction.

# transactionReceipt (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.0) · tvOS  (deprecated in 18.0)

A signed receipt that records all information about a successful payment transaction.

> Use the app receipt instead, as described in [Receipt Validation Programming Guide](https://developer.apple.com/library/archive/releasenotes/General/ValidateAppStoreReceipt/Introduction.html#//apple_ref/doc/uid/TP40010573).

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * transactionReceipt;
```

<a id="Discussion"></a>

## Discussion

The contents of this property are undefined except when [transactionState](transactionstate.md) is set to [SKPaymentTransactionStatePurchased](../skpaymenttransactionstate/purchased.md).

The receipt is a signed chunk of data that can be sent to the App Store to verify that the payment was successfully processed. This is most useful when designing a store that uses a server separate from the iPhone to verify that payment was processed. For more information on verifying receipts, see [Receipt Validation Programming Guide](https://developer.apple.com/library/archive/releasenotes/General/ValidateAppStoreReceipt/Introduction.html#//apple_ref/doc/uid/TP40010573).

## See Also

### Getting Transaction Information

- [payment](payment.md): Deprecated. The payment for the transaction.
- [transactionIdentifier](transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [transactionDate](transactiondate.md): Deprecated. The date the transaction was added to the App Store’s payment queue.
- [originalTransaction](original.md): Deprecated. The transaction that was restored by the App Store.
- [error](error.md): Deprecated. An object describing the error that occurred while processing the transaction.
