> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialupdater/reportunusedpasswordcredential(domain:username:)](https://developer.apple.com/documentation/authenticationservices/ascredentialupdater/reportunusedpasswordcredential(domain:username:))

# reportUnusedPasswordCredential(domain:userName:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ (deprecated in 26.2) · iPadOS 26.0+ (deprecated in 26.2) · Mac Catalyst 26.0+ (deprecated in 26.2) · macOS 26.0+ (deprecated in 26.2) · visionOS 26.0+ (deprecated in 26.2)

Informs credential managers that a password is no longer in use.

> Use \`ASCredentialDataManager\` instead

## Declaration

```swift
final func reportUnusedPasswordCredential(domain: String, userName: String) async throws
```

## Parameters

- `domain`: The website domain for which to save the password.
- `userName`: The account user name.

<a id="discussion"></a>

## Discussion

Credential managers can act on this report by removing or hiding the password credential.

This call shares the updated credential data with all enabled credential managers installed on the system.

> **Throws**

> This method throws [ASAuthorizationError](../asauthorizationerror-swift.struct.md) if the system failed to accept the update. \` if the system failed to accept the update.

## See Also

### Reporting unused and unknown credentials

- [reportUnknownPublicKeyCredential(relyingPartyIdentifier:credentialID:)](reportunknownpublickeycredential%28relyingpartyidentifier_credentialid_%29.md): Deprecated. Informs credential managers that a specific credential is unknown or no longer accepted.
