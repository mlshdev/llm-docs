> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/rectanglemark/init(x:ystart:yend:width:)-vh2x](https://developer.apple.com/documentation/charts/rectanglemark/init(x:ystart:yend:width:)-vh2x)

# init(x:yStart:yEnd:width:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a rectangle mark with an y interval encoding and an x encoding.

## Declaration

```swift
nonisolated init<X, Y>(x: PlottableValue<X>, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>, width: MarkDimension = .automatic) where X : Plottable, Y : Plottable
```

## Parameters

- `x`: The value plotted with y.
- `yStart`: The value plotted with x start.
- `yEnd`: The value plotted with x end.
- `width`: The rectangle width. If `width` is not specified, then 70% of the step size will be used. If there is no step size a default width (in pts) will be used.

<a id="Discussion"></a>

### Discussion

Use this initializer to map the y start, y end and x position to a rectangle for each data element. Optionally, specify the width of the rectangles.

The example below omits the optional `width` field and uses a number scale starting at (0,0) and ending at (6,6). The rectangle has the coordinates: (0,2), (0,4), (4,4), (4,2).

```swift
Chart(data) {
    RectangleMark(
        yStart: .value("Rect yStart", 2),
        yEnd: .value("Rect yEnd", 4),
        x: .value("Rect X", 4)
    )
    .opacity(0.2)

   PointMark(
        x: .value("X", $0.x),
        y: .value("Y", $0.y)
    )
}
```

![Scatter plot chart with a rectangle mark annotation. 3 points on the chart at: (5, 5), (2.5, 2.5), (3, 3) the rectangle highlights a rectangular area with coordinates: (0,2), (0,4), (4,4), (4,2).](https://developer.apple.com/images/com.apple.Charts/RectangleMarkSwift.RectangleMarkScatterWithRectangleYIntervalX@2x.png)

## See Also

### Creating a rectangle mark

- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29-xhqp.md): Creates a rectangle mark that plots values on x and has a fixed y interval.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29-27222.md): Creates a rectangle mark with an x interval encoding and a y encoding.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29-4x46i.md): Creates a rectangle mark with a fixed x interval and y encoding.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-1qbzg.md): Creates a rectangle mark with x and y interval encodings.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-5682c.md): Creates a rectangle mark with fixed x and y intervals.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-5cbgh.md): Creates a rectangle mark with a y interval encoding and a fixed x interval.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-6jeka.md): Creates a rectangle mark with an x interval encoding and a fixed y interval.
- [init(x:y:width:height:)](init%28x_y_width_height_%29.md): Creates a rectangle that plots values with x and y.
- [init(x:y:z:)](init%28x_y_z_%29.md): Creates a rectangle mark for a 3D chart.
