> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/callstackframe/binaryname(from:)](https://developer.apple.com/documentation/metrickit/callstackframe/binaryname(from:))

# binaryName(from:)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Binary name - look up from tree

## Declaration

```swift
func binaryName(from tree: CallStackTree) -> String?
```

## Parameters

- `tree`: The call stack tree containing this frame

<a id="return-value"></a>

## Return Value

The binary name, or nil if not found

## See Also

### Tree navigation

- [subFrames](subframes.md): Sub-frames (children in the call tree)
