> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/writtenbytecount](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/writtenbytecount)

# writtenByteCount (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The size of the write buffers memory exposed (in bytes) by the Virtio queue element that has already been written to.

## Declaration

```swift
var writtenByteCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This value increases as you write memory to the write buffers. This value is initially equal to 0.

# writtenByteCount (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The size of the write buffers memory exposed (in bytes) by the Virtio queue element that has already been written to.

## Declaration

```objectivec
@property (readonly) NSUInteger writtenByteCount;
```

<a id="discussion"></a>

## Discussion

This value increases as you write memory to the write buffers. This value is initially equal to 0.
