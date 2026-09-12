> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrservice](https://developer.apple.com/documentation/security/ksecattrservice)

# kSecAttrService (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s service.

## Declaration

```swift
let kSecAttrService: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a string of type [CFString](../corefoundation/cfstring.md) that represents the service associated with this item. Items of class [kSecClassGenericPassword](ksecclassgenericpassword.md) have this attribute.

# kSecAttrService (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s service.

## Declaration

```objectivec
extern CFStringRef const kSecAttrService;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a string of type [CFStringRef](../corefoundation/cfstring.md) that represents the service associated with this item. Items of class [kSecClassGenericPassword](ksecclassgenericpassword.md) have this attribute.
