> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsetdefault(_:)](https://developer.apple.com/documentation/security/seckeychainsetdefault(_:))

# SecKeychainSetDefault(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the default keychain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainSetDefault(_ keychain: SecKeychain?) -> OSStatus
```

## Parameters

- `keychain`: A reference to the keychain you wish to make the default.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecNoSuchKeychain](errsecnosuchkeychain.md) indicates that the specified keychain could not be found. The result code [errSecInvalidKeychain](errsecinvalidkeychain.md) indicates that the specified keychain is invalid.

<a id="Discussion"></a>

## Discussion

In most cases, your application should not need to set the default keychain, because this is a choice normally made by the user. You may call this function to change where a password or other keychain items are added, but since this is a user choice, you should set the default keychain back to the user specified keychain when you are done.

# SecKeychainSetDefault (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the default keychain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainSetDefault(SecKeychainRef keychain);
```

## Parameters

- `keychain`: A reference to the keychain you wish to make the default.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecNoSuchKeychain](errsecnosuchkeychain.md) indicates that the specified keychain could not be found. The result code [errSecInvalidKeychain](errsecinvalidkeychain.md) indicates that the specified keychain is invalid.

<a id="Discussion"></a>

## Discussion

In most cases, your application should not need to set the default keychain, because this is a choice normally made by the user. You may call this function to change where a password or other keychain items are added, but since this is a user choice, you should set the default keychain back to the user specified keychain when you are done.
