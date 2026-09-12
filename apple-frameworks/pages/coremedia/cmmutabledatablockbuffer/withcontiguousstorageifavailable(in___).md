> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/withcontiguousstorageifavailable(in:_:)](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/withcontiguousstorageifavailable(in:_:))

# withContiguousStorageIfAvailable(in:\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access contents of the buffer if available as contiguous memory block.

## Declaration

```swift
func withContiguousStorageIfAvailable<R>(in range: Range<Int>? = nil, _ body: (UnsafeRawBufferPointer) throws -> sending R) rethrows -> sending R?
```

## Parameters

- `range`: Range of the buffer to access. Pass nil to access the whole buffer.
- `body`: Closure to execute with the memory block

<a id="discussion"></a>

## Discussion

This method calls body(buffer), where buffer is a pointer to the block buffers contiguous storage. If the contiguous storage doesn’t exist,  the method doesn’t call body — it immediately returns nil.
