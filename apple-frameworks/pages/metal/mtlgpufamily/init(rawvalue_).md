> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlgpufamily/init(rawvalue:)](https://developer.apple.com/documentation/metal/mtlgpufamily/init(rawvalue:))

# init(rawValue:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a GPU family instance from a raw value.

## Declaration

```swift
init?(rawValue: Int)
```

## Parameters

- `rawValue`: An integer value that represents a GPU family.

<a id="discussion"></a>

## Discussion

You don’t need to call this initializer because it’s part of how Swift represents an enumeration from an Objective-C framework.

> **Tip**

>  Use one of the [MTLGPUFamily](../mtlgpufamily.md) cases, such as [MTLGPUFamily.metal3](metal3.md), instead of this initializer.
