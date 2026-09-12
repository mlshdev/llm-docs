> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/kmtaudioprocessingtapflag_startofstream](https://developer.apple.com/documentation/mediatoolbox/kmtaudioprocessingtapflag_startofstream)

# kMTAudioProcessingTapFlag_StartOfStream (Swift)

**Framework:** Media Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Signifies that the source audio is the beginning of a continuous stream.

## Declaration

```swift
var kMTAudioProcessingTapFlag_StartOfStream: MTAudioProcessingTapFlags { get }
```

<a id="discussion"></a>

## Discussion

Returned from [MTAudioProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:)](mtaudioprocessingtapgetsourceaudio%28____________%29.md).

## See Also

### Flags

- [kMTAudioProcessingTapFlag_EndOfStream](kmtaudioprocessingtapflag_endofstream.md): Signifies that the source audio is past the end of stream.

# kMTAudioProcessingTapFlag_StartOfStream (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Signifies that the source audio is the beginning of a continuous stream.

## Declaration

```objectivec
kMTAudioProcessingTapFlag_StartOfStream
```

<a id="discussion"></a>

## Discussion

Returned from [MTAudioProcessingTapGetSourceAudio](mtaudioprocessingtapgetsourceaudio%28____________%29.md).

## See Also

### Flags

- [kMTAudioProcessingTapFlag_EndOfStream](kmtaudioprocessingtapflag_endofstream.md): Signifies that the source audio is past the end of stream.
