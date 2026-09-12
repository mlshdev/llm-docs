> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy/position(forx:)](https://developer.apple.com/documentation/charts/chartproxy/position(forx:))

# position(forX:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the x position for the given data value, or `nil` if the x scale is unavailable or if the data value is invalid. The returned position is relative to the plot.

## Declaration

```swift
func position<P>(forX value: P) -> CGFloat? where P : Plottable
```

## Parameters

- `value`: A data value.

<a id="return-value"></a>

## Return Value

The position corresponding to the data value.
