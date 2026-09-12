> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredential/credentialwithrelyingparty:clientdatahash:credentialid:attestationobject:](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredential/credentialwithrelyingparty:clientdatahash:credentialid:attestationobject:)

# credentialWithRelyingParty:clientDataHash:credentialID:attestationObject:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates and initializes a new passkey registration credential.

## Declaration

```objectivec
+ (instancetype) credentialWithRelyingParty:(NSString *) relyingParty clientDataHash:(NSData *) clientDataHash credentialID:(NSData *) credentialID attestationObject:(NSData *) attestationObject;
```

## Parameters

- `relyingParty`: The relying party associated with this passkey.
- `clientDataHash`: A hash of the client data for this credential.
- `credentialID`: The identifier for this credential.
- `attestationObject`: The attestation object for this passkey, which may contain an attestation statement and authenticator data.

<a id="return-value"></a>

## Return Value

The credential object.

## See Also

### Creating a passkey registration credential

- [initWithRelyingParty:clientDataHash:credentialID:attestationObject:](init%28relyingparty_clientdatahash_credentialid_attestationobject_%29.md): Initializes a passkey registration credential object.
- [initWithRelyingParty:clientDataHash:credentialID:attestationObject:extensionOutput:](initwithrelyingparty_clientdatahash_credentialid_attestationobject_extensionoutput_.md): Initializes a passkey registration credential object.
