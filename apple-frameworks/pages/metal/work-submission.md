> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/work-submission](https://developer.apple.com/documentation/metal/work-submission)

# Work submission (Swift)

**Framework:** Metal  
**Kind:** API Collection

Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.

## Topics

### Creating command queues

Command queues encode and submit work to the GPU, which include render, compute, and blit passes.

- [makeCommandQueue()](mtldevice/makecommandqueue%28%29.md): Creates a queue you use to submit rendering and computation commands to a GPU.
- [makeCommandQueue(maxCommandBufferCount:)](mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md): Creates a queue you use to submit rendering and computation commands to a GPU that has a fixed number of uncompleted command buffers.

### Creating residency sets

A residency set makes a group of resources, such as buffers, textures, and heaps, accessible to a GPU for your command buffers and their shaders.

- [makeResidencySet(descriptor:)](mtldevice/makeresidencyset%28descriptor_%29.md): Creates a residency set, which can move resources in and out of memory residency.

### Creating I/O command queues

Input/Output command queues load assets from the file system into textures, GPU buffers, and traditional CPU buffers.

- [makeIOCommandQueue(descriptor:)](mtldevice/makeiocommandqueue%28descriptor_%29.md): Creates an input/output command queue you use to submit commands that load assets from the file system into GPU resources or system memory.

### Creating I/O file handles

Input/Output file handles each represent an asset in the file system that an I/O command queue loads into a resource for your app.

- [makeIOFileHandle(url:)](mtldevice/makeiofilehandle%28url_%29.md): Creates an input/output file handle instance that represents a file at a URL.
- [makeIOFileHandle(url:compressionMethod:)](mtldevice/makeiofilehandle%28url_compressionmethod_%29.md): Creates an input/output file handle instance that represents a compressed file at a URL.
- [makeIOHandle(url:)](mtldevice/makeiohandle%28url_%29.md): Deprecated. Creates an input/output file handle instance that represents a file at a URL.
- [makeIOHandle(url:compressionMethod:)](mtldevice/makeiohandle%28url_compressionmethod_%29.md): Deprecated. Creates an input/output file handle instance that represents a compressed file at a URL.

### Creating indirect command buffers

Indirect command buffers (ICBs) store commands that you can reuse throughout your app’s lifetime, instead of encoding the same commands repeatedly.

- [makeIndirectCommandBuffer(descriptor:maxCommandCount:options:)](mtldevice/makeindirectcommandbuffer%28descriptor_maxcommandcount_options_%29.md): Creates an indirect command buffer instance.

## See Also

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Pipeline state creation](pipeline-state-creation.md): Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.
- [Resource creation](resource-creation.md): Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.
- [Shader library and archive creation](shader-library-and-archive-creation.md): Create static and dynamic shader libraries, and binary shader archives.

# Work submission (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.

## Topics

### Creating command queues

Command queues encode and submit work to the GPU, which include render, compute, and blit passes.

- [newCommandQueue](mtldevice/makecommandqueue%28%29.md): Creates a queue you use to submit rendering and computation commands to a GPU.
- [newCommandQueueWithMaxCommandBufferCount:](mtldevice/makecommandqueue%28maxcommandbuffercount_%29.md): Creates a queue you use to submit rendering and computation commands to a GPU that has a fixed number of uncompleted command buffers.

### Creating residency sets

A residency set makes a group of resources, such as buffers, textures, and heaps, accessible to a GPU for your command buffers and their shaders.

- [newResidencySetWithDescriptor:error:](mtldevice/makeresidencyset%28descriptor_%29.md): Creates a residency set, which can move resources in and out of memory residency.

### Creating I/O command queues

Input/Output command queues load assets from the file system into textures, GPU buffers, and traditional CPU buffers.

- [newIOCommandQueueWithDescriptor:error:](mtldevice/makeiocommandqueue%28descriptor_%29.md): Creates an input/output command queue you use to submit commands that load assets from the file system into GPU resources or system memory.

### Creating I/O file handles

Input/Output file handles each represent an asset in the file system that an I/O command queue loads into a resource for your app.

- [newIOFileHandleWithURL:error:](mtldevice/makeiofilehandle%28url_%29.md): Creates an input/output file handle instance that represents a file at a URL.
- [newIOFileHandleWithURL:compressionMethod:error:](mtldevice/makeiofilehandle%28url_compressionmethod_%29.md): Creates an input/output file handle instance that represents a compressed file at a URL.
- [newIOHandleWithURL:error:](mtldevice/makeiohandle%28url_%29.md): Deprecated. Creates an input/output file handle instance that represents a file at a URL.
- [newIOHandleWithURL:compressionMethod:error:](mtldevice/makeiohandle%28url_compressionmethod_%29.md): Deprecated. Creates an input/output file handle instance that represents a compressed file at a URL.

### Creating indirect command buffers

Indirect command buffers (ICBs) store commands that you can reuse throughout your app’s lifetime, instead of encoding the same commands repeatedly.

- [newIndirectCommandBufferWithDescriptor:maxCommandCount:options:](mtldevice/makeindirectcommandbuffer%28descriptor_maxcommandcount_options_%29.md): Creates an indirect command buffer instance.

## See Also

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Pipeline state creation](pipeline-state-creation.md): Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.
- [Resource creation](resource-creation.md): Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.
- [Shader library and archive creation](shader-library-and-archive-creation.md): Create static and dynamic shader libraries, and binary shader archives.
