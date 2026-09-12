> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecuseitemlist](https://developer.apple.com/documentation/security/ksecuseitemlist)

# kSecUseItemList (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · macOS 10.6+ · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 5.0)

A key whose value is an array of items to search.

> Not implemented on this platform

## Declaration

```swift
let kSecUseItemList: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFArray](../corefoundation/cfarray.md), where the array contains either [SecKeychainItem](seckeychainitem.md), [SecKey](seckey.md), [SecCertificate](seccertificate.md), [SecIdentity](secidentity.md), or  (for persistent item references) [CFData](../corefoundation/cfdata.md) items. The items in the array must all be of the same type.

When this attribute is provided, no keychains are searched. Instead, the specified array is treated as the set of all possible items to search (or to add if the function being called is [SecItemAdd(\_:\_:)](secitemadd%28____%29.md)).

# kSecUseItemList (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.0+ (deprecated in 13.0) · macOS 10.6+ · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 5.0)

A key whose value is an array of items to search.

> Not implemented on this platform

## Declaration

```objectivec
extern CFStringRef const kSecUseItemList;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFArrayRef](../corefoundation/cfarray.md), where the array contains either [SecKeychainItemRef](seckeychainitem.md), [SecKeyRef](seckey.md), [SecCertificateRef](seccertificate.md), [SecIdentityRef](secidentity.md), or  (for persistent item references) [CFDataRef](../corefoundation/cfdata.md) items. The items in the array must all be of the same type.

When this attribute is provided, no keychains are searched. Instead, the specified array is treated as the set of all possible items to search (or to add if the function being called is [SecItemAdd](secitemadd%28____%29.md)).
