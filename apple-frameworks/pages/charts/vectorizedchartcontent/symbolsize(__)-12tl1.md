> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/vectorizedchartcontent/symbolsize(_:)-12tl1

# symbolSize(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the plotting symbol size for the chart content.

## Declaration

```swift
nonisolated func symbolSize(_ size: KeyPath<Self.DataElement, CGSize>) -> some VectorizedChartContent<Self.DataElement>

```

## Parameters

- `size`: The symbol’s bounding box’s dimensions.

## See Also

### Setting symbol appearance

- [symbol(by:)](symbol%28by_%29.md): Represents data using different kinds of symbols.
- [symbolSize(\_:)](symbolsize%28__%29-3nwop.md): Sets the plotting symbol size for the chart content according to a perceived area.
