> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpasserror](https://developer.apple.com/documentation/passkit/pkaddpaymentpasserror)

# PKAddPaymentPassError (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Error codes for adding payment passes.

## Declaration

```swift
enum PKAddPaymentPassError
```

## Topics

### Error codes

- [PKAddPaymentPassError.unsupported](pkaddpaymentpasserror/unsupported.md): The app cannot add cards to Apple Pay.
- [PKAddPaymentPassError.userCancelled](pkaddpaymentpasserror/usercancelled.md): The user canceled the request to add a card to Apple Pay.
- [PKAddPaymentPassError.systemCancelled](pkaddpaymentpasserror/systemcancelled.md): The system canceled the request to add a card to Apple Pay.

### Initializers

- [init(rawValue:)](pkaddpaymentpasserror/init%28rawvalue_%29.md)

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

# PKAddPaymentPassError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Error codes for adding payment passes.

## Declaration

```objectivec
enum PKAddPaymentPassError : NSInteger;
```

## Topics

### Error codes

- [PKAddPaymentPassErrorUnsupported](pkaddpaymentpasserror/unsupported.md): The app cannot add cards to Apple Pay.
- [PKAddPaymentPassErrorUserCancelled](pkaddpaymentpasserror/usercancelled.md): The user canceled the request to add a card to Apple Pay.
- [PKAddPaymentPassErrorSystemCancelled](pkaddpaymentpasserror/systemcancelled.md): The system canceled the request to add a card to Apple Pay.

## See Also

### Errors

- [PKPassKitErrorCode](pkpasskiterror/code.md): Errors that the PassKit framework uses.
- [PKAddSecureElementPassErrorCode](pkaddsecureelementpasserror/code.md): Error codes for problems that occur when you add a secure element passes.
- [PKIdentityError](pkidentityerror-swift.struct/code.md): Error codes for identity operations.
- [PKShareSecureElementPassErrorCode](pksharesecureelementpasserror/code.md)
- [PKVehicleConnectionErrorCode](pkvehicleconnectionerrorcode.md)
- [PKPassKitErrorDomain](pkpasskiterrordomain.md): The error domain for PassKit errors.
- [PKIdentityErrorDomain](pkidentityerrordomain.md): The error domain for identity errors.
- [PKAddSecureElementPassErrorDomain](pkaddsecureelementpasserrordomain.md): The error domain for errors that occur when adding a secure pass.
- [PKShareSecureElementPassErrorDomain](pksharesecureelementpasserrordomain.md)
