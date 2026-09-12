> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrcreator](https://developer.apple.com/documentation/security/ksecattrcreator)

# kSecAttrCreator (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that indicates the item’s creator.

## Declaration

```swift
let kSecAttrCreator: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumber](../corefoundation/cfnumber.md) and represents the item’s creator. This number is the unsigned integer representation of a four-character code (for example, `'aCrt'`).

# kSecAttrCreator (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that indicates the item’s creator.

## Declaration

```objectivec
extern CFStringRef const kSecAttrCreator;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumberRef](../corefoundation/cfnumber.md) and represents the item’s creator. This number is the unsigned integer representation of a four-character code (for example, `'aCrt'`).
