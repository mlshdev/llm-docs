> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/credentialdatamanager/reportpublickeycredentialupdate(relyingpartyidentifier:userhandle:newname:)](https://developer.apple.com/documentation/authenticationservices/credentialdatamanager/reportpublickeycredentialupdate(relyingpartyidentifier:userhandle:newname:))

# reportPublicKeyCredentialUpdate(relyingPartyIdentifier:userHandle:newName:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Report an update to a credential’s name, such as when changing the user name on an account. This information is shared with all password managers enabled in the system.

## Declaration

```swift
@MainActor func reportPublicKeyCredentialUpdate(relyingPartyIdentifier: String, userHandle: Data, newName: String) async throws
```

## Parameters

- `relyingPartyIdentifier`: Relying party (website) that the credential is saved for.
- `userHandle`: User identifier.
- `newName`: The new user name for the credential.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ASAuthorizationError` if the system failed to accept the update.
