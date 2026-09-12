> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/decodetimestamp](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/decodetimestamp)

# decodeTimeStamp

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Numerically earliest sample decode timestamp in the sample buffer.

## Declaration

```swift
var decodeTimeStamp: CMTime { get }
```

<a id="discussion"></a>

## Discussion

Return the decode timestamp of the first sample in the buffer, since even out-of-presentation-order samples are expected to be in decode order in the buffer.

Returns [invalid](../cmtime/invalid.md) if `sampleTimings` is empty or contains invalid [decodeTimeStamp](../cmsampletiminginfo/decodetimestamp.md).
