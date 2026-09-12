> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4argumenttable](https://developer.apple.com/documentation/metal/mtl4argumenttable)

# MTL4ArgumentTable (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a mechanism to manage and provide resource bindings for buffers, textures, sampler states and other Metal resources.

## Declaration

```swift
protocol MTL4ArgumentTable : NSObjectProtocol
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

## Topics

### Instance Properties

- [device](mtl4argumenttable/device.md): The device from which you created this argument table.
- [label](mtl4argumenttable/label.md): Assigns an optional label with this argument table for debugging purposes.

### Instance Methods

- [setAddress(\_:attributeStride:index:)](mtl4argumenttable/setaddress%28__attributestride_index_%29.md): Binds a GPU address to a buffer binding slot, providing a dynamic vertex stride.
- [setAddress(\_:index:)](mtl4argumenttable/setaddress%28__index_%29.md): Binds a GPU address to a buffer binding slot.
- [setResource(\_:bufferIndex:)](mtl4argumenttable/setresource%28__bufferindex_%29.md): Binds a resource to a buffer binding slot.
- [setSamplerState(\_:index:)](mtl4argumenttable/setsamplerstate%28__index_%29.md): Binds a sampler state to a sampler state binding slot.
- [setTexture(\_:index:)](mtl4argumenttable/settexture%28__index_%29.md): Binds a texture to a texture binding slot.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueue](mtl4commandqueue.md): An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.
- [MTL4CommandQueueDescriptor](mtl4commandqueuedescriptor.md): Groups together parameters for the creation of a new command queue.
- [MTL4CommandQueueError](mtl4commandqueueerror-swift.struct.md)
- [MTL4CommandQueueError.Code](mtl4commandqueueerror-swift.struct/code.md): Enumeration of kinds of errors that committing an array of command buffers instances can produce.
- [MTL4CommandQueueErrorDomain](mtl4commandqueueerrordomain.md)
- [MTL4CommandBuffer](mtl4commandbuffer.md): Records a sequence of GPU commands.
- [MTL4CommandBufferOptions](mtl4commandbufferoptions.md): Options to configure a command buffer before encoding work into it.
- [MTL4CommandEncoder](mtl4commandencoder.md): An encoder that writes GPU commands into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTL4ArgumentTableDescriptor](mtl4argumenttabledescriptor.md): Groups parameters for the creation of a Metal argument table.
- [MTL4CommandAllocator](mtl4commandallocator.md): Manages the memory backing the encoding of GPU commands into command buffers.
- [MTL4CommandAllocatorDescriptor](mtl4commandallocatordescriptor.md): Groups together parameters for creating a command allocator.
- [MTL4CommitOptions](mtl4commitoptions.md): Represents options to configure a commit operation on a command queue.
- [MTL4CommitFeedback](mtl4commitfeedback.md): Describes an object containing debug information from Metal to your app after completing a workload.
- [MTL4CommitFeedbackHandler](mtl4commitfeedbackhandler.md): Defines the block signature for a callback Metal invokes to provide your app feedback after completing a workload.

# MTL4ArgumentTable (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a mechanism to manage and provide resource bindings for buffers, textures, sampler states and other Metal resources.

## Declaration

```objectivec
@protocol MTL4ArgumentTable <NSObject>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

## Topics

### Instance Properties

- [device](mtl4argumenttable/device.md): The device from which you created this argument table.
- [label](mtl4argumenttable/label.md): Assigns an optional label with this argument table for debugging purposes.

### Instance Methods

- [setAddress:attributeStride:atIndex:](mtl4argumenttable/setaddress%28__attributestride_index_%29.md): Binds a GPU address to a buffer binding slot, providing a dynamic vertex stride.
- [setAddress:atIndex:](mtl4argumenttable/setaddress%28__index_%29.md): Binds a GPU address to a buffer binding slot.
- [setResource:atBufferIndex:](mtl4argumenttable/setresource%28__bufferindex_%29.md): Binds a resource to a buffer binding slot.
- [setSamplerState:atIndex:](mtl4argumenttable/setsamplerstate%28__index_%29.md): Binds a sampler state to a sampler state binding slot.
- [setTexture:atIndex:](mtl4argumenttable/settexture%28__index_%29.md): Binds a texture to a texture binding slot.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU with Metal 4

- [MTL4CommandQueue](mtl4commandqueue.md): An abstraction representing a command queue that you use commit and synchronize command buffers and to perform other GPU operations.
- [MTL4CommandQueueDescriptor](mtl4commandqueuedescriptor.md): Groups together parameters for the creation of a new command queue.
- [MTL4CommandQueueError](mtl4commandqueueerror-swift.struct/code.md): Enumeration of kinds of errors that committing an array of command buffers instances can produce.
- [MTL4CommandQueueErrorDomain](mtl4commandqueueerrordomain.md)
- [MTL4CommandBuffer](mtl4commandbuffer.md): Records a sequence of GPU commands.
- [MTL4CommandBufferOptions](mtl4commandbufferoptions.md): Options to configure a command buffer before encoding work into it.
- [MTL4CommandEncoder](mtl4commandencoder.md): An encoder that writes GPU commands into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTL4ArgumentTableDescriptor](mtl4argumenttabledescriptor.md): Groups parameters for the creation of a Metal argument table.
- [MTL4CommandAllocator](mtl4commandallocator.md): Manages the memory backing the encoding of GPU commands into command buffers.
- [MTL4CommandAllocatorDescriptor](mtl4commandallocatordescriptor.md): Groups together parameters for creating a command allocator.
- [MTL4CommitOptions](mtl4commitoptions.md): Represents options to configure a commit operation on a command queue.
- [MTL4CommitFeedback](mtl4commitfeedback.md): Describes an object containing debug information from Metal to your app after completing a workload.
- [MTL4CommitFeedbackHandler](mtl4commitfeedbackhandler.md): Defines the block signature for a callback Metal invokes to provide your app feedback after completing a workload.
- [MTL4CounterHeap](mtl4counterheap.md): Represents an opaque, driver-controlled section of memory that can store GPU counter data.
