> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures](https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures)

# instancedAccelerationStructures (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The bottom-level acceleration structures that instances use in the instance acceleration structure .

## Declaration

```swift
var instancedAccelerationStructures: [any MTLAccelerationStructure]? { get set }
```

<a id="discussion"></a>

## Discussion

Each instance in the instance descriptor buffer has an index into this array, specifying which acceleration structure to use for that instance.

## See Also

### Related Documentation

- [accelerationStructureIndex](../mtlaccelerationstructureinstancedescriptor/accelerationstructureindex.md): The index of the acceleration structure to use for the instance.

### Specifying the instance structures

- [instanceDescriptorType](instancedescriptortype.md): The format of the instance data in the descriptor buffer.
- [MTLAccelerationStructureInstanceDescriptorType](../mtlaccelerationstructureinstancedescriptortype.md): Options for specifying different kinds of instance types.

# instancedAccelerationStructures (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The bottom-level acceleration structures that instances use in the instance acceleration structure .

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSArray<id<MTLAccelerationStructure>> * instancedAccelerationStructures;
```

<a id="discussion"></a>

## Discussion

Each instance in the instance descriptor buffer has an index into this array, specifying which acceleration structure to use for that instance.

## See Also

### Related Documentation

- [accelerationStructureIndex](../mtlaccelerationstructureinstancedescriptor/accelerationstructureindex.md): The index of the acceleration structure to use for the instance.

### Specifying the instance structures

- [instanceDescriptorType](instancedescriptortype.md): The format of the instance data in the descriptor buffer.
- [MTLAccelerationStructureInstanceDescriptorType](../mtlaccelerationstructureinstancedescriptortype.md): Options for specifying different kinds of instance types.
