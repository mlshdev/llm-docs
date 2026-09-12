> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasskiterror/code](https://developer.apple.com/documentation/passkit/pkpasskiterror/code)

# PKPassKitError.Code (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Errors that the PassKit framework uses.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [PKPassKitError.Code.unknownError](code/unknownerror.md): Unknown error.
- [PKPassKitError.Code.invalidDataError](code/invaliddataerror.md): Invalid pass data.
- [PKPassKitError.Code.unsupportedVersionError](code/unsupportedversionerror.md): Unsupported pass version.
- [PKPassKitError.Code.invalidSignature](code/invalidsignature.md): Invalid pass signature.
- [PKPassKitError.Code.notEntitledError](code/notentitlederror.md): Error caused by absence of the required entitlements for the given operation.

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
- [PKAddSecureElementPassError.Code](../pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKAddPaymentPassError](../pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKIdentityError](../pkidentityerror-swift.struct.md): A structure that represents an identity error.
- [PKIdentityError.Code](../pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKShareSecureElementPassError](../pksharesecureelementpasserror.md)
- [PKShareSecureElementPassError.Code](../pksharesecureelementpasserror/code.md)
- [PKVehicleConnectionErrorCode](../pkvehicleconnectionerrorcode.md)
- [PayWithApplePayButtonPaymentAuthorizationPhase](../paywithapplepaybuttonpaymentauthorizationphase.md)
- [PKPassKitErrorDomain](../pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](../pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](../pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](../pksharesecureelementpasserrordomain.md)

# PKPassKitErrorCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Errors that the PassKit framework uses.

## Declaration

```objectivec
enum PKPassKitErrorCode : NSInteger;
```

## Topics

### Error codes

- [PKUnknownError](code/unknownerror.md): Unknown error.
- [PKInvalidDataError](code/invaliddataerror.md): Invalid pass data.
- [PKUnsupportedVersionError](code/unsupportedversionerror.md): Unsupported pass version.
- [PKInvalidSignature](code/invalidsignature.md): Invalid pass signature.
- [PKNotEntitledError](code/notentitlederror.md): Error caused by absence of the required entitlements for the given operation.

## See Also

### Errors

- [PKAddSecureElementPassErrorCode](../pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKAddPaymentPassError](../pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKIdentityError](../pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKShareSecureElementPassErrorCode](../pksharesecureelementpasserror/code.md)
- [PKVehicleConnectionErrorCode](../pkvehicleconnectionerrorcode.md)
- [PKPassKitErrorDomain](../pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](../pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](../pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](../pksharesecureelementpasserrordomain.md)
