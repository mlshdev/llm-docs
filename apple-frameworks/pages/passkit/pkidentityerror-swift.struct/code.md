> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityerror-swift.struct/code](https://developer.apple.com/documentation/passkit/pkidentityerror-swift.struct/code)

# PKIdentityError.Code (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

Error codes for identity operations.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [PKIdentityError.Code.cancelled](code/cancelled.md): An error that indicates the user cancels the presented sheet.
- [PKIdentityError.Code.invalidElement](code/invalidelement.md): An error that indicates an element the app requests isn’t valid.
- [PKIdentityError.Code.invalidNonce](code/invalidnonce.md): An error that indicates the number is too large or unsuitable.
- [PKIdentityError.Code.notSupported](code/notsupported.md): An error that indicates the request originates from a device the framework doesn’t support.
- [PKIdentityError.Code.networkUnavailable](code/networkunavailable.md): An error that indicates a network isn’t available.
- [PKIdentityError.Code.noElementsRequested](code/noelementsrequested.md): An error that indicates the elements aren’t supported.
- [PKIdentityError.Code.requestAlreadyInProgress](code/requestalreadyinprogress.md): An error that indicates a request is already in progress.
- [PKIdentityError.Code.unknown](code/unknown.md): An error that indicates an unknown error.

### Enumeration Cases

- [PKIdentityError.Code.regionNotSupported](code/regionnotsupported.md)

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
- [PKShareSecureElementPassError](../pksharesecureelementpasserror.md)
- [PKShareSecureElementPassError.Code](../pksharesecureelementpasserror/code.md)
- [PKVehicleConnectionErrorCode](../pkvehicleconnectionerrorcode.md)
- [PayWithApplePayButtonPaymentAuthorizationPhase](../paywithapplepaybuttonpaymentauthorizationphase.md)
- [PKPassKitErrorDomain](../pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](../pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](../pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](../pksharesecureelementpasserrordomain.md)

# PKIdentityError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

Error codes for identity operations.

## Declaration

```objectivec
enum PKIdentityError : NSInteger;
```

## Topics

### Error codes

- [PKIdentityErrorCancelled](code/cancelled.md): An error that indicates the user cancels the presented sheet.
- [PKIdentityErrorInvalidElement](code/invalidelement.md): An error that indicates an element the app requests isn’t valid.
- [PKIdentityErrorInvalidNonce](code/invalidnonce.md): An error that indicates the number is too large or unsuitable.
- [PKIdentityErrorNotSupported](code/notsupported.md): An error that indicates the request originates from a device the framework doesn’t support.
- [PKIdentityErrorNetworkUnavailable](code/networkunavailable.md): An error that indicates a network isn’t available.
- [PKIdentityErrorNoElementsRequested](code/noelementsrequested.md): An error that indicates the elements aren’t supported.
- [PKIdentityErrorRequestAlreadyInProgress](code/requestalreadyinprogress.md): An error that indicates a request is already in progress.
- [PKIdentityErrorUnknown](code/unknown.md): An error that indicates an unknown error.

### Enumeration Cases

- [PKIdentityErrorRegionNotSupported](code/regionnotsupported.md)

## See Also

### Errors

- [PKPassKitErrorCode](../pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassErrorCode](../pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKAddPaymentPassError](../pkaddpaymentpasserror.md): Error codes for adding payment passes.
- [PKShareSecureElementPassErrorCode](../pksharesecureelementpasserror/code.md)
- [PKVehicleConnectionErrorCode](../pkvehicleconnectionerrorcode.md)
- [PKPassKitErrorDomain](../pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](../pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](../pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](../pksharesecureelementpasserrordomain.md)
