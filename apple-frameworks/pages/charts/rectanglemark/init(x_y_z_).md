> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/rectanglemark/init(x:y:z:)](https://developer.apple.com/documentation/charts/rectanglemark/init(x:y:z:))

# init(x:y:z:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a rectangle mark for a 3D chart.

## Declaration

```swift
nonisolated init(x: PlottableValue<some Plottable>, y: PlottableValue<some Plottable>, z: PlottableValue<some Plottable>)
```

## Parameters

- `x`: The x value.
- `y`: The y value.
- `z`: The z value.

<a id="discussion"></a>

## Discussion

> **Important**

> A 3D RectangleMark requires one parameter to be a single numeric value and the other two parameters to be numeric ranges.

For example, the following `Chart3D` shows a rectangle mark that extends along the x-axis and y-axis.

```swift
Chart3D {
    RectangleMark(
        x: .value("x", -0.5..<0.5),
        y: .value("y", -0.5..<0.5),
        z: .value("z", 0)
    )
}
```

## See Also

### Creating a rectangle mark

- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29-vh2x.md): Creates a rectangle mark with an y interval encoding and an x encoding.
- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29-xhqp.md): Creates a rectangle mark that plots values on x and has a fixed y interval.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29-27222.md): Creates a rectangle mark with an x interval encoding and a y encoding.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29-4x46i.md): Creates a rectangle mark with a fixed x interval and y encoding.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-1qbzg.md): Creates a rectangle mark with x and y interval encodings.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-5682c.md): Creates a rectangle mark with fixed x and y intervals.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-5cbgh.md): Creates a rectangle mark with a y interval encoding and a fixed x interval.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-6jeka.md): Creates a rectangle mark with an x interval encoding and a fixed y interval.
- [init(x:y:width:height:)](init%28x_y_width_height_%29.md): Creates a rectangle that plots values with x and y.
