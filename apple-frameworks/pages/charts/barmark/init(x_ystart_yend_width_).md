> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/barmark/init(x:ystart:yend:width:)](https://developer.apple.com/documentation/charts/barmark/init(x:ystart:yend:width:))

# init(x:yStart:yEnd:width:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a bar mark that plots values with x and its y interval.

## Declaration

```swift
nonisolated init<X, Y>(x: PlottableValue<X>, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>, width: MarkDimension = .automatic) where X : Plottable, Y : Plottable
```

## Parameters

- `x`: The value plotted with x.
- `yStart`: The value plotted with y start.
- `yEnd`: The value plotted with y end.
- `width`: The bar width.  If `width` is `nil`, the default bar size will be applied.

<a id="Discussion"></a>

### Discussion

Use this initializer to show vertical intervals for one or more categories:

```swift
Chart(data) {
   BarMark(
       x: .value("Job", $0.job),
       yStart: .value("Start Time", $0.start),
       yEnd: .value("End Time", $0.end)
   )
}
```

![Vertical bar chart with x-axis showing task name and y-axis showing start and end time. It has 5 bars, Task 1 range 0 to 15, range 20 to 35, and range 40 to 55, and Task 2 range 5 to 25 and range 30 to 60 task](https://developer.apple.com/images/com.apple.Charts/BarMarkSwift.BarMarkVerticalIntervalBarChart@2x.png)

## See Also

### Creating a bar mark

- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29.md): Creates a bar mark that plots values with its x interval and y.
- [init(x:y:width:height:stacking:)](init%28x_y_width_height_stacking_%29.md): Creates a bar mark that plots values with x and y.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-98wo9.md): Creates a bar mark that plots values with its x interval and fixed y position.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-7541n.md): Creates a bar mark with fixed x interval that plots values with its y interval.
- [init(x:y:width:height:stacking:)](init%28x_y_width_height_stacking_%29.md): Creates a bar mark that plots values with x and y.
- [init(x:yStart:yEnd:width:stacking:)](init%28x_ystart_yend_width_stacking_%29.md): Creates a bar mark that plots a value on x with fixed y interval.
- [init(xStart:xEnd:y:height:stacking:)](init%28xstart_xend_y_height_stacking_%29.md): Creates a bar mark that plots values on y with fixed x interval.
