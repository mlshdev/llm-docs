> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialdatamanager/reportpublickeycredentialupdate(relyingpartyidentifier:userhandle:newname:)

# reportPublicKeyCredentialUpdate(relyingPartyIdentifier:userHandle:newName:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Report an update to a credential’s name, such as when changing the user name on an account. This information is shared with all password managers enabled in the system.

## Declaration

```swift
final func reportPublicKeyCredentialUpdate(relyingPartyIdentifier: String, userHandle: Data, newName: String) async throws
```

## Parameters

- `relyingPartyIdentifier`: Relying party (website) that the credential is saved for.
- `userHandle`: User identifier.
- `newName`: The new user name for the credential.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ASAuthorizationError` if the system failed to accept the update.
