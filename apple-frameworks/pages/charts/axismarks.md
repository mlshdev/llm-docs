> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axismarks](https://developer.apple.com/documentation/charts/axismarks)

# AxisMarks

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A group of visual marks that a chart draws to indicate the composition of a chart’s axes.

## Declaration

```swift
struct AxisMarks<Content> where Content : AxisMark
```

## Mentioned In

- [Customizing axes in Swift Charts](customizing-axes-in-swift-charts.md)

## Topics

### Supporting types

- [AxisMarkPreset](axismarkpreset.md): Describes preset styles for axis markers.
- [AxisMarkValues](axismarkvalues.md): Describes the values the axis markers will present (one for each value).
- [AxisMarkPosition](axismarkposition.md): Describes the position of axis markers.

### Initializers

- [init(format:preset:position:values:stroke:)](axismarks/init%28format_preset_position_values_stroke_%29-8fe1o.md): Creates axis markers with the given properties, will override default markers. Default content will be used for the axis markers.
- [init(format:preset:position:values:stroke:)](axismarks/init%28format_preset_position_values_stroke_%29-98cpl.md): Creates axis markers with the given properties, will override default markers. Default content will be used for the axis markers.
- [init(preset:position:values:content:)](axismarks/init%28preset_position_values_content_%29-1n9x7.md): Creates axis markers with the given properties, will override default markers.
- [init(preset:position:values:content:)](axismarks/init%28preset_position_values_content_%29-4a4x7.md): Creates axis markers with the given properties, will override default markers.
- [init(preset:position:values:content:)](axismarks/init%28preset_position_values_content_%29-6b1jq.md): Creates axis markers with the given properties,will override default markers.
- [init(preset:position:values:content:)](axismarks/init%28preset_position_values_content_%29-7414i.md): Creates axis markers with the given properties,will override default markers.
- [init(preset:position:values:stroke:)](axismarks/init%28preset_position_values_stroke_%29-8uk65.md): Creates axis markers with the given properties, will override default markers. Default content will be used for the axis markers.
- [init(preset:position:values:stroke:)](axismarks/init%28preset_position_values_stroke_%29-8xkl5.md): Creates axis markers with the given properties, will override default markers. Default content will be used for the axis markers.

## Relationships

### Conforms To

- [AxisContent](axiscontent.md)

## See Also

### Axes

- [Customizing axes in Swift Charts](customizing-axes-in-swift-charts.md): Improve the clarity of your chart by configuring the appearance of its axes.
- [ChartAxisContent](chartaxiscontent.md): A view that represents a chart’s axis.
- [AxisContent](axiscontent.md): A type that represents the elements you use to build a chart’s axes.
- [AnyAxisContent](anyaxiscontent.md): A type-erased element of a chart’s axis.
- [AxisContentBuilder](axiscontentbuilder.md): A result builder that constructs axis content.
