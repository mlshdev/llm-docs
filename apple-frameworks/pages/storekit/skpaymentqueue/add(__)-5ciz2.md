> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/add(_:)-5ciz2](https://developer.apple.com/documentation/storekit/skpaymentqueue/add(_:)-5ciz2)

# add(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Adds an observer to the payment queue.

> Use Transaction.updates or PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
func add(_ observer: any SKPaymentTransactionObserver)
```

## Parameters

- `observer`: The observer to add to the queue.

## Mentioned In

- [Choosing a receipt validation technique](../choosing-a-receipt-validation-technique.md)
- [Testing transaction observer code](../testing-transaction-observer-code.md)

<a id="Discussion"></a>

## Discussion

Your application should add an observer to the payment queue during application initialization. If there are no observers attached to the queue, the payment queue does not synchronize its list of pending transactions with the Apple App Store, because there is no observer to respond to updated transactions.

If an application quits when transactions are still being processed, those transactions are not lost. The next time the application launches, the payment queue resumes processing the transactions. Your application should always expect to be notified of completed transactions.

If more than one transaction observer is attached to the payment queue, no guarantees are made as to the order which they will be called. It is safe for multiple observers to call [finishTransaction(\_:)](finishtransaction%28__%29.md), but not recommended. It is recommended that you use a single observer to process and finish the transaction.

## See Also

### Related Documentation

- [transactions](transactions.md): Deprecated. Returns an array of pending transactions.

### Adding, Getting, and Removing Observers

- [transactionObservers](transactionobservers.md): Deprecated. An array of all active payment queue observers.
- [remove(\_:)](remove%28__%29.md): Deprecated. Removes an observer from the payment queue.

# addTransactionObserver: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Adds an observer to the payment queue.

> Use Transaction.updates or PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
- (void) addTransactionObserver:(id<SKPaymentTransactionObserver>) observer;
```

## Parameters

- `observer`: The observer to add to the queue.

## Mentioned In

- [Choosing a receipt validation technique](../choosing-a-receipt-validation-technique.md)
- [Testing transaction observer code](../testing-transaction-observer-code.md)

<a id="Discussion"></a>

## Discussion

Your application should add an observer to the payment queue during application initialization. If there are no observers attached to the queue, the payment queue does not synchronize its list of pending transactions with the Apple App Store, because there is no observer to respond to updated transactions.

If an application quits when transactions are still being processed, those transactions are not lost. The next time the application launches, the payment queue resumes processing the transactions. Your application should always expect to be notified of completed transactions.

If more than one transaction observer is attached to the payment queue, no guarantees are made as to the order which they will be called. It is safe for multiple observers to call [finishTransaction:](finishtransaction%28__%29.md), but not recommended. It is recommended that you use a single observer to process and finish the transaction.

## See Also

### Related Documentation

- [transactions](transactions.md): Deprecated. Returns an array of pending transactions.

### Adding, Getting, and Removing Observers

- [transactionObservers](transactionobservers.md): Deprecated. An array of all active payment queue observers.
- [removeTransactionObserver:](remove%28__%29.md): Deprecated. Removes an observer from the payment queue.
