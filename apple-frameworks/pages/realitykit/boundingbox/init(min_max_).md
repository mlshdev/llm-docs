> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/boundingbox/init(min:max:)

# init(min:max:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a bounding box with the given settings.

## Declaration

```swift
init(min: SIMD3<Float>, max: SIMD3<Float>)
```

## Parameters

- `min`: The position of the minimum corner of the box.
- `max`: The position of the maximum corner of the box.

## See Also

### Creating a bounding box

- [init()](init%28%29.md): Creates an empty bounding box.
