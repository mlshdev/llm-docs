> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpasserror/code](https://developer.apple.com/documentation/passkit/pkaddsecureelementpasserror/code)

# PKAddSecureElementPassError.Code (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+ · watchOS 6.2+

Error codes for problems that occur when you add a secure element passes.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [PKAddSecureElementPassError.Code.deviceNotReadyError](code/devicenotreadyerror.md): The reader for the pass isn’t ready to start pairing.
- [PKAddSecureElementPassError.Code.deviceNotSupportedError](code/devicenotsupportederror.md): The reader for the pass isn’t supported or has an invalid version.
- [PKAddSecureElementPassError.Code.genericError](code/genericerror.md): Represents the default error case.
- [PKAddSecureElementPassError.Code.invalidConfigurationError](code/invalidconfigurationerror.md): The configuration for the pass is invalid for either Wallet or the reader.
- [PKAddSecureElementPassError.Code.osVersionNotSupportedError](code/osversionnotsupportederror.md)
- [PKAddSecureElementPassError.Code.unavailableError](code/unavailableerror.md): Provisioning for secure element passes isn’t available on the device, or the app is missing the entitlement.
- [PKAddSecureElementPassError.Code.userCanceledError](code/usercancelederror.md): The user canceled adding the pass.
- [unknownError](code/unknownerror.md): Deprecated.

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

# PKAddSecureElementPassErrorCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+ · watchOS 6.2+

Error codes for problems that occur when you add a secure element passes.

## Declaration

```objectivec
enum PKAddSecureElementPassErrorCode : NSInteger;
```

## Topics

### Error codes

- [PKAddSecureElementPassDeviceNotReadyError](code/devicenotreadyerror.md): The reader for the pass isn’t ready to start pairing.
- [PKAddSecureElementPassDeviceNotSupportedError](code/devicenotsupportederror.md): The reader for the pass isn’t supported or has an invalid version.
- [PKAddSecureElementPassGenericError](code/genericerror.md): Represents the default error case.
- [PKAddSecureElementPassInvalidConfigurationError](code/invalidconfigurationerror.md): The configuration for the pass is invalid for either Wallet or the reader.
- [PKAddSecureElementPassOSVersionNotSupportedError](code/osversionnotsupportederror.md)
- [PKAddSecureElementPassUnavailableError](code/unavailableerror.md): Provisioning for secure element passes isn’t available on the device, or the app is missing the entitlement.
- [PKAddSecureElementPassUserCanceledError](code/usercancelederror.md): The user canceled adding the pass.

### Enumeration Cases

- [PKAddSecureElementPassUnknownError](../pkaddsecureelementpasserrorcode/pkaddsecureelementpassunknownerror.md): Deprecated. The system canceled adding the pass due to an unknown failure.

## See Also

### Errors

- [PKPassKitErrorCode](../pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddPaymentPassError](../pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKIdentityError](../pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKShareSecureElementPassErrorCode](../pksharesecureelementpasserror/code.md)
- [PKVehicleConnectionErrorCode](../pkvehicleconnectionerrorcode.md)
- [PKPassKitErrorDomain](../pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](../pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](../pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](../pksharesecureelementpasserrordomain.md)
