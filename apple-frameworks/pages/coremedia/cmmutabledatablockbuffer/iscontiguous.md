> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/iscontiguous](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/iscontiguous)

# isContiguous

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Determine whether the block buffer is contiguous.

## Declaration

```swift
var isContiguous: Bool { get }
```

<a id="discussion"></a>

## Discussion

`true` if block buffer references a single contiguous memory block `false` otherwise. Also `false` if the buffer is empty.
