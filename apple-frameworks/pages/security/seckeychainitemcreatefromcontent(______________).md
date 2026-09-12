> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemcreatefromcontent(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/security/seckeychainitemcreatefromcontent(_:_:_:_:_:_:_:))

# SecKeychainItemCreateFromContent(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Creates a new keychain item from the supplied parameters.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemCreateFromContent(_ itemClass: SecItemClass, _ attrList: UnsafeMutablePointer<SecKeychainAttributeList>, _ length: UInt32, _ data: UnsafeRawPointer?, _ keychainRef: SecKeychain?, _ initialAccess: SecAccess?, _ itemRef: UnsafeMutablePointer<SecKeychainItem?>?) -> OSStatus
```

## Parameters

- `itemClass`: A constant identifying the class of item to create. See [SecItemClass](secitemclass.md) for valid constants.
- `attrList`: A pointer to the list of attributes for the item to create.
- `length`: The length of the buffer pointed to by the `data` parameter.
- `data`: A pointer to a buffer containing the data to store.
- `keychainRef`: A reference to the keychain in which to add the item. Pass `NULL` to specify the default keychain.
- `initialAccess`: An access object for this keychain item. Use the [SecAccessCreate(\_:\_:\_:)](secaccesscreate%28______%29.md) function to create an access object or the [SecKeychainItemCopyAccess(\_:\_:)](seckeychainitemcopyaccess%28____%29.md) function to copy an access object from another keychain item. If you pass `NULL` for this parameter, the access defaults to the application creating the item.
- `itemRef`: On return, a pointer to a reference to the newly created keychain item. This parameter is optional. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Each item stored in the keychain contains data (such as a certificate), which is indexed by the item’s attributes. Use this function to create a keychain item from its attributes and data. To create keychain items that hold passwords, use the [SecKeychainAddInternetPassword(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainaddinternetpassword%28______________________________%29.md) or [SecKeychainAddGenericPassword(\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainaddgenericpassword%28________________%29.md) functions.

A `SecKeychainItemRef` object for a certificate that is stored in a keychain can be safely cast to a `SecCertificateRef` for use with the Certificate, Key, and Trust API.

This function automatically calls the function [SecKeychainUnlock(\_:\_:\_:\_:)](seckeychainunlock%28________%29.md) to display the Unlock Keychain dialog box if the keychain is currently locked.

# SecKeychainItemCreateFromContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Creates a new keychain item from the supplied parameters.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemCreateFromContent(SecItemClass itemClass, SecKeychainAttributeList *attrList, UInt32 length, const void *data, SecKeychainRef keychainRef, SecAccessRef initialAccess, SecKeychainItemRef*itemRef);
```

## Parameters

- `itemClass`: A constant identifying the class of item to create. See [SecItemClass](secitemclass.md) for valid constants.
- `attrList`: A pointer to the list of attributes for the item to create.
- `length`: The length of the buffer pointed to by the `data` parameter.
- `data`: A pointer to a buffer containing the data to store.
- `keychainRef`: A reference to the keychain in which to add the item. Pass `NULL` to specify the default keychain.
- `initialAccess`: An access object for this keychain item. Use the [SecAccessCreate](secaccesscreate%28______%29.md) function to create an access object or the [SecKeychainItemCopyAccess](seckeychainitemcopyaccess%28____%29.md) function to copy an access object from another keychain item. If you pass `NULL` for this parameter, the access defaults to the application creating the item.
- `itemRef`: On return, a pointer to a reference to the newly created keychain item. This parameter is optional. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Each item stored in the keychain contains data (such as a certificate), which is indexed by the item’s attributes. Use this function to create a keychain item from its attributes and data. To create keychain items that hold passwords, use the [SecKeychainAddInternetPassword](seckeychainaddinternetpassword%28______________________________%29.md) or [SecKeychainAddGenericPassword](seckeychainaddgenericpassword%28________________%29.md) functions.

A `SecKeychainItemRef` object for a certificate that is stored in a keychain can be safely cast to a `SecCertificateRef` for use with the Certificate, Key, and Trust API.

This function automatically calls the function [SecKeychainUnlock](seckeychainunlock%28________%29.md) to display the Unlock Keychain dialog box if the keychain is currently locked.
