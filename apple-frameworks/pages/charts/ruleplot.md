> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/ruleplot](https://developer.apple.com/documentation/charts/ruleplot)

# RulePlot

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Chart content that represents a collection of data using a single horizontal or vertical rule.

## Declaration

```swift
struct RulePlot<Content>
```

<a id="overview"></a>

## Overview

Use `RulePlot` when you want to visualize data in the same way as with [RuleMark](rulemark.md), but you want to visualize an entire data collection with a single plot.

You can initialize and style the plot with simple values or key paths. Add modifiers with `KeyPath` before adding modifiers with simple values.

```swift
Chart {
    RulePlot(
        tasks,
        xStart: .value("Start time", \.startTime),
        xEnd: .value("End time", \.endTime),
        y: .value("Project", \.project)
    )
    .foregroundStyle(by: .value("Status", \.status))
    .opacity(\.opacity)
    .lineStyle(StrokeStyle(lineWidth: 8, lineCap: .round))
}
```

## Topics

### Plotting rules from a collection

- [init(\_:x:yStart:yEnd:)](ruleplot/init%28__x_ystart_yend_%29-13wts.md)
- [init(\_:x:yStart:yEnd:)](ruleplot/init%28__x_ystart_yend_%29-3fig9.md)
- [init(\_:x:yStart:yEnd:)](ruleplot/init%28__x_ystart_yend_%29-6ts7e.md)
- [init(\_:x:yStart:yEnd:)](ruleplot/init%28__x_ystart_yend_%29-8b2lx.md)
- [init(\_:x:yStart:yEnd:)](ruleplot/init%28__x_ystart_yend_%29-zxo0.md)
- [init(\_:xStart:xEnd:y:)](ruleplot/init%28__xstart_xend_y_%29-3dsvn.md)
- [init(\_:xStart:xEnd:y:)](ruleplot/init%28__xstart_xend_y_%29-4yxo8.md)
- [init(\_:xStart:xEnd:y:)](ruleplot/init%28__xstart_xend_y_%29-54gxx.md)
- [init(\_:xStart:xEnd:y:)](ruleplot/init%28__xstart_xend_y_%29-8ehr7.md)
- [init(\_:xStart:xEnd:y:)](ruleplot/init%28__xstart_xend_y_%29-hx5a.md)

### Supporting types

- [body](chartcontent/body-swift.property.md): The content and behavior of the chart content.
- [VectorizedRulePlotContent](vectorizedruleplotcontent.md): An opaque vectorized chart content type.

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
- [BarPlot](barplot.md): Chart content that represents a collection of data using bars.
- [SectorPlot](sectorplot.md): Chart content that represents a collection of data using a sector of a pie or donut chart, which shows how individual categories make up a meaningful total.
- [VectorizedChartContent](vectorizedchartcontent.md): Conforms when `Content` conforms to `VectorizedChartContent`. A generic type that represents content conveyed via a chart.
