> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmeshbuffer/buffer](https://developer.apple.com/documentation/metalkit/mtkmeshbuffer/buffer)

# buffer (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The Metal buffer backing all vertex and index data.

## Declaration

```swift
var buffer: any MTLBuffer { get }
```

<a id="Discussion"></a>

## Discussion

Many [MTKMeshBuffer](../mtkmeshbuffer.md) objects may reference the same [MTLBuffer](../../metal/mtlbuffer.md) object, in which case each [MTKMeshBuffer](../mtkmeshbuffer.md) object will have its own unique [offset](offset.md) value.

## See Also

### Metal Buffer Properties

- [length](length.md): The logical size of the Metal buffer, in bytes.
- [offset](offset.md): The byte offset of the data within the Metal buffer.

# buffer (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The Metal buffer backing all vertex and index data.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) id<MTLBuffer> buffer;
```

<a id="Discussion"></a>

## Discussion

Many [MTKMeshBuffer](../mtkmeshbuffer.md) objects may reference the same [MTLBuffer](../../metal/mtlbuffer.md) object, in which case each [MTKMeshBuffer](../mtkmeshbuffer.md) object will have its own unique [offset](offset.md) value.

## See Also

### Metal Buffer Properties

- [length](length.md): The logical size of the Metal buffer, in bytes.
- [offset](offset.md): The byte offset of the data within the Metal buffer.
