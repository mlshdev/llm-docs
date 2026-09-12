> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotiontrianglegeometrydescriptor/indexbufferoffset](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotiontrianglegeometrydescriptor/indexbufferoffset)

# indexBufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, to the first index in the buffer.

## Declaration

```swift
var indexBufferOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the index data type size and aligned to the index data type’s alignment. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Specifying index data

- [indexBuffer](indexbuffer.md): A buffer that contains indices for the vertices that compose the triangle list.
- [indexType](indextype.md): The data type of indices in the index buffer.

# indexBufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, to the first index in the buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger indexBufferOffset;
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the index data type size and aligned to the index data type’s alignment. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Specifying index data

- [indexBuffer](indexbuffer.md): A buffer that contains indices for the vertices that compose the triangle list.
- [indexType](indextype.md): The data type of indices in the index buffer.
