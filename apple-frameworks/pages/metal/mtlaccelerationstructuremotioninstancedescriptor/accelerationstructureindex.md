> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/accelerationstructureindex](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/accelerationstructureindex)

# accelerationStructureIndex (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The index of an acceleration structure which applies to the next acceleration-structure motion instance you create with the descriptor.

## Declaration

```swift
var accelerationStructureIndex: UInt32
```

<a id="discussion"></a>

## Discussion

This index refers to a bottom-level instance specified in the [instancedAccelerationStructures](../mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures.md) of the [MTLInstanceAccelerationStructureDescriptor](../mtlinstanceaccelerationstructuredescriptor.md) used to create the new instance acceleration structure.

## See Also

### Related Documentation

- [instancedAccelerationStructures](../mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures.md): The bottom-level acceleration structures that instances use in the instance acceleration structure .

# accelerationStructureIndex (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The index of an acceleration structure which applies to the next acceleration-structure motion instance you create with the descriptor.

## Declaration

```objectivec
uint32_t accelerationStructureIndex;
```

<a id="discussion"></a>

## Discussion

This index refers to a bottom-level instance specified in the [instancedAccelerationStructures](../mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures.md) of the [MTLInstanceAccelerationStructureDescriptor](../mtlinstanceaccelerationstructuredescriptor.md) used to create the new instance acceleration structure.

## See Also

### Related Documentation

- [instancedAccelerationStructures](../mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures.md): The bottom-level acceleration structures that instances use in the instance acceleration structure .
