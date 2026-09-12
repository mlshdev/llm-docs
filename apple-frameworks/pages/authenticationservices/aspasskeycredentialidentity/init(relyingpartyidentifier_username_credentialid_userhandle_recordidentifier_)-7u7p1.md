> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialidentity/init(relyingpartyidentifier:username:credentialid:userhandle:recordidentifier:)-7u7p1](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity/init(relyingpartyidentifier:username:credentialid:userhandle:recordidentifier:)-7u7p1)

# init(relyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Initializes a passkey credential identity.

## Declaration

```swift
convenience init(relyingPartyIdentifier: String, userName: String, credentialID: Data, userHandle: Data, recordIdentifier: String? = nil)
```

## Parameters

- `relyingPartyIdentifier`: The relying party identifier associated with this credential.
- `userName`: The username associated with this credential.
- `credentialID`: The credential identifier for this credential.
- `userHandle`: The user handle associated with this credential.
- `recordIdentifier`: The record identifier for this credential.

## See Also

### Creating a credential identity

- [init(relyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:)](init%28relyingpartyidentifier_username_credentialid_userhandle_recordidentifier_%29-9iuhb.md): Creates and initializes a passkey credential identity.
