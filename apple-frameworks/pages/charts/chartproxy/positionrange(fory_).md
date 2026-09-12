> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy/positionrange(fory:)](https://developer.apple.com/documentation/charts/chartproxy/positionrange(fory:))

# positionRange(forY:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the range of y position for the given data value, or `nil` if the x scale is unavailable or if the value is invalid. The returned position range is relative to the plot.

## Declaration

```swift
func positionRange<P>(forY value: P) -> ClosedRange<CGFloat>? where P : Plottable
```

## Parameters

- `value`: The data value.

<a id="return-value"></a>

## Return Value

The position range corresponding to the data value.

<a id="discussion"></a>

## Discussion

For a continuous data value, the returned range is a single point. For a categorical data value, the returned range is the range of positions that correspond to the given category.
