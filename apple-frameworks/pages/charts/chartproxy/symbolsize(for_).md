> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy/symbolsize(for:)](https://developer.apple.com/documentation/charts/chartproxy/symbolsize(for:))

# symbolSize(for:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Returns the symbol size for the given data value. Returns `nil` if the symbol size scale is unavailable, or the value is invalid.

## Declaration

```swift
func symbolSize<P>(for value: P) -> CGFloat? where P : Plottable
```

## Parameters

- `value`: The data value.

<a id="return-value"></a>

## Return Value

The symbol size corresponding to the data value, or `nil` if the data value is incompatible with the chart.
