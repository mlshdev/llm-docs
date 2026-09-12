> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/numberbins/init(range:count:)-7975l](https://developer.apple.com/documentation/charts/numberbins/init(range:count:)-7975l)

# init(range:count:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates the given number of bins for the range.

## Declaration

```swift
nonisolated init(range: ClosedRange<Value>, count: Int) where Value : BinaryFloatingPoint
```

## Parameters

- `range`: The range of the bins. The first bin starts at the lower bound of the range, and the last bin ends at the upper bound of the range.
- `count`: The exact number of bins.
