> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransaction/payment](https://developer.apple.com/documentation/storekit/skpaymenttransaction/payment)

# payment (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The payment for the transaction.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
var payment: SKPayment { get }
```

<a id="Discussion"></a>

## Discussion

Each payment transaction is created in response to a payment that your application added to the payment queue.

## See Also

### Getting Transaction Information

- [transactionIdentifier](transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [transactionDate](transactiondate.md): Deprecated. The date the transaction was added to the App Store’s payment queue.
- [original](original.md): Deprecated. The transaction that was restored by the App Store.
- [error](error.md): Deprecated. An object describing the error that occurred while processing the transaction.
- [transactionReceipt](transactionreceipt.md): Deprecated. A signed receipt that records all information about a successful payment transaction.

# payment (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The payment for the transaction.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, readonly) SKPayment * payment;
```

<a id="Discussion"></a>

## Discussion

Each payment transaction is created in response to a payment that your application added to the payment queue.

## See Also

### Getting Transaction Information

- [transactionIdentifier](transactionidentifier.md): Deprecated. A string that uniquely identifies a successful payment transaction.
- [transactionDate](transactiondate.md): Deprecated. The date the transaction was added to the App Store’s payment queue.
- [originalTransaction](original.md): Deprecated. The transaction that was restored by the App Store.
- [error](error.md): Deprecated. An object describing the error that occurred while processing the transaction.
- [transactionReceipt](transactionreceipt.md): Deprecated. A signed receipt that records all information about a successful payment transaction.
