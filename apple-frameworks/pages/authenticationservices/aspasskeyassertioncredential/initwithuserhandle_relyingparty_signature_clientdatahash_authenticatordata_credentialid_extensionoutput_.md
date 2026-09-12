> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredential/initwithuserhandle:relyingparty:signature:clientdatahash:authenticatordata:credentialid:extensionoutput:](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredential/initwithuserhandle:relyingparty:signature:clientdatahash:authenticatordata:credentialid:extensionoutput:)

# initWithUserHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:extensionOutput:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes a passkey assertion credential object, optionally specifying an extension output.

## Declaration

```objectivec
- (instancetype) initWithUserHandle:(NSData *) userHandle relyingParty:(NSString *) relyingParty signature:(NSData *) signature clientDataHash:(NSData *) clientDataHash authenticatorData:(NSData *) authenticatorData credentialID:(NSData *) credentialID extensionOutput:(ASPasskeyAssertionCredentialExtensionOutput *) extensionOutput;
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

- [credentialWithUserHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:](credentialwithuserhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_.md): Creates and initializes a new passkey assertion credential.
- [initWithUserHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:](init%28userhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_%29.md): Initializes a passkey assertion credential object.
