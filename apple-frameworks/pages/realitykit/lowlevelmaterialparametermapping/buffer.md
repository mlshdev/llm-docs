> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialparametermapping/buffer](https://developer.apple.com/documentation/realitykit/lowlevelmaterialparametermapping/buffer)

# LowLevelMaterialParameterMapping.Buffer

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The contents of a buffer slot, either a collection of packed constants or a single structured buffer.

## Declaration

```swift
enum Buffer
```

## Topics

### Creating a buffer mapping

- [LowLevelMaterialParameterMapping.Buffer.buffer(\_:)](buffer/buffer%28__%29.md): A buffer slot containing a single structured buffer.
- [LowLevelMaterialParameterMapping.Buffer.constants(\_:)](buffer/constants%28__%29.md): A buffer slot containing packed constants.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing parameter mappings

- [buffers](buffers.md): The ordered buffer slot descriptions for this function.
- [LowLevelMaterialParameterMapping.BufferParameter](bufferparameter.md): A structured buffer parameter.
- [textures](textures.md): The ordered texture slot descriptions for this function.
- [LowLevelMaterialParameterMapping.TextureParameter](textureparameter.md): A texture parameter.
- [LowLevelMaterialParameterMapping.ConstantParameter](constantparameter.md): A constant parameter embedded within a buffer slot.
