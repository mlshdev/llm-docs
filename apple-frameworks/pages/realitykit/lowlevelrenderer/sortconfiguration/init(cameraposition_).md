> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/sortconfiguration/init(cameraposition:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/sortconfiguration/init(cameraposition:))

# init(cameraPosition:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a sort configuration with the given camera position.

## Declaration

```swift
init(cameraPosition: SIMD3<Float>)
```

## Parameters

- `cameraPosition`: The camera position to use for depth sorting.

## See Also

### Creating a sort configuration

- [cameraPosition](cameraposition.md): The camera position used to compute per-instance back-to-front sort distances for transparent draw calls.
