> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychainopen(_:_:)

# SecKeychainOpen(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Opens a keychain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainOpen(_ pathName: UnsafePointer<CChar>, _ keychain: UnsafeMutablePointer<SecKeychain?>) -> OSStatus
```

## Parameters

- `pathName`: A constant character string representing the POSIX path to the keychain to open.
- `keychain`: On return, a pointer to the keychain object. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this function to retrieve a pointer to a keychain object given the path of the keychain. You don’t need to close the keychain, but do release the memory that the pointer occupies when you are finished with it.

# SecKeychainOpen (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Opens a keychain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainOpen(const char *pathName, SecKeychainRef*keychain);
```

## Parameters

- `pathName`: A constant character string representing the POSIX path to the keychain to open.
- `keychain`: On return, a pointer to the keychain object. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this function to retrieve a pointer to a keychain object given the path of the keychain. You don’t need to close the keychain, but do release the memory that the pointer occupies when you are finished with it.
