> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/chartproxy/foregroundstyle(for:)

# foregroundStyle(for:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Returns the foreground style for the given data value. Returns `nil` if the foreground style scale is unavailable, or the value is invalid.

## Declaration

```swift
func foregroundStyle<P>(for value: P) -> AnyShapeStyle? where P : Plottable
```

## Parameters

- `value`: The data value.

<a id="return-value"></a>

## Return Value

The foreground style corresponding to the data value, or `nil` if the data value is incompatible with the chart.
