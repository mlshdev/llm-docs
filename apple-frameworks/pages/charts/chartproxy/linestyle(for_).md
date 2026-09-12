> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy/linestyle(for:)](https://developer.apple.com/documentation/charts/chartproxy/linestyle(for:))

# lineStyle(for:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Returns the line style for the given data value. Returns `nil` if the line style scale is unavailable, or the value is invalid.

## Declaration

```swift
func lineStyle<P>(for value: P) -> StrokeStyle? where P : Plottable
```

## Parameters

- `value`: The data value.

<a id="return-value"></a>

## Return Value

The line style corresponding to the data value, or `nil` if the data value is incompatible with the chart.
