> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxbuffer](https://developer.apple.com/documentation/metal/mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxbuffer)

# boundingBoxBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains an array of bounding box structures.

## Declaration

```swift
var boundingBoxBuffer: (any MTLBuffer)? { get set }
```

<a id="discussion"></a>

## Discussion

The buffer contains an array of [MTLAxisAlignedBoundingBox](../mtlaxisalignedboundingbox-c.struct.md) structures, one for each bounding box in the geometry.

## See Also

### Specifying bounding boxes data

- [boundingBoxBufferOffset](boundingboxbufferoffset.md): The offset, in bytes, to the first bounding box in the buffer.
- [boundingBoxStride](boundingboxstride.md): The stride, in bytes, between bounding boxes in the buffer.

# boundingBoxBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains an array of bounding box structures.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLBuffer> boundingBoxBuffer;
```

<a id="discussion"></a>

## Discussion

The buffer contains an array of [MTLAxisAlignedBoundingBox](../mtlaxisalignedboundingbox-c.struct.md) structures, one for each bounding box in the geometry.

## See Also

### Specifying bounding boxes data

- [boundingBoxBufferOffset](boundingboxbufferoffset.md): The offset, in bytes, to the first bounding box in the buffer.
- [boundingBoxStride](boundingboxstride.md): The stride, in bytes, between bounding boxes in the buffer.
