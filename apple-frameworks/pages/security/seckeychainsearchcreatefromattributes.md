> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsearchcreatefromattributes](https://developer.apple.com/documentation/security/seckeychainsearchcreatefromattributes)

# SecKeychainSearchCreateFromAttributes

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Creates a search object matching a list of zero or more attributes.

> Use [SecItemCopyMatching](secitemcopymatching%28____%29.md) instead.

## Declaration

```objectivec
OSStatus SecKeychainSearchCreateFromAttributes(CFTypeRef keychainOrArray, SecItemClass itemClass, const SecKeychainAttributeList *attrList, SecKeychainSearchRef*searchRef);
```

## Parameters

- `keychainOrArray`: A reference to an array of keychains to search, a single keychain, or `NULL` to search the user’s current keychain search list. Use the function [SecKeychainCopySearchList](seckeychaincopysearchlist%28__%29.md) to retrieve the user’s default search list.
- `itemClass`: The keychain item class. See [SecItemClass](secitemclass.md) for valid constants.
- `attrList`: A pointer to a list of zero or more keychain attribute records to match. Pass `NULL` to match any keychain attribute.
- `searchRef`: On return, a pointer to the current search object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. Use [SecItemCopyMatching](secitemcopymatching%28____%29.md) instead.

Each item stored in the keychain contains data (such as a certificate), which is indexed by the item’s attributes. You look up an item in a keychain by its attributes. If you find a match, you can then retrieve the item’s data. Use the search object created by this function as input to the [SecKeychainSearchCopyNext](seckeychainsearchcopynext.md) function to find a keychain item and the [SecKeychainItemCopyAttributesAndData](seckeychainitemcopyattributesanddata%28____________%29.md) function to retrieve the item’s data.

To find and obtain data from a password keychain item, use the [SecKeychainFindInternetPassword](seckeychainfindinternetpassword%28______________________________%29.md) or [SecKeychainFindGenericPassword](seckeychainfindgenericpassword%28________________%29.md) function.
