> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/passkey/init(credentialid:relyingpartyidentifier:username:userdisplayname:userhandle:key:)](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/passkey/init(credentialid:relyingpartyidentifier:username:userdisplayname:userhandle:key:))

# init(credentialID:relyingPartyIdentifier:userName:userDisplayName:userHandle:key:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a passkey instance.

## Declaration

```swift
init(credentialID: Data, relyingPartyIdentifier: String, userName: String, userDisplayName: String, userHandle: Data, key: Data)
```

## Parameters

- `credentialID`: The credential ID associated with this passkey.
- `relyingPartyIdentifier`: The relying party identifier associated with the passkey
- `userName`: The username associated with the passkey.
- `userDisplayName`: The human-readable name associated with the passkey.
- `userHandle`: The user handle associated with the passkey.
- `key`: The private key associated with this passkey.
