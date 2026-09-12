> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest/userverificationpreference](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest/userverificationpreference)

# userVerificationPreference (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.

## Declaration

```swift
var userVerificationPreference: ASAuthorizationPublicKeyCredentialUserVerificationPreference { get set }
```

## See Also

### Getting the properties

- [challenge](challenge.md): The challenge to sign.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [allowedCredentials](allowedcredentials.md): A list of allowed credential descriptors the user attempts to sign in with.

# userVerificationPreference (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.

## Declaration

```objectivec
@property (nonatomic) ASAuthorizationPublicKeyCredentialUserVerificationPreference userVerificationPreference;
```

## See Also

### Getting the properties

- [challenge](challenge.md): The challenge to sign.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [allowedCredentials](allowedcredentials.md): A list of allowed credential descriptors the user attempts to sign in with.
