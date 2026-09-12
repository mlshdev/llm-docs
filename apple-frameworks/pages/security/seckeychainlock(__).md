> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainlock(_:)](https://developer.apple.com/documentation/security/seckeychainlock(_:))

# SecKeychainLock(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Locks a keychain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainLock(_ keychain: SecKeychain?) -> OSStatus
```

## Parameters

- `keychain`: A reference to the keychain to lock. Pass `NULL` to lock the default keychain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecNoSuchKeychain](errsecnosuchkeychain.md) indicates that specified keychain could not be found. The result code [errSecInvalidKeychain](errsecinvalidkeychain.md) indicates that the specified keychain is invalid.

<a id="Discussion"></a>

## Discussion

Your application should not call this function unless you are responding to a user’s request to lock a keychain. In general, you should leave the keychain unlocked so that the user does not have to unlock it again in another application.

# SecKeychainLock (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Locks a keychain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainLock(SecKeychainRef keychain);
```

## Parameters

- `keychain`: A reference to the keychain to lock. Pass `NULL` to lock the default keychain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecNoSuchKeychain](errsecnosuchkeychain.md) indicates that specified keychain could not be found. The result code [errSecInvalidKeychain](errsecinvalidkeychain.md) indicates that the specified keychain is invalid.

<a id="Discussion"></a>

## Discussion

Your application should not call this function unless you are responding to a user’s request to lock a keychain. In general, you should leave the keychain unlocked so that the user does not have to unlock it again in another application.
