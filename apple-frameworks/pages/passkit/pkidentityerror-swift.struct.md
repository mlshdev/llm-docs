> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityerror-swift.struct](https://developer.apple.com/documentation/passkit/pkidentityerror-swift.struct)

# PKIdentityError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that represents an identity error.

## Declaration

```swift
struct PKIdentityError
```

## Topics

### Inspecting an error

- [errorDomain](pkidentityerror-swift.struct/errordomain.md)
- [PKIdentityError.Code](pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [Error constants](error-constants.md): Error code constants for identity operations.
- [errorCode](../foundation/customnserror/errorcode-2opgi.md): The error code within the given domain.
- [errorUserInfo](../foundation/customnserror/erroruserinfo-1aas5.md): The default user-info dictionary.

### Type Properties

- [regionNotSupported](pkidentityerror-swift.struct/regionnotsupported.md)

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
- [PKAddSecureElementPassError](pkaddsecureelementpasserror.md): An error object that PassKit uses when it adds Secure Element passes.
- [PKPassKitError.Code](pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassError.Code](pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKAddPaymentPassError](pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKIdentityError.Code](pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKShareSecureElementPassError](pksharesecureelementpasserror.md)
- [PKShareSecureElementPassError.Code](pksharesecureelementpasserror/code.md)
- [PKVehicleConnectionErrorCode](pkvehicleconnectionerrorcode.md)
- [PayWithApplePayButtonPaymentAuthorizationPhase](paywithapplepaybuttonpaymentauthorizationphase.md)
- [PKPassKitErrorDomain](pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](pksharesecureelementpasserrordomain.md)
