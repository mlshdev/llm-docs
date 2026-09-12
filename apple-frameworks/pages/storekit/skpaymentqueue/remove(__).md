> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/remove(_:)](https://developer.apple.com/documentation/storekit/skpaymentqueue/remove(_:))

# remove(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Removes an observer from the payment queue.

> No longer supported.

## Declaration

```swift
func remove(_ observer: any SKPaymentTransactionObserver)
```

## Parameters

- `observer`: The observer to remove.

<a id="Discussion"></a>

## Discussion

If there are no observers attached to the queue, the payment queue does not synchronize its list of pending transactions with the Apple App Store, because there is no observer to respond to updated transactions.

## See Also

### Related Documentation

- [transactions](transactions.md): Deprecated. Returns an array of pending transactions.

### Adding, Getting, and Removing Observers

- [add(\_:)](add%28__%29-5ciz2.md): Deprecated. Adds an observer to the payment queue.
- [transactionObservers](transactionobservers.md): Deprecated. An array of all active payment queue observers.

# removeTransactionObserver: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Removes an observer from the payment queue.

> No longer supported.

## Declaration

```objectivec
- (void) removeTransactionObserver:(id<SKPaymentTransactionObserver>) observer;
```

## Parameters

- `observer`: The observer to remove.

<a id="Discussion"></a>

## Discussion

If there are no observers attached to the queue, the payment queue does not synchronize its list of pending transactions with the Apple App Store, because there is no observer to respond to updated transactions.

## See Also

### Related Documentation

- [transactions](transactions.md): Deprecated. Returns an array of pending transactions.

### Adding, Getting, and Removing Observers

- [addTransactionObserver:](add%28__%29-5ciz2.md): Deprecated. Adds an observer to the payment queue.
- [transactionObservers](transactionobservers.md): Deprecated. An array of all active payment queue observers.
