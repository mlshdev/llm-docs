> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/rectanglemark](https://developer.apple.com/documentation/charts/rectanglemark)

# RectangleMark

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Chart content that represents data using rectangles.

## Declaration

```swift
@MainActor @preconcurrency struct RectangleMark
```

<a id="overview"></a>

## Overview

Use rectangle mark to map data fields to rectangles. You can use the rectangle mark to create heat map charts or to annotate rectangular areas in a chart.

<a id="Create-a-Heat-Map-with-Rectangle-Marks"></a>

### Create a Heat Map with Rectangle Marks

When presenting data about the effectiveness of a machine learning model, you typically organize the data using a confusion matrix which shows the predicted versus the actual results of the model. To create a 2D heat map that represents a machine learning model you use [init(x:y:width:height:)](rectanglemark/init%28x_y_width_height_%29.md). The example below uses a 2D heat map to visualize a basic confusion matrix with the following layout:

|  | Negative | Positive |
| --- | --- | --- |
| **Negative** | True Negative | False Negative |
| **Positive** | False Positive | True Positive |

The number of records in each cell, `num`,  is represented by the color of its corresponding rectangle. This is done by applying the [foregroundStyle(by:)](chartcontent/foregroundstyle%28by_%29.md) modifier to the rectangle mark and passing it a [PlottableValue](plottablevalue.md) constructed with [value(\_:\_:)](plottablevalue/value%28____%29-13lvv.md) which takes a label and the value to plot, in this case `num`. A scale from values of `num` to color will be automatically generated and used to color the rectangles based on the value.

```swift
struct MatrixEntry {
    var positive: String
    var negative: String
    var num: Double
}

var data: [MatrixEntry] = [
    MatrixEntry(positive: "+", negative: "+", num: 125),
    MatrixEntry(positive: "+", negative: "-", num: 10),
    MatrixEntry(positive: "-", negative: "-", num: 80),
    MatrixEntry(positive: "-", negative: "+", num: 1)
]

var body: some View {
    Chart(data) {
        RectangleMark(
            x: .value("Positive", $0.positive),
            y: .value("Negative", $0.negative)
        )
        .foregroundStyle(by: .value("Number", $0.num))
    }
}
```

![2D heat map chart that represents a simple confusion matrix in a 2x2 grid. The number of records is represented by the color of its corresponding rectangle. Darker colors represent higher values.](https://developer.apple.com/images/com.apple.Charts/RectangleMarkSwift.RectangleMarkHistogramHeatmap2D@2x.png)

<a id="Annotate-a-Rectangular-Area-with-Rectangle-Marks"></a>

### Annotate a Rectangular Area with Rectangle Marks

You can annotate a specific region in a chart with a rectangle mark by providing the coordinates of one or more rectangles. For example you can annotate point marks with rectangle marks using a shared data source like in the example below:

```swift
struct Coord {
    var x: Double
    var y: Double
}

var data: [Coord] = [
    Coord(x: 5, y: 5),
    Coord(x: 2.5, y: 2.5),
    Coord(x: 3, y: 3)
]

var body: some View {
    Chart(data) {
        RectangleMark(
            xStart: .value("Rect Start Width", $0.x - 0.25),
            xEnd: .value("Rect End Width", $0.x + 0.25),
            yStart: .value("Rect Start Height", $0.y - 0.25),
            yEnd: .value("Rect End Height", $0.y + 0.25)
        )
        .opacity(0.2)

        PointMark(
            x: .value("X", $0.x),
            y: .value("Y", $0.y)
        )
    }
}
```

![Scatter plot chart with a rectangle mark annotation. 3 points on the chart at: (5, 5), (2.5, 2.5), (3, 3) each point mark is highlighted with an opaque rectangle.](https://developer.apple.com/images/com.apple.Charts/RectangleMarkSwift.RectangleMarkScatter@2x.png)

<a id="RectangleMark-in-Chart3D"></a>

### RectangleMark in Chart3D

To plot a rectangle in a 3D Chart, use the [init(x:y:z:)](rectanglemark/init%28x_y_z_%29.md) initializer.

> **Important**

> A 3D RectangleMark requires one parameter to be a single numeric value and the other two parameters to be numeric ranges.

The rectangle extends along the two axes that you provide ranges for, and is positioned at a point that you specify for the third axis.

For example, the following `Chart3D` shows three rectangle marks. Each mark extends along two axes, and is fixed at `0` on the third axis.

```swift
Chart3D {
    // A rule that extends along the x-axis and y-axis
    RectangleMark(
        x: .value("x", -0.5..<0.5),
        y: .value("y", -0.5..<0.5),
        z: .value("z", 0)
    )
    .foregroundStyle(.red)
    // A rule that extends along the y-axis and z-axis
    RectangleMark(
        x: .value("x", 0),
        y: .value("y", -0.5..<0.5),
        z: .value("z", -0.5..<0.5)
    )
    .foregroundStyle(.green)
    // A rule that extends along the z-axis and x-axis
    RectangleMark(
        x: .value("x", -0.5..<0.5),
        y: .value("y", 0),
        z: .value("z", -0.5..<0.5)
    )
    .foregroundStyle(.blue)
}
```

## Topics

### Creating a rectangle mark

- [init(x:yStart:yEnd:width:)](rectanglemark/init%28x_ystart_yend_width_%29-vh2x.md): Creates a rectangle mark with an y interval encoding and an x encoding.
- [init(x:yStart:yEnd:width:)](rectanglemark/init%28x_ystart_yend_width_%29-xhqp.md): Creates a rectangle mark that plots values on x and has a fixed y interval.
- [init(xStart:xEnd:y:height:)](rectanglemark/init%28xstart_xend_y_height_%29-27222.md): Creates a rectangle mark with an x interval encoding and a y encoding.
- [init(xStart:xEnd:y:height:)](rectanglemark/init%28xstart_xend_y_height_%29-4x46i.md): Creates a rectangle mark with a fixed x interval and y encoding.
- [init(xStart:xEnd:yStart:yEnd:)](rectanglemark/init%28xstart_xend_ystart_yend_%29-1qbzg.md): Creates a rectangle mark with x and y interval encodings.
- [init(xStart:xEnd:yStart:yEnd:)](rectanglemark/init%28xstart_xend_ystart_yend_%29-5682c.md): Creates a rectangle mark with fixed x and y intervals.
- [init(xStart:xEnd:yStart:yEnd:)](rectanglemark/init%28xstart_xend_ystart_yend_%29-5cbgh.md): Creates a rectangle mark with a y interval encoding and a fixed x interval.
- [init(xStart:xEnd:yStart:yEnd:)](rectanglemark/init%28xstart_xend_ystart_yend_%29-6jeka.md): Creates a rectangle mark with an x interval encoding and a fixed y interval.
- [init(x:y:width:height:)](rectanglemark/init%28x_y_width_height_%29.md): Creates a rectangle that plots values with x and y.
- [init(x:y:z:)](rectanglemark/init%28x_y_z_%29.md): Creates a rectangle mark for a 3D chart.

## Relationships

### Conforms To

- [Chart3DContent](chart3dcontent.md)
- [ChartContent](chartcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Marks

- [AreaMark](areamark.md): Chart content that represents data using the area of one or more regions.
- [LineMark](linemark.md): Chart content that represents data using a sequence of connected line segments.
- [PointMark](pointmark.md): Chart content that represents data using points.
- [RuleMark](rulemark.md): Chart content that represents data using a single horizontal or vertical rule.
- [BarMark](barmark.md): Chart content that represents data using bars.
- [SectorMark](sectormark.md): A sector of a pie or donut chart, which shows how individual categories make up a meaningful total.
