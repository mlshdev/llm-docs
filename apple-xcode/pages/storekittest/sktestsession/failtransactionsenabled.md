> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/failtransactionsenabled](https://developer.apple.com/documentation/storekittest/sktestsession/failtransactionsenabled)

# failTransactionsEnabled (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · watchOS 7.0+ (deprecated in 10.0)

A Boolean value that determines whether transactions fail in the testing environment.

> No longer supported. Use simulatedError(forAPI:)

## Declaration

```swift
var failTransactionsEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `false`. Set this value to `true` when you want to test your app’s response to [SKPaymentTransaction](https://developer.apple.com/documentation/storekit/skpaymenttransaction) transactions that fail. Attempted transactions in the payment queue show the [SKPaymentTransactionState.failed](https://developer.apple.com/documentation/storekit/skpaymenttransactionstate/failed) state, with the error code that you set in [failureError](failureerror.md).

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState()](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Forcing failed transactions

- [failureError](failureerror.md): Deprecated. The error code that transactions return when you enable failing transactions.

# failTransactionsEnabled (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · watchOS 7.0+ (deprecated in 10.0)

A Boolean value that determines whether transactions fail in the testing environment.

> No longer supported. Use simulatedError(forAPI:)

## Declaration

```objectivec
@property (nonatomic, assign) BOOL failTransactionsEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is `false`. Set this value to `true` when you want to test your app’s response to [SKPaymentTransaction](https://developer.apple.com/documentation/storekit/skpaymenttransaction) transactions that fail. Attempted transactions in the payment queue show the [SKPaymentTransactionStateFailed](https://developer.apple.com/documentation/storekit/skpaymenttransactionstate/failed) state, with the error code that you set in [failureError](failureerror.md).

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Forcing failed transactions

- [failureError](failureerror.md): Deprecated. The error code that transactions return when you enable failing transactions.
