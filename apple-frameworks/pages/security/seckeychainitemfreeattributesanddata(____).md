> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemfreeattributesanddata(_:_:)](https://developer.apple.com/documentation/security/seckeychainitemfreeattributesanddata(_:_:))

# SecKeychainItemFreeAttributesAndData(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Releases the memory used by the keychain attribute list and/or the keychain data retrieved in a call to `SecKeychainItemCopyAttributesAndData`.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemFreeAttributesAndData(_ attrList: UnsafeMutablePointer<SecKeychainAttributeList>?, _ data: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `attrList`: A pointer to the attribute list to release. Pass `NULL` if there is no attribute list to release.
- `data`: A pointer to the data buffer to release. Pass `NULL` if there is no data to release.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainItemFreeAttributesAndData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Releases the memory used by the keychain attribute list and/or the keychain data retrieved in a call to `SecKeychainItemCopyAttributesAndData`.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemFreeAttributesAndData(SecKeychainAttributeList *attrList, void *data);
```

## Parameters

- `attrList`: A pointer to the attribute list to release. Pass `NULL` if there is no attribute list to release.
- `data`: A pointer to the data buffer to release. Pass `NULL` if there is no data to release.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
