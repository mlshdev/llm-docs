> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/callstacktree/foreachframe(_:)](https://developer.apple.com/documentation/metrickit/callstacktree/foreachframe(_:))

# forEachFrame(\_:)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Iterates all frames efficiently.

## Declaration

```swift
func forEachFrame(_ body: (CallStackFrame) throws -> Void) rethrows
```

## Parameters

- `body`: A closure that processes each frame

## Mentioned In

- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

<a id="discussion"></a>

## Discussion

Use this method for optimized traversal of the entire call stack tree.

## See Also

### Threads and frames

- [callStackThreads](callstackthreads.md): Array of call stack threads
- [callStackPerThread](callstackperthread.md): Whether call stacks are organized per-thread
