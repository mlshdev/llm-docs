> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/vectorizedchartcontent/symbolsize(by:)](https://developer.apple.com/documentation/charts/vectorizedchartcontent/symbolsize(by:))

# symbolSize(by:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Represents data using symbol sizes.

## Declaration

```swift
nonisolated func symbolSize(by value: PlottableProjection<Self.DataElement, some Plottable>) -> some VectorizedChartContent<Self.DataElement>

```

## Parameters

- `value`: The data value to encode by size.

## See Also

### Encoding data into mark characteristics

- [foregroundStyle(by:)](foregroundstyle%28by_%29.md): Represents data using a foreground style.
- [lineStyle(by:)](linestyle%28by_%29.md): Represents data using line styles.
- [symbol(by:)](symbol%28by_%29.md): Represents data using different kinds of symbols.
