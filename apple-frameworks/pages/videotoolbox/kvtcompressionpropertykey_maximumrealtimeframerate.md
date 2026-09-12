> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_maximumrealtimeframerate](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_maximumrealtimeframerate)

# kVTCompressionPropertyKey_MaximumRealTimeFrameRate (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A value that specifies the maximum real time rate at which frames can be submitted to a compression session.

## Declaration

```swift
let kVTCompressionPropertyKey_MaximumRealTimeFrameRate: CFString
```

<a id="Discussion"></a>

## Discussion

The frame rate is measured in frames per second. This property can be used to inform the encoder of the maximum rate that frames could be submitted to the encoder during realtime encoding.  This allows the encoder to configure itself to ensure this capability.

This property can only be used when [kVTCompressionPropertyKey_RealTime](kvtcompressionpropertykey_realtime.md) has been set to true.

Unlike [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md), this property informs the maximum possible rate that the compression session could see, not the average frame rate that is expected in normal operation.

By default, the property has a value of zero indicating “unknown”.

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.

# kVTCompressionPropertyKey_MaximumRealTimeFrameRate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A value that specifies the maximum real time rate at which frames can be submitted to a compression session.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_MaximumRealTimeFrameRate;
```

<a id="Discussion"></a>

## Discussion

The frame rate is measured in frames per second. This property can be used to inform the encoder of the maximum rate that frames could be submitted to the encoder during realtime encoding.  This allows the encoder to configure itself to ensure this capability.

This property can only be used when [kVTCompressionPropertyKey_RealTime](kvtcompressionpropertykey_realtime.md) has been set to true.

Unlike [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md), this property informs the maximum possible rate that the compression session could see, not the average frame rate that is expected in normal operation.

By default, the property has a value of zero indicating “unknown”.

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.
