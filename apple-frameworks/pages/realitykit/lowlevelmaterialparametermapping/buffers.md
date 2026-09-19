> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmaterialparametermapping/buffers

# buffers

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The ordered buffer slot descriptions for this function.

## Declaration

```swift
var buffers: [LowLevelMaterialParameterMapping.Buffer] { get }
```

## See Also

### Accessing parameter mappings

- [LowLevelMaterialParameterMapping.Buffer](buffer.md): The contents of a buffer slot, either a collection of packed constants or a single structured buffer.
- [LowLevelMaterialParameterMapping.BufferParameter](bufferparameter.md): A structured buffer parameter.
- [textures](textures.md): The ordered texture slot descriptions for this function.
- [LowLevelMaterialParameterMapping.TextureParameter](textureparameter.md): A texture parameter.
- [LowLevelMaterialParameterMapping.ConstantParameter](constantparameter.md): A constant parameter embedded within a buffer slot.
