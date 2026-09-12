> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/alignsmarkstyleswithplotarea(_:)](https://developer.apple.com/documentation/charts/chartcontent/alignsmarkstyleswithplotarea(_:))

# alignsMarkStylesWithPlotArea(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Aligns this item’s styles with the chart’s plot area.

## Declaration

```swift
nonisolated func alignsMarkStylesWithPlotArea(_ aligns: Bool = true) -> some ChartContent

```

## Parameters

- `aligns`: A Boolean value that indicates whether to align this item’s styles with the plotting area.

<a id="discussion"></a>

## Discussion

Marks map unit-point coordinates within the plot area’s bounds.

## See Also

### Positioning marks

- [offset(\_:)](offset%28__%29.md): Applies an offset that you specify as a size to the chart content.
- [offset(x:y:)](offset%28x_y_%29.md): Applies a vertical and horizontal offset to the chart content.
- [offset(x:yStart:yEnd:)](offset%28x_ystart_yend_%29.md): Applies an offset to the chart content.
- [offset(xStart:xEnd:y:)](offset%28xstart_xend_y_%29.md): Applies an offset to the chart content.
- [offset(xStart:xEnd:yStart:yEnd:)](offset%28xstart_xend_ystart_yend_%29.md): Applies an offset to the chart content.
