> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/vectorizedchartcontent/symbolsize(_:)-3nwop](https://developer.apple.com/documentation/charts/vectorizedchartcontent/symbolsize(_:)-3nwop)

# symbolSize(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the plotting symbol size for the chart content according to a perceived area.

## Declaration

```swift
nonisolated func symbolSize(_ area: KeyPath<Self.DataElement, CGFloat>) -> some VectorizedChartContent<Self.DataElement>

```

## Parameters

- `area`: The perceived area in square points. For example, a square with 10 points on each side has an area of 100 square points.

## See Also

### Setting symbol appearance

- [symbol(by:)](symbol%28by_%29.md): Represents data using different kinds of symbols.
- [symbolSize(\_:)](symbolsize%28__%29-12tl1.md): Sets the plotting symbol size for the chart content.
