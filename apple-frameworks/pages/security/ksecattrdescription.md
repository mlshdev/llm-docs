> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrdescription](https://developer.apple.com/documentation/security/ksecattrdescription)

# kSecAttrDescription (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s a string indicating the item’s description.

## Declaration

```swift
let kSecAttrDescription: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and specifies a user-visible string describing this kind of item (for example, “Disk image password”).

# kSecAttrDescription (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s a string indicating the item’s description.

## Declaration

```objectivec
extern CFStringRef const kSecAttrDescription;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and specifies a user-visible string describing this kind of item (for example, “Disk image password”).
