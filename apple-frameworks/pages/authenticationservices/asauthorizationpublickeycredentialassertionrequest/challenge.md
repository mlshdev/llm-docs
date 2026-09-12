> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest/challenge](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest/challenge)

# challenge (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The challenge to sign.

## Declaration

```swift
var challenge: Data { get set }
```

## See Also

### Getting the properties

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [allowedCredentials](allowedcredentials.md): A list of allowed credential descriptors the user attempts to sign in with.
- [userVerificationPreference](userverificationpreference.md): A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.

# challenge (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The challenge to sign.

## Declaration

```objectivec
@property (nonatomic, copy) NSData * challenge;
```

## See Also

### Getting the properties

- [relyingPartyIdentifier](relyingpartyidentifier.md): The domain name of the website for the credential.
- [allowedCredentials](allowedcredentials.md): A list of allowed credential descriptors the user attempts to sign in with.
- [userVerificationPreference](userverificationpreference.md): A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.
