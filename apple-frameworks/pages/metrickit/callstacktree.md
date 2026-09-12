> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/callstacktree](https://developer.apple.com/documentation/metrickit/callstacktree)

# CallStackTree

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A tree structure representing a collection of call stacks captured during a diagnostic event.

## Declaration

```swift
struct CallStackTree
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

Each diagnostic struct — including [CrashDiagnostic](crashdiagnostic.md), [HangDiagnostic](hangdiagnostic.md), [CPUExceptionDiagnostic](cpuexceptiondiagnostic.md), [DiskWriteExceptionDiagnostic](diskwriteexceptiondiagnostic.md), [AppLaunchDiagnostic](applaunchdiagnostic.md), and [MemoryExceptionDiagnostic](memoryexceptiondiagnostic.md) — carries a `callStackTree` property of this type.

The tree is organized into threads via [callStackThreads](callstacktree/callstackthreads.md). Each [CallStackThread](callstackthread.md) contains root [CallStackFrame](callstackframe.md) values that form a tree of sub-frames. Binary metadata is deduplicated in [binaryInfo](callstacktree/binaryinfo-swift.property.md), keyed by UUID, so frames reference binaries by UUID rather than repeating the name.

Use [forEachFrame(\_:)](callstacktree/foreachframe%28__%29.md) for an optimized iterative depth-first traversal of all frames across all threads:

```swift
callStackTree.forEachFrame { frame in
    if let name = frame.binaryName(from: callStackTree) {
        print(name, frame.offsetIntoBinaryTextSegment ?? 0)
    }
}
```

## Topics

### Threads and frames

- [callStackThreads](callstacktree/callstackthreads.md): Array of call stack threads
- [callStackPerThread](callstacktree/callstackperthread.md): Whether call stacks are organized per-thread
- [forEachFrame(\_:)](callstacktree/foreachframe%28__%29.md): Iterates all frames efficiently.

### Binary information

- [binaryInfo](callstacktree/binaryinfo-swift.property.md): Deduplicated binary information indexed by UUID

### Related types

- [CallStackThread](callstackthread.md): A single stack thread within a call stack tree.
- [CallStackFrame](callstackframe.md): A single frame within a call stack thread.

### Structures

- [CallStackTree.BinaryInfo](callstacktree/binaryinfo-swift.struct.md): Metadata for a binary referenced in a call stack tree.

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

- [CallStackThread](callstackthread.md): A single stack thread within a call stack tree.
- [CallStackFrame](callstackframe.md): A single frame within a call stack thread.
- [SignpostRecord](signpostrecord.md): A record of a signpost event associated with a diagnostic report.
