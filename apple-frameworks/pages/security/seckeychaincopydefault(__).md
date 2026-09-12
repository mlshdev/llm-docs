> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincopydefault(_:)](https://developer.apple.com/documentation/security/seckeychaincopydefault(_:))

# SecKeychainCopyDefault(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves a pointer to the default keychain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainCopyDefault(_ keychain: UnsafeMutablePointer<SecKeychain?>) -> OSStatus
```

## Parameters

- `keychain`: On return, a pointer to the default keychain object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecNoDefaultKeychain](errsecnodefaultkeychain.md) indicates that there is no default keychain.

# SecKeychainCopyDefault (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves a pointer to the default keychain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainCopyDefault(SecKeychainRef*keychain);
```

## Parameters

- `keychain`: On return, a pointer to the default keychain object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecNoDefaultKeychain](errsecnodefaultkeychain.md) indicates that there is no default keychain.
