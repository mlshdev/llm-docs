> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/duration-2ssr4](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/duration-2ssr4)

# duration

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The unmodified sum of the durations of all samples in the sample buffer.

## Declaration

```swift
var duration: CMTime { get }
```

<a id="discussion"></a>

## Discussion

If the buffer contains out-of-presentation-order samples, any gaps in the presentation timeline are not represented in the returned duration. The calculated duration is simply the sum of all the individual sample durations.

Returns [invalid](../cmtime/invalid.md) if `sampleTimings` is empty or contains invalid [duration](../cmsampletiminginfo/duration.md).
