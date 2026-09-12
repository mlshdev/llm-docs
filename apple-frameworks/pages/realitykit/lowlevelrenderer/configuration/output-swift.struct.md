> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/configuration/output-swift.struct](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/configuration/output-swift.struct)

# LowLevelRenderer.Configuration.Output

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The pixel format configuration for a renderer’s output attachments.

## Declaration

```swift
struct Output
```

## Topics

### Creating an output configuration

- [init(colorPixelFormat:depthPixelFormat:)](output-swift.struct/init%28colorpixelformat_depthpixelformat_%29.md): Creates an output configuration with the given color and depth pixel formats.

### Specifying pixel formats

- [colorPixelFormat](output-swift.struct/colorpixelformat.md): The pixel format of the color attachment, or `nil` for depth-only passes.
- [depthPixelFormat](output-swift.struct/depthpixelformat.md): The pixel format of the depth attachment, or `nil` to omit depth.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the output

- [output](output-swift.property.md): The pixel format configuration for this renderer’s output attachments.
- [renderTargetDescriptor](rendertargetdescriptor.md): The render target descriptor derived from this configuration’s [output](output-swift.property.md).
