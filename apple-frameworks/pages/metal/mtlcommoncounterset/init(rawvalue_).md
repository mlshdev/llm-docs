> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommoncounterset/init(rawvalue:)](https://developer.apple.com/documentation/metal/mtlcommoncounterset/init(rawvalue:))

# init(rawValue:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a common counter set name from a raw value.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The name of a counter set as a string.

<a id="discussion"></a>

## Discussion

Use one of the [MTLCommonCounterSet](../mtlcommoncounterset.md) type’s static properties, such as [timestamp](timestamp.md), [stageUtilization](stageutilization.md), and [statistic](statistic.md) instead of creating a common counter set instance yourself with this initializer.
