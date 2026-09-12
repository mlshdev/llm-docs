> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/callstackframe/binaryuuid](https://developer.apple.com/documentation/metrickit/callstackframe/binaryuuid)

# binaryUUID

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Binary UUID (references CallStackTree.binaryInfo)

## Declaration

```swift
let binaryUUID: UUID?
```

## Mentioned In

- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

<a id="discussion"></a>

## Discussion

This may be nil if symbolication information is unavailable or the binary is unidentified.

## See Also

### Frame details

- [address](address.md): Absolute address
- [offsetIntoBinaryTextSegment](offsetintobinarytextsegment.md): Offset into binary text segment
- [sampleCount](samplecount.md): Sample count (for sampled stack traces)
