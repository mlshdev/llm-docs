> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/pointplot](https://developer.apple.com/documentation/charts/pointplot)

# PointPlot

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Chart content that represents a collection of data using points.

## Declaration

```swift
struct PointPlot<Content>
```

<a id="overview"></a>

## Overview

Use `PointPlot` when you want to visualize data in the same way as with [PointMark](pointmark.md), but you want to visualize an entire data collection with a single plot.

You can initialize and style the plot with simple values or key paths. Add modifiers with `KeyPath` before adding modifiers with simple values.

```swift
Chart {
    PointPlot(
        flightDelays,
        x: .value("Flight Distance", \.distance),
        y: .value("Flight Delay", \.delay)
    )
    .foregroundStyle(by: .value("Airline", \.airline))
    .opacity(\.opacity)
    .symbolSize(by: .value("Capacity", \.passengerCount))
    .symbol(.circle)
}
```

## Topics

### Plotting points from a collection

- [init(\_:x:y:)](pointplot/init%28__x_y_%29-1a9af.md)
- [init(\_:x:y:)](pointplot/init%28__x_y_%29-1p6px.md)
- [init(\_:x:y:)](pointplot/init%28__x_y_%29-72pm2.md)
- [init(\_:x:y:)](pointplot/init%28__x_y_%29-7frpp.md)
- [init(\_:x:y:)](pointplot/init%28__x_y_%29-9p3yg.md)

### Supporting types

- [body](chartcontent/body-swift.property.md): The content and behavior of the chart content.
- [VectorizedPointPlotContent](vectorizedpointplotcontent.md): An opaque vectorized chart content type.

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
- [RectanglePlot](rectangleplot.md): Chart content that represents a collection of data using rectangles.
- [RulePlot](ruleplot.md): Chart content that represents a collection of data using a single horizontal or vertical rule.
- [BarPlot](barplot.md): Chart content that represents a collection of data using bars.
- [SectorPlot](sectorplot.md): Chart content that represents a collection of data using a sector of a pie or donut chart, which shows how individual categories make up a meaningful total.
- [VectorizedChartContent](vectorizedchartcontent.md): Conforms when `Content` conforms to `VectorizedChartContent`. A generic type that represents content conveyed via a chart.
