> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapgetstorage(_:)](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapgetstorage(_:))

# MTAudioProcessingTapGetStorage(\_:) (Swift)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Retrieves a custom storage pointer for an audio processing tap.

## Declaration

```swift
func MTAudioProcessingTapGetStorage(_ tap: MTAudioProcessingTap) -> UnsafeMutableRawPointer
```

## Parameters

- `tap`: The processing tap.

<a id="return-value"></a>

## Return Value

The tap storage returned by the init callback.

## See Also

### Audio Taps

- [MTAudioProcessingTapCreate(\_:\_:\_:\_:)](mtaudioprocessingtapcreate%28________%29.md): Creates a new audio processing tap.
- [MTAudioProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:)](mtaudioprocessingtapgetsourceaudio%28____________%29.md): Retrieves source audio for an audio processing tap.
- [MTAudioProcessingTapGetTypeID()](mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTapFlags](mtaudioprocessingtapflags.md): Flags that indicate where to tap the audio.
- [MTAudioProcessingTap](mtaudioprocessingtap.md): An audio processing tap object.

# MTAudioProcessingTapGetStorage (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Retrieves a custom storage pointer for an audio processing tap.

## Declaration

```objectivec
extern void *MTAudioProcessingTapGetStorage(MTAudioProcessingTapRef tap);
```

## Parameters

- `tap`: The processing tap.

<a id="return-value"></a>

## Return Value

The tap storage returned by the init callback.

## See Also

### Audio Taps

- [MTAudioProcessingTapCreate](mtaudioprocessingtapcreate%28________%29.md): Creates a new audio processing tap.
- [MTAudioProcessingTapGetSourceAudio](mtaudioprocessingtapgetsourceaudio%28____________%29.md): Retrieves source audio for an audio processing tap.
- [MTAudioProcessingTapGetTypeID](mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTapFlags](mtaudioprocessingtapflags.md): Flags that indicate where to tap the audio.
- [MTAudioProcessingTapRef](mtaudioprocessingtap.md): An audio processing tap object.
