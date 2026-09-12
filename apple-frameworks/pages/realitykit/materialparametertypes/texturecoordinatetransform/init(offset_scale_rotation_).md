> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/materialparametertypes/texturecoordinatetransform/init(offset:scale:rotation:)](https://developer.apple.com/documentation/realitykit/materialparametertypes/texturecoordinatetransform/init(offset:scale:rotation:))

# init(offset:scale:rotation:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates a texture coordinate transform object.

## Declaration

```swift
init(offset: SIMD2<Float> = .init(), scale: SIMD2<Float> = .init(1, 1), rotation: Float = 0.0)
```

## Parameters

- `offset`: The amount to offset the UV texture coordinates.
- `scale`: The amount to scale the UV texture coordinates.
- `rotation`: The amount to rotate the UV texture coordinates in radians.
