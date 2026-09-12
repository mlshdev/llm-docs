> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemcopyaccess(_:_:)](https://developer.apple.com/documentation/security/seckeychainitemcopyaccess(_:_:))

# SecKeychainItemCopyAccess(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves the access of a given keychain item.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemCopyAccess(_ itemRef: SecKeychainItem, _ access: UnsafeMutablePointer<SecAccess?>) -> OSStatus
```

## Parameters

- `itemRef`: A keychain item.
- `access`: On return, points to the keychain item’s access instance. Call the [CFRelease](../corefoundation/cfrelease.md) method to release this access instance when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the access instance from a keychain item. Alternatively, you can look for the [kSecAttrAccess](ksecattraccess.md) attribute among the keychain item’s attributes when you call the [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md) method.

# SecKeychainItemCopyAccess (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves the access of a given keychain item.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemCopyAccess(SecKeychainItemRef itemRef, SecAccessRef*access);
```

## Parameters

- `itemRef`: A keychain item.
- `access`: On return, points to the keychain item’s access instance. Call the [CFRelease](../corefoundation/cfrelease.md) method to release this access instance when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the access instance from a keychain item. Alternatively, you can look for the [kSecAttrAccess](ksecattraccess.md) attribute among the keychain item’s attributes when you call the [SecItemCopyMatching](secitemcopymatching%28____%29.md) method.
