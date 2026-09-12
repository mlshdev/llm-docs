> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/add(_:)-4vct1](https://developer.apple.com/documentation/storekit/skpaymentqueue/add(_:)-4vct1)

# add(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Adds a payment request to the queue.

> Use Product.purchase(confirmIn:options:).

## Declaration

```swift
func add(_ payment: SKPayment)
```

## Parameters

- `payment`: A payment request.

<a id="Discussion"></a>

## Discussion

An application should always have at least one observer of the payment queue before adding payment requests.

The payment request must have a product identifier registered with the Apple App Store and a quantity greater than `0`. If either property is invalid, [add(\_:)](add%28__%29-4vct1.md) throws an exception.

When a payment request is added to the queue, the payment queue processes that request with the Apple App Store and arranges for payment from the user. When that transaction is complete or if a failure occurs, the payment queue sends the [SKPaymentTransaction](../skpaymenttransaction.md) object that encapsulates the request to all transaction observers.

## See Also

### Managing Transactions

- [delegate](delegate.md): Deprecated. A delegate that provides information needed to complete transactions.
- [transactions](transactions.md): Deprecated. Returns an array of pending transactions.
- [finishTransaction(\_:)](finishtransaction%28__%29.md): Deprecated. Notifies the App Store that the app finished processing the transaction.

# addPayment: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Adds a payment request to the queue.

> Use Product.purchase(confirmIn:options:).

## Declaration

```objectivec
- (void) addPayment:(SKPayment *) payment;
```

## Parameters

- `payment`: A payment request.

<a id="Discussion"></a>

## Discussion

An application should always have at least one observer of the payment queue before adding payment requests.

The payment request must have a product identifier registered with the Apple App Store and a quantity greater than `0`. If either property is invalid, [addPayment:](add%28__%29-4vct1.md) throws an exception.

When a payment request is added to the queue, the payment queue processes that request with the Apple App Store and arranges for payment from the user. When that transaction is complete or if a failure occurs, the payment queue sends the [SKPaymentTransaction](../skpaymenttransaction.md) object that encapsulates the request to all transaction observers.

## See Also

### Managing Transactions

- [delegate](delegate.md): Deprecated. A delegate that provides information needed to complete transactions.
- [transactions](transactions.md): Deprecated. Returns an array of pending transactions.
- [finishTransaction:](finishtransaction%28__%29.md): Deprecated. Notifies the App Store that the app finished processing the transaction.
