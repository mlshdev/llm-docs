> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/decodetimestamp](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/decodetimestamp)

# decodeTimeStamp

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The decode timestamp of the first sample in the buffer.

## Declaration

```swift
var decodeTimeStamp: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

The system expects sample buffers to store samples in their decode order, even if their presentation order is different.

This value is [invalid](../cmtime/invalid.md) if there’s an error.

## See Also

### Inspecting Duration and Timing

- [duration](duration.md): The total duration of a sample buffer.
- [presentationTimeStamp](presentationtimestamp.md): The sample presentation timestamp that’s the earliest numerically in the sample buffer.
- [outputDuration](outputduration.md): The output duration of the sample buffer.
- [outputDecodeTimeStamp](outputdecodetimestamp.md): The output decode timestamp for a sample buffer.
- [outputPresentationTimeStamp](outputpresentationtimestamp.md): The output presentation timestamp of a sample buffer.
- [setOutputPresentationTimeStamp(\_:)](setoutputpresentationtimestamp%28__%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [sampleTimingInfos()](sampletiminginfos%28%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [sampleTimingInfo(at:)](sampletiminginfo%28at_%29.md): Returns sample timing information for a sample at the specified index.
- [outputSampleTimingInfos()](outputsampletiminginfos%28%29.md): Retrieves an array of output sample timing information structures that represents each sample in a sample buffer.
