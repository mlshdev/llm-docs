> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasskiterror](https://developer.apple.com/documentation/passkit/pkpasskiterror)

# PKPassKitError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Errors that the PassKit framework uses.

## Declaration

```swift
struct PKPassKitError
```

## Topics

### Error information

- [errorCode](../foundation/customnserror/errorcode-2opgi.md): The error code within the given domain.
- [errorUserInfo](../foundation/customnserror/erroruserinfo-1aas5.md): The default user-info dictionary.

### Error codes

- [invalidDataError](pkpasskiterror/invaliddataerror.md)
- [invalidSignature](pkpasskiterror/invalidsignature.md)
- [notEntitledError](pkpasskiterror/notentitlederror.md)
- [unknownError](pkpasskiterror/unknownerror.md)
- [unsupportedVersionError](pkpasskiterror/unsupportedversionerror.md)
- [PKPassKitError.Code](pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddPaymentPassError](pkaddpaymentpasserror.md): Error codes for adding payment passes.

### Error domain

- [errorDomain](pkpasskiterror/errordomain.md)
- [PKPassKitErrorDomain](pkpasskiterrordomain.md): The error domain for PassKit errors.

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

- [PKAddSecureElementPassError](pkaddsecureelementpasserror.md): An error object that PassKit uses when it adds Secure Element passes.
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
