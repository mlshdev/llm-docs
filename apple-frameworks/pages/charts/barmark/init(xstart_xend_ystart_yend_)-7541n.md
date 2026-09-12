> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/barmark/init(xstart:xend:ystart:yend:)-7541n](https://developer.apple.com/documentation/charts/barmark/init(xstart:xend:ystart:yend:)-7541n)

# init(xStart:xEnd:yStart:yEnd:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a bar mark with fixed x interval that plots values with its y interval.

## Declaration

```swift
nonisolated init<Y>(xStart: CGFloat? = nil, xEnd: CGFloat? = nil, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>) where Y : Plottable
```

## Parameters

- `xStart`: The x start position. If `xStart` is `nil` then the rectangle will start at the leading edge of the plotting area.
- `xEnd`: The x end position. If `xStart` is `nil` then the rectangle will end at the trailing edge of the plotting area.
- `yStart`: The value plotted to y start.
- `yEnd`: The value plotted to y end.

<a id="Discussion"></a>

### Discussion

Use this initializer to show vertical intervals for one category:

```swift
Chart(data) {
   BarMark(
       yStart: .value("Start Time", $0.start),
       yEnd: .value("End Time", $0.end)
   )
}
```

![Vertical bar chart with y-axis showing start and end time. It has 5 bars, Task 1 range 0 to 5, range 10 to 20, range 25 to 40, range 45 to 65, and range 70-95.](https://developer.apple.com/images/com.apple.Charts/BarMarkSwift.BarMarkVertical1DIntervalBarChart@2x.png)

## See Also

### Creating a bar mark

- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29.md): Creates a bar mark that plots values with x and its y interval.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29.md): Creates a bar mark that plots values with its x interval and y.
- [init(x:y:width:height:stacking:)](init%28x_y_width_height_stacking_%29.md): Creates a bar mark that plots values with x and y.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-98wo9.md): Creates a bar mark that plots values with its x interval and fixed y position.
- [init(x:y:width:height:stacking:)](init%28x_y_width_height_stacking_%29.md): Creates a bar mark that plots values with x and y.
- [init(x:yStart:yEnd:width:stacking:)](init%28x_ystart_yend_width_stacking_%29.md): Creates a bar mark that plots a value on x with fixed y interval.
- [init(xStart:xEnd:y:height:stacking:)](init%28xstart_xend_y_height_stacking_%29.md): Creates a bar mark that plots values on y with fixed x interval.
