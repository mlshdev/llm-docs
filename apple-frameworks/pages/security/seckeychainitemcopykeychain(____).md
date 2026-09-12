> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemcopykeychain(_:_:)](https://developer.apple.com/documentation/security/seckeychainitemcopykeychain(_:_:))

# SecKeychainItemCopyKeychain(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Returns the keychain object of a given keychain item.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemCopyKeychain(_ itemRef: SecKeychainItem, _ keychainRef: UnsafeMutablePointer<SecKeychain?>) -> OSStatus
```

## Parameters

- `itemRef`: A keychain item object.
- `keychainRef`: On return, a pointer to a keychain object referencing the given keychain item. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainItemCopyKeychain (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Returns the keychain object of a given keychain item.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemCopyKeychain(SecKeychainItemRef itemRef, SecKeychainRef*keychainRef);
```

## Parameters

- `itemRef`: A keychain item object.
- `keychainRef`: On return, a pointer to a keychain object referencing the given keychain item. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
