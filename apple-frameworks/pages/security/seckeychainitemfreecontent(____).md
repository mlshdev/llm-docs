> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemfreecontent(_:_:)](https://developer.apple.com/documentation/security/seckeychainitemfreecontent(_:_:))

# SecKeychainItemFreeContent(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Releases the memory used by the keychain attribute list and the keychain data retrieved in a call to the [SecKeychainItemCopyContent(\_:\_:\_:\_:\_:)](seckeychainitemcopycontent%28__________%29.md) function.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemFreeContent(_ attrList: UnsafeMutablePointer<SecKeychainAttributeList>?, _ data: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `attrList`: A pointer to the attribute list to release. Pass `NULL` if there is no attribute list to release.
- `data`: A pointer to the data buffer to release. Pass `NULL` if there is no data to release.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Because the [SecKeychainFindInternetPassword(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainfindinternetpassword%28______________________________%29.md) and [SecKeychainFindGenericPassword(\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainfindgenericpassword%28________________%29.md) functions call the [SecKeychainItemCopyContent(\_:\_:\_:\_:\_:)](seckeychainitemcopycontent%28__________%29.md) function, you must call `SecKeychainItemFreeContent` to release the data buffers after calls to those functions as well.

Because the `SecKeychainItemCopyContent` function does not allocate buffers until they are needed, you should not call the `SecKeychainItemFreeContent` function unless data is actually returned to you.

# SecKeychainItemFreeContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Releases the memory used by the keychain attribute list and the keychain data retrieved in a call to the [SecKeychainItemCopyContent](seckeychainitemcopycontent%28__________%29.md) function.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemFreeContent(SecKeychainAttributeList *attrList, void *data);
```

## Parameters

- `attrList`: A pointer to the attribute list to release. Pass `NULL` if there is no attribute list to release.
- `data`: A pointer to the data buffer to release. Pass `NULL` if there is no data to release.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Because the [SecKeychainFindInternetPassword](seckeychainfindinternetpassword%28______________________________%29.md) and [SecKeychainFindGenericPassword](seckeychainfindgenericpassword%28________________%29.md) functions call the [SecKeychainItemCopyContent](seckeychainitemcopycontent%28__________%29.md) function, you must call `SecKeychainItemFreeContent` to release the data buffers after calls to those functions as well.

Because the `SecKeychainItemCopyContent` function does not allocate buffers until they are needed, you should not call the `SecKeychainItemFreeContent` function unless data is actually returned to you.
