> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbuffer](https://developer.apple.com/documentation/metal/mtlbuffer)

# MTLBuffer (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A resource that stores data in a format defined by your app.

## Declaration

```swift
protocol MTLBuffer : MTLResource
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Estimating how often a texture region is accessed](estimating-how-often-a-texture-region-is-accessed.md)
- [Setting resource storage modes](setting-resource-storage-modes.md)
- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)
- [Synchronizing a managed resource in macOS](synchronizing-a-managed-resource-in-macos.md)
- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)
- [Indexing argument buffers](indexing-argument-buffers.md)
- [Optimizing texture data](optimizing-texture-data.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

<a id="overview"></a>

## Overview

An [MTLBuffer](mtlbuffer.md) instance can be used only with the [MTLDevice](mtldevice.md) that created it. Don’t implement this protocol yourself; instead, use the following [MTLDevice](mtldevice.md) methods to create `MTLBuffer` instances:

- [makeBuffer(length:options:)](mtldevice/makebuffer%28length_options_%29.md) creates a `MTLBuffer` instance with a new storage allocation.
- [makeBuffer(bytes:length:options:)](mtldevice/makebuffer%28bytes_length_options_%29.md) creates a `MTLBuffer` instance by copying data from an existing storage allocation into a new allocation.
- [makeBuffer(bytesNoCopy:length:options:deallocator:)](mtldevice/makebuffer%28bytesnocopy_length_options_deallocator_%29.md) creates a `MTLBuffer` instance that reuses an existing storage allocation and does not allocate any new storage.

The Metal framework doesn’t know anything about the contents of an [MTLBuffer](mtlbuffer.md), just its size. You define the format of the data in the buffer and ensure that your app and your shaders know how to read and write the data. For example, you might create a struct in your shader that defines the data you want to store in the buffer and its memory layout.

If you create a buffer with a managed resource storage mode ([MTLStorageMode.managed](mtlstoragemode/managed.md)), you need to call [didModifyRange:](mtlbuffer/didmodifyrange_.md) to tell Metal to copy any changes to the GPU.

## Topics

### Creating a texture that shares buffer data

- [makeTexture(descriptor:offset:bytesPerRow:)](mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md): Creates a texture that shares its storage with the buffer.

### Reading the buffer’s data on the CPU

- [contents()](mtlbuffer/contents%28%29.md): Gets the system address of the buffer’s storage allocation.

### Synchronizing data to the GPU for managed buffers

- [didModifyRange(\_:)](mtlbuffer/didmodifyrange%28__%29.md): Informs the GPU that the CPU has modified a section of the buffer.

### Debugging buffers

- [addDebugMarker(\_:range:)](mtlbuffer/adddebugmarker%28__range_%29.md): Adds a debug marker string to a specific buffer range.
- [removeAllDebugMarkers()](mtlbuffer/removealldebugmarkers%28%29.md): Removes all debug marker strings from the buffer.

### Reading buffer length

- [length](mtlbuffer/length.md): The logical size of the buffer, in bytes.

### Creating views of buffers on other GPUs

- [makeRemoteBufferView(\_:)](mtlbuffer/makeremotebufferview%28__%29.md): Deprecated. Creates a remote view of the buffer for another GPU in the same peer group.
- [remoteStorageBuffer](mtlbuffer/remotestoragebuffer.md): Deprecated. The buffer on another GPU that the buffer was created from, if any.

### Instance Properties

- [gpuAddress](mtlbuffer/gpuaddress.md)
- [sparseBufferTier](mtlbuffer/sparsebuffertier.md)

### Instance Methods

- [makeTensor(descriptor:offset:)](mtlbuffer/maketensor%28descriptor_offset_%29.md): Creates a single-plane tensor with the specified descriptor that shares storage with this buffer.

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [MTLResource](mtlresource.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTLBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A resource that stores data in a format defined by your app.

## Declaration

```objectivec
@protocol MTLBuffer <MTLResource>
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Estimating how often a texture region is accessed](estimating-how-often-a-texture-region-is-accessed.md)
- [Setting resource storage modes](setting-resource-storage-modes.md)
- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)
- [Synchronizing a managed resource in macOS](synchronizing-a-managed-resource-in-macos.md)
- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)
- [Indexing argument buffers](indexing-argument-buffers.md)
- [Optimizing texture data](optimizing-texture-data.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

<a id="overview"></a>

## Overview

An [MTLBuffer](mtlbuffer.md) instance can be used only with the [MTLDevice](mtldevice.md) that created it. Don’t implement this protocol yourself; instead, use the following [MTLDevice](mtldevice.md) methods to create `MTLBuffer` instances:

- [newBufferWithLength:options:](mtldevice/makebuffer%28length_options_%29.md) creates a `MTLBuffer` instance with a new storage allocation.
- [newBufferWithBytes:length:options:](mtldevice/makebuffer%28bytes_length_options_%29.md) creates a `MTLBuffer` instance by copying data from an existing storage allocation into a new allocation.
- [newBufferWithBytesNoCopy:length:options:deallocator:](mtldevice/makebuffer%28bytesnocopy_length_options_deallocator_%29.md) creates a `MTLBuffer` instance that reuses an existing storage allocation and does not allocate any new storage.

The Metal framework doesn’t know anything about the contents of an [MTLBuffer](mtlbuffer.md), just its size. You define the format of the data in the buffer and ensure that your app and your shaders know how to read and write the data. For example, you might create a struct in your shader that defines the data you want to store in the buffer and its memory layout.

If you create a buffer with a managed resource storage mode ([MTLStorageModeManaged](mtlstoragemode/managed.md)), you need to call [didModifyRange:](mtlbuffer/didmodifyrange_.md) to tell Metal to copy any changes to the GPU.

## Topics

### Creating a texture that shares buffer data

- [newTextureWithDescriptor:offset:bytesPerRow:](mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md): Creates a texture that shares its storage with the buffer.

### Reading the buffer’s data on the CPU

- [contents](mtlbuffer/contents%28%29.md): Gets the system address of the buffer’s storage allocation.

### Synchronizing data to the GPU for managed buffers

- [didModifyRange:](mtlbuffer/didmodifyrange_.md): Deprecated. Informs the GPU that the CPU has modified a section of the buffer.

### Debugging buffers

- [addDebugMarker:range:](mtlbuffer/adddebugmarker_range_.md): Adds a debug marker string to a specific buffer range.
- [removeAllDebugMarkers](mtlbuffer/removealldebugmarkers%28%29.md): Removes all debug marker strings from the buffer.

### Reading buffer length

- [length](mtlbuffer/length.md): The logical size of the buffer, in bytes.

### Creating views of buffers on other GPUs

- [newRemoteBufferViewForDevice:](mtlbuffer/makeremotebufferview%28__%29.md): Deprecated. Creates a remote view of the buffer for another GPU in the same peer group.
- [remoteStorageBuffer](mtlbuffer/remotestoragebuffer.md): Deprecated. The buffer on another GPU that the buffer was created from, if any.

### Instance Properties

- [gpuAddress](mtlbuffer/gpuaddress.md)
- [sparseBufferTier](mtlbuffer/sparsebuffertier.md)

### Instance Methods

- [newTensorWithDescriptor:offset:error:](mtlbuffer/maketensor%28descriptor_offset_%29.md): Creates a single-plane tensor with the specified descriptor that shares storage with this buffer.

## Relationships

### Inherits From

- [MTLResource](mtlresource.md)
