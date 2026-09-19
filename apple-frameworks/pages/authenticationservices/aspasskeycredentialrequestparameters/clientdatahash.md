> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequestparameters/clientdatahash

# clientDataHash (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The client data that you sign as part of the response.

## Declaration

```swift
var clientDataHash: Data { get }
```

## See Also

### Viewing credential request parameters

- [allowedCredentials](allowedcredentials.md): A list of passkey credentials that the relying party accepts for this challenge.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The relying party that issues the challenge.
- [userVerificationPreference](userverificationpreference.md): The relying party’s preference for user verification.

# clientDataHash (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The client data that you sign as part of the response.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * clientDataHash;
```

## See Also

### Viewing credential request parameters

- [allowedCredentials](allowedcredentials.md): A list of passkey credentials that the relying party accepts for this challenge.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The relying party that issues the challenge.
- [userVerificationPreference](userverificationpreference.md): The relying party’s preference for user verification.
