> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationresult/errors](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationresult/errors)

# errors (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

List of errors in the Apple Pay sheet.

## Declaration

```swift
var errors: [any Error]! { get set }
```

<a id="Discussion"></a>

## Discussion

If the Apple Pay sheet contains errors, you provide a [PKPaymentAuthorizationStatus.failure](../pkpaymentauthorizationstatus/failure.md) status to [PKPaymentAuthorizationResult](../pkpaymentauthorizationresult.md), and include the individual errors in this array. If there are no errors, you provide a [PKPaymentAuthorizationStatus.success](../pkpaymentauthorizationstatus/success.md) status and leave the error array empty. Errors are of the standard type, [NSError](../../foundation/nserror.md). To create errors, you can either use the convenience methods found in [PKPaymentRequest](../pkpaymentrequest.md), or create an [NSError](../../foundation/nserror.md) using the domain, error codes, and user info from [PKPaymentError](../pkpaymenterror.md).

Add the errors to the array in order of severity, with the most important error first.

## See Also

### Setting payment authorization status and errors

- [status](status.md): Payment authorization general status.
- [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md): General success and failure status for payment authorization.

# errors (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

List of errors in the Apple Pay sheet.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSArray<NSError *> * errors;
```

<a id="Discussion"></a>

## Discussion

If the Apple Pay sheet contains errors, you provide a [PKPaymentAuthorizationStatusFailure](../pkpaymentauthorizationstatus/failure.md) status to [PKPaymentAuthorizationResult](../pkpaymentauthorizationresult.md), and include the individual errors in this array. If there are no errors, you provide a [PKPaymentAuthorizationStatusSuccess](../pkpaymentauthorizationstatus/success.md) status and leave the error array empty. Errors are of the standard type, [NSError](../../foundation/nserror.md). To create errors, you can either use the convenience methods found in [PKPaymentRequest](../pkpaymentrequest.md), or create an [NSError](../../foundation/nserror.md) using the domain, error codes, and user info from [PKPaymentError](../pkpaymenterror.md).

Add the errors to the array in order of severity, with the most important error first.

## See Also

### Setting payment authorization status and errors

- [status](status.md): Payment authorization general status.
- [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md): General success and failure status for payment authorization.
