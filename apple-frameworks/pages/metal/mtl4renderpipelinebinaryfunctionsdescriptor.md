> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpipelinebinaryfunctionsdescriptor](https://developer.apple.com/documentation/metal/mtl4renderpipelinebinaryfunctionsdescriptor)

# MTL4RenderPipelineBinaryFunctionsDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Allows you to specify additional binary functions to link to each stage of a render pipeline.

## Declaration

```swift
class MTL4RenderPipelineBinaryFunctionsDescriptor
```

## Topics

### Instance Properties

- [fragmentAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/fragmentadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary fragment shader functions.
- [meshAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/meshadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary mesh shader functions.
- [objectAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/objectadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary object shader functions.
- [tileAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/tileadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary tile shader functions.
- [vertexAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/vertexadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary vertex shader functions.

### Instance Methods

- [reset()](mtl4renderpipelinebinaryfunctionsdescriptor/reset%28%29.md): Resets this descriptor to its default state.

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
- [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md): An object that configures new render pipeline state objects for tile shading.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.

# MTL4RenderPipelineBinaryFunctionsDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Allows you to specify additional binary functions to link to each stage of a render pipeline.

## Declaration

```objectivec
@interface MTL4RenderPipelineBinaryFunctionsDescriptor : NSObject
```

## Topics

### Instance Properties

- [fragmentAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/fragmentadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary fragment shader functions.
- [meshAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/meshadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary mesh shader functions.
- [objectAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/objectadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary object shader functions.
- [tileAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/tileadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary tile shader functions.
- [vertexAdditionalBinaryFunctions](mtl4renderpipelinebinaryfunctionsdescriptor/vertexadditionalbinaryfunctions.md): Provides an array of binary functions representing additional binary vertex shader functions.

### Instance Methods

- [reset](mtl4renderpipelinebinaryfunctionsdescriptor/reset%28%29.md): Resets this descriptor to its default state.

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
- [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md): An object that configures new render pipeline state objects for tile shading.
- [MTLTileRenderPipelineColorAttachmentDescriptor](mtltilerenderpipelinecolorattachmentdescriptor.md): A description of a tile-shading render pipeline’s color render target.
- [MTLPipelineOption](mtlpipelineoption.md): Options that determine how Metal prepares the pipeline.
