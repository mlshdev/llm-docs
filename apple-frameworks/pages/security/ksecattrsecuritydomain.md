> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrsecuritydomain](https://developer.apple.com/documentation/security/ksecattrsecuritydomain)

# kSecAttrSecurityDomain (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s security domain.

## Declaration

```swift
let kSecAttrSecurityDomain: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and represents the Internet security domain. Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.

# kSecAttrSecurityDomain (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s security domain.

## Declaration

```objectivec
extern CFStringRef const kSecAttrSecurityDomain;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and represents the Internet security domain. Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.
