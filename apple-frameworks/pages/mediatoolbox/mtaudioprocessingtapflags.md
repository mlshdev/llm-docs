> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapflags](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapflags)

# MTAudioProcessingTapFlags (Swift)

**Framework:** Media Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Flags that indicate where to tap the audio.

## Declaration

```swift
typealias MTAudioProcessingTapFlags = UInt32
```

## Topics

### Flags

- [kMTAudioProcessingTapFlag_EndOfStream](kmtaudioprocessingtapflag_endofstream.md): Signifies that the source audio is past the end of stream.
- [kMTAudioProcessingTapFlag_StartOfStream](kmtaudioprocessingtapflag_startofstream.md): Signifies that the source audio is the beginning of a continuous stream.

## See Also

### Audio Taps

- [MTAudioProcessingTapCreate(\_:\_:\_:\_:)](mtaudioprocessingtapcreate%28________%29.md): Creates a new audio processing tap.
- [MTAudioProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:)](mtaudioprocessingtapgetsourceaudio%28____________%29.md): Retrieves source audio for an audio processing tap.
- [MTAudioProcessingTapGetStorage(\_:)](mtaudioprocessingtapgetstorage%28__%29.md): Retrieves a custom storage pointer for an audio processing tap.
- [MTAudioProcessingTapGetTypeID()](mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTap](mtaudioprocessingtap.md): An audio processing tap object.

# MTAudioProcessingTapFlags (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Flags that indicate where to tap the audio.

## Declaration

```objectivec
typedef uint32_t MTAudioProcessingTapFlags;
```

## Topics

### Flags

- [kMTAudioProcessingTapFlag_EndOfStream](kmtaudioprocessingtapflag_endofstream.md): Signifies that the source audio is past the end of stream.
- [kMTAudioProcessingTapFlag_StartOfStream](kmtaudioprocessingtapflag_startofstream.md): Signifies that the source audio is the beginning of a continuous stream.

## See Also

### Audio Taps

- [MTAudioProcessingTapCreate](mtaudioprocessingtapcreate%28________%29.md): Creates a new audio processing tap.
- [MTAudioProcessingTapGetSourceAudio](mtaudioprocessingtapgetsourceaudio%28____________%29.md): Retrieves source audio for an audio processing tap.
- [MTAudioProcessingTapGetStorage](mtaudioprocessingtapgetstorage%28__%29.md): Retrieves a custom storage pointer for an audio processing tap.
- [MTAudioProcessingTapGetTypeID](mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTapRef](mtaudioprocessingtap.md): An audio processing tap object.
