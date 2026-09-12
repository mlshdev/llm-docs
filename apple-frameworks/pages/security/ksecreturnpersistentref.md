> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecreturnpersistentref](https://developer.apple.com/documentation/security/ksecreturnpersistentref)

# kSecReturnPersistentRef (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether or not to return a persistent reference to an item.

## Declaration

```swift
let kSecReturnPersistentRef: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that a persistent reference to an item should be returned as a [CFData](../corefoundation/cfdata.md) object. Unlike normal references, a persistent reference may be stored on disk or passed between processes.

# kSecReturnPersistentRef (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean indicating whether or not to return a persistent reference to an item.

## Declaration

```objectivec
extern CFStringRef const kSecReturnPersistentRef;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that a persistent reference to an item should be returned as a [CFDataRef](../corefoundation/cfdata.md) object. Unlike normal references, a persistent reference may be stored on disk or passed between processes.
