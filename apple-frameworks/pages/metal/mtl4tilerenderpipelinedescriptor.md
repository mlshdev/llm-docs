> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4tilerenderpipelinedescriptor](https://developer.apple.com/documentation/metal/mtl4tilerenderpipelinedescriptor)

# MTL4TileRenderPipelineDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Groups together properties you use to create a tile render pipeline state object.

## Declaration

```swift
class MTL4TileRenderPipelineDescriptor
```

## Topics

### Instance Properties

- [colorAttachments](mtl4tilerenderpipelinedescriptor/colorattachments.md): Access an array of descriptors that configure the properties of each color attachment in the tile render pipeline.
- [maxTotalThreadsPerThreadgroup](mtl4tilerenderpipelinedescriptor/maxtotalthreadsperthreadgroup.md): Sets the maximum number of threads that the GPU can execute simultaneously within a single threadgroup in the tile render pipeline.
- [rasterSampleCount](mtl4tilerenderpipelinedescriptor/rastersamplecount.md): Configures the number of samples per pixel used for multisampling.
- [requiredThreadsPerThreadgroup](mtl4tilerenderpipelinedescriptor/requiredthreadsperthreadgroup.md): Sets the required number of threads per threadgroup for tile dispatches.
- [staticLinkingDescriptor](mtl4tilerenderpipelinedescriptor/staticlinkingdescriptor.md): Configures an object that contains information about functions to link to the tile render pipeline when Metal builds it.
- [supportBinaryLinking](mtl4tilerenderpipelinedescriptor/supportbinarylinking.md): Indicates whether the pipeline supports linking binary functions.
- [threadgroupSizeMatchesTileSize](mtl4tilerenderpipelinedescriptor/threadgroupsizematchestilesize.md): Indicating whether the size of the threadgroup matches the size of a tile in the render pipeline.
- [tileFunctionDescriptor](mtl4tilerenderpipelinedescriptor/tilefunctiondescriptor.md): Configures the tile function that the render pipeline executes for each tile in the tile shader stage.

### Instance Methods

- [reset()](mtl4tilerenderpipelinedescriptor/reset%28%29.md): Resets the descriptor to the default state.

## Relationships

### Inherits From

- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md)

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
- [MTL4RenderPipelineColorAttachmentDescriptor](mtl4renderpipelinecolorattachmentdescriptor.md)
- [MTLRenderPipelineColorAttachmentDescriptor](mtlrenderpipelinecolorattachmentdescriptor.md): A color render target that specifies the color configuration and color operations for a render pipeline.
- [MTLRenderPipelineColorAttachmentDescriptorArray](mtlrenderpipelinecolorattachmentdescriptorarray.md): An array of render pipeline color attachment descriptor objects.
- [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md): An object that configures new render pipeline state objects for tile shading.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
- [MTL4RenderPipelineBinaryFunctionsDescriptor](mtl4renderpipelinebinaryfunctionsdescriptor.md): Allows you to specify additional binary functions to link to each stage of a render pipeline.

# MTL4TileRenderPipelineDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Groups together properties you use to create a tile render pipeline state object.

## Declaration

```objectivec
@interface MTL4TileRenderPipelineDescriptor : MTL4PipelineDescriptor
```

## Topics

### Instance Properties

- [colorAttachments](mtl4tilerenderpipelinedescriptor/colorattachments.md): Access an array of descriptors that configure the properties of each color attachment in the tile render pipeline.
- [maxTotalThreadsPerThreadgroup](mtl4tilerenderpipelinedescriptor/maxtotalthreadsperthreadgroup.md): Sets the maximum number of threads that the GPU can execute simultaneously within a single threadgroup in the tile render pipeline.
- [rasterSampleCount](mtl4tilerenderpipelinedescriptor/rastersamplecount.md): Configures the number of samples per pixel used for multisampling.
- [requiredThreadsPerThreadgroup](mtl4tilerenderpipelinedescriptor/requiredthreadsperthreadgroup.md): Sets the required number of threads per threadgroup for tile dispatches.
- [staticLinkingDescriptor](mtl4tilerenderpipelinedescriptor/staticlinkingdescriptor.md): Configures an object that contains information about functions to link to the tile render pipeline when Metal builds it.
- [supportBinaryLinking](mtl4tilerenderpipelinedescriptor/supportbinarylinking.md): Indicates whether the pipeline supports linking binary functions.
- [threadgroupSizeMatchesTileSize](mtl4tilerenderpipelinedescriptor/threadgroupsizematchestilesize.md): Indicating whether the size of the threadgroup matches the size of a tile in the render pipeline.
- [tileFunctionDescriptor](mtl4tilerenderpipelinedescriptor/tilefunctiondescriptor.md): Configures the tile function that the render pipeline executes for each tile in the tile shader stage.

### Instance Methods

- [reset](mtl4tilerenderpipelinedescriptor/reset%28%29.md): Resets the descriptor to the default state.

## Relationships

### Inherits From

- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md)

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
- [MTL4RenderPipelineColorAttachmentDescriptor](mtl4renderpipelinecolorattachmentdescriptor.md)
- [MTLRenderPipelineColorAttachmentDescriptor](mtlrenderpipelinecolorattachmentdescriptor.md): A color render target that specifies the color configuration and color operations for a render pipeline.
- [MTLRenderPipelineColorAttachmentDescriptorArray](mtlrenderpipelinecolorattachmentdescriptorarray.md): An array of render pipeline color attachment descriptor objects.
- [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md): An object that configures new render pipeline state objects for tile shading.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
- [MTL4RenderPipelineBinaryFunctionsDescriptor](mtl4renderpipelinebinaryfunctionsdescriptor.md): Allows you to specify additional binary functions to link to each stage of a render pipeline.
