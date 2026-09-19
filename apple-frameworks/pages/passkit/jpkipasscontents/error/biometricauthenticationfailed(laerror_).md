> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/jpkipasscontents/error/biometricauthenticationfailed(laerror:)

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
