> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/credentialdatamanager/reportunknownpublickeycredential(relyingpartyidentifier:credentialid:)](https://developer.apple.com/documentation/authenticationservices/credentialdatamanager/reportunknownpublickeycredential(relyingpartyidentifier:credentialid:))

# reportUnknownPublicKeyCredential(relyingPartyIdentifier:credentialID:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Report that a specific credential is unknown or no longer accepted. The credential may be removed or hidden by a password manager. This information is shared with all password managers enabled in the system.

## Declaration

```swift
@MainActor func reportUnknownPublicKeyCredential(relyingPartyIdentifier: String, credentialID: Data) async throws
```

## Parameters

- `relyingPartyIdentifier`: Relying party (website) that the credential is saved for.
- `credentialID`: An identifier that uniquely identifies this credential.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ASAuthorizationError` if the system failed to accept the update.
