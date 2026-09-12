> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/vectorizedchartcontent](https://developer.apple.com/documentation/charts/vectorizedchartcontent)

# VectorizedChartContent

**Framework:** Swift Charts  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A generic type that represents content conveyed via a chart.

## Declaration

```swift
protocol VectorizedChartContent<DataElement> : ChartContent
```

<a id="overview"></a>

## Overview

Its primary associated type represents the data element, sometimes called *data point*, *observation* or *aggregate*.

Usually, `DataElement` has properties to determine visual attributes directly, or indirectly by encoding `Plottable` values through a chart scale.

## Topics

### Styling marks

- [foregroundStyle(\_:)](vectorizedchartcontent/foregroundstyle%28__%29.md): Represents data using a foreground style.
- [opacity(\_:)](vectorizedchartcontent/opacity%28__%29.md)
- [lineStyle(\_:)](vectorizedchartcontent/linestyle%28__%29.md): Represents data using line styles.
- [position(by:axis:span:)](vectorizedchartcontent/position%28by_axis_span_%29.md)

### Setting symbol appearance

- [symbol(by:)](vectorizedchartcontent/symbol%28by_%29.md): Represents data using different kinds of symbols.
- [symbolSize(\_:)](vectorizedchartcontent/symbolsize%28__%29-12tl1.md): Sets the plotting symbol size for the chart content.
- [symbolSize(\_:)](vectorizedchartcontent/symbolsize%28__%29-3nwop.md): Sets the plotting symbol size for the chart content according to a perceived area.

### Encoding data into mark characteristics

- [foregroundStyle(by:)](vectorizedchartcontent/foregroundstyle%28by_%29.md): Represents data using a foreground style.
- [lineStyle(by:)](vectorizedchartcontent/linestyle%28by_%29.md): Represents data using line styles.
- [symbol(by:)](vectorizedchartcontent/symbol%28by_%29.md): Represents data using different kinds of symbols.
- [symbolSize(by:)](vectorizedchartcontent/symbolsize%28by_%29.md): Represents data using symbol sizes.

### Configuring accessibility

- [accessibilityHidden(\_:)](vectorizedchartcontent/accessibilityhidden%28__%29.md): Specifies whether to hide this chart content from system accessibility features.
- [accessibilityIdentifier(\_:)](vectorizedchartcontent/accessibilityidentifier%28__%29.md): Adds an identifier string to the chart content.
- [accessibilityLabel(\_:)](vectorizedchartcontent/accessibilitylabel%28__%29-5r0pw.md): Adds a label to the chart content that describes its contents.
- [accessibilityLabel(\_:)](vectorizedchartcontent/accessibilitylabel%28__%29-8zoay.md): Adds a label to the chart content that describes its contents.
- [accessibilityLabel(\_:)](vectorizedchartcontent/accessibilitylabel%28__%29-46jbt.md): Adds a label to the chart content that describes its contents.
- [accessibilityValue(\_:)](vectorizedchartcontent/accessibilityvalue%28__%29-2rv8b.md): Adds a description of the value that the chart content contains.
- [accessibilityValue(\_:)](vectorizedchartcontent/accessibilityvalue%28__%29-pylk.md): Adds a description of the value that the chart content contains.
- [accessibilityValue(\_:)](vectorizedchartcontent/accessibilityvalue%28__%29-3dei8.md): Adds a description of the value that the chart content contains.

### Supporting types

- [PlottableProjection](plottableprojection.md)

### Associated Types

- [DataElement](vectorizedchartcontent/dataelement.md)

## Relationships

### Inherits From

- [ChartContent](chartcontent.md)

### Conforming Types

- [AreaPlot](areaplot.md)
- [BarPlot](barplot.md)
- [LinePlot](lineplot.md)
- [PointPlot](pointplot.md)
- [RectanglePlot](rectangleplot.md)
- [RulePlot](ruleplot.md)
- [SectorPlot](sectorplot.md)
- [VectorizedAreaPlotContent](vectorizedareaplotcontent.md)
- [VectorizedBarPlotContent](vectorizedbarplotcontent.md)
- [VectorizedLinePlotContent](vectorizedlineplotcontent.md)
- [VectorizedPointPlotContent](vectorizedpointplotcontent.md)
- [VectorizedRectanglePlotContent](vectorizedrectangleplotcontent.md)
- [VectorizedRulePlotContent](vectorizedruleplotcontent.md)
- [VectorizedSectorPlotContent](vectorizedsectorplotcontent.md)

## See Also

### Vectorized plots

- [Creating a data visualization dashboard with Swift Charts](creating-a-data-visualization-dashboard-with-swift-charts.md): Visualize an entire data collection efficiently by instantiating a single vectorized plot in Swift Charts.
- [AreaPlot](areaplot.md): Conforms when `Content` conforms to `VectorizedChartContent`. Chart content that represents a function or a collection of data using the area of one or more regions.
- [LinePlot](lineplot.md): Conforms when `Content` conforms to `VectorizedChartContent`. Chart content that represents a function or a collection of data using a sequence of connected line segments.
- [PointPlot](pointplot.md): Conforms when `Content` conforms to `VectorizedChartContent`. Chart content that represents a collection of data using points.
- [RectanglePlot](rectangleplot.md): Conforms when `Content` conforms to `VectorizedChartContent`. Chart content that represents a collection of data using rectangles.
- [RulePlot](ruleplot.md): Conforms when `Content` conforms to `VectorizedChartContent`. Chart content that represents a collection of data using a single horizontal or vertical rule.
- [BarPlot](barplot.md): Conforms when `Content` conforms to `VectorizedChartContent`. Chart content that represents a collection of data using bars.
- [SectorPlot](sectorplot.md): Conforms when `Content` conforms to `VectorizedChartContent`. Chart content that represents a collection of data using a sector of a pie or donut chart, which shows how individual categories make up a meaningful total.
