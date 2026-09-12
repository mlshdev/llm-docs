> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/credentialdatamanager/reportunusedpasswordcredential(domain:username:)](https://developer.apple.com/documentation/authenticationservices/credentialdatamanager/reportunusedpasswordcredential(domain:username:))

# reportUnusedPasswordCredential(domain:userName:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Report an unused password credential for a given domain and username. Password managers may remove or hide the password credential. This information is shared with all password managers enabled in the system.

## Declaration

```swift
@MainActor func reportUnusedPasswordCredential(domain: String, userName: String) async throws
```

## Parameters

- `domain`: The website domain that the credential is saved for.
- `userName`: The account user name.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ASAuthorizationError` if the system failed to accept the update.
