> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemcopycontent(_:_:_:_:_:)](https://developer.apple.com/documentation/security/seckeychainitemcopycontent(_:_:_:_:_:))

# SecKeychainItemCopyContent(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Copies the data and attributes stored in the given keychain item.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemCopyContent(_ itemRef: SecKeychainItem, _ itemClass: UnsafeMutablePointer<SecItemClass>?, _ attrList: UnsafeMutablePointer<SecKeychainAttributeList>?, _ length: UnsafeMutablePointer<UInt32>?, _ outData: UnsafeMutablePointer<UnsafeMutableRawPointer?>?) -> OSStatus
```

## Parameters

- `itemRef`: A reference to the keychain item to modify.
- `itemClass`: On return, points to the item’s class. Pass `NULL` if it is not required. See [SecItemClass](secitemclass.md) for valid constants.
- `attrList`: On entry, the list of attributes to get in this item; on return the attributes are filled in. Pass `NULL` if you don’t need to retrieve any attributes. You must call [SecKeychainItemFreeContent(\_:\_:)](seckeychainitemfreecontent%28____%29.md) when you no longer need the attributes and data.
- `length`: On return, the length of the buffer pointed to by the `outData` parameter.
- `outData`: On return, a pointer to a buffer containing the data in this item. Pass `NULL` if you don’t need this data. You must call [SecKeychainItemFreeContent(\_:\_:)](seckeychainitemfreecontent%28____%29.md) when you no longer need the attributes and data.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function returns the data and attributes of a specific keychain item.

> **Note**

>  For new development, where possible, you should generally use [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md) to obtain the data and attributes of keychain items instead, because that function is based on Core Foundation types.

You can use the [SecKeychainSearchCopyNext](seckeychainsearchcopynext.md) function to search for a keychain item if you don’t already have the item’s reference object. To find and obtain data from a password keychain item, use the [SecKeychainFindInternetPassword(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainfindinternetpassword%28______________________________%29.md) or [SecKeychainFindGenericPassword(\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainfindgenericpassword%28________________%29.md) function.

You should pair the [SecKeychainItemModifyContent(\_:\_:\_:\_:)](seckeychainitemmodifycontent%28________%29.md) function with the `SecKeychainItemCopyContent` function when dealing with older Keychain Manager functions. The [SecKeychainItemCopyAttributesAndData(\_:\_:\_:\_:\_:\_:)](seckeychainitemcopyattributesanddata%28____________%29.md) and [SecKeychainItemModifyAttributesAndData(\_:\_:\_:\_:)](seckeychainitemmodifyattributesanddata%28________%29.md) functions handle more attributes than are supported by the old Keychain Manager; however, passing them into older calls yields an invalid attribute error.

If the keychain item data is encrypted, this function decrypts the data before returning it to you. If the calling application is not in the list of trusted applications, the user is prompted before access is allowed. If the access controls for this item do not allow decryption, the function returns the `errSecAuthFailed` result code.

# SecKeychainItemCopyContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Copies the data and attributes stored in the given keychain item.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemCopyContent(SecKeychainItemRef itemRef, SecItemClass *itemClass, SecKeychainAttributeList *attrList, UInt32 *length, void **outData);
```

## Parameters

- `itemRef`: A reference to the keychain item to modify.
- `itemClass`: On return, points to the item’s class. Pass `NULL` if it is not required. See [SecItemClass](secitemclass.md) for valid constants.
- `attrList`: On entry, the list of attributes to get in this item; on return the attributes are filled in. Pass `NULL` if you don’t need to retrieve any attributes. You must call [SecKeychainItemFreeContent](seckeychainitemfreecontent%28____%29.md) when you no longer need the attributes and data.
- `length`: On return, the length of the buffer pointed to by the `outData` parameter.
- `outData`: On return, a pointer to a buffer containing the data in this item. Pass `NULL` if you don’t need this data. You must call [SecKeychainItemFreeContent](seckeychainitemfreecontent%28____%29.md) when you no longer need the attributes and data.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function returns the data and attributes of a specific keychain item.

> **Note**

>  For new development, where possible, you should generally use [SecItemCopyMatching](secitemcopymatching%28____%29.md) to obtain the data and attributes of keychain items instead, because that function is based on Core Foundation types.

You can use the [SecKeychainSearchCopyNext](seckeychainsearchcopynext.md) function to search for a keychain item if you don’t already have the item’s reference object. To find and obtain data from a password keychain item, use the [SecKeychainFindInternetPassword](seckeychainfindinternetpassword%28______________________________%29.md) or [SecKeychainFindGenericPassword](seckeychainfindgenericpassword%28________________%29.md) function.

You should pair the [SecKeychainItemModifyContent](seckeychainitemmodifycontent%28________%29.md) function with the `SecKeychainItemCopyContent` function when dealing with older Keychain Manager functions. The [SecKeychainItemCopyAttributesAndData](seckeychainitemcopyattributesanddata%28____________%29.md) and [SecKeychainItemModifyAttributesAndData](seckeychainitemmodifyattributesanddata%28________%29.md) functions handle more attributes than are supported by the old Keychain Manager; however, passing them into older calls yields an invalid attribute error.

If the keychain item data is encrypted, this function decrypts the data before returning it to you. If the calling application is not in the list of trusted applications, the user is prompted before access is allowed. If the access controls for this item do not allow decryption, the function returns the `errSecAuthFailed` result code.
