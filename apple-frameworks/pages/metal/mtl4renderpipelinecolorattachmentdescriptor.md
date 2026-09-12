> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpipelinecolorattachmentdescriptor](https://developer.apple.com/documentation/metal/mtl4renderpipelinecolorattachmentdescriptor)

# MTL4RenderPipelineColorAttachmentDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
class MTL4RenderPipelineColorAttachmentDescriptor
```

## Topics

### Instance Properties

- [alphaBlendOperation](mtl4renderpipelinecolorattachmentdescriptor/alphablendoperation.md): Configures the alpha blending operation.
- [blendingState](mtl4renderpipelinecolorattachmentdescriptor/blendingstate.md): Configure the blend state for color attachments the pipeline state uses.
- [destinationAlphaBlendFactor](mtl4renderpipelinecolorattachmentdescriptor/destinationalphablendfactor.md): Configures the destination-alpha blend factor.
- [destinationRGBBlendFactor](mtl4renderpipelinecolorattachmentdescriptor/destinationrgbblendfactor.md): Configures the destination RGB blend factor.
- [pixelFormat](mtl4renderpipelinecolorattachmentdescriptor/pixelformat.md): Configures the pixel format.
- [rgbBlendOperation](mtl4renderpipelinecolorattachmentdescriptor/rgbblendoperation.md): Configures the RGB blend operation.
- [sourceAlphaBlendFactor](mtl4renderpipelinecolorattachmentdescriptor/sourcealphablendfactor.md): Configures the source-alpha blend factor.
- [sourceRGBBlendFactor](mtl4renderpipelinecolorattachmentdescriptor/sourcergbblendfactor.md): Configures the source RGB blend factor.
- [writeMask](mtl4renderpipelinecolorattachmentdescriptor/writemask.md): Configures the color write mask.

### Instance Methods

- [reset()](mtl4renderpipelinecolorattachmentdescriptor/reset%28%29.md): Resets this descriptor to its default state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Render pipeline states

- [MTLRenderPipelineState](mtlrenderpipelinestate.md): An interface that represents a graphics pipeline configuration for a render pass, which the pass applies to the draw commands you encode.
- [MTL4RenderPipelineDescriptor](mtl4renderpipelinedescriptor.md): Groups together properties to create a render pipeline state object.
- [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md): An argument of options you pass to a GPU device to get a render pipeline state.
- [MTLRenderPipelineFunctionsDescriptor](mtlrenderpipelinefunctionsdescriptor.md): A collection of functions for updating a render pipeline.
- [MTL4MeshRenderPipelineDescriptor](mtl4meshrenderpipelinedescriptor.md): Groups together properties you use to create a mesh render pipeline state object.
- [MTLMeshRenderPipelineDescriptor](mtlmeshrenderpipelinedescriptor.md): An object that configures new render pipeline state objects for mesh shading.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLRenderPipelineColorAttachmentDescriptor](mtlrenderpipelinecolorattachmentdescriptor.md): A color render target that specifies the color configuration and color operations for a render pipeline.
- [MTLRenderPipelineColorAttachmentDescriptorArray](mtlrenderpipelinecolorattachmentdescriptorarray.md): An array of render pipeline color attachment descriptor objects.
- [MTL4TileRenderPipelineDescriptor](mtl4tilerenderpipelinedescriptor.md): Groups together properties you use to create a tile render pipeline state object.
- [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md): An object that configures new render pipeline state objects for tile shading.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
- [MTL4RenderPipelineBinaryFunctionsDescriptor](mtl4renderpipelinebinaryfunctionsdescriptor.md): Allows you to specify additional binary functions to link to each stage of a render pipeline.

# MTL4RenderPipelineColorAttachmentDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@interface MTL4RenderPipelineColorAttachmentDescriptor : NSObject
```

## Topics

### Instance Properties

- [alphaBlendOperation](mtl4renderpipelinecolorattachmentdescriptor/alphablendoperation.md): Configures the alpha blending operation.
- [blendingState](mtl4renderpipelinecolorattachmentdescriptor/blendingstate.md): Configure the blend state for color attachments the pipeline state uses.
- [destinationAlphaBlendFactor](mtl4renderpipelinecolorattachmentdescriptor/destinationalphablendfactor.md): Configures the destination-alpha blend factor.
- [destinationRGBBlendFactor](mtl4renderpipelinecolorattachmentdescriptor/destinationrgbblendfactor.md): Configures the destination RGB blend factor.
- [pixelFormat](mtl4renderpipelinecolorattachmentdescriptor/pixelformat.md): Configures the pixel format.
- [rgbBlendOperation](mtl4renderpipelinecolorattachmentdescriptor/rgbblendoperation.md): Configures the RGB blend operation.
- [sourceAlphaBlendFactor](mtl4renderpipelinecolorattachmentdescriptor/sourcealphablendfactor.md): Configures the source-alpha blend factor.
- [sourceRGBBlendFactor](mtl4renderpipelinecolorattachmentdescriptor/sourcergbblendfactor.md): Configures the source RGB blend factor.
- [writeMask](mtl4renderpipelinecolorattachmentdescriptor/writemask.md): Configures the color write mask.

### Instance Methods

- [reset](mtl4renderpipelinecolorattachmentdescriptor/reset%28%29.md): Resets this descriptor to its default state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Render pipeline states

- [MTLRenderPipelineState](mtlrenderpipelinestate.md): An interface that represents a graphics pipeline configuration for a render pass, which the pass applies to the draw commands you encode.
- [MTL4RenderPipelineDescriptor](mtl4renderpipelinedescriptor.md): Groups together properties to create a render pipeline state object.
- [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md): An argument of options you pass to a GPU device to get a render pipeline state.
- [MTLRenderPipelineFunctionsDescriptor](mtlrenderpipelinefunctionsdescriptor.md): A collection of functions for updating a render pipeline.
- [MTL4MeshRenderPipelineDescriptor](mtl4meshrenderpipelinedescriptor.md): Groups together properties you use to create a mesh render pipeline state object.
- [MTLMeshRenderPipelineDescriptor](mtlmeshrenderpipelinedescriptor.md): An object that configures new render pipeline state objects for mesh shading.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTLRenderPipelineColorAttachmentDescriptor](mtlrenderpipelinecolorattachmentdescriptor.md): A color render target that specifies the color configuration and color operations for a render pipeline.
- [MTLRenderPipelineColorAttachmentDescriptorArray](mtlrenderpipelinecolorattachmentdescriptorarray.md): An array of render pipeline color attachment descriptor objects.
- [MTL4TileRenderPipelineDescriptor](mtl4tilerenderpipelinedescriptor.md): Groups together properties you use to create a tile render pipeline state object.
- [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md): An object that configures new render pipeline state objects for tile shading.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
- [MTL4RenderPipelineBinaryFunctionsDescriptor](mtl4renderpipelinebinaryfunctionsdescriptor.md): Allows you to specify additional binary functions to link to each stage of a render pipeline.
