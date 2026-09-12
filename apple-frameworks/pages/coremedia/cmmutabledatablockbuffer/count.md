> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/count](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/count)

# count

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The number of bytes in the block buffer.

## Declaration

```swift
var count: Int { get }
```

<a id="discussion"></a>

## Discussion

This count is the sum of the number of bytes in each memory block and buffer reference held in the block buffer. Note that the buffer references may hold more data than referenced by this block buffer. This block buffer presents a contiguous range of offsets from 0 to `count`.
