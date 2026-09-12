> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialparametermapping/textureparameter](https://developer.apple.com/documentation/realitykit/lowlevelmaterialparametermapping/textureparameter)

# LowLevelMaterialParameterMapping.TextureParameter

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A texture parameter.

## Declaration

```swift
struct TextureParameter
```

## Topics

### Accessing texture parameters

- [textureIndex](textureparameter/textureindex.md): The slot index within the argument table’s texture array.
- [metalType](textureparameter/metaltype.md): The expected Metal texture type.

### Instance Properties

- [name](textureparameter/name.md): The name of the texture parameter as declared in the Metal shader.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing parameter mappings

- [buffers](buffers.md): The ordered buffer slot descriptions for this function.
- [LowLevelMaterialParameterMapping.Buffer](buffer.md): The contents of a buffer slot, either a collection of packed constants or a single structured buffer.
- [LowLevelMaterialParameterMapping.BufferParameter](bufferparameter.md): A structured buffer parameter.
- [textures](textures.md): The ordered texture slot descriptions for this function.
- [LowLevelMaterialParameterMapping.ConstantParameter](constantparameter.md): A constant parameter embedded within a buffer slot.
