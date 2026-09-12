> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest/allowedcredentials](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest/allowedcredentials)

# allowedCredentials (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A list of allowed credential descriptors the user attempts to sign in with.

## Declaration

```swift
var allowedCredentials: [any ASAuthorizationPublicKeyCredentialDescriptor] { get set }
```

## See Also

### Getting the properties

- [challenge](challenge.md): The challenge to sign.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [userVerificationPreference](userverificationpreference.md): A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.

# allowedCredentials (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A list of allowed credential descriptors the user attempts to sign in with.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<id<ASAuthorizationPublicKeyCredentialDescriptor>> * allowedCredentials;
```

## See Also

### Getting the properties

- [challenge](challenge.md): The challenge to sign.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [userVerificationPreference](userverificationpreference.md): A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.
