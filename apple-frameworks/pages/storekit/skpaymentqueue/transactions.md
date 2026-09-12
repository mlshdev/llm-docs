> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/transactions](https://developer.apple.com/documentation/storekit/skpaymentqueue/transactions)

# transactions (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Returns an array of pending transactions.

> Use Transaction.unfinished.

## Declaration

```swift
var transactions: [SKPaymentTransaction] { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is undefined when there are no observers attached to the payment queue.

## See Also

### Related Documentation

- [add(\_:)](add%28__%29-5ciz2.md): Deprecated. Adds an observer to the payment queue.

### Managing Transactions

- [delegate](delegate.md): Deprecated. A delegate that provides information needed to complete transactions.
- [add(\_:)](add%28__%29-4vct1.md): Deprecated. Adds a payment request to the queue.
- [finishTransaction(\_:)](finishtransaction%28__%29.md): Deprecated. Notifies the App Store that the app finished processing the transaction.

# transactions (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Returns an array of pending transactions.

> Use Transaction.unfinished.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SKPaymentTransaction *> * transactions;
```

<a id="Discussion"></a>

## Discussion

The value of this property is undefined when there are no observers attached to the payment queue.

## See Also

### Related Documentation

- [addTransactionObserver:](add%28__%29-5ciz2.md): Deprecated. Adds an observer to the payment queue.

### Managing Transactions

- [delegate](delegate.md): Deprecated. A delegate that provides information needed to complete transactions.
- [addPayment:](add%28__%29-4vct1.md): Deprecated. Adds a payment request to the queue.
- [finishTransaction:](finishtransaction%28__%29.md): Deprecated. Notifies the App Store that the app finished processing the transaction.
