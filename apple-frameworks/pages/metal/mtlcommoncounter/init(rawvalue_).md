> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommoncounter/init(rawvalue:)](https://developer.apple.com/documentation/metal/mtlcommoncounter/init(rawvalue:))

# init(rawValue:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a common counter name from a raw value.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The name of a common counter as a string.

<a id="discussion"></a>

## Discussion

Use of the [MTLCommonCounter](../mtlcommoncounter.md) type’s static properties, such as [timestamp](timestamp.md), [computeKernelInvocations](computekernelinvocations.md), or [totalCycles](totalcycles.md) instead of creating a common counter instance yourself with this initializer.
