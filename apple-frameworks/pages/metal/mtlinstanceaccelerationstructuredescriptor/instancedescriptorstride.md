> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedescriptorstride](https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedescriptorstride)

# instanceDescriptorStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The stride, in bytes, between instance descriptions.

## Declaration

```swift
var instanceDescriptorStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

The stride needs to be at least 64 bytes and needs to be a multiple of 4 bytes. Defaults to 64 bytes.

## See Also

### Specifying the list of instances

- [instanceCount](instancecount.md): The number of instances in the instance descriptor buffer.
- [instanceDescriptorBuffer](instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.
- [instanceDescriptorBufferOffset](instancedescriptorbufferoffset.md): The offset, in bytes, to the descripton of the first instance.

# instanceDescriptorStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The stride, in bytes, between instance descriptions.

## Declaration

```objectivec
@property (nonatomic) NSUInteger instanceDescriptorStride;
```

<a id="discussion"></a>

## Discussion

The stride needs to be at least 64 bytes and needs to be a multiple of 4 bytes. Defaults to 64 bytes.

## See Also

### Specifying the list of instances

- [instanceCount](instancecount.md): The number of instances in the instance descriptor buffer.
- [instanceDescriptorBuffer](instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.
- [instanceDescriptorBufferOffset](instancedescriptorbufferoffset.md): The offset, in bytes, to the descripton of the first instance.
