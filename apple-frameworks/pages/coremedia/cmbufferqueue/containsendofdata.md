> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue/containsendofdata](https://developer.apple.com/documentation/coremedia/cmbufferqueue/containsendofdata)

# containsEndOfData

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the buffer has its end-of-data state set.

## Declaration

```swift
var containsEndOfData: Bool { get }
```

## See Also

### Inspecting a Queue

- [isEmpty](isempty.md): A Boolean value that indicates whether the queue contains buffers.
- [bufferCount](buffercount.md): The count of buffers in the queue.
- [head](head.md): The element at the head of the queue.
- [isAtEndOfData](isatendofdata.md): A Boolean value that indicates whether that queue is at the end of its data.
