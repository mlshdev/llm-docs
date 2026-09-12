> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/barmark/init(x:y:width:height:stacking:)](https://developer.apple.com/documentation/charts/barmark/init(x:y:width:height:stacking:))

# init(x:y:width:height:stacking:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a bar mark that plots values with x and y.

## Declaration

```swift
nonisolated init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>, width: MarkDimension = .automatic, height: MarkDimension = .automatic, stacking: MarkStackingMethod = .standard) where X : Plottable, Y : Plottable
```

## Parameters

- `x`: The value plotted with x.
- `y`: The value plotted with y.
- `width`: The bar width. If `width` is `nil`, the default bar size will be applied.
- `height`: The bar height. If `height` is `nil`, the default bar size will be applied.
- `stacking`: The stacking method for the bars with the same categorical/date values. If `stacking` is `nil`, the bars will not be stacked.

<a id="Discussion"></a>

### Discussion

Use this initializer to create a chart with one or more bars.  For horizontal bars, plot categories or dates with y and numbers with x. For vertical bars, plot categories or dates with x and numbers with y:

```swift
Chart(data) {
    BarMark(
        x: .value("Department", $0.department),
        y: .value("Profit", $0.profit)
    )
}
```

![Vertical bar chart with x-axis showing department categories Production, Marketing, Finance and with y-axis ranging from 0 to 15000. There are 3 bars: Production 15000, Marketing 8000, Finance 10000.](https://developer.apple.com/images/com.apple.Charts/BarMarkSwift.BarMarkBarChart@2x.png)

## See Also

### Creating a bar mark

- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29.md): Creates a bar mark that plots values with x and its y interval.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29.md): Creates a bar mark that plots values with its x interval and y.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-98wo9.md): Creates a bar mark that plots values with its x interval and fixed y position.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-7541n.md): Creates a bar mark with fixed x interval that plots values with its y interval.
- [init(x:yStart:yEnd:width:stacking:)](init%28x_ystart_yend_width_stacking_%29.md): Creates a bar mark that plots a value on x with fixed y interval.
- [init(xStart:xEnd:y:height:stacking:)](init%28xstart_xend_y_height_stacking_%29.md): Creates a bar mark that plots values on y with fixed x interval.
