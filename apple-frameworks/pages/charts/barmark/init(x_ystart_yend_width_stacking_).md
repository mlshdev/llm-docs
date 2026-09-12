> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/barmark/init(x:ystart:yend:width:stacking:)](https://developer.apple.com/documentation/charts/barmark/init(x:ystart:yend:width:stacking:))

# init(x:yStart:yEnd:width:stacking:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a bar mark that plots a value on x with fixed y interval.

## Declaration

```swift
nonisolated init<X>(x: PlottableValue<X>, yStart: CGFloat? = nil, yEnd: CGFloat? = nil, width: MarkDimension = .automatic, stacking: MarkStackingMethod = .standard) where X : Plottable
```

## Parameters

- `x`: The value plotted with x.
- `yStart`: The y start position. If `yStart` is `nil` then the rectangle will start at the leading edge of the plotting area.
- `yEnd`: The y end position. If `yEnd` is `nil` then the rectangle will end at the trailing edge of the plotting area.
- `width`: The bar width.  If `width` is `nil`, the default bar size will be applied.
- `stacking`: The stacking method for the bars with the same categorical/date values. If `stacking` is `nil`, the bars will not be stacked.

<a id="Discussion"></a>

### Discussion

Use this initializer to create a chart with a single horizontal bar:

```swift
Chart(data) {
    BarMark(
        x: .value("Profit", $0.profit)
    )
    .foregroundStyle(by: .value("Product Category", $0.productCategory))
}
```

![Horizontal bar chart with one bar on the x-axis showing profit ranging from 0 to 15000 with stacked categories Gizmos, Gadgets and Widgets. Legend showing the color mapped to a product category.](https://developer.apple.com/images/com.apple.Charts/BarMarkSwift.BarMarkHorizontalStacked1DBarChartWithForegroundColor@2x.png)

## See Also

### Creating a bar mark

- [init(x:yStart:yEnd:width:)](init%28x_ystart_yend_width_%29.md): Creates a bar mark that plots values with x and its y interval.
- [init(xStart:xEnd:y:height:)](init%28xstart_xend_y_height_%29.md): Creates a bar mark that plots values with its x interval and y.
- [init(x:y:width:height:stacking:)](init%28x_y_width_height_stacking_%29.md): Creates a bar mark that plots values with x and y.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-98wo9.md): Creates a bar mark that plots values with its x interval and fixed y position.
- [init(xStart:xEnd:yStart:yEnd:)](init%28xstart_xend_ystart_yend_%29-7541n.md): Creates a bar mark with fixed x interval that plots values with its y interval.
- [init(x:y:width:height:stacking:)](init%28x_y_width_height_stacking_%29.md): Creates a bar mark that plots values with x and y.
- [init(xStart:xEnd:y:height:stacking:)](init%28xstart_xend_y_height_stacking_%29.md): Creates a bar mark that plots values on y with fixed x interval.
