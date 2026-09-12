> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/callstackframe](https://developer.apple.com/documentation/metrickit/callstackframe)

# CallStackFrame

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A single frame within a call stack thread.

## Declaration

```swift
struct CallStackFrame
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

Each frame may have sub-frames that form a call tree. The [binaryUUID](callstackframe/binaryuuid.md) references binary metadata in the parent [binaryInfo](callstacktree/binaryinfo-swift.property.md) dictionary. Use [binaryName(from:)](callstackframe/binaryname%28from_%29.md) to look up the binary name for a given frame:

```swift
if let name = frame.binaryName(from: tree) {
    print(name)
}
```

## Topics

### Frame details

- [binaryUUID](callstackframe/binaryuuid.md): Binary UUID (references CallStackTree.binaryInfo)
- [address](callstackframe/address.md): Absolute address
- [offsetIntoBinaryTextSegment](callstackframe/offsetintobinarytextsegment.md): Offset into binary text segment
- [sampleCount](callstackframe/samplecount.md): Sample count (for sampled stack traces)

### Tree navigation

- [subFrames](callstackframe/subframes.md): Sub-frames (children in the call tree)
- [binaryName(from:)](callstackframe/binaryname%28from_%29.md): Binary name - look up from tree

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
- [CallStackThread](callstackthread.md): A single stack thread within a call stack tree.
- [SignpostRecord](signpostrecord.md): A record of a signpost event associated with a diagnostic report.
