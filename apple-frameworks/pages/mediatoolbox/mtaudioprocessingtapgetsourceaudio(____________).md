> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapgetsourceaudio(_:_:_:_:_:_:)](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapgetsourceaudio(_:_:_:_:_:_:))

# MTAudioProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Retrieves source audio for an audio processing tap.

## Declaration

```swift
func MTAudioProcessingTapGetSourceAudio(_ tap: MTAudioProcessingTap, _ numberFrames: CMItemCount, _ bufferListInOut: UnsafeMutablePointer<AudioBufferList>, _ flagsOut: UnsafeMutablePointer<MTAudioProcessingTapFlags>?, _ timeRangeOut: UnsafeMutablePointer<CMTimeRange>?, _ numberFramesOut: UnsafeMutablePointer<CMItemCount>?) -> OSStatus
```

## Parameters

- `tap`: The processing tap.
- `numberFrames`: The number of frames the processing tap requires for its processing.
- `bufferListInOut`: The audio buffer list which will contain the source data. On input, all fields except for the buffer pointers must be filled in. If the buffer pointers are NULL (recommended), non-NULL pointers will be returned and system owns the source buffers; these buffers are only applicable for the duration of the processing tap callback. If the buffer pointers are non-NULL, then they must be big enough to hold numberFrames, and the source data will be copied into these buffers.
- `flagsOut`: Flags to describe state about the input requested, e.g., discontinuity/complete. Can be NULL.
- `timeRangeOut`: The asset time range corresponding to the provided source audio frames. Can be NULL.
- `numberFramesOut`: The number of source frames that have been provided. Can be NULL. This can be less than the number of requested frames specified in numberFrames.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Overview"></a>

## Overview

This function may only be called from the processing tap’s callback.

## See Also

### Audio Taps

- [MTAudioProcessingTapCreate(\_:\_:\_:\_:)](mtaudioprocessingtapcreate%28________%29.md): Creates a new audio processing tap.
- [MTAudioProcessingTapGetStorage(\_:)](mtaudioprocessingtapgetstorage%28__%29.md): Retrieves a custom storage pointer for an audio processing tap.
- [MTAudioProcessingTapGetTypeID()](mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTapFlags](mtaudioprocessingtapflags.md): Flags that indicate where to tap the audio.
- [MTAudioProcessingTap](mtaudioprocessingtap.md): An audio processing tap object.

# MTAudioProcessingTapGetSourceAudio (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Retrieves source audio for an audio processing tap.

## Declaration

```objectivec
extern OSStatus MTAudioProcessingTapGetSourceAudio(MTAudioProcessingTapRef tap, CMItemCount numberFrames, AudioBufferList *bufferListInOut, MTAudioProcessingTapFlags *flagsOut, CMTimeRange *timeRangeOut, CMItemCount *numberFramesOut);
```

## Parameters

- `tap`: The processing tap.
- `numberFrames`: The number of frames the processing tap requires for its processing.
- `bufferListInOut`: The audio buffer list which will contain the source data. On input, all fields except for the buffer pointers must be filled in. If the buffer pointers are NULL (recommended), non-NULL pointers will be returned and system owns the source buffers; these buffers are only applicable for the duration of the processing tap callback. If the buffer pointers are non-NULL, then they must be big enough to hold numberFrames, and the source data will be copied into these buffers.
- `flagsOut`: Flags to describe state about the input requested, e.g., discontinuity/complete. Can be NULL.
- `timeRangeOut`: The asset time range corresponding to the provided source audio frames. Can be NULL.
- `numberFramesOut`: The number of source frames that have been provided. Can be NULL. This can be less than the number of requested frames specified in numberFrames.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Overview"></a>

## Overview

This function may only be called from the processing tap’s callback.

## See Also

### Audio Taps

- [MTAudioProcessingTapCreate](mtaudioprocessingtapcreate%28________%29.md): Creates a new audio processing tap.
- [MTAudioProcessingTapGetStorage](mtaudioprocessingtapgetstorage%28__%29.md): Retrieves a custom storage pointer for an audio processing tap.
- [MTAudioProcessingTapGetTypeID](mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTapFlags](mtaudioprocessingtapflags.md): Flags that indicate where to tap the audio.
- [MTAudioProcessingTapRef](mtaudioprocessingtap.md): An audio processing tap object.
