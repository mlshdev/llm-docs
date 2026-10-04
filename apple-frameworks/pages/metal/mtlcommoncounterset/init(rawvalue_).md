> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlcommoncounterset/init(rawvalue:)

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
