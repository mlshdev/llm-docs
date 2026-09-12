> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/indextype](https://developer.apple.com/documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/indextype)

# indexType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The data type of indices in the index buffer.

## Declaration

```swift
var indexType: MTLIndexType { get set }
```

<a id="discussion"></a>

## Discussion

The index type needs to be [MTLIndexType.uint16](../mtlindextype/uint16.md) or [MTLIndexType.uint32](../mtlindextype/uint32.md). The default is [MTLIndexType.uint32](../mtlindextype/uint32.md).

## See Also

### Configuring index data

- [indexBuffer](indexbuffer.md): A buffer that contains indices for the vertices that compose the triangle list.
- [indexBufferOffset](indexbufferoffset.md): The offset, in bytes, to the first index in the buffer.

# indexType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The data type of indices in the index buffer.

## Declaration

```objectivec
@property (nonatomic) MTLIndexType indexType;
```

<a id="discussion"></a>

## Discussion

The index type needs to be [MTLIndexTypeUInt16](../mtlindextype/uint16.md) or [MTLIndexTypeUInt32](../mtlindextype/uint32.md). The default is [MTLIndexTypeUInt32](../mtlindextype/uint32.md).

## See Also

### Configuring index data

- [indexBuffer](indexbuffer.md): A buffer that contains indices for the vertices that compose the triangle list.
- [indexBufferOffset](indexbufferoffset.md): The offset, in bytes, to the first index in the buffer.
