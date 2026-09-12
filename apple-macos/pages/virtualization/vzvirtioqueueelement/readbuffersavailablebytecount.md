> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/readbuffersavailablebytecount](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/readbuffersavailablebytecount)

# readBuffersAvailableByteCount (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The size of the read buffers memory (in bytes) exposed by the Virtio queue element that’s currently available for reading.

## Declaration

```swift
var readBuffersAvailableByteCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This value is initially equal to [readBuffersByteCount](readbuffersbytecount.md). This value decreases as you read memory from the read buffers.

# readBuffersAvailableByteCount (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The size of the read buffers memory (in bytes) exposed by the Virtio queue element that’s currently available for reading.

## Declaration

```objectivec
@property (readonly) NSUInteger readBuffersAvailableByteCount;
```

<a id="discussion"></a>

## Discussion

This value is initially equal to [readBuffersByteCount](readbuffersbytecount.md). This value decreases as you read memory from the read buffers.
