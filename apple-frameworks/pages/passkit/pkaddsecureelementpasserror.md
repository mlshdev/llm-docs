> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpasserror](https://developer.apple.com/documentation/passkit/pkaddsecureelementpasserror)

# PKAddSecureElementPassError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+ · watchOS 6.2+

An error object that PassKit uses when it adds Secure Element passes.

## Declaration

```swift
struct PKAddSecureElementPassError
```

## Topics

### Identifying errors

- [deviceNotReadyError](pkaddsecureelementpasserror/devicenotreadyerror.md): The device isn’t ready to add Secure Element passes.
- [deviceNotSupportedError](pkaddsecureelementpasserror/devicenotsupportederror.md): The device doesn’t support adding Secure Element passes.
- [invalidConfigurationError](pkaddsecureelementpasserror/invalidconfigurationerror.md): An error that occurs when they system attempts to add a Secure Element pass using an invalid configuration.
- [unavailableError](pkaddsecureelementpasserror/unavailableerror.md): PassKit is temporarily unable to add Secure Element passes.
- [unknownError](pkaddsecureelementpasserror/unknownerror.md): Deprecated. An error that occurs when PassKit cancels the addition of a Secure Element pass due to an unknown failure.
- [userCanceledError](pkaddsecureelementpasserror/usercancelederror.md): An error that occurs when the user cancels the addition of a Secure Element pass.
- [PKAddSecureElementPassError.Code](pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.

### Getting error information

- [errorDomain](pkaddsecureelementpasserror/errordomain.md)
- [errorCode](../foundation/customnserror/errorcode-2opgi.md): The error code within the given domain.
- [errorUserInfo](../foundation/customnserror/erroruserinfo-1aas5.md): The default user-info dictionary.
- [PKAddSecureElementPassErrorDomain](pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.

### Type Properties

- [genericError](pkaddsecureelementpasserror/genericerror.md)
- [osVersionNotSupportedError](pkaddsecureelementpasserror/osversionnotsupportederror.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [PKPassKitError](pkpasskiterror.md): Errors that the PassKit framework uses.
- [PKPassKitError.Code](pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassError.Code](pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKAddPaymentPassError](pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKIdentityError](pkidentityerror-swift.struct.md): A structure that represents an identity error.
- [PKIdentityError.Code](pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKShareSecureElementPassError](pksharesecureelementpasserror.md)
- [PKShareSecureElementPassError.Code](pksharesecureelementpasserror/code.md)
- [PKVehicleConnectionErrorCode](pkvehicleconnectionerrorcode.md)
- [PayWithApplePayButtonPaymentAuthorizationPhase](paywithapplepaybuttonpaymentauthorizationphase.md)
- [PKPassKitErrorDomain](pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](pksharesecureelementpasserrordomain.md)
