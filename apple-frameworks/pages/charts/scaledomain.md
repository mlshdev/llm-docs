> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/scaledomain](https://developer.apple.com/documentation/charts/scaledomain)

# ScaleDomain

**Framework:** Swift Charts  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that you can use to configure the domain of a chart.

## Declaration

```swift
protocol ScaleDomain
```

<a id="overview"></a>

## Overview

A type you use to configure the domain of a chart scale.

<a id="Including-zero-in-number-scales"></a>

## Including zero in number scales

By default, number scales include zero in the domain to ensure charts follow the best practice to include a zero baseline in bar charts.

![Horizontal bar chart with y-axis showing categories A, B, and C and x-axis ranging from 0 to 15. There are three bars: A 5, B 10, C 15.](https://developer.apple.com/images/com.apple.Charts/Scales.ChartWithDefaultCategoryDomain@2x.png)

For other marks, this zero baseline isn’t as important, but the framework includes zero by default so the domain inference logic is consistent and deterministic.  Changing the mark type won’t suddenly affect scale domain.

![Horizontal dot plot with x-axis ranging from 0 to 100. It has 5 dots, at 12, 20, 50, 70, and 85.](https://developer.apple.com/images/com.apple.Charts/ExNumberScale@2x.png)

If you don’t want to include the zero baseline in certain cases, use `automatic(includeszero:reversed:)` to customize the scale domain and disable the automatic zero inclusion.

```swift
Chart([20, 30, 50, 70, 85], id: \.self) {
    PointMark(
        x: .value("Value", $0)
    )
}
.chartXScale(domain: .automatic(includesZero: false))
```

![Horizontal dot plot with x-axis ranging from 20 to 100. It has 5 dots, at 20, 30, 50, 70, and 85.](https://developer.apple.com/images/com.apple.Charts/ScaleDomain.ChartWithNumberScaleExcludingZero@2x.png)

<a id="Reversing-the-order-of-inferred-domain"></a>

## Reversing the order of inferred domain

You can also reverse the order of the inferred domain:

```swift
Chart([20, 30, 50, 70, 85], id: \.self) {
    PointMark(
        x: .value("Value", $0)
    )
}
.chartXScale(domain: .automatic(reversed: true))
```

![Horizontal dot plot with x-axis ranging from 100 to 0. It has 5 dots, at 85, 70, 50, 30, and 20.](https://developer.apple.com/images/com.apple.Charts/ScaleDomain.ChartWithNumberScaleReversed@2x.png)

## Topics

### Type Properties

- [automatic](scaledomain/automatic.md): Conforms when `Self` is `AutomaticScaleDomain`. Creates a scale domain configuration that infers the scale domain from data.

### Type Methods

- [automatic(includesZero:reversed:)](scaledomain/automatic%28includeszero_reversed_%29.md): Conforms when `Self` is `AutomaticScaleDomain`. Creates a scale domain configuration that infers the scale domain from data.
- [automatic(includesZero:reversed:dataType:modifyInferredDomain:)](scaledomain/automatic%28includeszero_reversed_datatype_modifyinferreddomain_%29.md): Conforms when `Self` is `AutomaticScaleDomain`. Creates a scale domain configuration that infers the scale domain from data.

## Relationships

### Conforming Types

- [AutomaticScaleDomain](automaticscaledomain.md)

## See Also

### Scales

- [ScaleRange](scalerange.md): A type that you can use to configure the range of a chart.
- [PositionScaleRange](positionscalerange.md): A type that configures the x-axis and y-axis values.
- [PlotDimensionScaleRange](plotdimensionscalerange.md): A range that represents the plot area’s width or height.
- [AutomaticScaleDomain](automaticscaledomain.md): A domain that the chart infers from its data.
- [ScaleType](scaletype.md): The ways you can scale the domain or range of a plot.
