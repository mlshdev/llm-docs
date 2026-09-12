> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/callstackframe/address](https://developer.apple.com/documentation/metrickit/callstackframe/address)

# address

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Absolute address

## Declaration

```swift
let address: UInt64?
```

<a id="discussion"></a>

## Discussion

This may be nil if the address information could not be collected.

## See Also

### Frame details

- [binaryUUID](binaryuuid.md): Binary UUID (references CallStackTree.binaryInfo)
- [offsetIntoBinaryTextSegment](offsetintobinarytextsegment.md): Offset into binary text segment
- [sampleCount](samplecount.md): Sample count (for sampled stack traces)
