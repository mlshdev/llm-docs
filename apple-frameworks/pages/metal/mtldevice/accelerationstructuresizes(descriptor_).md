> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/accelerationstructuresizes(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/accelerationstructuresizes(descriptor:))

# accelerationStructureSizes(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the buffer sizes the GPU device needs to build, refit, and store an acceleration structure.

## Declaration

```swift
func accelerationStructureSizes(descriptor: MTLAccelerationStructureDescriptor) -> MTLAccelerationStructureSizes
```

## Parameters

- `descriptor`: An [MTLAccelerationStructureDescriptor](../mtlaccelerationstructuredescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLAccelerationStructureSizes](../mtlaccelerationstructuresizes.md) instance.

## See Also

### Creating acceleration structures for ray tracing

- [makeAccelerationStructure(descriptor:)](makeaccelerationstructure%28descriptor_%29.md): Creates a new ray-tracing acceleration structure from a descriptor.
- [makeAccelerationStructure(size:)](makeaccelerationstructure%28size_%29.md): Creates a new acceleration structure with a specific size.
- [MTLAccelerationStructureSizes](../mtlaccelerationstructuresizes.md): The expected sizes for a ray-tracing acceleration structure.

# accelerationStructureSizesWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the buffer sizes the GPU device needs to build, refit, and store an acceleration structure.

## Declaration

```objectivec
- (MTLAccelerationStructureSizes) accelerationStructureSizesWithDescriptor:(MTLAccelerationStructureDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLAccelerationStructureDescriptor](../mtlaccelerationstructuredescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLAccelerationStructureSizes](../mtlaccelerationstructuresizes.md) instance.

## See Also

### Creating acceleration structures for ray tracing

- [newAccelerationStructureWithDescriptor:](makeaccelerationstructure%28descriptor_%29.md): Creates a new ray-tracing acceleration structure from a descriptor.
- [newAccelerationStructureWithSize:](makeaccelerationstructure%28size_%29.md): Creates a new acceleration structure with a specific size.
- [MTLAccelerationStructureSizes](../mtlaccelerationstructuresizes.md): The expected sizes for a ray-tracing acceleration structure.
