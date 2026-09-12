> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/vertexbufferoffset](https://developer.apple.com/documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/vertexbufferoffset)

# vertexBufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, for the first vertex in the vertex buffer.

## Declaration

```swift
var vertexBufferOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the vertex stride. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions. The default value is `0`.

## See Also

### Configuring vertex data

- [vertexFormat](vertexformat.md): The format of each vertex position in the vertex buffer property.
- [vertexBuffer](vertexbuffer.md): A buffer that contains vertex data.
- [vertexStride](vertexstride.md): The stride, in bytes, between vertices in the vertex buffer.

# vertexBufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, for the first vertex in the vertex buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger vertexBufferOffset;
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the vertex stride. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions. The default value is `0`.

## See Also

### Configuring vertex data

- [vertexFormat](vertexformat.md): The format of each vertex position in the vertex buffer property.
- [vertexBuffer](vertexbuffer.md): A buffer that contains vertex data.
- [vertexStride](vertexstride.md): The stride, in bytes, between vertices in the vertex buffer.
