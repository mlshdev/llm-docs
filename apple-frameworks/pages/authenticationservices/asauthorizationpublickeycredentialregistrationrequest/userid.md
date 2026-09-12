> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialregistrationrequest/userid](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialregistrationrequest/userid)

# userID (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Data that the relying party associates with the credential.

## Declaration

```swift
var userID: Data { get set }
```

## See Also

### Getting the properties

- [attestationPreference](attestationpreference.md): The type of attestation you’re requesting.
- [challenge](challenge.md): Arbitrary data that the client signs as proof of a valid registration or attestation.
- [displayName](displayname.md): A user-visible name for the credential, such as the account’s user name.
- [name](name.md): A user-visible name that identifies a credential.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [userVerificationPreference](userverificationpreference.md): A preference for whether the authenticator attempts to verify the user at the time of sign-in.

# userID (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Data that the relying party associates with the credential.

## Declaration

```objectivec
@property (nonatomic, copy) NSData * userID;
```

## See Also

### Getting the properties

- [attestationPreference](attestationpreference.md): The type of attestation you’re requesting.
- [challenge](challenge.md): Arbitrary data that the client signs as proof of a valid registration or attestation.
- [displayName](displayname.md): A user-visible name for the credential, such as the account’s user name.
- [name](name.md): A user-visible name that identifies a credential.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [userVerificationPreference](userverificationpreference.md): A preference for whether the authenticator attempts to verify the user at the time of sign-in.
