> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredential/authenticatordata](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredential/authenticatordata)

# authenticatorData (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The authenticator data of the application that created this passkey assertion credential.

## Declaration

```swift
var authenticatorData: Data { get }
```

## See Also

### Accessing credential information

- [clientDataHash](clientdatahash.md): A hash of the client data for this credential.
- [credentialID](credentialid.md): The identifier for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.
- [signature](signature.md): The cryptographic signature of this credential.
- [userHandle](userhandle.md): The user handle of this passkey.

# authenticatorData (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The authenticator data of the application that created this passkey assertion credential.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * authenticatorData;
```

## See Also

### Accessing credential information

- [clientDataHash](clientdatahash.md): A hash of the client data for this credential.
- [credentialID](credentialid.md): The identifier for this credential.
- [relyingParty](relyingparty.md): The relying party associated with this passkey.
- [signature](signature.md): The cryptographic signature of this credential.
- [userHandle](userhandle.md): The user handle of this passkey.
