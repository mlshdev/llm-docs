> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredential/init(relyingparty:clientdatahash:credentialid:attestationobject:extensionoutput:)](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredential/init(relyingparty:clientdatahash:credentialid:attestationobject:extensionoutput:))

# init(relyingParty:clientDataHash:credentialID:attestationObject:extensionOutput:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes a passkey registration credential object.

## Declaration

```swift
convenience init(relyingParty: String, clientDataHash: Data, credentialID: Data, attestationObject: Data, extensionOutput: ASPasskeyRegistrationCredentialExtensionOutput?)
```

## Parameters

- `relyingParty`: The relying party associated with the passkey.
- `clientDataHash`: A hash of the client data for the credential.
- `credentialID`: The identifier for the credential.
- `attestationObject`: The attestation object for the passkey, which may contain an attestation statement and authenticator data.
- `extensionOutput`: The extension output data.

## See Also

### Creating a passkey registration credential

- [init(relyingParty:clientDataHash:credentialID:attestationObject:)](init%28relyingparty_clientdatahash_credentialid_attestationobject_%29.md): Initializes a passkey registration credential object.
