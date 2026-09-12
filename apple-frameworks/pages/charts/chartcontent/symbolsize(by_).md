> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/symbolsize(by:)](https://developer.apple.com/documentation/charts/chartcontent/symbolsize(by:))

# symbolSize(by:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Represents data using symbol sizes.

## Declaration

```swift
nonisolated func symbolSize<D>(by value: PlottableValue<D>) -> some ChartContent where D : Plottable

```

## Parameters

- `value`: The data value to encode by size.

## See Also

### Encoding data into mark characteristics

- [foregroundStyle(by:)](foregroundstyle%28by_%29.md): Represents data using a foreground style.
- [lineStyle(by:)](linestyle%28by_%29.md): Represents data using line styles.
- [position(by:axis:span:)](position%28by_axis_span_%29.md): Represents data using position.
- [symbol(by:)](symbol%28by_%29.md): Represents data using different kinds of symbols.
