> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationaccountcreationplatformpublickeycredentialrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationaccountcreationplatformpublickeycredentialrequest)

# ASAuthorizationAccountCreationPlatformPublicKeyCredentialRequest

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
@objc class ASAuthorizationAccountCreationPlatformPublicKeyCredentialRequest
```

## Topics

### Instance Properties

- [acceptedContactIdentifiers](asauthorizationaccountcreationplatformpublickeycredentialrequest/acceptedcontactidentifiers.md): An ordered list of contact identifiers that the user can choose from during account creation. The order of this list indicates preference. Exactly one contact identifier from this list will be included in the response.
- [challenge](asauthorizationaccountcreationplatformpublickeycredentialrequest/challenge.md): A single-use challenge to be signed by the created passkey.
- [relyingPartyIdentifier](asauthorizationaccountcreationplatformpublickeycredentialrequest/relyingpartyidentifier.md): The Relying Party to register the passkey with, generally a domain name.
- [shouldRequestName](asauthorizationaccountcreationplatformpublickeycredentialrequest/shouldrequestname.md): Whether to request the user’s name.
- [userID](asauthorizationaccountcreationplatformpublickeycredentialrequest/userid.md): A stable, opaque identifier for the created account. This will be saved as the userID for the created passkey.

### Instance Methods

- [encode(with:)](asauthorizationaccountcreationplatformpublickeycredentialrequest/encode%28with_%29.md)

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
