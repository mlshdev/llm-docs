> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/transactionobservers](https://developer.apple.com/documentation/storekit/skpaymentqueue/transactionobservers)

# transactionObservers (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

An array of all active payment queue observers.

> Use Transaction.updates or PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
var transactionObservers: [any SKPaymentTransactionObserver] { get }
```

## See Also

### Adding, Getting, and Removing Observers

- [add(\_:)](add%28__%29-5ciz2.md): Deprecated. Adds an observer to the payment queue.
- [remove(\_:)](remove%28__%29.md): Deprecated. Removes an observer from the payment queue.

# transactionObservers (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

An array of all active payment queue observers.

> Use Transaction.updates or PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<id<SKPaymentTransactionObserver>> * transactionObservers;
```

## See Also

### Adding, Getting, and Removing Observers

- [addTransactionObserver:](add%28__%29-5ciz2.md): Deprecated. Adds an observer to the payment queue.
- [removeTransactionObserver:](remove%28__%29.md): Deprecated. Removes an observer from the payment queue.
