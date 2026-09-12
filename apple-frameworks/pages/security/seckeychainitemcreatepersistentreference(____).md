> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemcreatepersistentreference(_:_:)](https://developer.apple.com/documentation/security/seckeychainitemcreatepersistentreference(_:_:))

# SecKeychainItemCreatePersistentReference(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Creates a persistent reference for a keychain item.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemCreatePersistentReference(_ itemRef: SecKeychainItem, _ persistentItemRef: UnsafeMutablePointer<CFData?>) -> OSStatus
```

## Parameters

- `itemRef`: A keychain item reference for the item for which you want a persistent reference.
- `persistentItemRef`: On return, a persistent reference for the keychain item. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Unlike normal references, a persistent reference may be stored on disk or passed between processes. You can convert a persistent reference into an ordinary keychain item reference (`SecKeychainItemRef`) by calling the [SecKeychainItemCopyFromPersistentReference(\_:\_:)](seckeychainitemcopyfrompersistentreference%28____%29.md) function.

# SecKeychainItemCreatePersistentReference (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Creates a persistent reference for a keychain item.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemCreatePersistentReference(SecKeychainItemRef itemRef, CFDataRef*persistentItemRef);
```

## Parameters

- `itemRef`: A keychain item reference for the item for which you want a persistent reference.
- `persistentItemRef`: On return, a persistent reference for the keychain item. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Unlike normal references, a persistent reference may be stored on disk or passed between processes. You can convert a persistent reference into an ordinary keychain item reference (`SecKeychainItemRef`) by calling the [SecKeychainItemCopyFromPersistentReference](seckeychainitemcopyfrompersistentreference%28____%29.md) function.

## See Also

### Related Documentation

- [SecKeychainSearchCopyNext](seckeychainsearchcopynext.md): Deprecated. Finds the next keychain item matching the given search criteria.
