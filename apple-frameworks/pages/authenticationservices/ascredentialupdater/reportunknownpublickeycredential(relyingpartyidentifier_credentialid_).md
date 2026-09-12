> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialupdater/reportunknownpublickeycredential(relyingpartyidentifier:credentialid:)](https://developer.apple.com/documentation/authenticationservices/ascredentialupdater/reportunknownpublickeycredential(relyingpartyidentifier:credentialid:))

# reportUnknownPublicKeyCredential(relyingPartyIdentifier:credentialID:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ (deprecated in 26.2) · iPadOS 26.0+ (deprecated in 26.2) · Mac Catalyst 26.0+ (deprecated in 26.2) · macOS 26.0+ (deprecated in 26.2) · visionOS 26.0+ (deprecated in 26.2)

Informs credential managers that a specific credential is unknown or no longer accepted.

> Use \`ASCredentialDataManager\` instead

## Declaration

```swift
final func reportUnknownPublicKeyCredential(relyingPartyIdentifier: String, credentialID: Data) async throws
```

## Parameters

- `relyingPartyIdentifier`: The relying party, typically a website, for which to update the credential.
- `credentialID`: An identifier that uniquely identifies this credential.

<a id="discussion"></a>

## Discussion

Credential managers can act on this report by removing or hiding the credential.

This call shares the updated credential data with all credential managers installed on the system.

> **Throws**

> This method throws [ASAuthorizationError](../asauthorizationerror-swift.struct.md) if the system failed to accept the update.

## See Also

### Reporting unused and unknown credentials

- [reportUnusedPasswordCredential(domain:userName:)](reportunusedpasswordcredential%28domain_username_%29.md): Deprecated. Informs credential managers that a password is no longer in use.
