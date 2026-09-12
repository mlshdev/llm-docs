> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincopyaccess(_:_:)](https://developer.apple.com/documentation/security/seckeychaincopyaccess(_:_:))

# SecKeychainCopyAccess(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves the application access of a keychain.

> This function is not implemented and returns an [errSecUnimplemented](errsecunimplemented.md) error code if called.

## Declaration

```swift
func SecKeychainCopyAccess(_ keychain: SecKeychain?, _ access: UnsafeMutablePointer<SecAccess?>) -> OSStatus
```

## Parameters

- `keychain`: A reference to the keychain from which to copy the access object. Pass `NULL` to specify the default keychain.
- `access`: A pointer to an access object. On return, this points to the access object of the specified keychain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainCopyAccess (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves the application access of a keychain.

> This function is not implemented and returns an [errSecUnimplemented](errsecunimplemented.md) error code if called.

## Declaration

```objectivec
OSStatus SecKeychainCopyAccess(SecKeychainRef keychain, SecAccessRef*access);
```

## Parameters

- `keychain`: A reference to the keychain from which to copy the access object. Pass `NULL` to specify the default keychain.
- `access`: A pointer to an access object. On return, this points to the access object of the specified keychain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
