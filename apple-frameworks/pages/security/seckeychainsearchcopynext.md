> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsearchcopynext](https://developer.apple.com/documentation/security/seckeychainsearchcopynext)

# SecKeychainSearchCopyNext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Finds the next keychain item matching the given search criteria.

> Use [SecItemCopyMatching](secitemcopymatching%28____%29.md) to conduct keychain item searches.

## Declaration

```objectivec
OSStatus SecKeychainSearchCopyNext(SecKeychainSearchRef searchRef, SecKeychainItemRef*itemRef);
```

## Parameters

- `searchRef`: A reference to the current search criteria. The search object is created in the [SecKeychainSearchCreateFromAttributes](seckeychainsearchcreatefromattributes.md) function and must be released by calling the `CFRelease` function when you are done with it.
- `itemRef`: On return, a pointer to a keychain item object of the next matching keychain item, if any. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. The common security services manager module is no longer used.

Each item stored in the keychain contains data (such as a certificate), which is indexed by the item’s attributes. Use the [SecKeychainSearchCreateFromAttributes](seckeychainsearchcreatefromattributes.md) function to specify attributes to search for. If the `SecKeychainSearchCopyNext` function finds a match, you can use the [SecKeychainItemCopyAttributesAndData](seckeychainitemcopyattributesanddata%28____________%29.md) function to retrieve the item’s data.

A [SecKeychainItemRef](seckeychainitem.md) object for a certificate that is stored in a keychain can be safely cast to a [SecCertificateRef](seccertificate.md) for use with the Certificate, Key, and Trust API.

To find and obtain data from a password keychain item, use the [SecKeychainFindInternetPassword](seckeychainfindinternetpassword%28______________________________%29.md) or [SecKeychainFindGenericPassword](seckeychainfindgenericpassword%28________________%29.md) function.
