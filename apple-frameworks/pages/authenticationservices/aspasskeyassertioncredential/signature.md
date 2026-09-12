> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredential/signature](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredential/signature)

# signature (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The cryptographic signature of this credential.

## Declaration

```swift
var signature: Data { get }
```

## See Also

### Accessing credential information

- [authenticatorData](authenticatordata.md): The authenticator data of the application that created this passkey assertion credential.
- [clientDataHash](clientdatahash.md): A hash of the client data for this credential.
- [credentialID](credentialid.md): The identifier for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.
- [userHandle](userhandle.md): The user handle of this passkey.

# signature (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The cryptographic signature of this credential.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * signature;
```

## See Also

### Accessing credential information

- [authenticatorData](authenticatordata.md): The authenticator data of the application that created this passkey assertion credential.
- [clientDataHash](clientdatahash.md): A hash of the client data for this credential.
- [credentialID](credentialid.md): The identifier for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.
- [userHandle](userhandle.md): The user handle of this passkey.
