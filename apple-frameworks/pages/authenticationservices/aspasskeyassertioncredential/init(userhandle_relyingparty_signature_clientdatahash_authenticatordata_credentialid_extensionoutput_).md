> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredential/init(userhandle:relyingparty:signature:clientdatahash:authenticatordata:credentialid:extensionoutput:)](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredential/init(userhandle:relyingparty:signature:clientdatahash:authenticatordata:credentialid:extensionoutput:))

# init(userHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:extensionOutput:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes a passkey assertion credential object, optionally specifying an extension output.

## Declaration

```swift
convenience init(userHandle: Data, relyingParty: String, signature: Data, clientDataHash: Data, authenticatorData: Data, credentialID: Data, extensionOutput: ASPasskeyAssertionCredentialExtensionOutput?)
```

## Parameters

- `userHandle`: The user handle of the passkey.
- `relyingParty`: The relying party associated with the passkey.
- `signature`: The cryptographic signature of the credential.
- `clientDataHash`: A hash of the client data for the credential.
- `authenticatorData`: The authenticator data of the app that creates the credential.
- `credentialID`: The identifier for the credential.
- `extensionOutput`: An output from WebAuthn extensions.

## See Also

### Creating a passkey assertion credential

- [init(userHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:)](init%28userhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_%29.md): Initializes a passkey assertion credential object.
