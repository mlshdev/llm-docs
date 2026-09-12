> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio_file_creation_flags](https://developer.apple.com/documentation/audiotoolbox/audio_file_creation_flags)

# Audio File Creation Flags (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Flags to set when creating an audio file.

<a id="overview"></a>

## Overview

Flags for use with the [AudioFileCreateWithURL(\_:\_:\_:\_:\_:)](audiofilecreatewithurl%28__________%29.md) and [AudioFileCreate](audiofilecreate.md) functions.

## Topics

### Constants

- [eraseFile](audiofileflags/erasefile.md)
- [dontPageAlignAudioData](audiofileflags/dontpagealignaudiodata.md): Typically, the audio data in a file is page aligned. To make reading the file data as fast as possible, you can use page-aligned data to take advantage of optimized code paths in the file system. However, when space is at a premium, you might want to avoid the additional padding required to attain alignment. To do so, set this flag when calling [AudioFileCreate](audiofilecreate.md) or [AudioFileCreateWithURL(\_:\_:\_:\_:\_:)](audiofilecreatewithurl%28__________%29.md).

## See Also

### Constants

- [AudioFileTypeID](audiofiletypeid.md): Operating system constants that indicate the type of file to be written or a hint about what type of file to expect from data provided.
- [AudioFilePermissions](audiofilepermissions.md): Flags for use when opening an audio file.
- [Audio File Loop Direction Constants](1576494-audio-file-loop-direction-consta.md): The playback direction of a looped segment of an audio file.
- [Audio File Marker Types](1576492-audio-file-marker-types.md): A type of marker within a file used in the `mType` field of the [AudioFileMarker](audiofilemarker.md) structure.
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [Audio File Packet Translation Flags](audio_file_packet_translation_flags.md): Flags specified in a packet translation structure.
- [Info String Keys](info-string-keys.md): Key values of properties to get and set using Audio File Services functions and provide a common way to get the same information out of several different kinds of files.
- [Audio File Properties](1576499-audio-file-properties.md): Properties used by the functions described in getting and setting pieces of data in audio files. See Working with Global Information for details.
- [Audio File Global Info Properties](1576495-audio-file-global-info-propertie.md): Access these properties using the functions described in Working with Global Information.

# Audio File Creation Flags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Flags to set when creating an audio file.

<a id="overview"></a>

## Overview

Flags for use with the [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md) and [AudioFileCreate](audiofilecreate.md) functions.

## Topics

### Constants

- [kAudioFileFlags_EraseFile](audiofileflags/erasefile.md)
- [kAudioFileFlags_DontPageAlignAudioData](audiofileflags/dontpagealignaudiodata.md): Typically, the audio data in a file is page aligned. To make reading the file data as fast as possible, you can use page-aligned data to take advantage of optimized code paths in the file system. However, when space is at a premium, you might want to avoid the additional padding required to attain alignment. To do so, set this flag when calling [AudioFileCreate](audiofilecreate.md) or [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md).

## See Also

### Constants

- [AudioFileTypeID](audiofiletypeid.md): Operating system constants that indicate the type of file to be written or a hint about what type of file to expect from data provided.
- [AudioFilePermissions](audiofilepermissions.md): Flags for use when opening an audio file.
- [Audio File Loop Direction Constants](1576494-audio-file-loop-direction-consta.md): The playback direction of a looped segment of an audio file.
- [Audio File Marker Types](1576492-audio-file-marker-types.md): A type of marker within a file used in the `mType` field of the [AudioFileMarker](audiofilemarker.md) structure.
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [Audio File Packet Translation Flags](audio_file_packet_translation_flags.md): Flags specified in a packet translation structure.
- [Info String Keys](info-string-keys.md): Key values of properties to get and set using Audio File Services functions and provide a common way to get the same information out of several different kinds of files.
- [Audio File Properties](1576499-audio-file-properties.md): Properties used by the functions described in getting and setting pieces of data in audio files. See Working with Global Information for details.
- [Audio File Global Info Properties](1576495-audio-file-global-info-propertie.md): Access these properties using the functions described in Working with Global Information.
