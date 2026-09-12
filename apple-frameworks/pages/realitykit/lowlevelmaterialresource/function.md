> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/function](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/function)

# LowLevelMaterialResource.Function

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A compiled shader function that can receive per-draw parameters via an argument table.

## Declaration

```swift
protocol Function : Sendable
```

## Topics

### Configuring the function

- [parameterMapping](function/parametermapping.md): The parameter name-to-slot mapping for this function, used to look up binding indices by name at runtime, or `nil` if the function takes no custom parameters.
- [argumentTableDescriptor](function/argumenttabledescriptor.md): The argument table descriptor that describes the buffer and texture slots this function requires, or `nil` if the function takes no per-draw arguments.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [LowLevelMaterialResource.GeometryModifier](geometrymodifier.md)
- [LowLevelMaterialResource.LightingFunction](lightingfunction.md)
- [LowLevelMaterialResource.SurfaceShader](surfaceshader.md)

## See Also

### Configuring the shaders

- [surface](surface.md): The compiled fragment-stage surface shader.
- [LowLevelMaterialResource.SurfaceShader](surfaceshader.md): A compiled Metal function that implements the surface shader function.
- [geometry](geometry.md): The compiled vertex-stage geometry modifier.
- [LowLevelMaterialResource.GeometryModifier](geometrymodifier.md): A compiled Metal function that implements the geometry modifier function.
- [LowLevelMaterialResource.LightingFunction](lightingfunction.md): A compiled Metal function that evaluates lighting.
