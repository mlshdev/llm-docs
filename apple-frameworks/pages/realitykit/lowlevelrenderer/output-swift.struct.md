> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct)

# LowLevelRenderer.Output

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The per-frame output target configuration for a renderer.

## Declaration

```swift
struct Output
```

## Topics

### Creating an output

- [init(color:depth:)](output-swift.struct/init%28color_depth_%29.md): Creates an output configuration with the given color and depth texture targets.
- [LowLevelRenderer.Output.Texture](output-swift.struct/texture.md): A reference to a specific mip level, slice, and depth plane within a Metal texture.

### Configuring render targets

- [renderTargetWidth](output-swift.struct/rendertargetwidth.md): The width of the render target, in pixels.
- [renderTargetHeight](output-swift.struct/rendertargetheight.md): The height of the render target, in pixels.
- [renderTargetArrayLength](output-swift.struct/rendertargetarraylength.md): The number of active array slices in the render target textures.
- [threadgroupMemoryLength](output-swift.struct/threadgroupmemorylength.md): The per-tile size, in bytes, of the persistent threadgroup memory allocation, used when rendering.

### Setting the viewport

- [viewports](output-swift.struct/viewports.md): Per-camera viewport rectangles within the render target.
- [scissorRects](output-swift.struct/scissorrects.md): Per-camera scissor rectangles within the render target.
- [rasterizationRateMap](output-swift.struct/rasterizationratemap.md): The rasterization rate map to use when rendering.

### Clearing and resolving

- [clearColor](output-swift.struct/clearcolor.md): The color to use when clearing the color attachment at the start of a render pass.
- [clearDepth](output-swift.struct/cleardepth.md): The depth value to use when clearing the depth attachment at the start of a render pass.
- [depthResolveFilter](output-swift.struct/depthresolvefilter.md): The filter to use when resolving the depth attachment at the end of a multisampled render pass.

### Instance Properties

- [color](output-swift.struct/color.md): The color output texture. Corresponds to `MTLRenderPassColorAttachmentDescriptor.texture`.
- [depth](output-swift.struct/depth.md): The depth output texture. Corresponds to `MTLRenderPassDepthAttachmentDescriptor.texture`.

## See Also

### Accessing render output

- [output](output-swift.property.md): The per-frame output target configuration, including color and depth textures, viewports, and render target dimensions.
- [renderTargetDescriptor](rendertargetdescriptor.md): The render target descriptor derived from the renderer’s configuration.
