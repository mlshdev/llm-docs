> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotiontrianglegeometrydescriptor/indexbuffer](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotiontrianglegeometrydescriptor/indexbuffer)

# indexBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains indices for the vertices that compose the triangle list.

## Declaration

```swift
var indexBuffer: (any MTLBuffer)? { get set }
```

<a id="discussion"></a>

## Discussion

This property can be `nil`, in which case the vertex data defines the triangle list implicitly. You need to store indices in a packed data format.

## See Also

### Specifying index data

- [indexType](indextype.md): The data type of indices in the index buffer.
- [indexBufferOffset](indexbufferoffset.md): The offset, in bytes, to the first index in the buffer.

# indexBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains indices for the vertices that compose the triangle list.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLBuffer> indexBuffer;
```

<a id="discussion"></a>

## Discussion

This property can be `nil`, in which case the vertex data defines the triangle list implicitly. You need to store indices in a packed data format.

## See Also

### Specifying index data

- [indexType](indextype.md): The data type of indices in the index buffer.
- [indexBufferOffset](indexbufferoffset.md): The offset, in bytes, to the first index in the buffer.
