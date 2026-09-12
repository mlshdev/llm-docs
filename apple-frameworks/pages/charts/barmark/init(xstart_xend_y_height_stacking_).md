> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/barmark/init(xstart:xend:y:height:stacking:)](https://developer.apple.com/documentation/charts/barmark/init(xstart:xend:y:height:stacking:))

# init(xStart:xEnd:y:height:stacking:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a bar mark that plots values on y with fixed x interval.

## Declaration

```swift
nonisolated init<Y>(xStart: CGFloat? = nil, xEnd: CGFloat? = nil, y: PlottableValue<Y>, height: MarkDimension = .automatic, stacking: MarkStackingMethod = .standard) where Y : Plottable
```

## Parameters

- `xStart`: The x start position. If `xStart` is `nil` then the rectangle will start at the leading edge of the plotting area.
- `xEnd`: The x end position. If `xStart` is `nil` then the rectangle will end at the trailing edge of the plotting area.
- `y`: The value plotted with y.
- `height`: The bar height.  If `height` is `nil`, the default bar size will be applied.
- `stacking`: The stacking method for the bars with the same categorical/date values. If `stacking` is `nil`, the bars will not be stacked.

<a id="Discussion"></a>

### Discussion

Use this initializer to create a chart with a single vertical bar:

```swift
Chart(data) {
    BarMark(
        y: .value("Profit", $0.profit)
    )
    .foregroundStyle(by: .value("Product Category", $0.productCategory))
}
```

![Vertical bar chart with one bar on the y-axis showing profit ranging from 0 to 15000 with stacked categories Gizmos, Gadgets and Widgets. Legend showing the color mapped to a product category.](https://developer.apple.com/images/com.apple.Charts/BarMarkSwift.BarMarkVerticalStacked1DBarChartWithForegroundColor@2x.png)

## See Also

### Creating a bar mark

- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29.md): Creates a bar mark that plots values with x and its y interval.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29.md): Creates a bar mark that plots values with its x interval and y.
- [init(x:y:width:height:stacking:)](init%28x_y_width_height_stacking_%29.md): Creates a bar mark that plots values with x and y.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-98wo9.md): Creates a bar mark that plots values with its x interval and fixed y position.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-7541n.md): Creates a bar mark with fixed x interval that plots values with its y interval.
- [init(x:y:width:height:stacking:)](init%28x_y_width_height_stacking_%29.md): Creates a bar mark that plots values with x and y.
- [init(x:yStart:yEnd:width:stacking:)](init%28x_ystart_yend_width_stacking_%29.md): Creates a bar mark that plots a value on x with fixed y interval.
