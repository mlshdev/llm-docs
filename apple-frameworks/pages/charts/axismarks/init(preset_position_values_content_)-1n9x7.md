> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axismarks/init(preset:position:values:content:)-1n9x7](https://developer.apple.com/documentation/charts/axismarks/init(preset:position:values:content:)-1n9x7)

# init(preset:position:values:content:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates axis markers with the given properties, will override default markers.

## Declaration

```swift
nonisolated init<Value>(preset: AxisMarkPreset = .automatic, position: AxisMarkPosition = .automatic, values: [Value], @AxisMarkBuilder content: @escaping (AxisValue) -> Content) where Value : Plottable
```

## Parameters

- `preset`: The preset of the axis markers.
- `position`: The position of the axis markers.
- `values`: The values of the axis markers.
- `content`: A result builder that returns the content of the axis marker for a given axis value.
