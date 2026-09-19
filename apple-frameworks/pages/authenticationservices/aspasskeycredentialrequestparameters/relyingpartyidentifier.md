> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequestparameters/relyingpartyidentifier

# relyingPartyIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The relying party that issues the challenge.

## Declaration

```swift
var relyingPartyIdentifier: String { get }
```

## See Also

### Viewing credential request parameters

- [allowedCredentials](allowedcredentials.md): A list of passkey credentials that the relying party accepts for this challenge.
- [clientDataHash](clientdatahash.md): The client data that you sign as part of the response.
- [userVerificationPreference](userverificationpreference.md): The relying party’s preference for user verification.

# relyingPartyIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The relying party that issues the challenge.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * relyingPartyIdentifier;
```

## See Also

### Viewing credential request parameters

- [allowedCredentials](allowedcredentials.md): A list of passkey credentials that the relying party accepts for this challenge.
- [clientDataHash](clientdatahash.md): The client data that you sign as part of the response.
- [userVerificationPreference](userverificationpreference.md): The relying party’s preference for user verification.
