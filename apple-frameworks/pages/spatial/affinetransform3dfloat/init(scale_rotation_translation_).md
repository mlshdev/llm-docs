> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat/init(scale:rotation:translation:)](https://developer.apple.com/documentation/spatial/affinetransform3dfloat/init(scale:rotation:translation:))

# init(scale:rotation:translation:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new scale, rotate, translate transform.

## Declaration

```swift
init(scale: Size3DFloat = Size3DFloat(width: 1.0, height: 1, depth: 1), rotation: Rotation3DFloat = .identity, translation: Vector3DFloat = .zero)
```

## Parameters

- `scale`: The scale.
- `rotation`: The rotation.
- `translation`: The translation.
