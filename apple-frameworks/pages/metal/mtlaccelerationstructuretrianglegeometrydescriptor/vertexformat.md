> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlaccelerationstructuretrianglegeometrydescriptor/vertexformat

# vertexFormat (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The format of each vertex position in the vertex buffer property.

## Declaration

```swift
var vertexFormat: MTLAttributeFormat { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to a value that represents the pixel format of the data you assign to the [vertexBuffer](vertexbuffer.md) property. The property’s default is [MTLAttributeFormat.float3](../mtlattributeformat/float3.md).

## See Also

### Configuring vertex data

- [vertexBuffer](vertexbuffer.md): A buffer that contains vertex data.
- [vertexBufferOffset](vertexbufferoffset.md): The offset, in bytes, for the first vertex in the vertex buffer.
- [vertexStride](vertexstride.md): The stride, in bytes, between vertices in the vertex buffer.

# vertexFormat (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The format of each vertex position in the vertex buffer property.

## Declaration

```objectivec
@property (nonatomic) MTLAttributeFormat vertexFormat;
```

<a id="discussion"></a>

## Discussion

Set this property to a value that represents the pixel format of the data you assign to the [vertexBuffer](vertexbuffer.md) property. The property’s default is [MTLAttributeFormatFloat3](../mtlattributeformat/float3.md).

## See Also

### Configuring vertex data

- [vertexBuffer](vertexbuffer.md): A buffer that contains vertex data.
- [vertexBufferOffset](vertexbufferoffset.md): The offset, in bytes, for the first vertex in the vertex buffer.
- [vertexStride](vertexstride.md): The stride, in bytes, between vertices in the vertex buffer.
