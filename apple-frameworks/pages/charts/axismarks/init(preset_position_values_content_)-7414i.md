> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axismarks/init(preset:position:values:content:)-7414i](https://developer.apple.com/documentation/charts/axismarks/init(preset:position:values:content:)-7414i)

# init(preset:position:values:content:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates axis markers with the given properties,will override default markers.

## Declaration

```swift
nonisolated init(preset: AxisMarkPreset = .automatic, position: AxisMarkPosition = .automatic, values: AxisMarkValues = .automatic, @AxisMarkBuilder content: @escaping (AxisValue) -> Content)
```

## Parameters

- `preset`: The preset of the axis markers.
- `position`: The position of the axis markers.
- `values`: The values of the axis markers.
- `content`: A result builder that returns the content of the axis marker for a given axis value.
