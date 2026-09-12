> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrcreationdate](https://developer.apple.com/documentation/security/ksecattrcreationdate)

# kSecAttrCreationDate (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that indicates the item’s creation date.

## Declaration

```swift
let kSecAttrCreationDate: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDate](../corefoundation/cfdate.md) and represents the date the item was created. Read only.

# kSecAttrCreationDate (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that indicates the item’s creation date.

## Declaration

```objectivec
extern CFStringRef const kSecAttrCreationDate;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDateRef](../corefoundation/cfdate.md) and represents the date the item was created. Read only.
