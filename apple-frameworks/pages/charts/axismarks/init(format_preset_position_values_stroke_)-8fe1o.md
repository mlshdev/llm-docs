> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axismarks/init(format:preset:position:values:stroke:)-8fe1o](https://developer.apple.com/documentation/charts/axismarks/init(format:preset:position:values:stroke:)-8fe1o)

# init(format:preset:position:values:stroke:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates axis markers with the given properties, will override default markers. Default content will be used for the axis markers.

## Declaration

```swift
nonisolated init<Format>(format: Format, preset: AxisMarkPreset = .automatic, position: AxisMarkPosition = .automatic, values: AxisMarkValues = .automatic, stroke: StrokeStyle? = nil) where Content == Never, Format : FormatStyle, Format.FormatInput : Plottable, Format.FormatOutput == String
```

## Parameters

- `format`: The format to use for the labels.
- `preset`: The preset of the axis markers.
- `position`: The position of the axis markers.
- `values`: The values of the axis markers.
- `stroke`: The stroke to use for grid lines and ticks.
