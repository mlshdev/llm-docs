> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/error/biometricauthenticationfailed(laerror:)](https://developer.apple.com/documentation/passkit/jpkipasscontents/error/biometricauthenticationfailed(laerror:))

# JPKIPassContents.Error.biometricAuthenticationFailed(laError:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Biometric authorization failed

## Declaration

```swift
case biometricAuthenticationFailed(laError: LAError)
```

<a id="discussion"></a>

## Discussion

- laError. LocalAuthentication.LAError issued by the LocalAuthentication framework.
