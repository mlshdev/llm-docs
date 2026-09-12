> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/credentialdatamanager](https://developer.apple.com/documentation/authenticationservices/credentialdatamanager)

# CredentialDataManager

**Framework:** AuthenticationServices  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

## Declaration

```swift
@MainActor struct CredentialDataManager
```

## Topics

### Instance Methods

- [reportAllAcceptedPublicKeyCredentials(relyingPartyIdentifier:userHandle:acceptedCredentialIDs:)](credentialdatamanager/reportallacceptedpublickeycredentials%28relyingpartyidentifier_userhandle_acceptedcredentialids_%29.md): Report a snapshot of all the credentialIDs that will be accepted for a `userHandle`. Credentials not present in the `acceptedCredentialIDs` may be removed or hidden by a password manager. Relying party may choose to perform this periodically, e.g. on every sign in. This information is shared with all password managers enabled in the system.
- [reportPublicKeyCredentialUpdate(relyingPartyIdentifier:userHandle:newName:)](credentialdatamanager/reportpublickeycredentialupdate%28relyingpartyidentifier_userhandle_newname_%29.md): Report an update to a credential’s name, such as when changing the user name on an account. This information is shared with all password managers enabled in the system.
- [reportUnknownPublicKeyCredential(relyingPartyIdentifier:credentialID:)](credentialdatamanager/reportunknownpublickeycredential%28relyingpartyidentifier_credentialid_%29.md): Report that a specific credential is unknown or no longer accepted. The credential may be removed or hidden by a password manager. This information is shared with all password managers enabled in the system.
- [reportUnusedPasswordCredential(domain:userName:)](credentialdatamanager/reportunusedpasswordcredential%28domain_username_%29.md): Report an unused password credential for a given domain and username. Password managers may remove or hide the password credential. This information is shared with all password managers enabled in the system.
- [save(password:for:title:)](credentialdatamanager/save%28password_for_title_%29.md): Save or update a password credential to the user’s preferred password manager in the system.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
