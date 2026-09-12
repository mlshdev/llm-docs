> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialparametermapping/bufferparameter](https://developer.apple.com/documentation/realitykit/lowlevelmaterialparametermapping/bufferparameter)

# LowLevelMaterialParameterMapping.BufferParameter

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A structured buffer parameter.

## Declaration

```swift
struct BufferParameter
```

## Topics

### Accessing the buffer size

- [size](bufferparameter/size.md): The byte size of the buffer parameter.

### Instance Properties

- [name](bufferparameter/name.md): The name of the buffer parameter as declared in the Metal shader.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing parameter mappings

- [buffers](buffers.md): The ordered buffer slot descriptions for this function.
- [LowLevelMaterialParameterMapping.Buffer](buffer.md): The contents of a buffer slot, either a collection of packed constants or a single structured buffer.
- [textures](textures.md): The ordered texture slot descriptions for this function.
- [LowLevelMaterialParameterMapping.TextureParameter](textureparameter.md): A texture parameter.
- [LowLevelMaterialParameterMapping.ConstantParameter](constantparameter.md): A constant parameter embedded within a buffer slot.
