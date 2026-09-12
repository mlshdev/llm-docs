> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/offset(xstart:xend:y:)](https://developer.apple.com/documentation/charts/chartcontent/offset(xstart:xend:y:))

# offset(xStart:xEnd:y:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Applies an offset to the chart content.

## Declaration

```swift
nonisolated func offset(xStart: CGFloat = 0, xEnd: CGFloat = 0, y: CGFloat = 0) -> some ChartContent

```

## Parameters

- `xStart`: The starting horizontal offset in screen coordinates.
- `xEnd`: The ending horizontal offset in screen coordinates.
- `y`: The vertical offset in screen coordinates.

<a id="discussion"></a>

## Discussion

The `xStart` and `xEnd` offset values apply only to marks that have such properties, like bar marks and line segment marks.

## See Also

### Positioning marks

- [offset(\_:)](offset%28__%29.md): Applies an offset that you specify as a size to the chart content.
- [offset(x:y:)](offset%28x_y_%29.md): Applies a vertical and horizontal offset to the chart content.
- [offset(x:yStart:yEnd:)](offset%28x_ystart_yend_%29.md): Applies an offset to the chart content.
- [offset(xStart:xEnd:yStart:yEnd:)](offset%28xstart_xend_ystart_yend_%29.md): Applies an offset to the chart content.
- [alignsMarkStylesWithPlotArea(\_:)](alignsmarkstyleswithplotarea%28__%29.md): Aligns this item’s styles with the chart’s plot area.
