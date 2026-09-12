> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltilerenderpipelinedescriptor](https://developer.apple.com/documentation/metal/mtltilerenderpipelinedescriptor)

# MTLTileRenderPipelineDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

An object that configures new render pipeline state objects for tile shading.

## Declaration

```swift
class MTLTileRenderPipelineDescriptor
```

## Topics

### Identifying the render pipeline

- [label](mtltilerenderpipelinedescriptor/label.md): A string that identifies the tile pipeline descriptor.

### Specifying graphics functions and associated data

- [tileFunction](mtltilerenderpipelinedescriptor/tilefunction.md): The compute kernel or fragment function the pipeline calls.
- [tileBuffers](mtltilerenderpipelinedescriptor/tilebuffers.md): An array that contains the buffer mutability options for a render pipeline’s tile function.
- [maxCallStackDepth](mtltilerenderpipelinedescriptor/maxcallstackdepth.md): The maximum call stack depth for indirect function calls in tile shaders.

### Specifying rasterization and visibility state

- [threadgroupSizeMatchesTileSize](mtltilerenderpipelinedescriptor/threadgroupsizematchestilesize.md): A Boolean value that indicates whether all threadgroups for this pipeline completely cover tiles.
- [rasterSampleCount](mtltilerenderpipelinedescriptor/rastersamplecount.md): The number of samples in each fragment.

### Specifying rendering pipeline state

- [reset()](mtltilerenderpipelinedescriptor/reset%28%29.md): Specifies the default rendering pipeline state values for the descriptor.
- [colorAttachments](mtltilerenderpipelinedescriptor/colorattachments.md): An array of attachments that store color data.

### Specifying threads per threadgroup

- [maxTotalThreadsPerThreadgroup](mtltilerenderpipelinedescriptor/maxtotalthreadsperthreadgroup.md): The maximum number of threads in a threadgroup when dispatching a command using the pipeline.

### Specifying precompiled shader binaries

- [supportAddingBinaryFunctions](mtltilerenderpipelinedescriptor/supportaddingbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.
- [binaryArchives](mtltilerenderpipelinedescriptor/binaryarchives.md): An array of binary archives to search for precompiled versions of the shader.

### Specifying callable functions for the pipeline

- [linkedFunctions](mtltilerenderpipelinedescriptor/linkedfunctions.md): Functions that you can specify as function arguments for the tile shader when encoding commands that use the pipeline.

### Specifying shader validation

- [shaderValidation](mtltilerenderpipelinedescriptor/shadervalidation.md): A value that enables or disables shader validation for the pipeline.

### Instance Properties

- [preloadedLibraries](mtltilerenderpipelinedescriptor/preloadedlibraries.md)
- [requiredThreadsPerThreadgroup](mtltilerenderpipelinedescriptor/requiredthreadsperthreadgroup.md)

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
- [MTL4RenderPipelineColorAttachmentDescriptor](mtl4renderpipelinecolorattachmentdescriptor.md)
- [MTLRenderPipelineColorAttachmentDescriptor](mtlrenderpipelinecolorattachmentdescriptor.md): A color render target that specifies the color configuration and color operations for a render pipeline.
- [MTLRenderPipelineColorAttachmentDescriptorArray](mtlrenderpipelinecolorattachmentdescriptorarray.md): An array of render pipeline color attachment descriptor objects.
- [MTL4TileRenderPipelineDescriptor](mtl4tilerenderpipelinedescriptor.md): Groups together properties you use to create a tile render pipeline state object.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
- [MTL4RenderPipelineBinaryFunctionsDescriptor](mtl4renderpipelinebinaryfunctionsdescriptor.md): Allows you to specify additional binary functions to link to each stage of a render pipeline.

# MTLTileRenderPipelineDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

An object that configures new render pipeline state objects for tile shading.

## Declaration

```objectivec
@interface MTLTileRenderPipelineDescriptor : NSObject
```

## Topics

### Identifying the render pipeline

- [label](mtltilerenderpipelinedescriptor/label.md): A string that identifies the tile pipeline descriptor.

### Specifying graphics functions and associated data

- [tileFunction](mtltilerenderpipelinedescriptor/tilefunction.md): The compute kernel or fragment function the pipeline calls.
- [tileBuffers](mtltilerenderpipelinedescriptor/tilebuffers.md): An array that contains the buffer mutability options for a render pipeline’s tile function.
- [maxCallStackDepth](mtltilerenderpipelinedescriptor/maxcallstackdepth.md): The maximum call stack depth for indirect function calls in tile shaders.

### Specifying rasterization and visibility state

- [threadgroupSizeMatchesTileSize](mtltilerenderpipelinedescriptor/threadgroupsizematchestilesize.md): A Boolean value that indicates whether all threadgroups for this pipeline completely cover tiles.
- [rasterSampleCount](mtltilerenderpipelinedescriptor/rastersamplecount.md): The number of samples in each fragment.

### Specifying rendering pipeline state

- [reset](mtltilerenderpipelinedescriptor/reset%28%29.md): Specifies the default rendering pipeline state values for the descriptor.
- [colorAttachments](mtltilerenderpipelinedescriptor/colorattachments.md): An array of attachments that store color data.

### Specifying threads per threadgroup

- [maxTotalThreadsPerThreadgroup](mtltilerenderpipelinedescriptor/maxtotalthreadsperthreadgroup.md): The maximum number of threads in a threadgroup when dispatching a command using the pipeline.

### Specifying precompiled shader binaries

- [supportAddingBinaryFunctions](mtltilerenderpipelinedescriptor/supportaddingbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.
- [binaryArchives](mtltilerenderpipelinedescriptor/binaryarchives.md): An array of binary archives to search for precompiled versions of the shader.

### Specifying callable functions for the pipeline

- [linkedFunctions](mtltilerenderpipelinedescriptor/linkedfunctions.md): Functions that you can specify as function arguments for the tile shader when encoding commands that use the pipeline.

### Specifying shader validation

- [shaderValidation](mtltilerenderpipelinedescriptor/shadervalidation.md): A value that enables or disables shader validation for the pipeline.

### Instance Properties

- [preloadedLibraries](mtltilerenderpipelinedescriptor/preloadedlibraries.md)
- [requiredThreadsPerThreadgroup](mtltilerenderpipelinedescriptor/requiredthreadsperthreadgroup.md)

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
- [MTL4RenderPipelineColorAttachmentDescriptor](mtl4renderpipelinecolorattachmentdescriptor.md)
- [MTLRenderPipelineColorAttachmentDescriptor](mtlrenderpipelinecolorattachmentdescriptor.md): A color render target that specifies the color configuration and color operations for a render pipeline.
- [MTLRenderPipelineColorAttachmentDescriptorArray](mtlrenderpipelinecolorattachmentdescriptorarray.md): An array of render pipeline color attachment descriptor objects.
- [MTL4TileRenderPipelineDescriptor](mtl4tilerenderpipelinedescriptor.md): Groups together properties you use to create a tile render pipeline state object.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
- [MTL4RenderPipelineBinaryFunctionsDescriptor](mtl4renderpipelinebinaryfunctionsdescriptor.md): Allows you to specify additional binary functions to link to each stage of a render pipeline.
