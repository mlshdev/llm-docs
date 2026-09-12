> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/descriptor](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/descriptor)

# LowLevelMaterialResource.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The geometry modifier, surface shader, and lighting function for a material.

## Declaration

```swift
struct Descriptor
```

## Topics

### Creating a descriptor

- [init(geometry:surface:lighting:)](descriptor/init%28geometry_surface_lighting_%29.md): Creates a descriptor from the three shader stages.

### Configuring the shaders

- [surface](descriptor/surface.md): The fragment-stage surface shader.
- [geometry](descriptor/geometry.md): The vertex-stage geometry modifier.

### Instance Properties

- [lighting](descriptor/lighting.md): The lighting evaluation function.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing the material

- [LowLevelMaterialResource.SimpleSurfaceDescriptor](simplesurfacedescriptor.md): The configuration for a built-in surface shader that applies a tint color, a texture, or both.
