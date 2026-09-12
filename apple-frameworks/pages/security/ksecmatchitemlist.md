> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchitemlist](https://developer.apple.com/documentation/security/ksecmatchitemlist)

# kSecMatchItemList (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates a list of items to search.

## Declaration

```swift
let kSecMatchItemList: CFString
```

## Mentioned In

- [Updating and deleting keychain items](updating-and-deleting-keychain-items.md)

<a id="Discussion"></a>

## Discussion

To provide your own set of items to be filtered by a search query rather than searching the keychain, specify this search key in a call to the [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md) function with a value that consists of an object of type [CFArray](../corefoundation/cfarray.md) where the array contains either [SecKeychainItem](seckeychainitem.md), [SecKey](seckey.md), [SecCertificate](seccertificate.md), [SecIdentity](secidentity.md), or [CFData](../corefoundation/cfdata.md) items. The objects in the provided array must all be of the same type.

To convert from persistent item references to normal item references, specify this search key in a call to the [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md) function with a value of type [CFArray](../corefoundation/cfarray.md) where the array contains one or more [CFData](../corefoundation/cfdata.md) elements (the persistent references), and a return-type key of [kSecReturnRef](ksecreturnref.md) whose value is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md).

To delete an item identified by a transient reference, specify the [kSecMatchItemList](ksecmatchitemlist.md) search key in a call to the [SecItemDelete(\_:)](secitemdelete%28__%29.md) function with a reference returned by using the [kSecReturnRef](ksecreturnref.md) return type key in a previous call to the [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md) or [SecItemAdd(\_:\_:)](secitemadd%28____%29.md) functions.

To delete an item identified by a persistent reference, specify the [kSecMatchItemList](ksecmatchitemlist.md) search key in a call to the [SecItemDelete(\_:)](secitemdelete%28__%29.md) function with a persistent reference returned by using the [kSecReturnPersistentRef](ksecreturnpersistentref.md) return type key to the [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md) or [SecItemAdd(\_:\_:)](secitemadd%28____%29.md) functions.

# kSecMatchItemList (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates a list of items to search.

## Declaration

```objectivec
extern CFStringRef const kSecMatchItemList;
```

## Mentioned In

- [Updating and deleting keychain items](updating-and-deleting-keychain-items.md)

<a id="Discussion"></a>

## Discussion

To provide your own set of items to be filtered by a search query rather than searching the keychain, specify this search key in a call to the [SecItemCopyMatching](secitemcopymatching%28____%29.md) function with a value that consists of an object of type [CFArrayRef](../corefoundation/cfarray.md) where the array contains either [SecKeychainItemRef](seckeychainitem.md), [SecKeyRef](seckey.md), [SecCertificateRef](seccertificate.md), [SecIdentityRef](secidentity.md), or [CFDataRef](../corefoundation/cfdata.md) items. The objects in the provided array must all be of the same type.

To convert from persistent item references to normal item references, specify this search key in a call to the [SecItemCopyMatching](secitemcopymatching%28____%29.md) function with a value of type [CFArrayRef](../corefoundation/cfarray.md) where the array contains one or more [CFDataRef](../corefoundation/cfdata.md) elements (the persistent references), and a return-type key of [kSecReturnRef](ksecreturnref.md) whose value is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md).

To delete an item identified by a transient reference, specify the [kSecMatchItemList](ksecmatchitemlist.md) search key in a call to the [SecItemDelete](secitemdelete%28__%29.md) function with a reference returned by using the [kSecReturnRef](ksecreturnref.md) return type key in a previous call to the [SecItemCopyMatching](secitemcopymatching%28____%29.md) or [SecItemAdd](secitemadd%28____%29.md) functions.

To delete an item identified by a persistent reference, specify the [kSecMatchItemList](ksecmatchitemlist.md) search key in a call to the [SecItemDelete](secitemdelete%28__%29.md) function with a persistent reference returned by using the [kSecReturnPersistentRef](ksecreturnpersistentref.md) return type key to the [SecItemCopyMatching](secitemcopymatching%28____%29.md) or [SecItemAdd](secitemadd%28____%29.md) functions.
