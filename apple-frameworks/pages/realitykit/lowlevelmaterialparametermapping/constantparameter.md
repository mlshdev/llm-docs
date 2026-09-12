> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialparametermapping/constantparameter](https://developer.apple.com/documentation/realitykit/lowlevelmaterialparametermapping/constantparameter)

# LowLevelMaterialParameterMapping.ConstantParameter

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A constant parameter embedded within a buffer slot.

## Declaration

```swift
struct ConstantParameter
```

## Topics

### Accessing the parameter type

- [metalType](constantparameter/metaltype.md): The Metal data type of this constant.

### Instance Properties

- [name](constantparameter/name.md): The name of the constant as declared in the Metal shader.
- [offset](constantparameter/offset.md): The byte offset of this constant within its buffer slot.

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
- [LowLevelMaterialParameterMapping.TextureParameter](textureparameter.md): A texture parameter.
