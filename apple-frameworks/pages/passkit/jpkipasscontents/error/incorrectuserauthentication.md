> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/jpkipasscontents/error/incorrectuserauthentication

# JPKIPassContents.Error.incorrectUserAuthentication

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 18.0+ (deprecated in 18.4) · iPadOS 18.0+ (deprecated in 18.4)

The provided credential authentication request wasn’t accepted.

> Use userAuthenticationFailed(remainingRetryAttempts: Int) instead

## Declaration

```swift
case incorrectUserAuthentication
```

<a id="Discussion"></a>

## Discussion

For example, this error occurs if the PIN provided is incorrect.

## See Also

### Error cases

- [JPKIPassContents.Error.appNotForeground](appnotforeground.md): The calling app isn’t in the foreground.
- [JPKIPassContents.Error.biometricUnavailable](biometricunavailable.md): Deprecated. Biometric authorization isn’t available.
- [JPKIPassContents.Error.invalidInput](invalidinput.md): The PIN or password doesn’t meet the specified conditions.
- [JPKIPassContents.Error.resourceNotAvailable](resourcenotavailable.md): The system resouce is currently unavailable.
