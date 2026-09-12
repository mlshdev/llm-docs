> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/vectorizedchartcontent/symbol(by:)](https://developer.apple.com/documentation/charts/vectorizedchartcontent/symbol(by:))

# symbol(by:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Represents data using different kinds of symbols.

## Declaration

```swift
nonisolated func symbol(by value: PlottableProjection<Self.DataElement, some Plottable>) -> some VectorizedChartContent<Self.DataElement>

```

## Parameters

- `value`: The data value. `value` must be categorial, such as `String`.

## See Also

### Setting symbol appearance

- [symbolSize(\_:)](symbolsize%28__%29-12tl1.md): Sets the plotting symbol size for the chart content.
- [symbolSize(\_:)](symbolsize%28__%29-3nwop.md): Sets the plotting symbol size for the chart content according to a perceived area.
