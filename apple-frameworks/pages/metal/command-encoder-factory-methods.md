> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/command-encoder-factory-methods](https://developer.apple.com/documentation/metal/command-encoder-factory-methods)

# Command encoder factory methods (Swift)

**Framework:** Metal  
**Kind:** API Collection

A command encoder defines the actions of a single pass, such as GPU commands that draw, compute, or quickly copy resource data.

## Topics

### Creating render encoders

A render encoder creates a render pass that draws graphics with a GPU.

- [makeRenderCommandEncoder(descriptor:)](mtlcommandbuffer/makerendercommandencoder%28descriptor_%29.md): Creates a render command encoder from a descriptor.

### Creating parallel render encoders

A parallel render encoder creates multiple render encoders that all contribute to a single render pass that draws graphics with a GPU.

- [makeParallelRenderCommandEncoder(descriptor:)](mtlcommandbuffer/makeparallelrendercommandencoder%28descriptor_%29.md): Creates a parallel render command encoder from a descriptor.

### Creating acceleration structure encoders

An acceleration structure encoder creates a pass that builds or refits data for ray tracing with a GPU.

- [makeAccelerationStructureCommandEncoder(descriptor:)](mtlcommandbuffer/makeaccelerationstructurecommandencoder%28descriptor_%29.md): Creates a ray-tracing acceleration structure command encoder from a descriptor.
- [makeAccelerationStructureCommandEncoder()](mtlcommandbuffer/makeaccelerationstructurecommandencoder%28%29.md): Creates a ray-tracing acceleration structure command encoder that uses default settings.

### Creating compute encoders

A compute encoder creates a pass that runs computations in parallel with the GPU.

- [makeComputeCommandEncoder(descriptor:)](mtlcommandbuffer/makecomputecommandencoder%28descriptor_%29.md): Creates a compute command encoder from a descriptor.
- [makeComputeCommandEncoder()](mtlcommandbuffer/makecomputecommandencoder%28%29.md): Creates a compute command encoder that uses default settings.
- [makeComputeCommandEncoder(dispatchType:)](mtlcommandbuffer/makecomputecommandencoder%28dispatchtype_%29.md): Creates a compute command encoder with a dispatch type.
- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.

### Creating blit encoders

A block information transfer (blit) encoder creates a pass that quickly copies data between GPU resources, including buffers and textures.

- [makeBlitCommandEncoder()](mtlcommandbuffer/makeblitcommandencoder%28%29.md): Creates a block information transfer (blit) encoder.
- [makeBlitCommandEncoder(descriptor:)](mtlcommandbuffer/makeblitcommandencoder%28descriptor_%29.md): Creates a block information transfer (blit) encoder from a descriptor.

### Creating resource state encoders

A resource state encoder creates a pass that manages memory for sparse textures.

- [resourceStateCommandEncoder(with:)](mtlcommandbuffer/resourcestatecommandencoder%28with_%29.md): Creates a resource state command encoder from a descriptor.
- [makeResourceStateCommandEncoder()](mtlcommandbuffer/makeresourcestatecommandencoder%28%29.md): Creates a resource state command encoder that uses default settings.

# Command encoder factory methods (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

A command encoder defines the actions of a single pass, such as GPU commands that draw, compute, or quickly copy resource data.

## Topics

### Creating render encoders

A render encoder creates a render pass that draws graphics with a GPU.

- [renderCommandEncoderWithDescriptor:](mtlcommandbuffer/makerendercommandencoder%28descriptor_%29.md): Creates a render command encoder from a descriptor.

### Creating parallel render encoders

A parallel render encoder creates multiple render encoders that all contribute to a single render pass that draws graphics with a GPU.

- [parallelRenderCommandEncoderWithDescriptor:](mtlcommandbuffer/makeparallelrendercommandencoder%28descriptor_%29.md): Creates a parallel render command encoder from a descriptor.

### Creating acceleration structure encoders

An acceleration structure encoder creates a pass that builds or refits data for ray tracing with a GPU.

- [accelerationStructureCommandEncoderWithDescriptor:](mtlcommandbuffer/makeaccelerationstructurecommandencoder%28descriptor_%29.md): Creates a ray-tracing acceleration structure command encoder from a descriptor.
- [accelerationStructureCommandEncoder](mtlcommandbuffer/makeaccelerationstructurecommandencoder%28%29.md): Creates a ray-tracing acceleration structure command encoder that uses default settings.

### Creating compute encoders

A compute encoder creates a pass that runs computations in parallel with the GPU.

- [computeCommandEncoderWithDescriptor:](mtlcommandbuffer/makecomputecommandencoder%28descriptor_%29.md): Creates a compute command encoder from a descriptor.
- [computeCommandEncoder](mtlcommandbuffer/makecomputecommandencoder%28%29.md): Creates a compute command encoder that uses default settings.
- [computeCommandEncoderWithDispatchType:](mtlcommandbuffer/makecomputecommandencoder%28dispatchtype_%29.md): Creates a compute command encoder with a dispatch type.
- [MTLDispatchType](mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.

### Creating blit encoders

A block information transfer (blit) encoder creates a pass that quickly copies data between GPU resources, including buffers and textures.

- [blitCommandEncoder](mtlcommandbuffer/makeblitcommandencoder%28%29.md): Creates a block information transfer (blit) encoder.
- [blitCommandEncoderWithDescriptor:](mtlcommandbuffer/makeblitcommandencoder%28descriptor_%29.md): Creates a block information transfer (blit) encoder from a descriptor.

### Creating resource state encoders

A resource state encoder creates a pass that manages memory for sparse textures.

- [resourceStateCommandEncoderWithDescriptor:](mtlcommandbuffer/resourcestatecommandencoder%28with_%29.md): Creates a resource state command encoder from a descriptor.
- [resourceStateCommandEncoder](mtlcommandbuffer/makeresourcestatecommandencoder%28%29.md): Creates a resource state command encoder that uses default settings.
