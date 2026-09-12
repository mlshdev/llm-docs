> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkvehicleconnectionerrorcode](https://developer.apple.com/documentation/passkit/pkvehicleconnectionerrorcode)

# PKVehicleConnectionErrorCode (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS · visionOS 1.0+ · watchOS 8.5+

## Declaration

```swift
enum PKVehicleConnectionErrorCode
```

## Topics

### Enumeration Cases

- [PKVehicleConnectionErrorCode.sessionNotActive](pkvehicleconnectionerrorcode/sessionnotactive.md)
- [PKVehicleConnectionErrorCode.sessionUnableToStart](pkvehicleconnectionerrorcode/sessionunabletostart.md)
- [PKVehicleConnectionErrorCode.unknown](pkvehicleconnectionerrorcode/unknown.md)

### Initializers

- [init(rawValue:)](pkvehicleconnectionerrorcode/init%28rawvalue_%29.md)

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

- [PKPassKitError](pkpasskiterror.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassError](pkaddsecureelementpasserror.md): An error object that PassKit uses when it adds Secure Element passes.
- [PKPassKitError.Code](pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassError.Code](pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKAddPaymentPassError](pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKIdentityError](pkidentityerror-swift.struct.md): A structure that represents an identity error.
- [PKIdentityError.Code](pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKShareSecureElementPassError](pksharesecureelementpasserror.md)
- [PKShareSecureElementPassError.Code](pksharesecureelementpasserror/code.md)
- [PayWithApplePayButtonPaymentAuthorizationPhase](paywithapplepaybuttonpaymentauthorizationphase.md)
- [PKPassKitErrorDomain](pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](pksharesecureelementpasserrordomain.md)

# PKVehicleConnectionErrorCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```objectivec
enum PKVehicleConnectionErrorCode : NSInteger;
```

## Topics

### Enumeration Cases

- [PKVehicleConnectionErrorCodeSessionNotActive](pkvehicleconnectionerrorcode/sessionnotactive.md)
- [PKVehicleConnectionErrorCodeSessionUnableToStart](pkvehicleconnectionerrorcode/sessionunabletostart.md)
- [PKVehicleConnectionErrorCodeUnknown](pkvehicleconnectionerrorcode/unknown.md)

## See Also

### Errors

- [PKPassKitErrorCode](pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassErrorCode](pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKAddPaymentPassError](pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKIdentityError](pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKShareSecureElementPassErrorCode](pksharesecureelementpasserror/code.md)
- [PKPassKitErrorDomain](pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](pksharesecureelementpasserrordomain.md)
