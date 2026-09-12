> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/restorecompletedtransactions(withapplicationusername:)](https://developer.apple.com/documentation/storekit/skpaymentqueue/restorecompletedtransactions(withapplicationusername:))

# restoreCompletedTransactions(withApplicationUsername:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS 7.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Asks the payment queue to restore previously completed purchases, providing an opaque identifier for the user’s account.

> Use AppStore.sync().

## Declaration

```swift
func restoreCompletedTransactions(withApplicationUsername username: String?)
```

## Parameters

- `username`: An opaque identifier for the user’s account on your system.

## Mentioned In

- [Choosing a receipt validation technique](../choosing-a-receipt-validation-technique.md)
- [Restoring purchased products](../restoring-purchased-products.md)
- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)

## See Also

### Related Documentation

- [applicationUsername](../skpayment/applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.

### Restoring Purchases

- [restoreCompletedTransactions()](restorecompletedtransactions%28%29.md): Deprecated. Asks the payment queue to restore previously completed purchases.

# restoreCompletedTransactionsWithApplicationUsername: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Asks the payment queue to restore previously completed purchases, providing an opaque identifier for the user’s account.

> Use AppStore.sync().

## Declaration

```objectivec
- (void) restoreCompletedTransactionsWithApplicationUsername:(NSString *) username;
```

## Parameters

- `username`: An opaque identifier for the user’s account on your system.

## Mentioned In

- [Choosing a receipt validation technique](../choosing-a-receipt-validation-technique.md)
- [Restoring purchased products](../restoring-purchased-products.md)
- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)

## See Also

### Related Documentation

- [applicationUsername](../skpayment/applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.

### Restoring Purchases

- [restoreCompletedTransactions](restorecompletedtransactions%28%29.md): Deprecated. Asks the payment queue to restore previously completed purchases.
