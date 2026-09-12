> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/rectanglemark/init(xstart:xend:ystart:yend:)-6jeka](https://developer.apple.com/documentation/charts/rectanglemark/init(xstart:xend:ystart:yend:)-6jeka)

# init(xStart:xEnd:yStart:yEnd:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a rectangle mark with an x interval encoding and a fixed y interval.

## Declaration

```swift
nonisolated init<X>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, yStart: CGFloat? = nil, yEnd: CGFloat? = nil) where X : Plottable
```

<a id="discussion"></a>

## Discussion

- xStart: The value plotted with x start.
- xEnd: The value plotted with x end.
- yStart: The y end position. If `yStart` is `nil` then the rectangle will start at the leading edge of the plotting area.
- yEnd: The y end position. If `yEnd` is `nil` then the rectangle will end at the trailing edge of the plotting area.

<a id="Discussion"></a>

### Discussion

Use this initializer to map the x start and x end to a rectangle for each data element. Optionally, specify the yStart or yEnd position of the rectangles.

The example below omits the optional `y` and `height` fields and uses a number scale starting at (0,0) and ending at (6,6). The rectangle has the coordinates: (2,0), (2,6), (4,6), (4,0).

```swift
Chart(data) {
    RectangleMark(
        xStart: .value("Rect xStart", 2),
        xEnd: .value("Rect xEnd", 4)
    )
    .opacity(0.2)

    PointMark(
        x: .value("X", $0.x),
        y: .value("Y", $0.y)
    )
}
```

![Scatter plot chart with a rectangle mark annotation. 3 points on the chart at: (5, 5), (2.5, 2.5), (3, 3) the rectangle highlights a rectangular area with coordinates: (2,0), (2,6), (4,6), (4,0).](https://developer.apple.com/images/com.apple.Charts/RectangleMarkSwift.RectangleMarkScatterWithRectangleXInterval@2x.png)

## See Also

### Creating a rectangle mark

- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29-vh2x.md): Creates a rectangle mark with an y interval encoding and an x encoding.
- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29-xhqp.md): Creates a rectangle mark that plots values on x and has a fixed y interval.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29-27222.md): Creates a rectangle mark with an x interval encoding and a y encoding.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29-4x46i.md): Creates a rectangle mark with a fixed x interval and y encoding.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-1qbzg.md): Creates a rectangle mark with x and y interval encodings.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-5682c.md): Creates a rectangle mark with fixed x and y intervals.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-5cbgh.md): Creates a rectangle mark with a y interval encoding and a fixed x interval.
- [init(x:y:width:height:)](init%28x_y_width_height_%29.md): Creates a rectangle that plots values with x and y.
- [init(x:y:z:)](init%28x_y_z_%29.md): Creates a rectangle mark for a 3D chart.
