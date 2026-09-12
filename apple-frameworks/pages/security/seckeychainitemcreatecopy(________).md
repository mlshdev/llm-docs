> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemcreatecopy(_:_:_:_:)](https://developer.apple.com/documentation/security/seckeychainitemcreatecopy(_:_:_:_:))

# SecKeychainItemCreateCopy(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Copies a keychain item from one keychain to another.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemCreateCopy(_ itemRef: SecKeychainItem, _ destKeychainRef: SecKeychain?, _ initialAccess: SecAccess?, _ itemCopy: UnsafeMutablePointer<SecKeychainItem?>) -> OSStatus
```

## Parameters

- `itemRef`: A reference to the keychain item to copy.
- `destKeychainRef`: A reference to the keychain in which to insert the copied keychain item. Pass `NULL` to specify the default keychain.
- `initialAccess`: The initial access for the copied keychain item. Use the [SecAccessCreate(\_:\_:\_:)](secaccesscreate%28______%29.md) function to create an access object or the [SecKeychainItemCopyAccess(\_:\_:)](seckeychainitemcopyaccess%28____%29.md) function to copy an access object from another keychain item. If you pass `NULL` for this parameter, the access defaults to the application creating the item.
- `itemCopy`: On return, a pointer to a copy of the keychain item referenced by the `itemRef` parameter. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainItemCreateCopy (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Copies a keychain item from one keychain to another.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemCreateCopy(SecKeychainItemRef itemRef, SecKeychainRef destKeychainRef, SecAccessRef initialAccess, SecKeychainItemRef*itemCopy);
```

## Parameters

- `itemRef`: A reference to the keychain item to copy.
- `destKeychainRef`: A reference to the keychain in which to insert the copied keychain item. Pass `NULL` to specify the default keychain.
- `initialAccess`: The initial access for the copied keychain item. Use the [SecAccessCreate](secaccesscreate%28______%29.md) function to create an access object or the [SecKeychainItemCopyAccess](seckeychainitemcopyaccess%28____%29.md) function to copy an access object from another keychain item. If you pass `NULL` for this parameter, the access defaults to the application creating the item.
- `itemCopy`: On return, a pointer to a copy of the keychain item referenced by the `itemRef` parameter. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## See Also

### Related Documentation

- [SecKeychainSearchCopyNext](seckeychainsearchcopynext.md): Deprecated. Finds the next keychain item matching the given search criteria.
