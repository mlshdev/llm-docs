> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructure](https://developer.apple.com/documentation/metal/mtlaccelerationstructure)

# MTLAccelerationStructure (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A collection of model data for GPU-accelerated intersection of rays with the model.

## Declaration

```swift
protocol MTLAccelerationStructure : MTLResource
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)

<a id="overview"></a>

## Overview

To accelerate ray tracing, the device instance needs to reorganize your model data into an optimized data structure for intersection testing on that GPU. Create  [MTLAccelerationStructure](mtlaccelerationstructure.md) instances to contain your model data and reference them in compute and render  commands that execute ray-tracing operations.

You don’t define classes that implement this protocol. To create an acceleration structure, you create a descriptor instance and configure its properties with your model data. Then call the [makeAccelerationStructure(descriptor:)](mtldevice/makeaccelerationstructure%28descriptor_%29.md) method on the Metal device instance to create the instance and reserve memory for the structure. To populate the structure with the data, use an [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md) to encode GPU commands.

Metal provides multiple descriptor classes, each describing a different type of model data. Choose the appropriate descriptor for each acceleration structure you want to make. Most often, you create an acceleration structure for each list of triangles or bounding boxes. Then collect related geometry structures into a primitive acceleration structure. Create instance acceleration structures when you need to reference instances of primitive acceleration structures at different locations within a scene.

The table below summarizes the descriptor classes:

| Descriptor class | Usage |
| --- | --- |
| [MTLAccelerationStructureTriangleGeometryDescriptor](mtlaccelerationstructuretrianglegeometrydescriptor.md) | Describes an acceleration structure for a list of triangles. |
| [MTLAccelerationStructureBoundingBoxGeometryDescriptor](mtlaccelerationstructureboundingboxgeometrydescriptor.md) | Describes an acceleration structure for a list of bounding boxes. |
| [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md) | Describes an acceleration structure for a list of bounding-box or triangle acceleration structures, effectively creating a union of all of the underlying geometry. |
| [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md) | Describes an acceleration structure for a list of instances of primitive acceleration structures. |

## Topics

### Reading the structure’s size

- [size](mtlaccelerationstructure/size.md): The size of the acceleration structure’s memory allocation, in bytes.

### Instance Properties

- [gpuResourceID](mtlaccelerationstructure/gpuresourceid.md)

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [MTLResource](mtlresource.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Acceleration structures

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md): Simplify data access and improve GPU utilization by storing custom primitive data directly in the acceleration structure.
- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md): Base class for Metal 4 acceleration structure descriptors.
- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md): A base class for classes that define the configuration for a new acceleration structure.
- [MTL4PrimitiveAccelerationStructureDescriptor](mtl4primitiveaccelerationstructuredescriptor.md): Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)

# MTLAccelerationStructure (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A collection of model data for GPU-accelerated intersection of rays with the model.

## Declaration

```objectivec
@protocol MTLAccelerationStructure <MTLResource>
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)

<a id="overview"></a>

## Overview

To accelerate ray tracing, the device instance needs to reorganize your model data into an optimized data structure for intersection testing on that GPU. Create  [MTLAccelerationStructure](mtlaccelerationstructure.md) instances to contain your model data and reference them in compute and render  commands that execute ray-tracing operations.

You don’t define classes that implement this protocol. To create an acceleration structure, you create a descriptor instance and configure its properties with your model data. Then call the [newAccelerationStructureWithDescriptor:](mtldevice/makeaccelerationstructure%28descriptor_%29.md) method on the Metal device instance to create the instance and reserve memory for the structure. To populate the structure with the data, use an [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md) to encode GPU commands.

Metal provides multiple descriptor classes, each describing a different type of model data. Choose the appropriate descriptor for each acceleration structure you want to make. Most often, you create an acceleration structure for each list of triangles or bounding boxes. Then collect related geometry structures into a primitive acceleration structure. Create instance acceleration structures when you need to reference instances of primitive acceleration structures at different locations within a scene.

The table below summarizes the descriptor classes:

| Descriptor class | Usage |
| --- | --- |
| [MTLAccelerationStructureTriangleGeometryDescriptor](mtlaccelerationstructuretrianglegeometrydescriptor.md) | Describes an acceleration structure for a list of triangles. |
| [MTLAccelerationStructureBoundingBoxGeometryDescriptor](mtlaccelerationstructureboundingboxgeometrydescriptor.md) | Describes an acceleration structure for a list of bounding boxes. |
| [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md) | Describes an acceleration structure for a list of bounding-box or triangle acceleration structures, effectively creating a union of all of the underlying geometry. |
| [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md) | Describes an acceleration structure for a list of instances of primitive acceleration structures. |

## Topics

### Reading the structure’s size

- [size](mtlaccelerationstructure/size.md): The size of the acceleration structure’s memory allocation, in bytes.

### Instance Properties

- [gpuResourceID](mtlaccelerationstructure/gpuresourceid.md)

## Relationships

### Inherits From

- [MTLResource](mtlresource.md)

## See Also

### Acceleration structures

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md): Simplify data access and improve GPU utilization by storing custom primitive data directly in the acceleration structure.
- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md): Base class for Metal 4 acceleration structure descriptors.
- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md): A base class for classes that define the configuration for a new acceleration structure.
- [MTL4PrimitiveAccelerationStructureDescriptor](mtl4primitiveaccelerationstructuredescriptor.md): Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)
