> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/delegate](https://developer.apple.com/documentation/storekit/skpaymentqueue/delegate)

# delegate (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A delegate that provides information needed to complete transactions.

> No longer supported.

## Declaration

```swift
weak var delegate: (any SKPaymentQueueDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

This delegate implements the [SKPaymentQueueDelegate](../skpaymentqueuedelegate.md) protocol.

## See Also

### Managing Transactions

- [transactions](transactions.md): Deprecated. Returns an array of pending transactions.
- [add(\_:)](add%28__%29-4vct1.md): Deprecated. Adds a payment request to the queue.
- [finishTransaction(\_:)](finishtransaction%28__%29.md): Deprecated. Notifies the App Store that the app finished processing the transaction.

# delegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A delegate that provides information needed to complete transactions.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<SKPaymentQueueDelegate> delegate;
```

```objectivec
@property (atomic, weak, nullable) id<SKPaymentQueueDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

This delegate implements the [SKPaymentQueueDelegate](../skpaymentqueuedelegate.md) protocol.

## See Also

### Managing Transactions

- [transactions](transactions.md): Deprecated. Returns an array of pending transactions.
- [addPayment:](add%28__%29-4vct1.md): Deprecated. Adds a payment request to the queue.
- [finishTransaction:](finishtransaction%28__%29.md): Deprecated. Notifies the App Store that the app finished processing the transaction.
