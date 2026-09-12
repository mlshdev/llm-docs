> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchcaseinsensitive](https://developer.apple.com/documentation/security/ksecmatchcaseinsensitive)

# kSecMatchCaseInsensitive (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether case-insensitive matching is performed.

## Declaration

```swift
let kSecMatchCaseInsensitive: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). If this value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), or if this attribute is not provided, then case-sensitive string matching is performed.

# kSecMatchCaseInsensitive (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether case-insensitive matching is performed.

## Declaration

```objectivec
extern CFStringRef const kSecMatchCaseInsensitive;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). If this value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), or if this attribute is not provided, then case-sensitive string matching is performed.
