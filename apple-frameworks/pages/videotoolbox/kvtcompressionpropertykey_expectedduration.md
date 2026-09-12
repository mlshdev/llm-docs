> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_expectedduration](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_expectedduration)

# kVTCompressionPropertyKey_ExpectedDuration (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The expected total duration of the compression session, if known.

## Declaration

```swift
let kVTCompressionPropertyKey_ExpectedDuration: CFString
```

<a id="Discussion"></a>

## Discussion

By default, this value is `0`, indicating the duration is unknown.

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.

# kVTCompressionPropertyKey_ExpectedDuration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The expected total duration of the compression session, if known.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_ExpectedDuration;
```

<a id="Discussion"></a>

## Discussion

By default, this value is `0`, indicating the duration is unknown.

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.
