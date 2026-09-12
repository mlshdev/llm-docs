> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/barplot](https://developer.apple.com/documentation/charts/barplot)

# BarPlot

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Chart content that represents a collection of data using bars.

## Declaration

```swift
struct BarPlot<Content>
```

<a id="overview"></a>

## Overview

Use `BarPlot` when you want to visualize data in the same way as with [BarMark](barmark.md), but you want to visualize an entire data collection with a single plot.

You can initialize and style the plot with simple values or key paths. Add modifiers with `KeyPath` before adding modifiers with simple values.

```swift
BarPlot(
    votes,
    x: .value("Party", \.party),
    y: .value("Vote count", \.voteCount)
)
.foregroundStyle(by: \.partyShapeStyle)
.cornerRadius(4)
```

## Topics

### Plotting bars from a collection

- [init(\_:x:y:width:height:stacking:)](barplot/init%28__x_y_width_height_stacking_%29.md)
- [init(\_:x:yStart:yEnd:width:)](barplot/init%28__x_ystart_yend_width_%29.md)
- [init(\_:x:yStart:yEnd:width:stacking:)](barplot/init%28__x_ystart_yend_width_stacking_%29-2mtih.md)
- [init(\_:x:yStart:yEnd:width:stacking:)](barplot/init%28__x_ystart_yend_width_stacking_%29-680hw.md)
- [init(\_:xStart:xEnd:y:height:stacking:)](barplot/init%28__xstart_xend_y_height_stacking_%29-16tou.md)
- [init(\_:xStart:xEnd:y:height:stacking:)](barplot/init%28__xstart_xend_y_height_stacking_%29-2x0yx.md)
- [init(\_:xStart:xEnd:y:height:)](barplot/init%28__xstart_xend_y_height_%29.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](barplot/init%28__xstart_xend_ystart_yend_%29-48su5.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](barplot/init%28__xstart_xend_ystart_yend_%29-862wn.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](barplot/init%28__xstart_xend_ystart_yend_%29-mtdv.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](barplot/init%28__xstart_xend_ystart_yend_%29-raqh.md)

### Supporting types

- [body](chartcontent/body-swift.property.md): The content and behavior of the chart content.
- [VectorizedBarPlotContent](vectorizedbarplotcontent.md): An opaque vectorized chart content type.

## Relationships

### Conforms To

- [ChartContent](chartcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [VectorizedChartContent](vectorizedchartcontent.md)

## See Also

### Vectorized plots

- [Creating a data visualization dashboard with Swift Charts](creating-a-data-visualization-dashboard-with-swift-charts.md): Visualize an entire data collection efficiently by instantiating a single vectorized plot in Swift Charts.
- [AreaPlot](areaplot.md): Chart content that represents a function or a collection of data using the area of one or more regions.
- [LinePlot](lineplot.md): Chart content that represents a function or a collection of data using a sequence of connected line segments.
- [PointPlot](pointplot.md): Chart content that represents a collection of data using points.
- [RectanglePlot](rectangleplot.md): Chart content that represents a collection of data using rectangles.
- [RulePlot](ruleplot.md): Chart content that represents a collection of data using a single horizontal or vertical rule.
- [SectorPlot](sectorplot.md): Chart content that represents a collection of data using a sector of a pie or donut chart, which shows how individual categories make up a meaningful total.
- [VectorizedChartContent](vectorizedchartcontent.md): Conforms when `Content` conforms to `VectorizedChartContent`. A generic type that represents content conveyed via a chart.
