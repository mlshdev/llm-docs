> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialregistrationrequest/challenge](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialregistrationrequest/challenge)

# challenge (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Arbitrary data that the client signs as proof of a valid registration or attestation.

## Declaration

```swift
var challenge: Data { get set }
```

## See Also

### Getting the properties

- [attestationPreference](attestationpreference.md): The type of attestation you’re requesting.
- [displayName](displayname.md): A user-visible name for the credential, such as the account’s user name.
- [name](name.md): A user-visible name that identifies a credential.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [userID](userid.md): Data that the relying party associates with the credential.
- [userVerificationPreference](userverificationpreference.md): A preference for whether the authenticator attempts to verify the user at the time of sign-in.

# challenge (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Arbitrary data that the client signs as proof of a valid registration or attestation.

## Declaration

```objectivec
@property (nonatomic, copy) NSData * challenge;
```

## See Also

### Getting the properties

- [attestationPreference](attestationpreference.md): The type of attestation you’re requesting.
- [displayName](displayname.md): A user-visible name for the credential, such as the account’s user name.
- [name](name.md): A user-visible name that identifies a credential.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [userID](userid.md): Data that the relying party associates with the credential.
- [userVerificationPreference](userverificationpreference.md): A preference for whether the authenticator attempts to verify the user at the time of sign-in.
