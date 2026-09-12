> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincopysearchlist(_:)](https://developer.apple.com/documentation/security/seckeychaincopysearchlist(_:))

# SecKeychainCopySearchList(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves a keychain search list.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainCopySearchList(_ searchList: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `searchList`: On return, the returned keychain search list. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainCopySearchList (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves a keychain search list.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainCopySearchList(CFArrayRef*searchList);
```

## Parameters

- `searchList`: On return, the returned keychain search list. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
