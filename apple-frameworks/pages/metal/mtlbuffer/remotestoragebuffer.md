> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbuffer/remotestoragebuffer](https://developer.apple.com/documentation/metal/mtlbuffer/remotestoragebuffer)

# remoteStorageBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

The buffer on another GPU that the buffer was created from, if any.

> Not applicable on Apple Silicon

## Declaration

```swift
var remoteStorageBuffer: (any MTLBuffer)? { get }
```

<a id="discussion"></a>

## Discussion

If the value of this property is non-`nil`, it contains a reference to the [MTLBuffer](../mtlbuffer.md) instance that created this buffer. If the buffer isn’t a remote view, the value of this property is `nil`.

You can use remote views only as a source for copy commands encoded by an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md).

## See Also

### Creating views of buffers on other GPUs

- [makeRemoteBufferView(\_:)](makeremotebufferview%28__%29.md): Deprecated. Creates a remote view of the buffer for another GPU in the same peer group.

# remoteStorageBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

The buffer on another GPU that the buffer was created from, if any.

> Not applicable on Apple Silicon

## Declaration

```objectivec
@property (readonly, nullable) id<MTLBuffer> remoteStorageBuffer;
```

<a id="discussion"></a>

## Discussion

If the value of this property is non-`nil`, it contains a reference to the [MTLBuffer](../mtlbuffer.md) instance that created this buffer. If the buffer isn’t a remote view, the value of this property is `nil`.

You can use remote views only as a source for copy commands encoded by an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md).

## See Also

### Creating views of buffers on other GPUs

- [newRemoteBufferViewForDevice:](makeremotebufferview%28__%29.md): Deprecated. Creates a remote view of the buffer for another GPU in the same peer group.
