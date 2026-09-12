> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredential/attestationobject](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredential/attestationobject)

# attestationObject (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The attestation object for this passkey.

## Declaration

```swift
var attestationObject: Data { get }
```

<a id="Discussion"></a>

## Discussion

The relying party may use information in the attestation object to assess the origin of a passkey during registration.

## See Also

### Accessing credential information

- [clientDataHash](clientdatahash.md): A hash of the client data for this credential.
- [credentialID](credentialid.md): The identifier for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.

# attestationObject (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The attestation object for this passkey.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * attestationObject;
```

<a id="Discussion"></a>

## Discussion

The relying party may use information in the attestation object to assess the origin of a passkey during registration.

## See Also

### Accessing credential information

- [clientDataHash](clientdatahash.md): A hash of the client data for this credential.
- [credentialID](credentialid.md): The identifier for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.
