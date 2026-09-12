> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/callstacktree/callstackthreads](https://developer.apple.com/documentation/metrickit/callstacktree/callstackthreads)

# callStackThreads

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Array of call stack threads

## Declaration

```swift
let callStackThreads: ContiguousArray<CallStackThread>
```

## Mentioned In

- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

## See Also

### Threads and frames

- [callStackPerThread](callstackperthread.md): Whether call stacks are organized per-thread
- [forEachFrame(\_:)](foreachframe%28__%29.md): Iterates all frames efficiently.
