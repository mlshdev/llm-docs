> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstanceoptions](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstanceoptions)

# MTLAccelerationStructureInstanceOptions (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Options for adjusting the behavior of an instanced acceleration structure.

## Declaration

```swift
struct MTLAccelerationStructureInstanceOptions
```

## Topics

### Creating instance flags

- [init(rawValue:)](mtlaccelerationstructureinstanceoptions/init%28rawvalue_%29.md): Creates new usage options from a raw integer value.

### Usage options

- [disableTriangleCulling](mtlaccelerationstructureinstanceoptions/disabletriangleculling.md): An option that turns off culling for this instance if ray intersector has culling enabled.
- [triangleFrontFacingWindingCounterClockwise](mtlaccelerationstructureinstanceoptions/trianglefrontfacingwindingcounterclockwise.md): Specifies that the instance specifies front facing triangles in counter-clockwise order.
- [opaque](mtlaccelerationstructureinstanceoptions/opaque.md): Specifies that intersectors should treat the instance as opaque.
- [nonOpaque](mtlaccelerationstructureinstanceoptions/nonopaque.md): Specifies that intersectors should treat the instance as non-opaque.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureUserIDInstanceDescriptor](mtlaccelerationstructureuseridinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.
- [MTLAccelerationStructureMotionInstanceDescriptor](mtlaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectInstanceAccelerationStructureDescriptor](mtlindirectinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.
- [MTLIndirectAccelerationStructureInstanceDescriptor](mtlindirectaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.

# MTLAccelerationStructureInstanceOptions (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Options for adjusting the behavior of an instanced acceleration structure.

## Declaration

```objectivec
enum MTLAccelerationStructureInstanceOptions : uint32_t;
```

## Topics

### Usage options

- [MTLAccelerationStructureInstanceOptionNone](mtlaccelerationstructureinstanceoptions/mtlaccelerationstructureinstanceoptionnone.md): Specifies the default behavior for resulting acceleration structure.
- [MTLAccelerationStructureInstanceOptionDisableTriangleCulling](mtlaccelerationstructureinstanceoptions/disabletriangleculling.md): An option that turns off culling for this instance if ray intersector has culling enabled.
- [MTLAccelerationStructureInstanceOptionTriangleFrontFacingWindingCounterClockwise](mtlaccelerationstructureinstanceoptions/trianglefrontfacingwindingcounterclockwise.md): Specifies that the instance specifies front facing triangles in counter-clockwise order.
- [MTLAccelerationStructureInstanceOptionOpaque](mtlaccelerationstructureinstanceoptions/opaque.md): Specifies that intersectors should treat the instance as opaque.
- [MTLAccelerationStructureInstanceOptionNonOpaque](mtlaccelerationstructureinstanceoptions/nonopaque.md): Specifies that intersectors should treat the instance as non-opaque.

## See Also

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureUserIDInstanceDescriptor](mtlaccelerationstructureuseridinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.
- [MTLAccelerationStructureMotionInstanceDescriptor](mtlaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectInstanceAccelerationStructureDescriptor](mtlindirectinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.
- [MTLIndirectAccelerationStructureInstanceDescriptor](mtlindirectaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.
