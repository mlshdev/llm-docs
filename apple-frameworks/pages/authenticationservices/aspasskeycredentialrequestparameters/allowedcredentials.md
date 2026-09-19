> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequestparameters/allowedcredentials

# allowedCredentials (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A list of passkey credentials that the relying party accepts for this challenge.

## Declaration

```swift
var allowedCredentials: [Data] { get }
```

<a id="Discussion"></a>

## Discussion

If the array is empty, then the relying party accepts any passkey credential.

## See Also

### Viewing credential request parameters

- [clientDataHash](clientdatahash.md): The client data that you sign as part of the response.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The relying party that issues the challenge.
- [userVerificationPreference](userverificationpreference.md): The relying party’s preference for user verification.

# allowedCredentials (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A list of passkey credentials that the relying party accepts for this challenge.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSData *> * allowedCredentials;
```

<a id="Discussion"></a>

## Discussion

If the array is empty, then the relying party accepts any passkey credential.

## See Also

### Viewing credential request parameters

- [clientDataHash](clientdatahash.md): The client data that you sign as part of the response.
- [relyingPartyIdentifier](relyingpartyidentifier.md): The relying party that issues the challenge.
- [userVerificationPreference](userverificationpreference.md): The relying party’s preference for user verification.
