> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancecount](https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancecount)

# instanceCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The number of instances in the instance descriptor buffer.

## Declaration

```swift
var instanceCount: Int { get set }
```

## See Also

### Specifying the list of instances

- [instanceDescriptorBuffer](instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.
- [instanceDescriptorBufferOffset](instancedescriptorbufferoffset.md): The offset, in bytes, to the descripton of the first instance.
- [instanceDescriptorStride](instancedescriptorstride.md): The stride, in bytes, between instance descriptions.

# instanceCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The number of instances in the instance descriptor buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger instanceCount;
```

## See Also

### Specifying the list of instances

- [instanceDescriptorBuffer](instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.
- [instanceDescriptorBufferOffset](instancedescriptorbufferoffset.md): The offset, in bytes, to the descripton of the first instance.
- [instanceDescriptorStride](instancedescriptorstride.md): The stride, in bytes, between instance descriptions.
