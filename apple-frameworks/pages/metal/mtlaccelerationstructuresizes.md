> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuresizes](https://developer.apple.com/documentation/metal/mtlaccelerationstructuresizes)

# MTLAccelerationStructureSizes (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The expected sizes for a ray-tracing acceleration structure.

## Declaration

```swift
struct MTLAccelerationStructureSizes
```

## Topics

### Retrieving the sizes

- [accelerationStructureSize](mtlaccelerationstructuresizes/accelerationstructuresize.md): The size of the acceleration structure, in bytes.
- [buildScratchBufferSize](mtlaccelerationstructuresizes/buildscratchbuffersize.md): The amount of scratch memory, in bytes, the GPU devices needs to build the acceleration structure.
- [refitScratchBufferSize](mtlaccelerationstructuresizes/refitscratchbuffersize.md): The amount of scratch memory, in bytes, the GPU device needs to refit the acceleration structure.

### Creating an acceleration size structure

- [init()](mtlaccelerationstructuresizes/init%28%29.md): Creates an acceleration sizes instance with default values.
- [init(accelerationStructureSize:buildScratchBufferSize:refitScratchBufferSize:)](mtlaccelerationstructuresizes/init%28accelerationstructuresize_buildscratchbuffersize_refitscratchbuffersize_%29.md): Creates an acceleration sizes instance with specific values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating acceleration structures for ray tracing

- [makeAccelerationStructure(descriptor:)](mtldevice/makeaccelerationstructure%28descriptor_%29.md): Creates a new ray-tracing acceleration structure from a descriptor.
- [makeAccelerationStructure(size:)](mtldevice/makeaccelerationstructure%28size_%29.md): Creates a new acceleration structure with a specific size.
- [accelerationStructureSizes(descriptor:)](mtldevice/accelerationstructuresizes%28descriptor_%29.md): Returns the buffer sizes the GPU device needs to build, refit, and store an acceleration structure.

# MTLAccelerationStructureSizes (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The expected sizes for a ray-tracing acceleration structure.

## Declaration

```objectivec
typedef struct { ... } MTLAccelerationStructureSizes;
```

## Topics

### Retrieving the sizes

- [accelerationStructureSize](mtlaccelerationstructuresizes/accelerationstructuresize.md): The size of the acceleration structure, in bytes.
- [buildScratchBufferSize](mtlaccelerationstructuresizes/buildscratchbuffersize.md): The amount of scratch memory, in bytes, the GPU devices needs to build the acceleration structure.
- [refitScratchBufferSize](mtlaccelerationstructuresizes/refitscratchbuffersize.md): The amount of scratch memory, in bytes, the GPU device needs to refit the acceleration structure.

## See Also

### Creating acceleration structures for ray tracing

- [newAccelerationStructureWithDescriptor:](mtldevice/makeaccelerationstructure%28descriptor_%29.md): Creates a new ray-tracing acceleration structure from a descriptor.
- [newAccelerationStructureWithSize:](mtldevice/makeaccelerationstructure%28size_%29.md): Creates a new acceleration structure with a specific size.
- [accelerationStructureSizesWithDescriptor:](mtldevice/accelerationstructuresizes%28descriptor_%29.md): Returns the buffer sizes the GPU device needs to build, refit, and store an acceleration structure.
