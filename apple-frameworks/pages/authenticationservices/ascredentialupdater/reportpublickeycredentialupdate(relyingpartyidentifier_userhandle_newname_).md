> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialupdater/reportpublickeycredentialupdate(relyingpartyidentifier:userhandle:newname:)

# reportPublicKeyCredentialUpdate(relyingPartyIdentifier:userHandle:newName:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ (deprecated in 26.2) · iPadOS 26.0+ (deprecated in 26.2) · Mac Catalyst 26.0+ (deprecated in 26.2) · macOS 26.0+ (deprecated in 26.2) · visionOS 26.0+ (deprecated in 26.2)

Provides credential managers with an update to a credential’s name, such as when changing the user name or email address on an account.

> Use \`ASCredentialDataManager\` instead

## Declaration

```swift
final func reportPublicKeyCredentialUpdate(relyingPartyIdentifier: String, userHandle: Data, newName: String) async throws
```

## Parameters

- `relyingPartyIdentifier`: The relying party, typically a website, for which to save the credential.
- `userHandle`: The user identifier.
- `newName`: The new user name for the credential.

<a id="discussion"></a>

## Discussion

This call shares the updated credential data with all credential managers installed on the system.

> **Throws**

> This method throws [ASAuthorizationError](../asauthorizationerror-swift.struct.md) if the system failed to accept the update.
