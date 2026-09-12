> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox](https://developer.apple.com/documentation/mediatoolbox)

# Media Toolbox (Swift)

**Framework:** Media Toolbox  
**Kind:** Framework  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Enable support for media format readers; tap and process audio from an audio mix.

<a id="overview"></a>

## Overview

Call the [MTRegisterProfessionalVideoWorkflowFormatReaders()](mediatoolbox/mtregisterprofessionalvideoworkflowformatreaders%28%29.md) function to enable the use of custom [MediaExtension](https://developer.apple.com/documentation/mediaextension) format readers.

Use an [MTAudioProcessingTap](mediatoolbox/mtaudioprocessingtap.md) to tap audio from an [AVPlayer](avfoundation/avplayer.md).

## Topics

### Professional video workflows

- [MTRegisterProfessionalVideoWorkflowFormatReaders()](mediatoolbox/mtregisterprofessionalvideoworkflowformatreaders%28%29.md): Enables the use of media format readers that support professional video workflows.

### Audio Taps

- [MTAudioProcessingTapCreate(\_:\_:\_:\_:)](mediatoolbox/mtaudioprocessingtapcreate%28________%29.md): Creates a new audio processing tap.
- [MTAudioProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:)](mediatoolbox/mtaudioprocessingtapgetsourceaudio%28____________%29.md): Retrieves source audio for an audio processing tap.
- [MTAudioProcessingTapGetStorage(\_:)](mediatoolbox/mtaudioprocessingtapgetstorage%28__%29.md): Retrieves a custom storage pointer for an audio processing tap.
- [MTAudioProcessingTapGetTypeID()](mediatoolbox/mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTapFlags](mediatoolbox/mtaudioprocessingtapflags.md): Flags that indicate where to tap the audio.
- [MTAudioProcessingTap](mediatoolbox/mtaudioprocessingtap.md): An audio processing tap object.

### Utility

- [MTCopyLocalizedNameForMediaType(\_:)](mediatoolbox/mtcopylocalizednameformediatype%28__%29.md): Returns a localized name for the specified media type.
- [MTCopyLocalizedNameForMediaSubType(\_:\_:)](mediatoolbox/mtcopylocalizednameformediasubtype%28____%29.md): Returns a localized name for the specified media type and subtype.

### Enumerations

- [Anonymous Enumerations](mediatoolbox/anonymous-enums.md)

### Functions

- [MTAudioProcessingTapCreateWithPreferredFormat(\_:\_:\_:\_:\_:)](mediatoolbox/mtaudioprocessingtapcreatewithpreferredformat%28__________%29.md)

# Media Toolbox (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Framework  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Enable support for media format readers; tap and process audio from an audio mix.

<a id="overview"></a>

## Overview

Call the [MTRegisterProfessionalVideoWorkflowFormatReaders](mediatoolbox/mtregisterprofessionalvideoworkflowformatreaders%28%29.md) function to enable the use of custom [MediaExtension](https://developer.apple.com/documentation/mediaextension) format readers.

Use an [MTAudioProcessingTapRef](mediatoolbox/mtaudioprocessingtap.md) to tap audio from an [AVPlayer](avfoundation/avplayer.md).

## Topics

### Professional video workflows

- [MTRegisterProfessionalVideoWorkflowFormatReaders](mediatoolbox/mtregisterprofessionalvideoworkflowformatreaders%28%29.md): Enables the use of media format readers that support professional video workflows.

### Audio Taps

- [MTAudioProcessingTapCreate](mediatoolbox/mtaudioprocessingtapcreate%28________%29.md): Creates a new audio processing tap.
- [MTAudioProcessingTapGetSourceAudio](mediatoolbox/mtaudioprocessingtapgetsourceaudio%28____________%29.md): Retrieves source audio for an audio processing tap.
- [MTAudioProcessingTapGetStorage](mediatoolbox/mtaudioprocessingtapgetstorage%28__%29.md): Retrieves a custom storage pointer for an audio processing tap.
- [MTAudioProcessingTapGetTypeID](mediatoolbox/mtaudioprocessingtapgettypeid%28%29.md): Retrieves the type identifier for this audio processing tap.
- [MTAudioProcessingTapFlags](mediatoolbox/mtaudioprocessingtapflags.md): Flags that indicate where to tap the audio.
- [MTAudioProcessingTapRef](mediatoolbox/mtaudioprocessingtap.md): An audio processing tap object.

### Utility

- [MTCopyLocalizedNameForMediaType](mediatoolbox/mtcopylocalizednameformediatype%28__%29.md): Returns a localized name for the specified media type.
- [MTCopyLocalizedNameForMediaSubType](mediatoolbox/mtcopylocalizednameformediasubtype%28____%29.md): Returns a localized name for the specified media type and subtype.

### Enumerations

- [Anonymous Enumerations](mediatoolbox/anonymous-enums.md)

### Functions

- [MTAudioProcessingTapCreateWithPreferredFormat](mediatoolbox/mtaudioprocessingtapcreatewithpreferredformat%28__________%29.md)
