> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothplaneshape/init(normal:bias:)](https://developer.apple.com/documentation/realitykit/clothplaneshape/init(normal:bias:))

# init(normal:bias:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a plane shape with the given normal and surface displacement.

## Declaration

```swift
init(normal: SIMD3<Float>, bias: Float)
```

## Parameters

- `normal`: The normal vector determining the orientation of the plane.
- `bias`: The distance by which the plane’s surface is displaced along its normal.
