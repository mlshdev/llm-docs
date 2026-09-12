> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaingetpath(_:_:_:)](https://developer.apple.com/documentation/security/seckeychaingetpath(_:_:_:))

# SecKeychainGetPath(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Determines the path of a keychain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainGetPath(_ keychain: SecKeychain?, _ ioPathLength: UnsafeMutablePointer<UInt32>, _ pathName: UnsafeMutablePointer<CChar>) -> OSStatus
```

## Parameters

- `keychain`: A reference to a keychain whose path you wish to obtain.
- `ioPathLength`: On entry, a pointer to a variable containing the length (in bytes) of the buffer specified by `pathName`.

  On return, the string length of `pathName`, not including the null termination.
- `pathName`: On entry, a pointer to a buffer that you have allocated. On return, the buffer contains POSIX path of the keychain as a null-terminated UTF-8 encoded string. The function returns [errSecBufferTooSmall](errsecbuffertoosmall.md) if the provided buffer is too small to hold the string with the null terminator byte.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainGetPath (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Determines the path of a keychain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainGetPath(SecKeychainRef keychain, UInt32 *ioPathLength, char *pathName);
```

## Parameters

- `keychain`: A reference to a keychain whose path you wish to obtain.
- `ioPathLength`: On entry, a pointer to a variable containing the length (in bytes) of the buffer specified by `pathName`.

  On return, the string length of `pathName`, not including the null termination.
- `pathName`: On entry, a pointer to a buffer that you have allocated. On return, the buffer contains POSIX path of the keychain as a null-terminated UTF-8 encoded string. The function returns [errSecBufferTooSmall](errsecbuffertoosmall.md) if the provided buffer is too small to hold the string with the null terminator byte.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
