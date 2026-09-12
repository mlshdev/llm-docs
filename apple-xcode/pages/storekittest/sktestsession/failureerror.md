> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/failureerror](https://developer.apple.com/documentation/storekittest/sktestsession/failureerror)

# failureError (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · watchOS 7.0+ (deprecated in 10.0)

The error code that transactions return when you enable failing transactions.

> No longer supported. Use simulatedError(forAPI:)

## Declaration

```swift
var failureError: SKError.Code { get set }
```

<a id="discussion"></a>

## Discussion

You can force an error by setting [failTransactionsEnabled](failtransactionsenabled.md) to `true` and setting [failureError](failureerror.md) value to one of these supported error codes: [SKError.Code.unknown](https://developer.apple.com/documentation/storekit/skerror/code/unknown), [SKError.Code.invalidOfferIdentifier](https://developer.apple.com/documentation/storekit/skerror/code/invalidofferidentifier), [SKError.Code.invalidSignature](https://developer.apple.com/documentation/storekit/skerror/code/invalidsignature), [SKError.Code.missingOfferParams](https://developer.apple.com/documentation/storekit/skerror/code/missingofferparams), [SKError.Code.invalidOfferPrice](https://developer.apple.com/documentation/storekit/skerror/code/invalidofferprice).

Use these settings to test your how your app responds to failed transactions.

## See Also

### Forcing failed transactions

- [failTransactionsEnabled](failtransactionsenabled.md): Deprecated. A Boolean value that determines whether transactions fail in the testing environment.

# failureError (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · watchOS 7.0+ (deprecated in 10.0)

The error code that transactions return when you enable failing transactions.

> No longer supported. Use simulatedError(forAPI:)

## Declaration

```objectivec
@property (nonatomic, assign) SKErrorCode failureError;
```

<a id="discussion"></a>

## Discussion

You can force an error by setting [failTransactionsEnabled](failtransactionsenabled.md) to `true` and setting [failureError](failureerror.md) value to one of these supported error codes: [SKErrorUnknown](https://developer.apple.com/documentation/storekit/skerror/code/unknown), [SKErrorInvalidOfferIdentifier](https://developer.apple.com/documentation/storekit/skerror/code/invalidofferidentifier), [SKErrorInvalidSignature](https://developer.apple.com/documentation/storekit/skerror/code/invalidsignature), [SKErrorMissingOfferParams](https://developer.apple.com/documentation/storekit/skerror/code/missingofferparams), [SKErrorInvalidOfferPrice](https://developer.apple.com/documentation/storekit/skerror/code/invalidofferprice).

Use these settings to test your how your app responds to failed transactions.

## See Also

### Forcing failed transactions

- [failTransactionsEnabled](failtransactionsenabled.md): Deprecated. A Boolean value that determines whether transactions fail in the testing environment.
