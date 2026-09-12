> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy/position(for:)](https://developer.apple.com/documentation/charts/chartproxy/position(for:))

# position(for:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the x and y positions as a `CGPoint` for the given data values, or `nil` if either the X or the y scale is unavailable or if any data value is invalid. The returned position is relative to the plot.

## Declaration

```swift
func position<X, Y>(for point: (x: X, y: Y)) -> CGPoint? where X : Plottable, Y : Plottable
```

## Parameters

- `point`: A tuple of x and y data values.

<a id="return-value"></a>

## Return Value

The position corresponding to the data values.
