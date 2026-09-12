> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue/isempty](https://developer.apple.com/documentation/coremedia/cmbufferqueue/isempty)

# isEmpty

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the queue contains buffers.

## Declaration

```swift
var isEmpty: Bool { get }
```

## See Also

### Inspecting a Queue

- [bufferCount](buffercount.md): The count of buffers in the queue.
- [head](head.md): The element at the head of the queue.
- [containsEndOfData](containsendofdata.md): A Boolean value that indicates whether the buffer has its end-of-data state set.
- [isAtEndOfData](isatendofdata.md): A Boolean value that indicates whether that queue is at the end of its data.
