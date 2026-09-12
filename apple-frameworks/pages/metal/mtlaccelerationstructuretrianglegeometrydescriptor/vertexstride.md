> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/vertexstride](https://developer.apple.com/documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/vertexstride)

# vertexStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The stride, in bytes, between vertices in the vertex buffer.

## Declaration

```swift
var vertexStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

The stride needs to be at least 12 bytes and needs to be a multiple of 4 bytes. The default value is 12 bytes.

## See Also

### Configuring vertex data

- [vertexFormat](vertexformat.md): The format of each vertex position in the vertex buffer property.
- [vertexBuffer](vertexbuffer.md): A buffer that contains vertex data.
- [vertexBufferOffset](vertexbufferoffset.md): The offset, in bytes, for the first vertex in the vertex buffer.

# vertexStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The stride, in bytes, between vertices in the vertex buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger vertexStride;
```

<a id="discussion"></a>

## Discussion

The stride needs to be at least 12 bytes and needs to be a multiple of 4 bytes. The default value is 12 bytes.

## See Also

### Configuring vertex data

- [vertexFormat](vertexformat.md): The format of each vertex position in the vertex buffer property.
- [vertexBuffer](vertexbuffer.md): A buffer that contains vertex data.
- [vertexBufferOffset](vertexbufferoffset.md): The offset, in bytes, for the first vertex in the vertex buffer.
