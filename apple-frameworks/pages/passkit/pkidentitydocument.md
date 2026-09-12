> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentitydocument](https://developer.apple.com/documentation/passkit/pkidentitydocument)

# PKIdentityDocument (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents the response to a request.

## Declaration

```swift
class PKIdentityDocument
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

## Topics

### Configuring an identity document

- [encryptedData](pkidentitydocument/encrypteddata.md): An encrypted data object that contains the document information and metadata to associate with a request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Identity sheet interactions and authorization

- [PKIdentityAuthorizationController](pkidentityauthorizationcontroller.md): An object that presents a sheet that prompts the user to allow a request for identity information.
- [PKIdentityRequest](pkidentityrequest.md): An object that represents a request for identity information from a Wallet pass.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.
- [PKIdentityButton](pkidentitybutton.md): An object that displays a button to trigger the identity verification flow.
- [VerifyIdentityWithWalletButton](verifyidentitywithwalletbutton.md): A type that displays a button to present the identity verification flow.
- [VerifyIdentityWithWalletButtonLabel](verifyidentitywithwalletbuttonlabel.md): A type that represents the label you use with a verify identity button.
- [VerifyIdentityWithWalletButtonStyle](verifyidentitywithwalletbuttonstyle.md): A type that represents the style you use with a verify identity button.

# PKIdentityDocument (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents the response to a request.

## Declaration

```objectivec
@interface PKIdentityDocument : NSObject
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

## Topics

### Configuring an identity document

- [encryptedData](pkidentitydocument/encrypteddata.md): An encrypted data object that contains the document information and metadata to associate with a request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Identity sheet interactions and authorization

- [PKIdentityAuthorizationController](pkidentityauthorizationcontroller.md): An object that presents a sheet that prompts the user to allow a request for identity information.
- [PKIdentityRequest](pkidentityrequest.md): An object that represents a request for identity information from a Wallet pass.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.
- [PKIdentityButton](pkidentitybutton.md): An object that displays a button to trigger the identity verification flow.
