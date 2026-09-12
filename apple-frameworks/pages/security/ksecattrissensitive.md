> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrissensitive](https://developer.apple.com/documentation/security/ksecattrissensitive)

# kSecAttrIsSensitive (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s sensitivity.

## Declaration

```swift
let kSecAttrIsSensitive: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). When set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the item can only be exported in an encrypted format. Items of class [kSecClassKey](ksecclasskey.md) have this attribute.

# kSecAttrIsSensitive (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s sensitivity.

## Declaration

```objectivec
extern CFStringRef const kSecAttrIsSensitive;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). When set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the item can only be exported in an encrypted format. Items of class [kSecClassKey](ksecclasskey.md) have this attribute.
