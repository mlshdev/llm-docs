> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_expectedframerate](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_expectedframerate)

# kVTCompressionPropertyKey_ExpectedFrameRate (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The expected frame rate, if known.

## Declaration

```swift
let kVTCompressionPropertyKey_ExpectedFrameRate: CFString
```

<a id="Discussion"></a>

## Discussion

The frame rate is measured in frames per second.  This setting is not used to control the frame rate; it’s provided as a hint to the video encoder so that it can set up internal configuration before compression begins. The actual frame rate depends on frame durations and may vary.

By default, this value is `0`, indicating the frame rate is unknown.

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.

# kVTCompressionPropertyKey_ExpectedFrameRate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The expected frame rate, if known.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_ExpectedFrameRate;
```

<a id="Discussion"></a>

## Discussion

The frame rate is measured in frames per second.  This setting is not used to control the frame rate; it’s provided as a hint to the video encoder so that it can set up internal configuration before compression begins. The actual frame rate depends on frame durations and may vary.

By default, this value is `0`, indicating the frame rate is unknown.

## See Also

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.
