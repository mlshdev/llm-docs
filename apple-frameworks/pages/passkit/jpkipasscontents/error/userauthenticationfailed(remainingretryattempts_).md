> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/jpkipasscontents/error/userauthenticationfailed(remainingretryattempts:)

# JPKIPassContents.Error.userAuthenticationFailed(remainingRetryAttempts:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Credential authentication request provided was rejected.

## Declaration

```swift
case userAuthenticationFailed(remainingRetryAttempts: Int)
```

<a id="discussion"></a>

## Discussion

- remainingRetryAttempts: The number of failed attempts left before the credential is locked out.
