> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequestparameters/userverificationpreference](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequestparameters/userverificationpreference)

# userVerificationPreference (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The relying party’s preference for user verification.

## Declaration

```swift
var userVerificationPreference: ASAuthorizationPublicKeyCredentialUserVerificationPreference { get }
```

## See Also

### Viewing credential request parameters

- [allowedCredentials](allowedcredentials.md): A list of passkey credentials that the relying party accepts for this challenge.
- [clientDataHash](clientdatahash.md): The client data that you sign as part of the response.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The relying party that issues the challenge.

# userVerificationPreference (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The relying party’s preference for user verification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) ASAuthorizationPublicKeyCredentialUserVerificationPreference userVerificationPreference;
```

## See Also

### Viewing credential request parameters

- [allowedCredentials](allowedcredentials.md): A list of passkey credentials that the relying party accepts for this challenge.
- [clientDataHash](clientdatahash.md): The client data that you sign as part of the response.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The relying party that issues the challenge.
