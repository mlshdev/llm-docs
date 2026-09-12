> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrsyncviewhint](https://developer.apple.com/documentation/security/ksecattrsyncviewhint)

# kSecAttrSyncViewHint (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s a string that provides a sync view hint.

## Declaration

```swift
let kSecAttrSyncViewHint: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md), and is included as part of the primary key of an item. It can be used to help distinguish Sync Views when defining their queries.

# kSecAttrSyncViewHint (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s a string that provides a sync view hint.

## Declaration

```objectivec
extern CFStringRef const kSecAttrSyncViewHint;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md), and is included as part of the primary key of an item. It can be used to help distinguish Sync Views when defining their queries.
