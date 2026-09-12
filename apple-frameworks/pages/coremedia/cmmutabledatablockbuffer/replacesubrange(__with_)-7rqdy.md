> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/replacesubrange(_:with:)-7rqdy](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/replacesubrange(_:with:)-7rqdy)

# replaceSubrange(\_:with:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Replace a range of bytes in the block buffer.

## Declaration

```swift
mutating func replaceSubrange(_ range: Range<Int>, with bytes: UnsafeRawBufferPointer)
```

## Parameters

- `range`: Range of bytes to replace within this buffer. The count of this range must match the count of `bytes`.
- `bytes`: The replacement data.

<a id="discussion"></a>

## Discussion

This function also works if the range covers non-contiguous regions of memory.
