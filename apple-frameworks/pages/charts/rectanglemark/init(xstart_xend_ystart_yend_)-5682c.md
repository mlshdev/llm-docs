> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/rectanglemark/init(xstart:xend:ystart:yend:)-5682c](https://developer.apple.com/documentation/charts/rectanglemark/init(xstart:xend:ystart:yend:)-5682c)

# init(xStart:xEnd:yStart:yEnd:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a rectangle mark with fixed x and y intervals.

## Declaration

```swift
nonisolated init(xStart: CGFloat? = nil, xEnd: CGFloat? = nil, yStart: CGFloat? = nil, yEnd: CGFloat? = nil)
```

<a id="discussion"></a>

## Discussion

- xStart: The x start position. If `xStart` is `nil` then the rectangle will start at the leading edge of the plotting area.
- xEnd: The x end position. If `xEnd` is `nil` then the rectangle will end at the trailing edge of the plotting area.
- yStart: The y start position. If `yStart` is `nil` then the rectangle will start at the leading edge of the plotting area.
- yEnd: The y end position. If `yEnd` is `nil` then the rectangle will end at the trailing edge of the plotting area.

<a id="Discussion"></a>

### Discussion

Use this initializer to create one rectangle with any optional x start, x end, y start, and y end position. If no parameters are specified the rectangle will fill the plotting area of the chart.

The example below uses a number scale starting at (0,0) and ending at (6,6). The rectangle has the coordinates: (2,2), (2,4), (4,4), (4,2).

```swift
Chart(data) {
    RectangleMark()
        .opacity(0.2)

    PointMark(
        x: .value("X", $0.x),
        y: .value("Y", $0.y)
    )
}
```

![Scatter plot chart with a rectangle mark annotation. 3 points on the chart at: (5, 5), (2.5, 2.5), (3, 3) the rectangle highlights a rectangular area with coordinates: (0,0), (0,6), (6,0), (6,6).](https://developer.apple.com/images/com.apple.Charts/RectangleMarkSwift.RectangleMarkScatterWithFixedRectangle@2x.png)

## See Also

### Creating a rectangle mark

- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29-vh2x.md): Creates a rectangle mark with an y interval encoding and an x encoding.
- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29-xhqp.md): Creates a rectangle mark that plots values on x and has a fixed y interval.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29-27222.md): Creates a rectangle mark with an x interval encoding and a y encoding.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29-4x46i.md): Creates a rectangle mark with a fixed x interval and y encoding.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-1qbzg.md): Creates a rectangle mark with x and y interval encodings.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-5cbgh.md): Creates a rectangle mark with a y interval encoding and a fixed x interval.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-6jeka.md): Creates a rectangle mark with an x interval encoding and a fixed y interval.
- [init(x:y:width:height:)](init%28x_y_width_height_%29.md): Creates a rectangle that plots values with x and y.
- [init(x:y:z:)](init%28x_y_z_%29.md): Creates a rectangle mark for a 3D chart.
