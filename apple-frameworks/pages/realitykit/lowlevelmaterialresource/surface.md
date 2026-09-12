> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/surface](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/surface)

# surface

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The compiled fragment-stage surface shader.

## Declaration

```swift
final var surface: LowLevelMaterialResource.SurfaceShader { get }
```

## See Also

### Configuring the shaders

- [LowLevelMaterialResource.SurfaceShader](surfaceshader.md): A compiled Metal function that implements the surface shader function.
- [geometry](geometry.md): The compiled vertex-stage geometry modifier.
- [LowLevelMaterialResource.GeometryModifier](geometrymodifier.md): A compiled Metal function that implements the geometry modifier function.
- [LowLevelMaterialResource.LightingFunction](lightingfunction.md): A compiled Metal function that evaluates lighting.
- [LowLevelMaterialResource.Function](function.md): A compiled shader function that can receive per-draw parameters via an argument table.
