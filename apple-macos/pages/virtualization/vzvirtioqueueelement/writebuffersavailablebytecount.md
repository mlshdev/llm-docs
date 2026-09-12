> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/writebuffersavailablebytecount](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/writebuffersavailablebytecount)

# writeBuffersAvailableByteCount (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The size of the write buffers memory (in bytes) exposed by the Virtio queue element that’s currently available for writing.

## Declaration

```swift
var writeBuffersAvailableByteCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This value is initially equal to `writeBuffersByteCount`. This value decreases as you write memory to the write buffers.

# writeBuffersAvailableByteCount (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The size of the write buffers memory (in bytes) exposed by the Virtio queue element that’s currently available for writing.

## Declaration

```objectivec
@property (readonly) NSUInteger writeBuffersAvailableByteCount;
```

<a id="discussion"></a>

## Discussion

This value is initially equal to `writeBuffersByteCount`. This value decreases as you write memory to the write buffers.
