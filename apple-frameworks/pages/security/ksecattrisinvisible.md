> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrisinvisible](https://developer.apple.com/documentation/security/ksecattrisinvisible)

# kSecAttrIsInvisible (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s a Boolean indicating the item’s visibility.

## Declaration

```swift
let kSecAttrIsInvisible: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md) and is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if the item is invisible (that is, should not be displayed).

# kSecAttrIsInvisible (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s a Boolean indicating the item’s visibility.

## Declaration

```objectivec
extern CFStringRef const kSecAttrIsInvisible;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md) and is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if the item is invisible (that is, should not be displayed).
