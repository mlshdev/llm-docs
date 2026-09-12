> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrmodificationdate](https://developer.apple.com/documentation/security/ksecattrmodificationdate)

# kSecAttrModificationDate (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that indicates the item’s most recent modification date.

## Declaration

```swift
let kSecAttrModificationDate: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDate](../corefoundation/cfdate.md) and represents the last time the item was updated. Read only.

# kSecAttrModificationDate (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that indicates the item’s most recent modification date.

## Declaration

```objectivec
extern CFStringRef const kSecAttrModificationDate;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDateRef](../corefoundation/cfdate.md) and represents the last time the item was updated. Read only.
