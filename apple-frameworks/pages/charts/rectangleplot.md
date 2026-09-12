> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/rectangleplot](https://developer.apple.com/documentation/charts/rectangleplot)

# RectanglePlot

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Chart content that represents a collection of data using rectangles.

## Declaration

```swift
struct RectanglePlot<Content>
```

<a id="overview"></a>

## Overview

Use `RectanglePlot` when you want to visualize data in the same way as with [RectangleMark](rectanglemark.md), but you want to visualize an entire data collection with a single plot.

You can initialize and style the plot with simple values or key paths. Add modifiers with `KeyPath` before adding modifiers with simple values.

```swift
Chart {
    RectanglePlot(
        tasks,
        x: .value("Time", \.startTime, \.endTime),
        y: .value("Project", \.project)
    )
    .foregroundStyle(by: .value("Status", \.status))
    .cornerRadius(4)
}
```

## Topics

### Plotting rectangles from a collection

- [init(\_:x:y:width:height:)](rectangleplot/init%28__x_y_width_height_%29.md)
- [init(\_:x:yStart:yEnd:width:)](rectangleplot/init%28__x_ystart_yend_width_%29-93op1.md)
- [init(\_:x:yStart:yEnd:width:)](rectangleplot/init%28__x_ystart_yend_width_%29-nnvk.md)
- [init(\_:x:yStart:yEnd:width:)](rectangleplot/init%28__x_ystart_yend_width_%29-12u1b.md)
- [init(\_:xStart:xEnd:y:height:)](rectangleplot/init%28__xstart_xend_y_height_%29-51nra.md)
- [init(\_:xStart:xEnd:y:height:)](rectangleplot/init%28__xstart_xend_y_height_%29-8s17v.md)
- [init(\_:xStart:xEnd:y:height:)](rectangleplot/init%28__xstart_xend_y_height_%29-15ish.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](rectangleplot/init%28__xstart_xend_ystart_yend_%29-46wi0.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](rectangleplot/init%28__xstart_xend_ystart_yend_%29-4g377.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](rectangleplot/init%28__xstart_xend_ystart_yend_%29-6d8yb.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](rectangleplot/init%28__xstart_xend_ystart_yend_%29-6uuk4.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](rectangleplot/init%28__xstart_xend_ystart_yend_%29-741lz.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](rectangleplot/init%28__xstart_xend_ystart_yend_%29-ir9o.md)

### Supporting types

- [body](chartcontent/body-swift.property.md): The content and behavior of the chart content.
- [VectorizedRectanglePlotContent](vectorizedrectangleplotcontent.md): An opaque vectorized chart content type.

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
- [RulePlot](ruleplot.md): Chart content that represents a collection of data using a single horizontal or vertical rule.
- [BarPlot](barplot.md): Chart content that represents a collection of data using bars.
- [SectorPlot](sectorplot.md): Chart content that represents a collection of data using a sector of a pie or donut chart, which shows how individual categories make up a meaningful total.
- [VectorizedChartContent](vectorizedchartcontent.md): Conforms when `Content` conforms to `VectorizedChartContent`. A generic type that represents content conveyed via a chart.
