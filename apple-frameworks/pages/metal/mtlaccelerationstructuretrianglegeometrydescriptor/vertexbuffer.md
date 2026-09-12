> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/vertexbuffer](https://developer.apple.com/documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/vertexbuffer)

# vertexBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains vertex data.

## Declaration

```swift
var vertexBuffer: (any MTLBuffer)? { get set }
```

<a id="discussion"></a>

## Discussion

The [vertexFormat](vertexformat.md) property defines the format of each vertex position in the buffer. You need to set a vertex buffer before creating the acceleration structure.

## See Also

### Configuring vertex data

- [vertexFormat](vertexformat.md): The format of each vertex position in the vertex buffer property.
- [vertexBufferOffset](vertexbufferoffset.md): The offset, in bytes, for the first vertex in the vertex buffer.
- [vertexStride](vertexstride.md): The stride, in bytes, between vertices in the vertex buffer.

# vertexBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains vertex data.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLBuffer> vertexBuffer;
```

<a id="discussion"></a>

## Discussion

The [vertexFormat](vertexformat.md) property defines the format of each vertex position in the buffer. You need to set a vertex buffer before creating the acceleration structure.

## See Also

### Configuring vertex data

- [vertexFormat](vertexformat.md): The format of each vertex position in the vertex buffer property.
- [vertexBufferOffset](vertexbufferoffset.md): The offset, in bytes, for the first vertex in the vertex buffer.
- [vertexStride](vertexstride.md): The stride, in bytes, between vertices in the vertex buffer.
