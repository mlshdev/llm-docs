> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/callstackframe/offsetintobinarytextsegment

# offsetIntoBinaryTextSegment

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Offset into binary text segment

## Declaration

```swift
let offsetIntoBinaryTextSegment: UInt64?
```

<a id="discussion"></a>

## Discussion

This may be nil if the offset information is unavailable.

## See Also

### Frame details

- [binaryUUID](binaryuuid.md): Binary UUID (references CallStackTree.binaryInfo)
- [address](address.md): Absolute address
- [sampleCount](samplecount.md): Sample count (for sampled stack traces)
