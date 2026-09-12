> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemsetaccess(_:_:)](https://developer.apple.com/documentation/security/seckeychainitemsetaccess(_:_:))

# SecKeychainItemSetAccess(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the access of a given keychain item.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemSetAccess(_ itemRef: SecKeychainItem, _ access: SecAccess) -> OSStatus
```

## Parameters

- `itemRef`: A keychain item.
- `access`: An access instance to replace the keychain item’s current access instance. Use the [SecAccessCreate(\_:\_:\_:)](secaccesscreate%28______%29.md) function to create a default access instance.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this function to attach an access instance to a particular keychain item. Alternatively, you can use the [kSecAttrAccess](ksecattraccess.md) attribute when calling either of the [SecItemAdd(\_:\_:)](secitemadd%28____%29.md) or [SecItemUpdate(\_:\_:)](secitemupdate%28____%29.md) methods.

# SecKeychainItemSetAccess (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the access of a given keychain item.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemSetAccess(SecKeychainItemRef itemRef, SecAccessRef access);
```

## Parameters

- `itemRef`: A keychain item.
- `access`: An access instance to replace the keychain item’s current access instance. Use the [SecAccessCreate](secaccesscreate%28______%29.md) function to create a default access instance.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this function to attach an access instance to a particular keychain item. Alternatively, you can use the [kSecAttrAccess](ksecattraccess.md) attribute when calling either of the [SecItemAdd](secitemadd%28____%29.md) or [SecItemUpdate](secitemupdate%28____%29.md) methods.
