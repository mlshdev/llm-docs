> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeaccelerationstructure(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makeaccelerationstructure(descriptor:))

# makeAccelerationStructure(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new ray-tracing acceleration structure from a descriptor.

## Declaration

```swift
func makeAccelerationStructure(descriptor: MTLAccelerationStructureDescriptor) -> (any MTLAccelerationStructure)?
```

## Parameters

- `descriptor`: An [MTLAccelerationStructureDescriptor](../mtlaccelerationstructuredescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLAccelerationStructure](../mtlaccelerationstructure.md) instance if the method completed successfully; otherwise `nil`.

## See Also

### Creating acceleration structures for ray tracing

- [makeAccelerationStructure(size:)](makeaccelerationstructure%28size_%29.md): Creates a new acceleration structure with a specific size.
- [accelerationStructureSizes(descriptor:)](accelerationstructuresizes%28descriptor_%29.md): Returns the buffer sizes the GPU device needs to build, refit, and store an acceleration structure.
- [MTLAccelerationStructureSizes](../mtlaccelerationstructuresizes.md): The expected sizes for a ray-tracing acceleration structure.

# newAccelerationStructureWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new ray-tracing acceleration structure from a descriptor.

## Declaration

```objectivec
- (id<MTLAccelerationStructure>) newAccelerationStructureWithDescriptor:(MTLAccelerationStructureDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLAccelerationStructureDescriptor](../mtlaccelerationstructuredescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLAccelerationStructure](../mtlaccelerationstructure.md) instance if the method completed successfully; otherwise `nil`.

## See Also

### Creating acceleration structures for ray tracing

- [newAccelerationStructureWithSize:](makeaccelerationstructure%28size_%29.md): Creates a new acceleration structure with a specific size.
- [accelerationStructureSizesWithDescriptor:](accelerationstructuresizes%28descriptor_%29.md): Returns the buffer sizes the GPU device needs to build, refit, and store an acceleration structure.
- [MTLAccelerationStructureSizes](../mtlaccelerationstructuresizes.md): The expected sizes for a ray-tracing acceleration structure.
