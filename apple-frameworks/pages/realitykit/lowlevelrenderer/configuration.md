> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/configuration](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/configuration)

# LowLevelRenderer.Configuration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The configuration for a renderer.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init(output:rasterSampleCount:enableTonemap:enableColorMatch:alphaPremultiply:maxCameraCount:)](configuration/init%28output_rastersamplecount_enabletonemap_enablecolormatch_alphapremultiply_maxcameracount_%29.md): Creates a configuration with the given output format, MSAA sample count, and flags.

### Specifying the output

- [output](configuration/output-swift.property.md): The pixel format configuration for this renderer’s output attachments.
- [LowLevelRenderer.Configuration.Output](configuration/output-swift.struct.md): The pixel format configuration for a renderer’s output attachments.
- [renderTargetDescriptor](configuration/rendertargetdescriptor.md): The render target descriptor derived from this configuration’s [output](configuration/output-swift.property.md).

### Configuring pixel formats

- [colorAttachmentPixelFormats](configuration/colorattachmentpixelformats.md): The pixel formats of the color attachments in the render pass the renderer encodes into.
- [depthAttachmentPixelFormat](configuration/depthattachmentpixelformat.md): The pixel format of the depth attachment in the render pass the renderer encodes into.
- [stencilAttachmentPixelFormat](configuration/stencilattachmentpixelformat.md): The pixel format of the stencil attachment in the render pass the renderer encodes into.

### Tuning rendering options

- [rasterSampleCount](configuration/rastersamplecount.md): The number of samples per pixel for MSAA.
- [enableTonemap](configuration/enabletonemap.md): A Boolean value that indicates whether output values are tone-mapped to the target pixel format’s range before being written to the output texture.
- [enableColorMatch](configuration/enablecolormatch.md): A Boolean value that indicates whether the renderer applies a gamut conversion matrix during resolve, converting from the renderer’s working color space to the output display’s color space.
- [alphaPremultiply](configuration/alphapremultiply.md): A Boolean value that indicates whether the renderer divides content by alpha before applying tonemap and color match, then multiplies by alpha before final texture output.
- [maxCameraCount](configuration/maxcameracount.md): The maximum number of simultaneous cameras supported.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a renderer

- [init(configuration:renderContext:)](init%28configuration_rendercontext_%29.md): Creates a renderer, asynchronously compiling all required GPU resources.
