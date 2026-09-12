> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecommandencoder](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecommandencoder)

# MTLAccelerationStructureCommandEncoder (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes commands that build and refit acceleration structures for a single pass.

## Declaration

```swift
protocol MTLAccelerationStructureCommandEncoder : MTLCommandEncoder
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="overview"></a>

## Overview

Create an acceleration structure encoder by calling one of the factory methods on an [MTLCommandBuffer](mtlcommandbuffer.md) instance, such as [makeAccelerationStructureCommandEncoder()](mtlcommandbuffer/makeaccelerationstructurecommandencoder%28%29.md).

<a id="Command-stages"></a>

### Command stages

Most commands apply to one stage within a pass. The following table shows which stage applies to each command:

| Function | MTLStages |
| --- | --- |
| [build(accelerationStructure:descriptor:scratchBuffer:scratchBufferOffset:)](mtlaccelerationstructurecommandencoder/build%28accelerationstructure_descriptor_scratchbuffer_scratchbufferoffset_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [copy(sourceAccelerationStructure:destinationAccelerationStructure:)](mtlaccelerationstructurecommandencoder/copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [writeCompactedSize(accelerationStructure:buffer:offset:)](mtlaccelerationstructurecommandencoder/writecompactedsize%28accelerationstructure_buffer_offset_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [writeCompactedSize(accelerationStructure:buffer:offset:sizeDataType:)](mtlaccelerationstructurecommandencoder/writecompactedsize%28accelerationstructure_buffer_offset_sizedatatype_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](mtlaccelerationstructurecommandencoder/copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [refit(sourceAccelerationStructure:descriptor:destinationAccelerationStructure:scratchBuffer:scratchBufferOffset:)](mtlaccelerationstructurecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_scratchbufferoffset_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [refit(sourceAccelerationStructure:descriptor:destinationAccelerationStructure:scratchBuffer:scratchBufferOffset:options:)](mtlaccelerationstructurecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_scratchbufferoffset_options_%29.md) | [accelerationStructure](mtlstages/accelerationstructure.md) |
| [sampleCounters(sampleBuffer:sampleIndex:barrier:)](mtlaccelerationstructurecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) | None |

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Building an acceleration structure

Construct acceleration structures from geometry data, such as for ray tracing.

- [build(accelerationStructure:descriptor:scratchBuffer:scratchBufferOffset:)](mtlaccelerationstructurecommandencoder/build%28accelerationstructure_descriptor_scratchbuffer_scratchbufferoffset_%29.md): Encodes a command to build a new acceleration structure.

### Copying an acceleration structure

Duplicate and compact acceleration structures.

- [copy(sourceAccelerationStructure:destinationAccelerationStructure:)](mtlaccelerationstructurecommandencoder/copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy the data from one acceleration structure to another.
- [writeCompactedSize(accelerationStructure:buffer:offset:)](mtlaccelerationstructurecommandencoder/writecompactedsize%28accelerationstructure_buffer_offset_%29.md): Encodes a command to calculate the compacted size of an acceleration structure.
- [writeCompactedSize(accelerationStructure:buffer:offset:sizeDataType:)](mtlaccelerationstructurecommandencoder/writecompactedsize%28accelerationstructure_buffer_offset_sizedatatype_%29.md): Encodes a command to calculate the compacted size of an acceleration structure, taking into account the size of the output data.
- [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](mtlaccelerationstructurecommandencoder/copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to compact an acceleration structure’s data and copy it into a different acceleration structure.

### Refitting an acceleration structure

Adjust acceleration structures with geometry updates.

- [refit(sourceAccelerationStructure:descriptor:destinationAccelerationStructure:scratchBuffer:scratchBufferOffset:)](mtlaccelerationstructurecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_scratchbufferoffset_%29.md): Updates an acceleration structure with new geometry or instance data.
- [refit(sourceAccelerationStructure:descriptor:destinationAccelerationStructure:scratchBuffer:scratchBufferOffset:options:)](mtlaccelerationstructurecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_scratchbufferoffset_options_%29.md): Updates an acceleration structure with new geometry or instance data, with options that control the refitting process.

### Preventing resource access conflicts

Address hazards for untracked resources with fences.

- [updateFence(\_:)](mtlaccelerationstructurecommandencoder/updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the acceleration structure pass completes.
- [waitForFence(\_:)](mtlaccelerationstructurecommandencoder/waitforfence%28__%29.md): Encodes a command that instructs the GPU to pause the acceleration structure pass until another pass updates a fence.

### Making indirect resources resident

Move data for resources without direct bindings into GPU-accessible memory — such as resources the pass accesses through an argument buffer.

- [useHeap(\_:)](mtlaccelerationstructurecommandencoder/useheap%28__%29.md): Makes the resources contained in the specified heap available to the acceleration structure pass.
- [useHeaps(\_:)](mtlaccelerationstructurecommandencoder/useheaps%28__%29.md): Makes the resources contained in the specified heaps available to the acceleration structure pass.
- [useResource(\_:usage:)](mtlaccelerationstructurecommandencoder/useresource%28__usage_%29.md): Makes a resource available to the acceleration structure pass.
- [useResources(\_:usage:)](mtlaccelerationstructurecommandencoder/useresources%28__usage_%29.md): Makes multiple resources available to the acceleration structure pass.
- [MTLResourceUsage](mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.

### Sampling counters

Capture runtime data from GPU hardware counters.

- [sampleCounters(sampleBuffer:sampleIndex:barrier:)](mtlaccelerationstructurecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md): Encodes a command to sample hardware counters at this point in the acceleration structure pass and store the samples into a counter sample buffer.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Acceleration structures

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md): Simplify data access and improve GPU utilization by storing custom primitive data directly in the acceleration structure.
- [MTLAccelerationStructure](mtlaccelerationstructure.md): A collection of model data for GPU-accelerated intersection of rays with the model.
- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md): Base class for Metal 4 acceleration structure descriptors.
- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md): A base class for classes that define the configuration for a new acceleration structure.
- [MTL4PrimitiveAccelerationStructureDescriptor](mtl4primitiveaccelerationstructuredescriptor.md): Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)

# MTLAccelerationStructureCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes commands that build and refit acceleration structures for a single pass.

## Declaration

```objectivec
@protocol MTLAccelerationStructureCommandEncoder <MTLCommandEncoder>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)

<a id="overview"></a>

## Overview

Create an acceleration structure encoder by calling one of the factory methods on an [MTLCommandBuffer](mtlcommandbuffer.md) instance, such as [accelerationStructureCommandEncoder](mtlcommandbuffer/makeaccelerationstructurecommandencoder%28%29.md).

<a id="Command-stages"></a>

### Command stages

Most commands apply to one stage within a pass. The following table shows which stage applies to each command:

| Function | MTLStages |
| --- | --- |
| [buildAccelerationStructure:descriptor:scratchBuffer:scratchBufferOffset:](mtlaccelerationstructurecommandencoder/build%28accelerationstructure_descriptor_scratchbuffer_scratchbufferoffset_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [copyAccelerationStructure:toAccelerationStructure:](mtlaccelerationstructurecommandencoder/copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [writeCompactedAccelerationStructureSize:toBuffer:offset:](mtlaccelerationstructurecommandencoder/writecompactedsize%28accelerationstructure_buffer_offset_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [writeCompactedAccelerationStructureSize:toBuffer:offset:sizeDataType:](mtlaccelerationstructurecommandencoder/writecompactedsize%28accelerationstructure_buffer_offset_sizedatatype_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [copyAndCompactAccelerationStructure:toAccelerationStructure:](mtlaccelerationstructurecommandencoder/copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [refitAccelerationStructure:descriptor:destination:scratchBuffer:scratchBufferOffset:](mtlaccelerationstructurecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_scratchbufferoffset_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [refitAccelerationStructure:descriptor:destination:scratchBuffer:scratchBufferOffset:options:](mtlaccelerationstructurecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_scratchbufferoffset_options_%29.md) | [MTLStageAccelerationStructure](mtlstages/accelerationstructure.md) |
| [sampleCountersInBuffer:atSampleIndex:withBarrier:](mtlaccelerationstructurecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) | None |

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Building an acceleration structure

Construct acceleration structures from geometry data, such as for ray tracing.

- [buildAccelerationStructure:descriptor:scratchBuffer:scratchBufferOffset:](mtlaccelerationstructurecommandencoder/build%28accelerationstructure_descriptor_scratchbuffer_scratchbufferoffset_%29.md): Encodes a command to build a new acceleration structure.

### Copying an acceleration structure

Duplicate and compact acceleration structures.

- [copyAccelerationStructure:toAccelerationStructure:](mtlaccelerationstructurecommandencoder/copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy the data from one acceleration structure to another.
- [writeCompactedAccelerationStructureSize:toBuffer:offset:](mtlaccelerationstructurecommandencoder/writecompactedsize%28accelerationstructure_buffer_offset_%29.md): Encodes a command to calculate the compacted size of an acceleration structure.
- [writeCompactedAccelerationStructureSize:toBuffer:offset:sizeDataType:](mtlaccelerationstructurecommandencoder/writecompactedsize%28accelerationstructure_buffer_offset_sizedatatype_%29.md): Encodes a command to calculate the compacted size of an acceleration structure, taking into account the size of the output data.
- [copyAndCompactAccelerationStructure:toAccelerationStructure:](mtlaccelerationstructurecommandencoder/copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to compact an acceleration structure’s data and copy it into a different acceleration structure.

### Refitting an acceleration structure

Adjust acceleration structures with geometry updates.

- [refitAccelerationStructure:descriptor:destination:scratchBuffer:scratchBufferOffset:](mtlaccelerationstructurecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_scratchbufferoffset_%29.md): Updates an acceleration structure with new geometry or instance data.
- [refitAccelerationStructure:descriptor:destination:scratchBuffer:scratchBufferOffset:options:](mtlaccelerationstructurecommandencoder/refit%28sourceaccelerationstructure_descriptor_destinationaccelerationstructure_scratchbuffer_scratchbufferoffset_options_%29.md): Updates an acceleration structure with new geometry or instance data, with options that control the refitting process.

### Preventing resource access conflicts

Address hazards for untracked resources with fences.

- [updateFence:](mtlaccelerationstructurecommandencoder/updatefence%28__%29.md): Encodes a command that instructs the GPU to update a fence after the acceleration structure pass completes.
- [waitForFence:](mtlaccelerationstructurecommandencoder/waitforfence%28__%29.md): Encodes a command that instructs the GPU to pause the acceleration structure pass until another pass updates a fence.

### Making indirect resources resident

Move data for resources without direct bindings into GPU-accessible memory — such as resources the pass accesses through an argument buffer.

- [useHeap:](mtlaccelerationstructurecommandencoder/useheap%28__%29.md): Makes the resources contained in the specified heap available to the acceleration structure pass.
- [useHeaps:count:](mtlaccelerationstructurecommandencoder/useheaps_count_.md): Specifies that an array of heaps containing resources in an argument buffer can be safely used by the acceleration structure pass.
- [useResource:usage:](mtlaccelerationstructurecommandencoder/useresource%28__usage_%29.md): Makes a resource available to the acceleration structure pass.
- [useResources:count:usage:](mtlaccelerationstructurecommandencoder/useresources_count_usage_.md): Specifies that an array of resources in an argument buffer can be safely used by the acceleration structure pass.
- [MTLResourceUsage](mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.

### Sampling counters

Capture runtime data from GPU hardware counters.

- [sampleCountersInBuffer:atSampleIndex:withBarrier:](mtlaccelerationstructurecommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md): Encodes a command to sample hardware counters at this point in the acceleration structure pass and store the samples into a counter sample buffer.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)

## See Also

### Acceleration structures

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md): Simplify data access and improve GPU utilization by storing custom primitive data directly in the acceleration structure.
- [MTLAccelerationStructure](mtlaccelerationstructure.md): A collection of model data for GPU-accelerated intersection of rays with the model.
- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md): Base class for Metal 4 acceleration structure descriptors.
- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md): A base class for classes that define the configuration for a new acceleration structure.
- [MTL4PrimitiveAccelerationStructureDescriptor](mtl4primitiveaccelerationstructuredescriptor.md): Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)
