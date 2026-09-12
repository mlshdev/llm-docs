> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksharesecureelementpasserror/code](https://developer.apple.com/documentation/passkit/pksharesecureelementpasserror/code)

# PKShareSecureElementPassError.Code (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [PKShareSecureElementPassError.Code.setupError](code/setuperror.md)
- [PKShareSecureElementPassError.Code.unknownError](code/unknownerror.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [PKPassKitError](../pkpasskiterror.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassError](../pkaddsecureelementpasserror.md): An error object that PassKit uses when it adds Secure Element passes.
- [PKPassKitError.Code](../pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassError.Code](../pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKAddPaymentPassError](../pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKIdentityError](../pkidentityerror-swift.struct.md): A structure that represents an identity error.
- [PKIdentityError.Code](../pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKShareSecureElementPassError](../pksharesecureelementpasserror.md)
- [PKVehicleConnectionErrorCode](../pkvehicleconnectionerrorcode.md)
- [PayWithApplePayButtonPaymentAuthorizationPhase](../paywithapplepaybuttonpaymentauthorizationphase.md)
- [PKPassKitErrorDomain](../pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](../pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](../pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](../pksharesecureelementpasserrordomain.md)

# PKShareSecureElementPassErrorCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
enum PKShareSecureElementPassErrorCode : NSInteger;
```

## Topics

### Enumeration Cases

- [PKShareSecureElementPassSetupError](code/setuperror.md)
- [PKShareSecureElementPassUnknownError](code/unknownerror.md)

## See Also

### Errors

- [PKPassKitErrorCode](../pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassErrorCode](../pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKAddPaymentPassError](../pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKIdentityError](../pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKVehicleConnectionErrorCode](../pkvehicleconnectionerrorcode.md)
- [PKPassKitErrorDomain](../pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](../pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](../pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](../pksharesecureelementpasserrordomain.md)
