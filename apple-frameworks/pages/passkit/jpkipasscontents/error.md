> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/error](https://developer.apple.com/documentation/passkit/jpkipasscontents/error)

# JPKIPassContents.Error

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Defines a set of possible errors.

## Declaration

```swift
enum Error
```

## Topics

### Error cases

- [JPKIPassContents.Error.appNotForeground](error/appnotforeground.md): The calling app isn’t in the foreground.
- [JPKIPassContents.Error.biometricUnavailable](error/biometricunavailable.md): Deprecated. Biometric authorization isn’t available.
- [JPKIPassContents.Error.incorrectUserAuthentication](error/incorrectuserauthentication.md): Deprecated. The provided credential authentication request wasn’t accepted.
- [JPKIPassContents.Error.invalidInput](error/invalidinput.md): The PIN or password doesn’t meet the specified conditions.
- [JPKIPassContents.Error.resourceNotAvailable](error/resourcenotavailable.md): The system resouce is currently unavailable.

### Enumeration Cases

- [JPKIPassContents.Error.biometricAuthenticationFailed(laError:)](error/biometricauthenticationfailed%28laerror_%29.md): Biometric authorization failed
- [JPKIPassContents.Error.unknownError](error/unknownerror.md): Unknown error occurred
- [JPKIPassContents.Error.userAuthenticationFailed(remainingRetryAttempts:)](error/userauthenticationfailed%28remainingretryattempts_%29.md): Credential authentication request provided was rejected.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
