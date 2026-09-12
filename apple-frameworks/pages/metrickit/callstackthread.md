> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/callstackthread](https://developer.apple.com/documentation/metrickit/callstackthread)

# CallStackThread

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A single stack thread within a call stack tree.

## Declaration

```swift
struct CallStackThread
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

## Topics

### Frames

- [rootFrames](callstackthread/rootframes.md): Root frames for this call stack thread
- [threadAttributed](callstackthread/threadattributed.md): Indicates whether this call stack is attributed to a specific thread.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Call stack data

- [CallStackTree](callstacktree.md): A tree structure representing a collection of call stacks captured during a diagnostic event.
- [CallStackFrame](callstackframe.md): A single frame within a call stack thread.
- [SignpostRecord](signpostrecord.md): A record of a signpost event associated with a diagnostic report.
