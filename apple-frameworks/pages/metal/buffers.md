> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/buffers](https://developer.apple.com/documentation/metal/buffers)

# Buffers (Swift)

**Framework:** Metal  
**Kind:** API Collection

Create and manage untyped data your app uses to exchange information with its shader functions.

<a id="overview"></a>

## Overview

Each [MTLBuffer](mtlbuffer.md) instance represents a general purpose, typeless memory allocation that your app uses to send and retrieve data from a shader. Your app decides how to use and interpret the buffer’s underlying bytes.

You create buffers from either an [MTLDevice](mtldevice.md) or [MTLHeap](mtlheap.md) instance.

**Swift**

```swift
let deviceBuffer = device.makeBuffer(length: bufferSize,
                                     options: .storageModeShared)

let heapBuffer = heap.makeBuffer(length: bufferSize,
                                 options: .storageModePrivate)
```

**Objective-C**

```objective-c
id <MTLBuffer> deviceBuffer = [device newBufferWithLength: bufferSize
                                                  options: MTLResourceStorageModeShared];

id <MTLBuffer> heapBuffer = [heap newBufferWithLength:bufferSize
                                              options:MTLResourceStorageModePrivate];
```

**C++**

```cpp
// Metal-CPP
MTL::Buffer* pDeviceBuffer = pDevice->newBuffer(bufferSize,
                                                MTL::ResourceStorageModeShared);

MTL::Buffer* pHeapBuffer = pHeap->newBuffer(bufferSize,
                                            MTL::ResourceStorageModePrivate);
```

Buffers inherently support the [MTLResource](mtlresource.md) protocol’s properties and methods, including [storageMode](mtlresource/storagemode.md), which controls how the GPU handles its memory (see [Resource fundamentals](resource-fundamentals.md)).

## Topics

### General purpose buffers

Store arbitrary data in a buffer, such as vertex locations or your own custom data structure.

- [MTLBuffer](mtlbuffer.md): A resource that stores data in a format defined by your app.

### Argument buffers

Group resources together into an argument buffer.

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md): Optimize your app’s performance by grouping your resources into argument buffers.
- [Managing groups of resources with argument buffers](managing-groups-of-resources-with-argument-buffers.md): Create argument buffers to organize related resources.
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md): Optimize resource performance within an argument buffer.
- [Indexing argument buffers](indexing-argument-buffers.md): Assign resource indices within an argument buffer.
- [Rendering terrain dynamically with argument buffers](rendering-terrain-dynamically-with-argument-buffers.md): Use argument buffers to render terrain in real time with a GPU-driven pipeline.
- [Encoding argument buffers on the GPU](encoding-argument-buffers-on-the-gpu.md): Use a compute pass to encode an argument buffer and access its arguments in a subsequent render pass.
- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [MTLArgumentDescriptor](mtlargumentdescriptor.md): A representation of an argument within an argument buffer.
- [MTLArgumentEncoder](mtlargumentencoder.md): An interface you can use to encode argument data into an argument buffer.
- [MTLAttributeStrideStatic](mtlattributestridestatic.md)

### Model I/O interoperability

Load complex 3D meshes and textures from Model I/O assets, and prepare to draw them in your Metal render pipelines.

- [MTKMesh](../metalkit/mtkmesh.md): A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBuffer](../metalkit/mtkmeshbuffer.md): A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBufferAllocator](../metalkit/mtkmeshbufferallocator.md): An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKSubmesh](../metalkit/mtksubmesh.md): A container for the index data of a Model I/O submesh, suitable for use in a Metal app.
- [MTKModelError](../metalkit/mtkmodelerror.md): Constants used to declare Model Errors.
- [MTKMetalVertexFormatFromModelIO(\_:)](../metalkit/mtkmetalvertexformatfrommodelio%28__%29.md): Returns a converted Metal vertex format.
- [MTKModelIOVertexFormatFromMetal(\_:)](../metalkit/mtkmodeliovertexformatfrommetal%28__%29.md): Returns a converted Model I/O vertex format.
- [MTKMetalVertexDescriptorFromModelIO(\_:)](../metalkit/mtkmetalvertexdescriptorfrommodelio%28__%29.md): Returns a partially converted Metal vertex descriptor.
- [MTKModelIOVertexDescriptorFromMetal(\_:)](../metalkit/mtkmodeliovertexdescriptorfrommetal%28__%29.md): Returns a partially converted Model I/O vertex descriptor.

## See Also

### Resources

- [Resource fundamentals](resource-fundamentals.md): Control the common attributes of all Metal memory resources, including buffers and textures, and how to configure their underlying memory.
- [Textures](textures.md): Create and manage typed data your app uses to exchange information with its shader functions.
- [Memory heaps](memory-heaps.md): Take control of your app’s GPU memory management by creating a large memory allocation for various buffers, textures, and other resources.
- [Resource loading](resource-loading.md): Load assets in your games and apps quickly by running a dedicated input/output queue alongside your GPU tasks.
- [Resource synchronization](resource-synchronization.md): Prevent multiple commands that can access the same resources simultaneously by coordinating those reads and writes with barriers, fences, or events.

# Buffers (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Create and manage untyped data your app uses to exchange information with its shader functions.

<a id="overview"></a>

## Overview

Each [MTLBuffer](mtlbuffer.md) instance represents a general purpose, typeless memory allocation that your app uses to send and retrieve data from a shader. Your app decides how to use and interpret the buffer’s underlying bytes.

You create buffers from either an [MTLDevice](mtldevice.md) or [MTLHeap](mtlheap.md) instance.

**Swift**

```swift
let deviceBuffer = device.makeBuffer(length: bufferSize,
                                     options: .storageModeShared)

let heapBuffer = heap.makeBuffer(length: bufferSize,
                                 options: .storageModePrivate)
```

**Objective-C**

```objective-c
id <MTLBuffer> deviceBuffer = [device newBufferWithLength: bufferSize
                                                  options: MTLResourceStorageModeShared];

id <MTLBuffer> heapBuffer = [heap newBufferWithLength:bufferSize
                                              options:MTLResourceStorageModePrivate];
```

**C++**

```cpp
// Metal-CPP
MTL::Buffer* pDeviceBuffer = pDevice->newBuffer(bufferSize,
                                                MTL::ResourceStorageModeShared);

MTL::Buffer* pHeapBuffer = pHeap->newBuffer(bufferSize,
                                            MTL::ResourceStorageModePrivate);
```

Buffers inherently support the [MTLResource](mtlresource.md) protocol’s properties and methods, including [storageMode](mtlresource/storagemode.md), which controls how the GPU handles its memory (see [Resource fundamentals](resource-fundamentals.md)).

## Topics

### General purpose buffers

Store arbitrary data in a buffer, such as vertex locations or your own custom data structure.

- [MTLBuffer](mtlbuffer.md): A resource that stores data in a format defined by your app.

### Argument buffers

Group resources together into an argument buffer.

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md): Optimize your app’s performance by grouping your resources into argument buffers.
- [Managing groups of resources with argument buffers](managing-groups-of-resources-with-argument-buffers.md): Create argument buffers to organize related resources.
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md): Optimize resource performance within an argument buffer.
- [Indexing argument buffers](indexing-argument-buffers.md): Assign resource indices within an argument buffer.
- [Rendering terrain dynamically with argument buffers](rendering-terrain-dynamically-with-argument-buffers.md): Use argument buffers to render terrain in real time with a GPU-driven pipeline.
- [Encoding argument buffers on the GPU](encoding-argument-buffers-on-the-gpu.md): Use a compute pass to encode an argument buffer and access its arguments in a subsequent render pass.
- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [MTLArgumentDescriptor](mtlargumentdescriptor.md): A representation of an argument within an argument buffer.
- [MTLArgumentEncoder](mtlargumentencoder.md): An interface you can use to encode argument data into an argument buffer.
- [MTLAttributeStrideStatic](mtlattributestridestatic.md)

### Model I/O interoperability

Load complex 3D meshes and textures from Model I/O assets, and prepare to draw them in your Metal render pipelines.

- [MTKMesh](../metalkit/mtkmesh.md): A container for the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBuffer](../metalkit/mtkmeshbuffer.md): A buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKMeshBufferAllocator](../metalkit/mtkmeshbufferallocator.md): An interface for allocating a MetalKit buffer that backs the vertex data of a Model I/O mesh, suitable for use in a Metal app.
- [MTKSubmesh](../metalkit/mtksubmesh.md): A container for the index data of a Model I/O submesh, suitable for use in a Metal app.
- [MTKModelError](../metalkit/mtkmodelerror.md): Constants used to declare Model Errors.
- [MTKMetalVertexFormatFromModelIO](../metalkit/mtkmetalvertexformatfrommodelio%28__%29.md): Returns a converted Metal vertex format.
- [MTKModelIOVertexFormatFromMetal](../metalkit/mtkmodeliovertexformatfrommetal%28__%29.md): Returns a converted Model I/O vertex format.
- [MTKMetalVertexDescriptorFromModelIO](../metalkit/mtkmetalvertexdescriptorfrommodelio%28__%29.md): Returns a partially converted Metal vertex descriptor.
- [MTKMetalVertexDescriptorFromModelIOWithError](../metalkit/mtkmetalvertexdescriptorfrommodeliowitherror.md): Returns a partially converted Metal vertex descriptor, reporting any error that occurs.
- [MTKModelIOVertexDescriptorFromMetal](../metalkit/mtkmodeliovertexdescriptorfrommetal%28__%29.md): Returns a partially converted Model I/O vertex descriptor.
- [MTKModelIOVertexDescriptorFromMetalWithError](../metalkit/mtkmodeliovertexdescriptorfrommetalwitherror.md): Returns a partially converted Model I/O vertex descriptor, reporting any error that occurs.

## See Also

### Resources

- [Resource fundamentals](resource-fundamentals.md): Control the common attributes of all Metal memory resources, including buffers and textures, and how to configure their underlying memory.
- [Textures](textures.md): Create and manage typed data your app uses to exchange information with its shader functions.
- [Memory heaps](memory-heaps.md): Take control of your app’s GPU memory management by creating a large memory allocation for various buffers, textures, and other resources.
- [Resource loading](resource-loading.md): Load assets in your games and apps quickly by running a dedicated input/output queue alongside your GPU tasks.
- [Resource synchronization](resource-synchronization.md): Prevent multiple commands that can access the same resources simultaneously by coordinating those reads and writes with barriers, fences, or events.
