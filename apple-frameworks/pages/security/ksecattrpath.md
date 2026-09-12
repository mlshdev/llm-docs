> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrpath](https://developer.apple.com/documentation/security/ksecattrpath)

# kSecAttrPath (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s path attribute.

## Declaration

```swift
let kSecAttrPath: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and represents a path, typically the path component of the URL. Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.

# kSecAttrPath (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s path attribute.

## Declaration

```objectivec
extern CFStringRef const kSecAttrPath;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and represents a path, typically the path component of the URL. Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.
