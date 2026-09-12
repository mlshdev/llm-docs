> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/areaplot](https://developer.apple.com/documentation/charts/areaplot)

# AreaPlot

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Chart content that represents a function or a collection of data using the area of one or more regions.

## Declaration

```swift
struct AreaPlot<Content>
```

<a id="overview"></a>

## Overview

Use `AreaPlot` when you want to visualize data in the same way as with [AreaMark](areamark.md), but you want to plot a function or visualize an entire data collection with a single plot.

<a id="Plotting-areas-from-a-collection"></a>

### Plotting areas from a collection

You can initialize and style the plot with simple values or key paths. Add modifiers with `KeyPath` before adding modifiers with simple values.

```swift
Chart {
    AreaPlot(
        portfolioElements,
        x: .value("Date", \.date),
        y: .value("Asset value", \.assetValue),
        series: .value("Asset", \.asset),
        stacking: .standard
    )
    .foregroundStyle(by: .value("Asset", \.asset))
}
```

<a id="Plotting-functions"></a>

### Plotting functions

In addition to providing data points, you can provide a function to an `AreaPlot` to plot a function. For example, you can plot the area between y = x and y = x^2 - 1 with:

```swift
Chart {
    AreaPlot(x: "x", yStart: "x", yEnd: "x^2 - 1") { x in (yStart: x, yEnd: x * x - 1) }
}
.chartXScale(domain: -2 ... 2)
.chartYScale(domain: -4 ... 4)
```

You can also provide a single function to an `AreaPlot`. In this case it will plot the area between zero and the given function.

```swift
Chart {
    AreaPlot(x: "x", y: "x^2 - 1") { x in x * x - 1 }
}
.chartXScale(domain: -2 ... 2)
.chartYScale(domain: -4 ... 4)
```

## Topics

### Plotting areas from a collection

- [init(\_:x:y:stacking:)](areaplot/init%28__x_y_stacking_%29.md)
- [init(\_:x:y:series:stacking:)](areaplot/init%28__x_y_series_stacking_%29.md)
- [init(\_:xStart:xEnd:y:)](areaplot/init%28__xstart_xend_y_%29.md)
- [init(\_:xStart:xEnd:y:series:)](areaplot/init%28__xstart_xend_y_series_%29.md)
- [init(\_:x:yStart:yEnd:)](areaplot/init%28__x_ystart_yend_%29.md)
- [init(\_:x:yStart:yEnd:series:)](areaplot/init%28__x_ystart_yend_series_%29.md)

### Plotting functions

- [init(x:y:domain:function:)](areaplot/init%28x_y_domain_function_%29-2fab1.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between zero and the given function.
- [init(x:y:domain:function:)](areaplot/init%28x_y_domain_function_%29-1jmpp.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between zero and the given function.
- [init(x:y:domain:function:)](areaplot/init%28x_y_domain_function_%29-etud.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between zero and the given function.
- [init(x:y:domain:function:)](areaplot/init%28x_y_domain_function_%29-39eit.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between zero and the given function.
- [init(x:yStart:yEnd:domain:function:)](areaplot/init%28x_ystart_yend_domain_function_%29-etcn.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between two functions (yStart, yEnd) = f(x).
- [init(x:yStart:yEnd:domain:function:)](areaplot/init%28x_ystart_yend_domain_function_%29-9gui6.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between two functions (yStart, yEnd) = f(x).
- [init(x:yStart:yEnd:domain:function:)](areaplot/init%28x_ystart_yend_domain_function_%29-5akqm.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between two functions (yStart, yEnd) = f(x).
- [init(x:yStart:yEnd:domain:function:)](areaplot/init%28x_ystart_yend_domain_function_%29-23gxe.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between two functions (yStart, yEnd) = f(x).

### Supporting types

- [body](chartcontent/body-swift.property.md): The content and behavior of the chart content.
- [VectorizedAreaPlotContent](vectorizedareaplotcontent.md): An opaque vectorized chart content type.
- [FunctionAreaPlotContent](functionareaplotcontent.md)

## Relationships

### Conforms To

- [ChartContent](chartcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [VectorizedChartContent](vectorizedchartcontent.md)

## See Also

### Vectorized plots

- [Creating a data visualization dashboard with Swift Charts](creating-a-data-visualization-dashboard-with-swift-charts.md): Visualize an entire data collection efficiently by instantiating a single vectorized plot in Swift Charts.
- [LinePlot](lineplot.md): Chart content that represents a function or a collection of data using a sequence of connected line segments.
- [PointPlot](pointplot.md): Chart content that represents a collection of data using points.
- [RectanglePlot](rectangleplot.md): Chart content that represents a collection of data using rectangles.
- [RulePlot](ruleplot.md): Chart content that represents a collection of data using a single horizontal or vertical rule.
- [BarPlot](barplot.md): Chart content that represents a collection of data using bars.
- [SectorPlot](sectorplot.md): Chart content that represents a collection of data using a sector of a pie or donut chart, which shows how individual categories make up a meaningful total.
- [VectorizedChartContent](vectorizedchartcontent.md): Conforms when `Content` conforms to `VectorizedChartContent`. A generic type that represents content conveyed via a chart.
