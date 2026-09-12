> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/error/userauthenticationfailed(remainingretryattempts:)](https://developer.apple.com/documentation/passkit/jpkipasscontents/error/userauthenticationfailed(remainingretryattempts:))

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
