> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothposeresource/init(positions:)](https://developer.apple.com/documentation/realitykit/clothposeresource/init(positions:))

# init(positions:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a cloth pose resource with the given vertex positions.

## Declaration

```swift
@MainActor convenience init(positions: [SIMD3<Float>]) throws
```

## Parameters

- `positions`: The positions to assign to the vertices of a matching [ClothMeshResource](../clothmeshresource.md).
