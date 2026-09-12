> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredential/credentialwithuserhandle:relyingparty:signature:clientdatahash:authenticatordata:credentialid:](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredential/credentialwithuserhandle:relyingparty:signature:clientdatahash:authenticatordata:credentialid:)

# credentialWithUserHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates and initializes a new passkey assertion credential.

## Declaration

```objectivec
+ (instancetype) credentialWithUserHandle:(NSData *) userHandle relyingParty:(NSString *) relyingParty signature:(NSData *) signature clientDataHash:(NSData *) clientDataHash authenticatorData:(NSData *) authenticatorData credentialID:(NSData *) credentialID;
```

## Parameters

- `userHandle`: The user handle of this passkey.
- `relyingParty`: The relying party associated with this passkey.
- `signature`: The cryptographic signature of this credential.
- `clientDataHash`: A hash of the client data for this credential.
- `authenticatorData`: The authenticator data of the application that created this credential.
- `credentialID`: The identifier for this credential.

<a id="return-value"></a>

## Return Value

The credential object.

## See Also

### Creating a passkey assertion credential

- [initWithUserHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:](init%28userhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_%29.md): Initializes a passkey assertion credential object.
- [initWithUserHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:extensionOutput:](initwithuserhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_extensionoutput_.md): Initializes a passkey assertion credential object, optionally specifying an extension output.
