> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchtrustedonly](https://developer.apple.com/documentation/security/ksecmatchtrustedonly)

# kSecMatchTrustedOnly (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether untrusted certificates should be returned.

## Declaration

```swift
let kSecMatchTrustedOnly: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). If this attribute is provided with a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), only certificates that can be verified back to a trusted anchor are returned. If this value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) or the attribute is not provided, then both trusted and untrusted certificates may be returned.

# kSecMatchTrustedOnly (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether untrusted certificates should be returned.

## Declaration

```objectivec
extern CFStringRef const kSecMatchTrustedOnly;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). If this attribute is provided with a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), only certificates that can be verified back to a trusted anchor are returned. If this value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) or the attribute is not provided, then both trusted and untrusted certificates may be returned.
