> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredential/clientdatahash](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredential/clientdatahash)

# clientDataHash (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A hash of the client data for this credential.

## Declaration

```swift
var clientDataHash: Data { get }
```

## See Also

### Accessing credential information

- [attestationObject](attestationobject.md): The attestation object for this passkey.
- [credentialID](credentialid.md): The identifier for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.

# clientDataHash (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A hash of the client data for this credential.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * clientDataHash;
```

## See Also

### Accessing credential information

- [attestationObject](attestationobject.md): The attestation object for this passkey.
- [credentialID](credentialid.md): The identifier for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.
