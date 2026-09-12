> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest/relyingpartyidentifier](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest/relyingpartyidentifier)

# relyingPartyIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The domain name of the website for the credential.

## Declaration

```swift
var relyingPartyIdentifier: String { get set }
```

## See Also

### Getting the properties

- [challenge](challenge.md): The challenge to sign.
- [allowedCredentials](allowedcredentials.md): A list of allowed credential descriptors the user attempts to sign in with.
- [userVerificationPreference](userverificationpreference.md): A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.

# relyingPartyIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The domain name of the website for the credential.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * relyingPartyIdentifier;
```

## See Also

### Getting the properties

- [challenge](challenge.md): The challenge to sign.
- [allowedCredentials](allowedcredentials.md): A list of allowed credential descriptors the user attempts to sign in with.
- [userVerificationPreference](userverificationpreference.md): A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.
