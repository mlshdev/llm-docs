> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecreturnattributes](https://developer.apple.com/documentation/security/ksecreturnattributes)

# kSecReturnAttributes (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether or not to return item attributes.

## Declaration

```swift
let kSecReturnAttributes: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that a dictionary of the (unencrypted) attributes of an item should be returned in the form of a [CFDictionary](../corefoundation/cfdictionary.md) using the keys and values defined in [Item attribute keys and values](item-attribute-keys-and-values.md).

# kSecReturnAttributes (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether or not to return item attributes.

## Declaration

```objectivec
extern CFStringRef const kSecReturnAttributes;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that a dictionary of the (unencrypted) attributes of an item should be returned in the form of a [CFDictionaryRef](../corefoundation/cfdictionary.md) using the keys and values defined in [Item attribute keys and values](item-attribute-keys-and-values.md).
