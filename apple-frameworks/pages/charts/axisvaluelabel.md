> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axisvaluelabel](https://developer.apple.com/documentation/charts/axisvaluelabel)

# AxisValueLabel

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A label that describes the value for an axis mark.

## Declaration

```swift
struct AxisValueLabel<Content> where Content : View
```

## Mentioned In

- [Customizing axes in Swift Charts](customizing-axes-in-swift-charts.md)

## Topics

### Supporting types

- [AxisValueLabelOrientation](axisvaluelabelorientation.md): Describes the orientation of a label.
- [AxisValueLabelCollisionResolution](axisvaluelabelcollisionresolution.md)

### Initializers

- [init(\_:centered:anchor:multiLabelAlignment:collisionResolution:offsetsMarks:orientation:horizontalSpacing:verticalSpacing:)](axisvaluelabel/init%28__centered_anchor_multilabelalignment_collisionresolution_offsetsmarks_orientation_horizontalspacing_verticalspacing_%29-4xde3.md): Constructs an axis value label with the given properties to display the given string.
- [init(\_:centered:anchor:multiLabelAlignment:collisionResolution:offsetsMarks:orientation:horizontalSpacing:verticalSpacing:)](axisvaluelabel/init%28__centered_anchor_multilabelalignment_collisionresolution_offsetsmarks_orientation_horizontalspacing_verticalspacing_%29-9202h.md): Constructs an axis value label with the given properties to display the given string.
- [init(\_:centered:anchor:multiLabelAlignment:collisionResolution:offsetsMarks:orientation:horizontalSpacing:verticalSpacing:)](axisvaluelabel/init%28__centered_anchor_multilabelalignment_collisionresolution_offsetsmarks_orientation_horizontalspacing_verticalspacing_%29-9rytf.md): Constructs an axis value label with the given properties to display the given string.
- [init(centered:anchor:multiLabelAlignment:collisionResolution:offsetsMarks:orientation:horizontalSpacing:verticalSpacing:)](axisvaluelabel/init%28centered_anchor_multilabelalignment_collisionresolution_offsetsmarks_orientation_horizontalspacing_verticalspacing_%29.md): Constructs axis value labels with the given properties and default text.
- [init(centered:anchor:multiLabelAlignment:collisionResolution:offsetsMarks:orientation:horizontalSpacing:verticalSpacing:content:)](axisvaluelabel/init%28centered_anchor_multilabelalignment_collisionresolution_offsetsmarks_orientation_horizontalspacing_verticalspacing_content_%29.md): Constructs an axis value label with the given properties to display the given content.
- [init(format:centered:anchor:multiLabelAlignment:collisionResolution:offsetsMarks:orientation:horizontalSpacing:verticalSpacing:)](axisvaluelabel/init%28format_centered_anchor_multilabelalignment_collisionresolution_offsetsmarks_orientation_horizontalspacing_verticalspacing_%29.md): Constructs an axis value label with the given properties to display the given content.

## Relationships

### Conforms To

- [AxisMark](axismark.md)

## See Also

### Axis marks

- [AxisMark](axismark.md): A type that serves as the basic building block for the elements of an axis.
- [AxisTick](axistick.md): A mark that a chart draws on an axis to indicate a reference point along that axis.
- [AxisGridLine](axisgridline.md): A line that a chart draws across its plot area to indicate a reference point along a particular axis.
- [AxisValue](axisvalue.md): A value for an axis mark.
- [AnyAxisMark](anyaxismark.md): A type-erased axis mark.
- [AxisMarkBuilder](axismarkbuilder.md): A result builder that constructs axis marks and overrides default marks.
