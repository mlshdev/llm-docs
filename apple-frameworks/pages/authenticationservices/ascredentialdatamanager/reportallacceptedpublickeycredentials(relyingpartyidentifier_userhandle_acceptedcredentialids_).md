> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialdatamanager/reportallacceptedpublickeycredentials(relyingpartyidentifier:userhandle:acceptedcredentialids:)](https://developer.apple.com/documentation/authenticationservices/ascredentialdatamanager/reportallacceptedpublickeycredentials(relyingpartyidentifier:userhandle:acceptedcredentialids:))

# reportAllAcceptedPublicKeyCredentials(relyingPartyIdentifier:userHandle:acceptedCredentialIDs:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Report a snapshot of all the credentialIDs that will be accepted for a `userHandle`. Credentials not present in the `acceptedCredentialIDs` may be removed or hidden by a password manager. Relying party may choose to perform this periodically, e.g. on every sign in. This information is shared with all password managers enabled in the system.

## Declaration

```swift
final func reportAllAcceptedPublicKeyCredentials(relyingPartyIdentifier: String, userHandle: Data, acceptedCredentialIDs: [Data]) async throws
```

## Parameters

- `relyingPartyIdentifier`: Relying party (website) that the credential is saved for.
- `userHandle`: User identifier.
- `acceptedCredentialIDs`: An array of identifiers that uniquely identifies the accepted credentials.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ASAuthorizationError` if the system failed to accept the update.
