> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_suggestedlookaheadframecount](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_suggestedlookaheadframecount)

# kVTCompressionPropertyKey_SuggestedLookAheadFrameCount (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A value that requests that the encoder retain the specified number of frames during encoding.

## Declaration

```swift
let kVTCompressionPropertyKey_SuggestedLookAheadFrameCount: CFString
```

<a id="Discussion"></a>

## Discussion

These frames will be used for additional analysis and statistics gathering before the frame is finally encoded at the end of the window. When this property is not set, video encoder will automatically determine the number of lookahead frames.

Encoder will choose number of lookahead frames closer to the suggested value based on internal configuration. This property directly affects latency of the video encoder. The following properties also affect look ahead frames:

1. Value of this property must be less than or equal to `kVTCompressionPropertyKey_MaxFrameDelayCount`.
2. This property is ignored when `VTVideoEncoderSpecification_EnableLowLatencyRateControl` is set to true
3. This property is ignored when `kVTCompressionPropertyKey_Quality` is set to 1.0
4. This property can not be used in conjunction with multi-pass feature (`kVTCompressionPropertyKey_MultiPassStorage`)

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.

# kVTCompressionPropertyKey_SuggestedLookAheadFrameCount (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A value that requests that the encoder retain the specified number of frames during encoding.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_SuggestedLookAheadFrameCount;
```

<a id="Discussion"></a>

## Discussion

These frames will be used for additional analysis and statistics gathering before the frame is finally encoded at the end of the window. When this property is not set, video encoder will automatically determine the number of lookahead frames.

Encoder will choose number of lookahead frames closer to the suggested value based on internal configuration. This property directly affects latency of the video encoder. The following properties also affect look ahead frames:

1. Value of this property must be less than or equal to `kVTCompressionPropertyKey_MaxFrameDelayCount`.
2. This property is ignored when `VTVideoEncoderSpecification_EnableLowLatencyRateControl` is set to true
3. This property is ignored when `kVTCompressionPropertyKey_Quality` is set to 1.0
4. This property can not be used in conjunction with multi-pass feature (`kVTCompressionPropertyKey_MultiPassStorage`)

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
