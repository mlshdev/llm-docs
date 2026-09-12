> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxbufferoffset](https://developer.apple.com/documentation/metal/mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxbufferoffset)

# boundingBoxBufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, to the first bounding box in the buffer.

## Declaration

```swift
var boundingBoxBufferOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of [boundingBoxStride](boundingboxstride.md). Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Specifying bounding boxes data

- [boundingBoxBuffer](boundingboxbuffer.md): A buffer that contains an array of bounding box structures.
- [boundingBoxStride](boundingboxstride.md): The stride, in bytes, between bounding boxes in the buffer.

# boundingBoxBufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, to the first bounding box in the buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger boundingBoxBufferOffset;
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of [boundingBoxStride](boundingboxstride.md). Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Specifying bounding boxes data

- [boundingBoxBuffer](boundingboxbuffer.md): A buffer that contains an array of bounding box structures.
- [boundingBoxStride](boundingboxstride.md): The stride, in bytes, between bounding boxes in the buffer.
