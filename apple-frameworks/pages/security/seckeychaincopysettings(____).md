> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincopysettings(_:_:)](https://developer.apple.com/documentation/security/seckeychaincopysettings(_:_:))

# SecKeychainCopySettings(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Obtains a keychain’s settings.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainCopySettings(_ keychain: SecKeychain?, _ outSettings: UnsafeMutablePointer<SecKeychainSettings>) -> OSStatus
```

## Parameters

- `keychain`: A reference to the keychain from which to copy its settings.
- `outSettings`: On return, a pointer to a keychain settings structure. Since this structure is versioned, you must allocate the memory for it and fill in the version of the structure before passing it to the function.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainCopySettings (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Obtains a keychain’s settings.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainCopySettings(SecKeychainRef keychain, SecKeychainSettings *outSettings);
```

## Parameters

- `keychain`: A reference to the keychain from which to copy its settings.
- `outSettings`: On return, a pointer to a keychain settings structure. Since this structure is versioned, you must allocate the memory for it and fill in the version of the structure before passing it to the function.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
