> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedescriptorbuffer](https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedescriptorbuffer)

# instanceDescriptorBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains descriptions of each instance in the acceleration structure.

## Declaration

```swift
var instanceDescriptorBuffer: (any MTLBuffer)? { get set }
```

<a id="discussion"></a>

## Discussion

You need to set a buffer before creating the instanced acceleration structure. The buffer needs to contain a list of instance data structures, each defining the characteristics of an instance. The descriptor’s [instanceDescriptorType](instancedescriptortype.md) property determines which memory layout to use for the instance data; see [MTLAccelerationStructureInstanceDescriptorType](../mtlaccelerationstructureinstancedescriptortype.md) for more information.

## See Also

### Specifying the list of instances

- [instanceCount](instancecount.md): The number of instances in the instance descriptor buffer.
- [instanceDescriptorBufferOffset](instancedescriptorbufferoffset.md): The offset, in bytes, to the descripton of the first instance.
- [instanceDescriptorStride](instancedescriptorstride.md): The stride, in bytes, between instance descriptions.

# instanceDescriptorBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains descriptions of each instance in the acceleration structure.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLBuffer> instanceDescriptorBuffer;
```

<a id="discussion"></a>

## Discussion

You need to set a buffer before creating the instanced acceleration structure. The buffer needs to contain a list of instance data structures, each defining the characteristics of an instance. The descriptor’s [instanceDescriptorType](instancedescriptortype.md) property determines which memory layout to use for the instance data; see [MTLAccelerationStructureInstanceDescriptorType](../mtlaccelerationstructureinstancedescriptortype.md) for more information.

## See Also

### Specifying the list of instances

- [instanceCount](instancecount.md): The number of instances in the instance descriptor buffer.
- [instanceDescriptorBufferOffset](instancedescriptorbufferoffset.md): The offset, in bytes, to the descripton of the first instance.
- [instanceDescriptorStride](instancedescriptorstride.md): The stride, in bytes, between instance descriptions.
