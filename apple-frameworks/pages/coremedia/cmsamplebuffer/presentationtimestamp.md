> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/presentationtimestamp](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/presentationtimestamp)

# presentationTimeStamp

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The sample presentation timestamp that’s the earliest numerically in the sample buffer.

## Declaration

```swift
var presentationTimeStamp: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

For in-presentation-order samples, the value represents the presentation timestamp of the first sample. For out-of-presentation-order samples, it represents the presentation timestamp of the sample the system presents first, which isn’t necessarily the first sample in the buffer.

This value is [invalid](../cmtime/invalid.md) if there’s an error.

## See Also

### Inspecting Duration and Timing

- [duration](duration.md): The total duration of a sample buffer.
- [decodeTimeStamp](decodetimestamp.md): The decode timestamp of the first sample in the buffer.
- [outputDuration](outputduration.md): The output duration of the sample buffer.
- [outputDecodeTimeStamp](outputdecodetimestamp.md): The output decode timestamp for a sample buffer.
- [outputPresentationTimeStamp](outputpresentationtimestamp.md): The output presentation timestamp of a sample buffer.
- [setOutputPresentationTimeStamp(\_:)](setoutputpresentationtimestamp%28__%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [sampleTimingInfos()](sampletiminginfos%28%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [sampleTimingInfo(at:)](sampletiminginfo%28at_%29.md): Returns sample timing information for a sample at the specified index.
- [outputSampleTimingInfos()](outputsampletiminginfos%28%29.md): Retrieves an array of output sample timing information structures that represents each sample in a sample buffer.
