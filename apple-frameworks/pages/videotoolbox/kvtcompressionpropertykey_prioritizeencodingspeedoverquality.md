> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_prioritizeencodingspeedoverquality](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_prioritizeencodingspeedoverquality)

# kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.

## Declaration

```swift
let kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality: CFString
```

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.

# kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality;
```

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.
