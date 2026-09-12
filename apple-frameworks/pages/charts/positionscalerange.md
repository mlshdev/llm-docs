> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/positionscalerange](https://developer.apple.com/documentation/charts/positionscalerange)

# PositionScaleRange

**Framework:** Swift Charts  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that configures the x-axis and y-axis values.

## Declaration

```swift
protocol PositionScaleRange : ScaleRange where Self.VisualValue == CGFloat
```

## Topics

### Type Properties

- [plotDimension](positionscalerange/plotdimension.md): Conforms when `Self` is `PlotDimensionScaleRange`. A scale range that fills the plot area.

### Type Methods

- [plotDimension(padding:)](positionscalerange/plotdimension%28padding_%29.md): Conforms when `Self` is `PlotDimensionScaleRange`. A scale range that fills the plot area with the given padding value at start and end.
- [plotDimension(startPadding:endPadding:)](positionscalerange/plotdimension%28startpadding_endpadding_%29.md): Conforms when `Self` is `PlotDimensionScaleRange`. A scale range that fills the plot area with the given padding values at start and end, respectively.

## Relationships

### Inherits From

- [ScaleRange](scalerange.md)

### Conforming Types

- [PlotDimensionScaleRange](plotdimensionscalerange.md)

## See Also

### Scales

- [ScaleRange](scalerange.md): A type that you can use to configure the range of a chart.
- [PlotDimensionScaleRange](plotdimensionscalerange.md): A range that represents the plot area’s width or height.
- [ScaleDomain](scaledomain.md): A type that you can use to configure the domain of a chart.
- [AutomaticScaleDomain](automaticscaledomain.md): A domain that the chart infers from its data.
- [ScaleType](scaletype.md): The ways you can scale the domain or range of a plot.
