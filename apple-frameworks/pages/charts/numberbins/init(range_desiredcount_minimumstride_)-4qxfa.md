> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/numberbins/init(range:desiredcount:minimumstride:)-4qxfa](https://developer.apple.com/documentation/charts/numberbins/init(range:desiredcount:minimumstride:)-4qxfa)

# init(range:desiredCount:minimumStride:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Automatically determine the bins from a range of data.

## Declaration

```swift
nonisolated init(range: ClosedRange<Value>, desiredCount: Int = 10, minimumStride: Value = 0) where Value : BinaryInteger
```

## Parameters

- `range`: The range the bins should cover.
- `desiredCount`: The desired number of bins for the given data. If `nil`, infer the number automatically from data.
- `minimumStride`: The minimum allowed bin size.

<a id="return-value"></a>

## Return Value

The inferred bins.
