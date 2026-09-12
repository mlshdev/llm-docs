> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/kmtaudioprocessingtapflag_endofstream](https://developer.apple.com/documentation/mediatoolbox/kmtaudioprocessingtapflag_endofstream)

# kMTAudioProcessingTapFlag_EndOfStream (Swift)

**Framework:** Media Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Signifies that the source audio is past the end of stream.

## Declaration

```swift
var kMTAudioProcessingTapFlag_EndOfStream: MTAudioProcessingTapFlags { get }
```

<a id="discussion"></a>

## Discussion

This happens when the audio queue is being stopped asynchronously and has finished playing all of its data. Returned from GetSourceAudio and should be propagated on return from the process callback.

## See Also

### Flags

- [kMTAudioProcessingTapFlag_StartOfStream](kmtaudioprocessingtapflag_startofstream.md): Signifies that the source audio is the beginning of a continuous stream.

# kMTAudioProcessingTapFlag_EndOfStream (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Signifies that the source audio is past the end of stream.

## Declaration

```objectivec
kMTAudioProcessingTapFlag_EndOfStream
```

<a id="discussion"></a>

## Discussion

This happens when the audio queue is being stopped asynchronously and has finished playing all of its data. Returned from GetSourceAudio and should be propagated on return from the process callback.

## See Also

### Flags

- [kMTAudioProcessingTapFlag_StartOfStream](kmtaudioprocessingtapflag_startofstream.md): Signifies that the source audio is the beginning of a continuous stream.
