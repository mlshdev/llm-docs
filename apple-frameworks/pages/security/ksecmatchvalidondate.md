> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchvalidondate](https://developer.apple.com/documentation/security/ksecmatchvalidondate)

# kSecMatchValidOnDate (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the validity date.

## Declaration

```swift
let kSecMatchValidOnDate: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDate](../corefoundation/cfdate.md). If provided, returned keys, certificates or identities are limited to those that are valid for the given date. Pass a value of [kCFNull](../corefoundation/kcfnull.md) to indicate the current date.

# kSecMatchValidOnDate (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the validity date.

## Declaration

```objectivec
extern CFStringRef const kSecMatchValidOnDate;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDateRef](../corefoundation/cfdate.md). If provided, returned keys, certificates or identities are limited to those that are valid for the given date. Pass a value of [kCFNull](../corefoundation/kcfnull.md) to indicate the current date.
