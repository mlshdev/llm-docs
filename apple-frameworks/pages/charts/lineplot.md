> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/lineplot](https://developer.apple.com/documentation/charts/lineplot)

# LinePlot

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Chart content that represents a function or a collection of data using a sequence of connected line segments.

## Declaration

```swift
struct LinePlot<Content>
```

<a id="overview"></a>

## Overview

Use `LinePlot` when you want to visualize data in the same way as with [LineMark](linemark.md), but you want to plot a function or visualize an entire data collection with a single plot.

<a id="Plotting-lines-from-a-collection"></a>

### Plotting lines from a collection

You can initialize and style the plot with simple values or key paths. Add modifiers with `KeyPath` before adding modifiers with simple values.

```swift
Chart {
    LinePlot(
        stocks,
        x: .value("Date", \.date),
        y: .value("Price", \.price),
        series: .value("Asset", \.symbol)
    )
    .foregroundStyle(by: .value("Asset", \.symbol))
}
```

<a id="Plotting-functions"></a>

### Plotting functions

In addition to providing data points, you can provide a function to a `LinePlot` to plot a function. For example, you can plot the function y = x^2 with:

```swift
Chart {
    LinePlot(x: "x", y: "y") { x in x * x }
}
.chartXScale(domain: -10 ... 10)
.chartYScale(domain: -10 ... 10)
```

You can add multiple function plots in a chart and use different foreground styles to distinguish among them.

```swift
Chart {
    LinePlot(x: "x", y: "y = sin(x)") { sin($0) }
        .foregroundStyle(by: .value("expression", "y=sin(x)"))
        .lineStyle(StrokeStyle(lineWidth: 5, lineCap: .round))
        .opacity(0.8)

    LinePlot(x: "x", y: "y = cos(x)") { cos($0) }
        .foregroundStyle(by: .value("expression", "y=cos(x)"))
        .lineStyle(StrokeStyle(lineWidth: 5, lineCap: .round))
        .opacity(0.8)
}
.chartXScale(domain: -10 ... 10)
.chartYScale(domain: -10 ... 10)
```

You can plot a parametric function with the constructor with `x`, `y`, and `t`:

```swift
Chart {
    LinePlot(x: "x", y: "y", t: "t", domain: 0 ... .pi * 2) {
        t in (x: 10 * cos(5 * t) * cos(t), y: 10 * cos(5 * t) * sin(t))
    }
}
.chartXScale(domain: -10 ... 10)
.chartYScale(domain: -10 ... 10)
```

## Topics

### Plotting lines from a collection

- [init(\_:x:y:)](lineplot/init%28__x_y_%29.md)
- [init(\_:x:y:series:)](lineplot/init%28__x_y_series_%29.md)

### Plotting functions

- [init(x:y:domain:function:)](lineplot/init%28x_y_domain_function_%29-6m9gg.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a function y = f(x).
- [init(x:y:domain:function:)](lineplot/init%28x_y_domain_function_%29-1135f.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a function y = f(x).
- [init(x:y:domain:function:)](lineplot/init%28x_y_domain_function_%29-17i43.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a function y = f(x).
- [init(x:y:domain:function:)](lineplot/init%28x_y_domain_function_%29-6gv5v.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a function y = f(x).

### Plotting parametric functions

- [init(x:y:t:domain:function:)](lineplot/init%28x_y_t_domain_function_%29-5c4bo.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a parametric function (x, y) = f(t).
- [init(x:y:t:domain:function:)](lineplot/init%28x_y_t_domain_function_%29-7bvyi.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a parametric function (x, y) = f(t).
- [init(x:y:t:domain:function:)](lineplot/init%28x_y_t_domain_function_%29-610ta.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a parametric function (x, y) = f(t).
- [init(x:y:t:domain:function:)](lineplot/init%28x_y_t_domain_function_%29-3mqls.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a parametric function (x, y) = f(t).

### Supporting types

- [body](chartcontent/body-swift.property.md): The content and behavior of the chart content.
- [VectorizedLinePlotContent](vectorizedlineplotcontent.md): An opaque vectorized chart content type.
- [FunctionLinePlotContent](functionlineplotcontent.md)

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
- [PointPlot](pointplot.md): Chart content that represents a collection of data using points.
- [RectanglePlot](rectangleplot.md): Chart content that represents a collection of data using rectangles.
- [RulePlot](ruleplot.md): Chart content that represents a collection of data using a single horizontal or vertical rule.
- [BarPlot](barplot.md): Chart content that represents a collection of data using bars.
- [SectorPlot](sectorplot.md): Chart content that represents a collection of data using a sector of a pie or donut chart, which shows how individual categories make up a meaningful total.
- [VectorizedChartContent](vectorizedchartcontent.md): Conforms when `Content` conforms to `VectorizedChartContent`. A generic type that represents content conveyed via a chart.
