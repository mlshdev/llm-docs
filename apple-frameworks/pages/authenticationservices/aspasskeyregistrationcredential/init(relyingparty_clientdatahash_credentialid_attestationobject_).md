> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredential/init(relyingparty:clientdatahash:credentialid:attestationobject:)](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredential/init(relyingparty:clientdatahash:credentialid:attestationobject:))

# init(relyingParty:clientDataHash:credentialID:attestationObject:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Initializes a passkey registration credential object.

## Declaration

```swift
init(relyingParty: String, clientDataHash: Data, credentialID: Data, attestationObject: Data)
```

## Parameters

- `relyingParty`: The relying party associated with this passkey.
- `clientDataHash`: A hash of the client data for this credential.
- `credentialID`: The identifier for this credential.
- `attestationObject`: The attestation object for this passkey, which may contain an attestation statement and authenticator data.

## See Also

### Creating a passkey registration credential

- [init(relyingParty:clientDataHash:credentialID:attestationObject:extensionOutput:)](init%28relyingparty_clientdatahash_credentialid_attestationobject_extensionoutput_%29.md): Initializes a passkey registration credential object.

# initWithRelyingParty:clientDataHash:credentialID:attestationObject: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Initializes a passkey registration credential object.

## Declaration

```objectivec
- (instancetype) initWithRelyingParty:(NSString *) relyingParty clientDataHash:(NSData *) clientDataHash credentialID:(NSData *) credentialID attestationObject:(NSData *) attestationObject;
```

## Parameters

- `relyingParty`: The relying party associated with this passkey.
- `clientDataHash`: A hash of the client data for this credential.
- `credentialID`: The identifier for this credential.
- `attestationObject`: The attestation object for this passkey, which may contain an attestation statement and authenticator data.

## See Also

### Creating a passkey registration credential

- [credentialWithRelyingParty:clientDataHash:credentialID:attestationObject:](credentialwithrelyingparty_clientdatahash_credentialid_attestationobject_.md): Creates and initializes a new passkey registration credential.
- [initWithRelyingParty:clientDataHash:credentialID:attestationObject:extensionOutput:](initwithrelyingparty_clientdatahash_credentialid_attestationobject_extensionoutput_.md): Initializes a passkey registration credential object.
