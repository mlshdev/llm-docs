> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinefunctionsdescriptor](https://developer.apple.com/documentation/metal/mtlrenderpipelinefunctionsdescriptor)

# MTLRenderPipelineFunctionsDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A collection of functions for updating a render pipeline.

## Declaration

```swift
class MTLRenderPipelineFunctionsDescriptor
```

<a id="overview"></a>

## Overview

When you create a render pipeline that takes visible functions as parameters, you need to specify all possible functions that the render pipeline can call. If you already have a pipeline, you can create a new render pipeline with the same configuration but additional callable functions. To create the new pipeline state, configure an [MTLRenderPipelineFunctionsDescriptor](mtlrenderpipelinefunctionsdescriptor.md) instance with the additional callable functions to add, and then call the pipeline state’s [makeRenderPipelineState(additionalBinaryFunctions:)](mtlrenderpipelinestate/makerenderpipelinestate%28additionalbinaryfunctions_%29-84te1.md) method, passing the descriptor.

## Topics

### Configuring the descriptor’s functions

- [vertexAdditionalBinaryFunctions](mtlrenderpipelinefunctionsdescriptor/vertexadditionalbinaryfunctions.md): The vertex functions to add to the render pipeline.
- [fragmentAdditionalBinaryFunctions](mtlrenderpipelinefunctionsdescriptor/fragmentadditionalbinaryfunctions.md): The fragment functions to add to the render pipeline.
- [tileAdditionalBinaryFunctions](mtlrenderpipelinefunctionsdescriptor/tileadditionalbinaryfunctions.md): The tile functions to add to the render pipeline.

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
- [MTL4MeshRenderPipelineDescriptor](mtl4meshrenderpipelinedescriptor.md): Groups together properties you use to create a mesh render pipeline state object.
- [MTLMeshRenderPipelineDescriptor](mtlmeshrenderpipelinedescriptor.md): An object that configures new render pipeline state objects for mesh shading.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTL4RenderPipelineColorAttachmentDescriptor](mtl4renderpipelinecolorattachmentdescriptor.md)
- [MTLRenderPipelineColorAttachmentDescriptor](mtlrenderpipelinecolorattachmentdescriptor.md): A color render target that specifies the color configuration and color operations for a render pipeline.
- [MTLRenderPipelineColorAttachmentDescriptorArray](mtlrenderpipelinecolorattachmentdescriptorarray.md): An array of render pipeline color attachment descriptor objects.
- [MTL4TileRenderPipelineDescriptor](mtl4tilerenderpipelinedescriptor.md): Groups together properties you use to create a tile render pipeline state object.
- [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md): An object that configures new render pipeline state objects for tile shading.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
- [MTL4RenderPipelineBinaryFunctionsDescriptor](mtl4renderpipelinebinaryfunctionsdescriptor.md): Allows you to specify additional binary functions to link to each stage of a render pipeline.

# MTLRenderPipelineFunctionsDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A collection of functions for updating a render pipeline.

## Declaration

```objectivec
@interface MTLRenderPipelineFunctionsDescriptor : NSObject
```

<a id="overview"></a>

## Overview

When you create a render pipeline that takes visible functions as parameters, you need to specify all possible functions that the render pipeline can call. If you already have a pipeline, you can create a new render pipeline with the same configuration but additional callable functions. To create the new pipeline state, configure an [MTLRenderPipelineFunctionsDescriptor](mtlrenderpipelinefunctionsdescriptor.md) instance with the additional callable functions to add, and then call the pipeline state’s [newRenderPipelineStateWithAdditionalBinaryFunctions:error:](mtlrenderpipelinestate/makerenderpipelinestate%28additionalbinaryfunctions_%29-84te1.md) method, passing the descriptor.

## Topics

### Configuring the descriptor’s functions

- [vertexAdditionalBinaryFunctions](mtlrenderpipelinefunctionsdescriptor/vertexadditionalbinaryfunctions.md): The vertex functions to add to the render pipeline.
- [fragmentAdditionalBinaryFunctions](mtlrenderpipelinefunctionsdescriptor/fragmentadditionalbinaryfunctions.md): The fragment functions to add to the render pipeline.
- [tileAdditionalBinaryFunctions](mtlrenderpipelinefunctionsdescriptor/tileadditionalbinaryfunctions.md): The tile functions to add to the render pipeline.

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
- [MTL4MeshRenderPipelineDescriptor](mtl4meshrenderpipelinedescriptor.md): Groups together properties you use to create a mesh render pipeline state object.
- [MTLMeshRenderPipelineDescriptor](mtlmeshrenderpipelinedescriptor.md): An object that configures new render pipeline state objects for mesh shading.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.
- [MTL4RenderPipelineColorAttachmentDescriptor](mtl4renderpipelinecolorattachmentdescriptor.md)
- [MTLRenderPipelineColorAttachmentDescriptor](mtlrenderpipelinecolorattachmentdescriptor.md): A color render target that specifies the color configuration and color operations for a render pipeline.
- [MTLRenderPipelineColorAttachmentDescriptorArray](mtlrenderpipelinecolorattachmentdescriptorarray.md): An array of render pipeline color attachment descriptor objects.
- [MTL4TileRenderPipelineDescriptor](mtl4tilerenderpipelinedescriptor.md): Groups together properties you use to create a tile render pipeline state object.
- [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md): An object that configures new render pipeline state objects for tile shading.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
- [MTL4RenderPipelineBinaryFunctionsDescriptor](mtl4renderpipelinebinaryfunctionsdescriptor.md): Allows you to specify additional binary functions to link to each stage of a render pipeline.
