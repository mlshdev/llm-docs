> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_sourceframecount](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_sourceframecount)

# kVTCompressionPropertyKey_SourceFrameCount (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The number of source frames, if known.

## Declaration

```swift
let kVTCompressionPropertyKey_SourceFrameCount: CFString
```

<a id="Discussion"></a>

## Discussion

This property allows a client to give the video encoder advance guidance as to how many frames will be encoded. If nonzero, this value should be the exact number of times that the client calls [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) in each pass.

The default is `0`, which indicates that the number of source frames is unknown.

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.

# kVTCompressionPropertyKey_SourceFrameCount (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The number of source frames, if known.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_SourceFrameCount;
```

<a id="Discussion"></a>

## Discussion

This property allows a client to give the video encoder advance guidance as to how many frames will be encoded. If nonzero, this value should be the exact number of times that the client calls [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) in each pass.

The default is `0`, which indicates that the number of source frames is unknown.

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.
