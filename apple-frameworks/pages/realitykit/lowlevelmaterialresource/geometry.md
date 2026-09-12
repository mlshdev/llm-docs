> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/geometry](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/geometry)

# geometry

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The compiled vertex-stage geometry modifier.

## Declaration

```swift
final var geometry: LowLevelMaterialResource.GeometryModifier { get }
```

## See Also

### Configuring the shaders

- [surface](surface.md): The compiled fragment-stage surface shader.
- [LowLevelMaterialResource.SurfaceShader](surfaceshader.md): A compiled Metal function that implements the surface shader function.
- [LowLevelMaterialResource.GeometryModifier](geometrymodifier.md): A compiled Metal function that implements the geometry modifier function.
- [LowLevelMaterialResource.LightingFunction](lightingfunction.md): A compiled Metal function that evaluates lighting.
- [LowLevelMaterialResource.Function](function.md): A compiled shader function that can receive per-draw parameters via an argument table.
