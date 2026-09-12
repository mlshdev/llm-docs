> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxstride](https://developer.apple.com/documentation/metal/mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxstride)

# boundingBoxStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The stride, in bytes, between bounding boxes in the buffer.

## Declaration

```swift
var boundingBoxStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

The stride needs be at least 24 bytes, and be a multiple of 4 bytes. The default value is 24 bytes.

## See Also

### Specifying bounding boxes data

- [boundingBoxBuffer](boundingboxbuffer.md): A buffer that contains an array of bounding box structures.
- [boundingBoxBufferOffset](boundingboxbufferoffset.md): The offset, in bytes, to the first bounding box in the buffer.

# boundingBoxStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The stride, in bytes, between bounding boxes in the buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger boundingBoxStride;
```

<a id="discussion"></a>

## Discussion

The stride needs be at least 24 bytes, and be a multiple of 4 bytes. The default value is 24 bytes.

## See Also

### Specifying bounding boxes data

- [boundingBoxBuffer](boundingboxbuffer.md): A buffer that contains an array of bounding box structures.
- [boundingBoxBufferOffset](boundingboxbufferoffset.md): The offset, in bytes, to the first bounding box in the buffer.
