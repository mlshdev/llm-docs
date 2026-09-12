> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofiletypeid](https://developer.apple.com/documentation/audiotoolbox/audiofiletypeid)

# AudioFileTypeID (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Operating system constants that indicate the type of file to be written or a hint about what type of file to expect from data provided.

## Declaration

```swift
typealias AudioFileTypeID = UInt32
```

## Topics

### Constants

- [kAudioFileAIFFType](kaudiofileaifftype.md): An Audio Interchange File Format (AIFF) file.
- [kAudioFileAIFCType](kaudiofileaifctype.md): An Audio Interchange File Format Compressed (AIFF-C) file.
- [kAudioFileWAVEType](kaudiofilewavetype.md): A Microsoft WAVE file.
- [kAudioFileSoundDesigner2Type](kaudiofilesounddesigner2type.md): A Sound Designer II file.
- [kAudioFileNextType](kaudiofilenexttype.md): A NeXT or Sun Microsystems file.
- [kAudioFileMP3Type](kaudiofilemp3type.md): An MPEG Audio Layer 3 (`.mp3`) file.
- [kAudioFileMP2Type](kaudiofilemp2type.md): An MPEG Audio Layer 2 (`.mp2`) file.
- [kAudioFileMP1Type](kaudiofilemp1type.md): An MPEG Audio Layer 1 (`.mp1`) file.
- [kAudioFileAC3Type](kaudiofileac3type.md): An AC-3 file.
- [kAudioFileAAC_ADTSType](kaudiofileaac_adtstype.md): An Advanced Audio Coding (AAC) Audio Data Transport Stream (ADTS) file.
- [kAudioFileMPEG4Type](kaudiofilempeg4type.md): An MPEG 4 file.
- [kAudioFileM4AType](kaudiofilem4atype.md): An M4A file.
- [kAudioFileCAFType](kaudiofilecaftype.md): A Core Audio File Format file.
- [kAudioFile3GPType](kaudiofile3gptype.md): A 3GPP file, suitable for video content on GSM mobile phones.
- [kAudioFile3GP2Type](kaudiofile3gp2type.md): A 3GPP2 file, suitable for video content on CDMA mobile phones.
- [kAudioFileAMRType](kaudiofileamrtype.md): An AMR (Adaptive Multi-Rate) file suitable for compressed speech.

## See Also

### Constants

- [Audio File Creation Flags](audio_file_creation_flags.md): Flags to set when creating an audio file.
- [AudioFilePermissions](audiofilepermissions.md): Flags for use when opening an audio file.
- [Audio File Loop Direction Constants](1576494-audio-file-loop-direction-consta.md): The playback direction of a looped segment of an audio file.
- [Audio File Marker Types](1576492-audio-file-marker-types.md): A type of marker within a file used in the `mType` field of the [AudioFileMarker](audiofilemarker.md) structure.
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [Audio File Packet Translation Flags](audio_file_packet_translation_flags.md): Flags specified in a packet translation structure.
- [Info String Keys](info-string-keys.md): Key values of properties to get and set using Audio File Services functions and provide a common way to get the same information out of several different kinds of files.
- [Audio File Properties](1576499-audio-file-properties.md): Properties used by the functions described in getting and setting pieces of data in audio files. See Working with Global Information for details.
- [Audio File Global Info Properties](1576495-audio-file-global-info-propertie.md): Access these properties using the functions described in Working with Global Information.

# AudioFileTypeID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Operating system constants that indicate the type of file to be written or a hint about what type of file to expect from data provided.

## Declaration

```objectivec
typedef UInt32 AudioFileTypeID;
```

## Topics

### Constants

- [kAudioFileAIFFType](kaudiofileaifftype.md): An Audio Interchange File Format (AIFF) file.
- [kAudioFileAIFCType](kaudiofileaifctype.md): An Audio Interchange File Format Compressed (AIFF-C) file.
- [kAudioFileWAVEType](kaudiofilewavetype.md): A Microsoft WAVE file.
- [kAudioFileSoundDesigner2Type](kaudiofilesounddesigner2type.md): A Sound Designer II file.
- [kAudioFileNextType](kaudiofilenexttype.md): A NeXT or Sun Microsystems file.
- [kAudioFileMP3Type](kaudiofilemp3type.md): An MPEG Audio Layer 3 (`.mp3`) file.
- [kAudioFileMP2Type](kaudiofilemp2type.md): An MPEG Audio Layer 2 (`.mp2`) file.
- [kAudioFileMP1Type](kaudiofilemp1type.md): An MPEG Audio Layer 1 (`.mp1`) file.
- [kAudioFileAC3Type](kaudiofileac3type.md): An AC-3 file.
- [kAudioFileAAC_ADTSType](kaudiofileaac_adtstype.md): An Advanced Audio Coding (AAC) Audio Data Transport Stream (ADTS) file.
- [kAudioFileMPEG4Type](kaudiofilempeg4type.md): An MPEG 4 file.
- [kAudioFileM4AType](kaudiofilem4atype.md): An M4A file.
- [kAudioFileCAFType](kaudiofilecaftype.md): A Core Audio File Format file.
- [kAudioFile3GPType](kaudiofile3gptype.md): A 3GPP file, suitable for video content on GSM mobile phones.
- [kAudioFile3GP2Type](kaudiofile3gp2type.md): A 3GPP2 file, suitable for video content on CDMA mobile phones.
- [kAudioFileAMRType](kaudiofileamrtype.md): An AMR (Adaptive Multi-Rate) file suitable for compressed speech.

## See Also

### Constants

- [Audio File Creation Flags](audio_file_creation_flags.md): Flags to set when creating an audio file.
- [AudioFilePermissions](audiofilepermissions.md): Flags for use when opening an audio file.
- [Audio File Loop Direction Constants](1576494-audio-file-loop-direction-consta.md): The playback direction of a looped segment of an audio file.
- [Audio File Marker Types](1576492-audio-file-marker-types.md): A type of marker within a file used in the `mType` field of the [AudioFileMarker](audiofilemarker.md) structure.
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [Audio File Packet Translation Flags](audio_file_packet_translation_flags.md): Flags specified in a packet translation structure.
- [Info String Keys](info-string-keys.md): Key values of properties to get and set using Audio File Services functions and provide a common way to get the same information out of several different kinds of files.
- [Audio File Properties](1576499-audio-file-properties.md): Properties used by the functions described in getting and setting pieces of data in audio files. See Working with Global Information for details.
- [Audio File Global Info Properties](1576495-audio-file-global-info-propertie.md): Access these properties using the functions described in Working with Global Information.
