> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice](https://developer.apple.com/documentation/metal/mtldevice)

# MTLDevice (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The main Metal interface to a GPU that apps use to draw graphics and run computations in parallel.

## Declaration

```swift
protocol MTLDevice : NSObjectProtocol, Sendable
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md)
- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md)
- [Converting GPU timestamps into CPU time](converting-gpu-timestamps-into-cpu-time.md)
- [Creating an indirect command buffer](creating-an-indirect-command-buffer.md)
- [Creating binary archives from device-built pipeline state objects](creating-binary-archives-from-device-built-pipeline-state-objects.md)
- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md)
- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md)
- [Developing Metal apps that run in Simulator](developing-metal-apps-that-run-in-simulator.md)
- [Getting the default GPU](getting-the-default-gpu.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Improving rendering performance with vertex amplification](improving-rendering-performance-with-vertex-amplification.md)
- [Improving your game’s graphics performance and settings](improving-your-games-graphics-performance-and-settings.md)
- [Minimizing the binary size of a shader library](minimizing-the-binary-size-of-a-shader-library.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Synchronizing passes with a fence](synchronizing-passes-with-a-fence.md)
- [Using the Metal 4 compilation API](using-the-metal-4-compilation-api.md)

<a id="overview"></a>

## Overview

You can get the default [MTLDevice](mtldevice.md) at runtime by calling [MTLCreateSystemDefaultDevice()](mtlcreatesystemdefaultdevice%28%29.md) (see [Getting the default GPU](getting-the-default-gpu.md)). Each Metal device instance represents a GPU and is the main starting point for your app’s interaction with it. With a Metal device instance, you can inspect a GPU’s features and capabilities (see [Device inspection](device-inspection.md)) and create subsidiary type instances with its factory methods.

- Buffers, textures, and other resources store, synchronize, and pass data between the GPU and CPU (see [Resource fundamentals](resource-fundamentals.md)).
- Input/Output command queues efficiently load resources from the file system (see [Resource loading](resource-loading.md)).
- Command queues create command encoders and schedule work for the GPU, including rendering and compute commands (see [Render passes](render-passes.md) and [Compute passes](compute-passes.md)).
- Pipeline states store render or compute pipeline configurations — which can be expensive to create — so that you can reuse them, potentially many times.

If your app uses more than one GPU (see [Multi-GPU systems](multi-gpu-systems.md)), ensure that instances of these types only interact with others from the same device. For example, your app can pass a texture to a command encoder that comes from the same Metal device, but not to another device.

## Topics

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Work submission](work-submission.md): Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.
- [Pipeline state creation](pipeline-state-creation.md): Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.
- [Resource creation](resource-creation.md): Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.
- [Shader library and archive creation](shader-library-and-archive-creation.md): Create static and dynamic shader libraries, and binary shader archives.

### Instance Properties

- [maximumConcurrentCompilationTaskCount](mtldevice/maximumconcurrentcompilationtaskcount.md): The maximum number of concurrent compilation tasks the device is running.
- [shouldMaximizeConcurrentCompilation](mtldevice/shouldmaximizeconcurrentcompilation.md): A Boolean value that indicates whether the device uses additional CPU threads for compilation tasks.
- [supportsPlacementSparse](mtldevice/supportsplacementsparse.md): A Boolean value that indicates whether the device supports placement sparse resources.

### Instance Methods

- [functionHandle(function:)](mtldevice/functionhandle%28function_%29-4bw39.md)
- [functionHandle(function:)](mtldevice/functionhandle%28function_%29-w9ia.md): Get the function handle for the specified binary-linked function from the pipeline state.
- [makeArchive(url:)](mtldevice/makearchive%28url_%29.md): Creates a new archive from data available at an `NSURL` address.
- [makeArgumentTable(descriptor:)](mtldevice/makeargumenttable%28descriptor_%29.md): Creates a new argument table from an argument table descriptor.
- [makeBuffer(length:options:placementSparsePageSize:)](mtldevice/makebuffer%28length_options_placementsparsepagesize_%29.md): Creates a new placement sparse buffer of a specific length.
- [makeCommandAllocator()](mtldevice/makecommandallocator%28%29.md): Creates a new command allocator.
- [makeCommandAllocator(descriptor:)](mtldevice/makecommandallocator%28descriptor_%29.md): Creates a new command allocator from a command allocator descriptor.
- [makeCommandBuffer()](mtldevice/makecommandbuffer%28%29.md): Creates a new command buffer.
- [makeCommandQueue(descriptor:)](mtldevice/makecommandqueue%28descriptor_%29.md): Creates a command queue with the provided configuration.
- [makeCompiler(descriptor:)](mtldevice/makecompiler%28descriptor_%29.md): Creates a new compiler from a compiler descriptor.
- [makeCounterHeap(descriptor:)](mtldevice/makecounterheap%28descriptor_%29.md): Creates a new counter heap configured from a counter heap descriptor.
- [makeLogState(descriptor:)](mtldevice/makelogstate%28descriptor_%29.md): Creates a shader log state with the provided configuration.
- [makeMTL4CommandQueue()](mtldevice/makemtl4commandqueue%28%29.md): Creates a new command queue.
- [makeMTL4CommandQueue(descriptor:)](mtldevice/makemtl4commandqueue%28descriptor_%29.md): Creates a new command queue from a queue descriptor.
- [makePipelineDataSetSerializer(descriptor:)](mtldevice/makepipelinedatasetserializer%28descriptor_%29.md): Creates a new pipeline data set serializer instance from a descriptor.
- [makeTensor(descriptor:)](mtldevice/maketensor%28descriptor_%29.md): Creates a tensor with the specified descriptor.
- [makeTensor(descriptor:attachments:)](mtldevice/maketensor%28descriptor_attachments_%29.md): Creates a tensor with the specified descriptor and per-plane buffer backing storage.
- [makeTextureViewPool(descriptor:)](mtldevice/maketextureviewpool%28descriptor_%29.md): Creates a new texture view pool from a resource view pool descriptor.
- [queryTimestampFrequency()](mtldevice/querytimestampfrequency%28%29.md): Queries the frequency of the GPU timestamp in ticks per second.
- [size(ofCounterHeapEntry:)](mtldevice/size%28ofcounterheapentry_%29.md): Returns the size, in bytes, of each entry in a counter heap of a specific counter heap type when your app resolves it into a usable format.
- [tensorSizeAndAlign(descriptor:)](mtldevice/tensorsizeandalign%28descriptor_%29.md): Determines the size and alignment required to hold the data plane of a tensor you create with a descriptor in a buffer.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Locating and inspecting a GPU device

- [Getting the default GPU](getting-the-default-gpu.md): Select the system’s default GPU device on which to run your Metal code.
- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md): Use the device object’s properties to determine how you perform tasks in Metal.
- [MTLCreateSystemDefaultDevice()](mtlcreatesystemdefaultdevice%28%29.md): Returns the device instance Metal selects as the default.
- [Multi-GPU systems](multi-gpu-systems.md): Locate and work with internal and external GPUs and their displays, video memory, and performance tradeoffs.

# MTLDevice (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The main Metal interface to a GPU that apps use to draw graphics and run computations in parallel.

## Declaration

```objectivec
@protocol MTLDevice <NSObject>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md)
- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md)
- [Converting GPU timestamps into CPU time](converting-gpu-timestamps-into-cpu-time.md)
- [Creating an indirect command buffer](creating-an-indirect-command-buffer.md)
- [Creating binary archives from device-built pipeline state objects](creating-binary-archives-from-device-built-pipeline-state-objects.md)
- [Creating sparse heaps and sparse textures](creating-sparse-heaps-and-sparse-textures.md)
- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md)
- [Developing Metal apps that run in Simulator](developing-metal-apps-that-run-in-simulator.md)
- [Getting the default GPU](getting-the-default-gpu.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Improving rendering performance with vertex amplification](improving-rendering-performance-with-vertex-amplification.md)
- [Improving your game’s graphics performance and settings](improving-your-games-graphics-performance-and-settings.md)
- [Minimizing the binary size of a shader library](minimizing-the-binary-size-of-a-shader-library.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Synchronizing passes with a fence](synchronizing-passes-with-a-fence.md)
- [Using the Metal 4 compilation API](using-the-metal-4-compilation-api.md)

<a id="overview"></a>

## Overview

You can get the default [MTLDevice](mtldevice.md) at runtime by calling [MTLCreateSystemDefaultDevice](mtlcreatesystemdefaultdevice%28%29.md) (see [Getting the default GPU](getting-the-default-gpu.md)). Each Metal device instance represents a GPU and is the main starting point for your app’s interaction with it. With a Metal device instance, you can inspect a GPU’s features and capabilities (see [Device inspection](device-inspection.md)) and create subsidiary type instances with its factory methods.

- Buffers, textures, and other resources store, synchronize, and pass data between the GPU and CPU (see [Resource fundamentals](resource-fundamentals.md)).
- Input/Output command queues efficiently load resources from the file system (see [Resource loading](resource-loading.md)).
- Command queues create command encoders and schedule work for the GPU, including rendering and compute commands (see [Render passes](render-passes.md) and [Compute passes](compute-passes.md)).
- Pipeline states store render or compute pipeline configurations — which can be expensive to create — so that you can reuse them, potentially many times.

If your app uses more than one GPU (see [Multi-GPU systems](multi-gpu-systems.md)), ensure that instances of these types only interact with others from the same device. For example, your app can pass a texture to a command encoder that comes from the same Metal device, but not to another device.

## Topics

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Work submission](work-submission.md): Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.
- [Pipeline state creation](pipeline-state-creation.md): Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.
- [Resource creation](resource-creation.md): Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.
- [Shader library and archive creation](shader-library-and-archive-creation.md): Create static and dynamic shader libraries, and binary shader archives.

### Instance Properties

- [maximumConcurrentCompilationTaskCount](mtldevice/maximumconcurrentcompilationtaskcount.md): The maximum number of concurrent compilation tasks the device is running.
- [shouldMaximizeConcurrentCompilation](mtldevice/shouldmaximizeconcurrentcompilation.md): A Boolean value that indicates whether the device uses additional CPU threads for compilation tasks.
- [supportsPlacementSparse](mtldevice/supportsplacementsparse.md): A Boolean value that indicates whether the device supports placement sparse resources.

### Instance Methods

- [functionHandleWithFunction:](mtldevice/functionhandle%28function_%29-4bw39.md)
- [functionHandleWithBinaryFunction:](mtldevice/functionhandle%28function_%29-w9ia.md): Get the function handle for the specified binary-linked function from the pipeline state.
- [newArchiveWithURL:error:](mtldevice/makearchive%28url_%29.md): Creates a new archive from data available at an `NSURL` address.
- [newArgumentTableWithDescriptor:error:](mtldevice/makeargumenttable%28descriptor_%29.md): Creates a new argument table from an argument table descriptor.
- [newBufferWithLength:options:placementSparsePageSize:](mtldevice/makebuffer%28length_options_placementsparsepagesize_%29.md): Creates a new placement sparse buffer of a specific length.
- [newCommandAllocator](mtldevice/makecommandallocator%28%29.md): Creates a new command allocator.
- [newCommandAllocatorWithDescriptor:error:](mtldevice/makecommandallocator%28descriptor_%29.md): Creates a new command allocator from a command allocator descriptor.
- [newCommandBuffer](mtldevice/makecommandbuffer%28%29.md): Creates a new command buffer.
- [newCommandQueueWithDescriptor:](mtldevice/makecommandqueue%28descriptor_%29.md): Creates a command queue with the provided configuration.
- [newCompilerWithDescriptor:error:](mtldevice/makecompiler%28descriptor_%29.md): Creates a new compiler from a compiler descriptor.
- [newCounterHeapWithDescriptor:error:](mtldevice/makecounterheap%28descriptor_%29.md): Creates a new counter heap configured from a counter heap descriptor.
- [newLogStateWithDescriptor:error:](mtldevice/makelogstate%28descriptor_%29.md): Creates a shader log state with the provided configuration.
- [newMTL4CommandQueue](mtldevice/makemtl4commandqueue%28%29.md): Creates a new command queue.
- [newMTL4CommandQueueWithDescriptor:error:](mtldevice/makemtl4commandqueue%28descriptor_%29.md): Creates a new command queue from a queue descriptor.
- [newPipelineDataSetSerializerWithDescriptor:](mtldevice/makepipelinedatasetserializer%28descriptor_%29.md): Creates a new pipeline data set serializer instance from a descriptor.
- [newTensorWithDescriptor:error:](mtldevice/maketensor%28descriptor_%29.md): Creates a tensor with the specified descriptor.
- [newTensorWithDescriptor:attachments:error:](mtldevice/maketensor%28descriptor_attachments_%29.md): Creates a tensor with the specified descriptor and per-plane buffer backing storage.
- [newTextureViewPoolWithDescriptor:error:](mtldevice/maketextureviewpool%28descriptor_%29.md): Creates a new texture view pool from a resource view pool descriptor.
- [queryTimestampFrequency](mtldevice/querytimestampfrequency%28%29.md): Queries the frequency of the GPU timestamp in ticks per second.
- [sizeOfCounterHeapEntry:](mtldevice/size%28ofcounterheapentry_%29.md): Returns the size, in bytes, of each entry in a counter heap of a specific counter heap type when your app resolves it into a usable format.
- [tensorSizeAndAlignWithDescriptor:](mtldevice/tensorsizeandalign%28descriptor_%29.md): Determines the size and alignment required to hold the data plane of a tensor you create with a descriptor in a buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Locating and inspecting a GPU device

- [Getting the default GPU](getting-the-default-gpu.md): Select the system’s default GPU device on which to run your Metal code.
- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md): Use the device object’s properties to determine how you perform tasks in Metal.
- [MTLCreateSystemDefaultDevice](mtlcreatesystemdefaultdevice%28%29.md): Returns the device instance Metal selects as the default.
- [Multi-GPU systems](multi-gpu-systems.md): Locate and work with internal and external GPUs and their displays, video memory, and performance tradeoffs.
