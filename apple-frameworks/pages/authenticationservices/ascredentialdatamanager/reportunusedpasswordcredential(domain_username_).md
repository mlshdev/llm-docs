> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialdatamanager/reportunusedpasswordcredential(domain:username:)

# reportUnusedPasswordCredential(domain:userName:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Report an unused password credential for a given domain and username. Password managers may remove or hide the password credential. This information is shared with all password managers enabled in the system.

## Declaration

```swift
final func reportUnusedPasswordCredential(domain: String, userName: String) async throws
```

## Parameters

- `domain`: The website domain that the credential is saved for.
- `userName`: The account user name.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ASAuthorizationError` if the system failed to accept the update.
