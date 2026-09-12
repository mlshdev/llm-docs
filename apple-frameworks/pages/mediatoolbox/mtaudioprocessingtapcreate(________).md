> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapcreate(_:_:_:_:)](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapcreate(_:_:_:_:))

# MTAudioProcessingTapCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a new audio processing tap.

## Declaration

```swift
func MTAudioProcessingTapCreate(_ allocator: CFAllocator?, _ callbacks: UnsafePointer<MTAudioProcessingTapCallbacks>, _ flags: MTAudioProcessingTapCreationFlags, _ tapOut: UnsafeMutablePointer<MTAudioProcessingTap?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new tap. Pass `NULL` or `kCFAllocatorDefault` to use the current default allocator.
- `callbacks`: An callbacks struct. [MTAudioProcessingTap](mtaudioprocessingtap.md) makes a copy of this struct.
- `flags`: Flags that are used to control aspects of the processing tap. Valid flags are:

  - **[kMTAudioProcessingTapCreationFlag_PreEffects](kmtaudioprocessingtapcreationflag_preeffects.md)**: processing is done before any further effects are applied by the audio queue to the audio.
  - **[kMTAudioProcessingTapCreationFlag_PostEffects](kmtaudioprocessingtapcreationflag_posteffects.md)**: processing is done after all processing is done, including that of other taps.
- `tapOut`: The processing tap object.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Overview"></a>

## Overview

The processing tap will then be used to process decoded data. The processing is performed on audio either before or after any effects or other processing (varispeed, etc) is applied by the audio queue.

## Topics

### Flags

- [MTAudioProcessingTapCreationFlags](mtaudioprocessingtapcreationflags.md): Flags to use when creating audio processing taps.

### Callbacks

- [MTAudioProcessingTapCallbacks](mtaudioprocessingtapcallbacks.md): A structure that defines life cycle callbacks for an audio processing tap object.

## See Also

### Audio Taps

- [MTAudioProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:)](mtaudioprocessingtapgetsourceaudio%28____________%29.md): Retrieves source audio for an audio processing tap.
- [MTAudioProcessingTapGetStorage(\_:)](mtaudioprocessingtapgetstorage%28__%29.md): Retrieves a custom storage pointer for an audio processing tap.
- [MTAudioProcessingTapGetTypeID()](mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTapFlags](mtaudioprocessingtapflags.md): Flags that indicate where to tap the audio.
- [MTAudioProcessingTap](mtaudioprocessingtap.md): An audio processing tap object.

# MTAudioProcessingTapCreate (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a new audio processing tap.

## Declaration

```objectivec
extern OSStatus MTAudioProcessingTapCreate(CFAllocatorRef allocator, const MTAudioProcessingTapCallbacks *callbacks, MTAudioProcessingTapCreationFlags flags, MTAudioProcessingTapRef*tapOut);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new tap. Pass `NULL` or `kCFAllocatorDefault` to use the current default allocator.
- `callbacks`: An callbacks struct. [MTAudioProcessingTapRef](mtaudioprocessingtap.md) makes a copy of this struct.
- `flags`: Flags that are used to control aspects of the processing tap. Valid flags are:

  - **[kMTAudioProcessingTapCreationFlag_PreEffects](kmtaudioprocessingtapcreationflag_preeffects.md)**: processing is done before any further effects are applied by the audio queue to the audio.
  - **[kMTAudioProcessingTapCreationFlag_PostEffects](kmtaudioprocessingtapcreationflag_posteffects.md)**: processing is done after all processing is done, including that of other taps.
- `tapOut`: The processing tap object.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Overview"></a>

## Overview

The processing tap will then be used to process decoded data. The processing is performed on audio either before or after any effects or other processing (varispeed, etc) is applied by the audio queue.

## Topics

### Flags

- [MTAudioProcessingTapCreationFlags](mtaudioprocessingtapcreationflags.md): Flags to use when creating audio processing taps.

### Callbacks

- [MTAudioProcessingTapCallbacks](mtaudioprocessingtapcallbacks.md): A structure that defines life cycle callbacks for an audio processing tap object.

## See Also

### Audio Taps

- [MTAudioProcessingTapGetSourceAudio](mtaudioprocessingtapgetsourceaudio%28____________%29.md): Retrieves source audio for an audio processing tap.
- [MTAudioProcessingTapGetStorage](mtaudioprocessingtapgetstorage%28__%29.md): Retrieves a custom storage pointer for an audio processing tap.
- [MTAudioProcessingTapGetTypeID](mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTapFlags](mtaudioprocessingtapflags.md): Flags that indicate where to tap the audio.
- [MTAudioProcessingTapRef](mtaudioprocessingtap.md): An audio processing tap object.
