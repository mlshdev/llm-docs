> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemmodifycontent(_:_:_:_:)](https://developer.apple.com/documentation/security/seckeychainitemmodifycontent(_:_:_:_:))

# SecKeychainItemModifyContent(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Updates an existing keychain item after changing its attributes and/or data.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemModifyContent(_ itemRef: SecKeychainItem, _ attrList: UnsafePointer<SecKeychainAttributeList>?, _ length: UInt32, _ data: UnsafeRawPointer?) -> OSStatus
```

## Parameters

- `itemRef`: A reference to the keychain item to modify.
- `attrList`: A pointer to the list of attributes to set and their new values. Pass `NULL` if you have no need to modify attributes.
- `length`: The length of the buffer pointed to by the `data` parameter. Pass `0` if you pass `NULL` in the `data` parameter.
- `data`: A pointer to a buffer containing the data to store. Pass `NULL` if you do not need to modify the data.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The keychain item is written to the keychain’s permanent data store.

> **Note**

>  For new development, where possible, you should generally use [SecItemUpdate(\_:\_:)](secitemupdate%28____%29.md) to modify the data and attributes of keychain items instead, because that function is based on Core Foundation types.

If the keychain item has not previously been added to a keychain, a call to this function does nothing and returns `noErr`.

Note that when you use this function to modify a keychain item, Keychain Services updates the modification date of the item. Therefore, you cannot use this function to modify the modification date, as the value you specify will be overwritten with the current time. If you want to change the modification date to something other than the current time, use a CSSM function to do so.

You should pair the `SecKeychainItemModifyContent` function with the [SecKeychainItemCopyContent(\_:\_:\_:\_:\_:)](seckeychainitemcopycontent%28__________%29.md) function when dealing with older Keychain Manager functions. The [SecKeychainItemCopyAttributesAndData(\_:\_:\_:\_:\_:\_:)](seckeychainitemcopyattributesanddata%28____________%29.md) and [SecKeychainItemModifyAttributesAndData(\_:\_:\_:\_:)](seckeychainitemmodifyattributesanddata%28________%29.md) functions handle more attributes than are support by the old Keychain Manager; however, passing them into older calls yields an invalid attribute error.

# SecKeychainItemModifyContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Updates an existing keychain item after changing its attributes and/or data.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemModifyContent(SecKeychainItemRef itemRef, const SecKeychainAttributeList *attrList, UInt32 length, const void *data);
```

## Parameters

- `itemRef`: A reference to the keychain item to modify.
- `attrList`: A pointer to the list of attributes to set and their new values. Pass `NULL` if you have no need to modify attributes.
- `length`: The length of the buffer pointed to by the `data` parameter. Pass `0` if you pass `NULL` in the `data` parameter.
- `data`: A pointer to a buffer containing the data to store. Pass `NULL` if you do not need to modify the data.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The keychain item is written to the keychain’s permanent data store.

> **Note**

>  For new development, where possible, you should generally use [SecItemUpdate](secitemupdate%28____%29.md) to modify the data and attributes of keychain items instead, because that function is based on Core Foundation types.

If the keychain item has not previously been added to a keychain, a call to this function does nothing and returns `noErr`.

Note that when you use this function to modify a keychain item, Keychain Services updates the modification date of the item. Therefore, you cannot use this function to modify the modification date, as the value you specify will be overwritten with the current time. If you want to change the modification date to something other than the current time, use a CSSM function to do so.

You should pair the `SecKeychainItemModifyContent` function with the [SecKeychainItemCopyContent](seckeychainitemcopycontent%28__________%29.md) function when dealing with older Keychain Manager functions. The [SecKeychainItemCopyAttributesAndData](seckeychainitemcopyattributesanddata%28____________%29.md) and [SecKeychainItemModifyAttributesAndData](seckeychainitemmodifyattributesanddata%28________%29.md) functions handle more attributes than are support by the old Keychain Manager; however, passing them into older calls yields an invalid attribute error.
