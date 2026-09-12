> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemcopyfrompersistentreference(_:_:)](https://developer.apple.com/documentation/security/seckeychainitemcopyfrompersistentreference(_:_:))

# SecKeychainItemCopyFromPersistentReference(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Provides a keychain item reference, given a persistent reference.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemCopyFromPersistentReference(_ persistentItemRef: CFData, _ itemRef: UnsafeMutablePointer<SecKeychainItem?>) -> OSStatus
```

## Parameters

- `persistentItemRef`: A persistent reference for a keychain item.
- `itemRef`: On return, a keychain item reference for the item for which you provided a persistent reference. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A persistent reference may be stored on disk or passed between processes. You use the [SecKeychainItemCreatePersistentReference(\_:\_:)](seckeychainitemcreatepersistentreference%28____%29.md) function to create a persistent reference.

# SecKeychainItemCopyFromPersistentReference (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Provides a keychain item reference, given a persistent reference.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemCopyFromPersistentReference(CFDataRef persistentItemRef, SecKeychainItemRef*itemRef);
```

## Parameters

- `persistentItemRef`: A persistent reference for a keychain item.
- `itemRef`: On return, a keychain item reference for the item for which you provided a persistent reference. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A persistent reference may be stored on disk or passed between processes. You use the [SecKeychainItemCreatePersistentReference](seckeychainitemcreatepersistentreference%28____%29.md) function to create a persistent reference.
