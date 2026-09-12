> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationresult/status](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationresult/status)

# status (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Payment authorization general status.

## Declaration

```swift
var status: PKPaymentAuthorizationStatus { get set }
```

<a id="Discussion"></a>

## Discussion

See [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md) for the list of status values.

## See Also

### Setting payment authorization status and errors

- [errors](errors.md): List of errors in the Apple Pay sheet.
- [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md): General success and failure status for payment authorization.

# status (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Payment authorization general status.

## Declaration

```objectivec
@property (nonatomic, assign) PKPaymentAuthorizationStatus status;
```

<a id="Discussion"></a>

## Discussion

See [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md) for the list of status values.

## See Also

### Setting payment authorization status and errors

- [errors](errors.md): List of errors in the Apple Pay sheet.
- [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md): General success and failure status for payment authorization.
