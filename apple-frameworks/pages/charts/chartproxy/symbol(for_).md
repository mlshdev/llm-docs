> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy/symbol(for:)](https://developer.apple.com/documentation/charts/chartproxy/symbol(for:))

# symbol(for:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Returns the symbol for the given data value. Returns `nil` if the symbol scale is unavailable, or the value is invalid.

## Declaration

```swift
func symbol<P>(for value: P) -> AnyChartSymbolShape? where P : Plottable
```

## Parameters

- `value`: The data value.

<a id="return-value"></a>

## Return Value

The symbol corresponding to the data value, or `nil` if the data value is incompatible with the chart.
