> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/presentationtimestamp-7ea7z](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/presentationtimestamp-7ea7z)

# presentationTimeStamp

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Numerically earliest sample presentation timestamp in the sample buffer.

## Declaration

```swift
var presentationTimeStamp: CMTime { get }
```

<a id="discussion"></a>

## Discussion

For in-presentation-order samples, this is the presentation timestamp of the first sample.

For out-of-presentation-order samples, this is the presentation timestamp of the sample that will be presented first, which is not necessarily the first sample in the buffer.

Returns [invalid](../cmtime/invalid.md) if `sampleTimings` is empty or contains invalid [presentationTimeStamp](../cmsampletiminginfo/presentationtimestamp.md).
