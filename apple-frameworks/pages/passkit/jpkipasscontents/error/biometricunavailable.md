> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/error/biometricunavailable](https://developer.apple.com/documentation/passkit/jpkipasscontents/error/biometricunavailable)

# JPKIPassContents.Error.biometricUnavailable

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 18.0+ (deprecated in 18.4) · iPadOS 18.0+ (deprecated in 18.4)

Biometric authorization isn’t available.

> Use biometricAuthenticationFailed(laError: LocalAuthentication.LAError) instead

## Declaration

```swift
case biometricUnavailable
```

## See Also

### Error cases

- [JPKIPassContents.Error.appNotForeground](appnotforeground.md): The calling app isn’t in the foreground.
- [JPKIPassContents.Error.incorrectUserAuthentication](incorrectuserauthentication.md): Deprecated. The provided credential authentication request wasn’t accepted.
- [JPKIPassContents.Error.invalidInput](invalidinput.md): The PIN or password doesn’t meet the specified conditions.
- [JPKIPassContents.Error.resourceNotAvailable](resourcenotavailable.md): The system resouce is currently unavailable.
