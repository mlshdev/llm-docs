> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredential/credentialid](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredential/credentialid)

# credentialID (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The identifier for this credential.

## Declaration

```swift
var credentialID: Data { get }
```

## See Also

### Accessing credential information

- [attestationObject](attestationobject.md): The attestation object for this passkey.
- [clientDataHash](clientdatahash.md): A hash of the client data for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.

# credentialID (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The identifier for this credential.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * credentialID;
```

## See Also

### Accessing credential information

- [attestationObject](attestationobject.md): The attestation object for this passkey.
- [clientDataHash](clientdatahash.md): A hash of the client data for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.
