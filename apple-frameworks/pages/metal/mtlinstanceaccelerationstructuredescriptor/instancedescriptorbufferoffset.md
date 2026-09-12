> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedescriptorbufferoffset](https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedescriptorbufferoffset)

# instanceDescriptorBufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, to the descripton of the first instance.

## Declaration

```swift
var instanceDescriptorBufferOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of 64 bytes. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Specifying the list of instances

- [instanceCount](instancecount.md): The number of instances in the instance descriptor buffer.
- [instanceDescriptorBuffer](instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.
- [instanceDescriptorStride](instancedescriptorstride.md): The stride, in bytes, between instance descriptions.

# instanceDescriptorBufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, to the descripton of the first instance.

## Declaration

```objectivec
@property (nonatomic) NSUInteger instanceDescriptorBufferOffset;
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of 64 bytes. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Specifying the list of instances

- [instanceCount](instancecount.md): The number of instances in the instance descriptor buffer.
- [instanceDescriptorBuffer](instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.
- [instanceDescriptorStride](instancedescriptorstride.md): The stride, in bytes, between instance descriptions.
