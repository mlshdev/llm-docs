> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axismark](https://developer.apple.com/documentation/charts/axismark)

# AxisMark

**Framework:** Swift Charts  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that serves as the basic building block for the elements of an axis.

## Declaration

```swift
protocol AxisMark
```

## Mentioned In

- [Customizing axes in Swift Charts](customizing-axes-in-swift-charts.md)

## Topics

### Instance Methods

- [font(\_:)](axismark/font%28__%29.md): Sets the default font for text in this axis content.
- [foregroundStyle(\_:)](axismark/foregroundstyle%28__%29.md): Sets the axis content’s foreground elements to use a given style.
- [offset(\_:)](axismark/offset%28__%29.md)
- [offset(x:y:)](axismark/offset%28x_y_%29.md)

## Relationships

### Conforming Types

- [AnyAxisMark](anyaxismark.md)
- [AxisGridLine](axisgridline.md)
- [AxisTick](axistick.md)
- [AxisValueLabel](axisvaluelabel.md)
- [BuilderConditional](builderconditional.md)

## See Also

### Axis marks

- [AxisTick](axistick.md): A mark that a chart draws on an axis to indicate a reference point along that axis.
- [AxisGridLine](axisgridline.md): A line that a chart draws across its plot area to indicate a reference point along a particular axis.
- [AxisValueLabel](axisvaluelabel.md): A label that describes the value for an axis mark.
- [AxisValue](axisvalue.md): A value for an axis mark.
- [AnyAxisMark](anyaxismark.md): A type-erased axis mark.
- [AxisMarkBuilder](axismarkbuilder.md): A result builder that constructs axis marks and overrides default marks.
