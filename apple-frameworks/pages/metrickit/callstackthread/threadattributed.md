> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/callstackthread/threadattributed](https://developer.apple.com/documentation/metrickit/callstackthread/threadattributed)

# threadAttributed

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Indicates whether this call stack is attributed to a specific thread.

## Declaration

```swift
let threadAttributed: Bool?
```

<a id="discussion"></a>

## Discussion

This field is only present when `CallStackTree.callStackPerThread` is `true`.

## See Also

### Frames

- [rootFrames](rootframes.md): Root frames for this call stack thread
