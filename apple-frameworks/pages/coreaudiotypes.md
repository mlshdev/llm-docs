> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes](https://developer.apple.com/documentation/coreaudiotypes)

# Core Audio Types (Swift)

**Framework:** Core Audio Types  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Use specialized data types to interact with audio streams, complex buffers, and audiovisual timestamps.

<a id="overview"></a>

## Overview

The Core Audio Types framework declares common data types and constants that other Core Audio interfaces use. This framework also includes several convenience functions.

If you’re unfamiliar with the specialized terminology regarding the manipulation of audio data, refer to [Core Audio Glossary](https://developer.apple.com/library/archive/documentation/MusicAudio/Reference/CoreAudioGlossary/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004453).

## Topics

### Buffers

- [AudioBuffer](coreaudiotypes/audiobuffer.md): A structure that holds a buffer of audio data.
- [AudioBufferList](coreaudiotypes/audiobufferlist.md): A structure that stores a variable-length array of audio buffers.

### Channels

- [AudioChannelDescription](coreaudiotypes/audiochanneldescription.md): A structure that describes a channel of audio data.
- [AudioChannelLayout](coreaudiotypes/audiochannellayout.md): A structure that specifies a channel layout in a file or in hardware.

### Codecs

- [AudioClassDescription](coreaudiotypes/audioclassdescription.md): A structure that describes an audio codec.

### Audio Time

- [AudioTimeStamp](coreaudiotypes/audiotimestamp.md): A structure that represents a timestamp value.
- [AudioTimeStampFlags](coreaudiotypes/audiotimestampflags.md): A structure that represents flags for a timestamp.

### SMPTE Time

- [SMPTETime](coreaudiotypes/smptetime.md): A structure that defines an SMPTE time value.
- [SMPTETimeFlags](coreaudiotypes/smptetimeflags.md): A structure that defines SMPTE time flags.
- [SMPTETimeType](coreaudiotypes/smptetimetype.md): Constants that define SMPTE time types.

### Values

- [AudioValueRange](coreaudiotypes/audiovaluerange.md): A structure that represents a continuous range of values.
- [AudioValueTranslation](coreaudiotypes/audiovaluetranslation.md): A structure that stores buffers to use in translation operations.

### Streams

- [AudioStreamBasicDescription](coreaudiotypes/audiostreambasicdescription.md): A format specification for an audio stream.
- [AudioStreamPacketDescription](coreaudiotypes/audiostreampacketdescription.md): A value that describes a packet in a buffer of audio data.
- [AudioFormatFlags](coreaudiotypes/audioformatflags.md): A type definition for audio format flags.
- [Audio Format Flags](coreaudiotypes/audio-format-flags.md): Commonly used combinations of data format flags for an audio stream description.
- [AudioFormatID](coreaudiotypes/audioformatid.md): A type definition for audio format identifiers.
- [Audio Format Identifiers](coreaudiotypes/audio-format-identifiers.md): Identifiers for supported audio formats.
- [kAudioStreamAnyRate](coreaudiotypes/kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.
- [MPEG4ObjectID](coreaudiotypes/mpeg4objectid.md): Deprecated. Constants that define the type of MPEG-4 audio data.

### Common Types

- [AVAudioInteger](coreaudiotypes/avaudiointeger.md): An integer type for audio operations.
- [AVAudioUInteger](coreaudiotypes/avaudiouinteger.md): An unsigned integer type for audio operations.
- [AudioSessionID](coreaudiotypes/audiosessionid.md): A unique identifier of an audio session.
- [kAudioUnitSampleFractionBits](coreaudiotypes/kaudiounitsamplefractionbits.md): The number of fractional bits in fixed-point samples.
- [COREAUDIOTYPES_VERSION](coreaudiotypes/coreaudiotypes_version.md): A value that represents the Core Audio Types version.
- [AudioSampleType](coreaudiotypes/audiosampletype.md): Deprecated. The canonical audio data sample type for input and output.
- [AudioUnitSampleType](coreaudiotypes/audiounitsampletype.md): Deprecated. The canonical audio data sample type for audio processing.
- [AudioFormatListItem](coreaudiotypes/audioformatlistitem.md)

### Errors

- [kAudio_ParamError](coreaudiotypes/kaudio_paramerror.md): An error in the parameter list of the function.
- [kAudio_MemFullError](coreaudiotypes/kaudio_memfullerror.md): An error that indicates that the heap zone is full.
- [kAudio_FileNotFoundError](coreaudiotypes/kaudio_filenotfounderror.md): An error that indicates the file wasn’t found.
- [kAudio_UnimplementedError](coreaudiotypes/kaudio_unimplementederror.md): An error that indicates the app called an unimplemented system function.

### Reference

- [CoreAudioTypes Enumerations](coreaudiotypes/coreaudiotypes-enumerations.md)

### Structures

- [AudioStreamPacketDependencyDescription](coreaudiotypes/audiostreampacketdependencydescription.md)

### Variables

- [kAudioChannelLayoutTag_Ogg_3_0](coreaudiotypes/kaudiochannellayouttag_ogg_3_0.md)
- [kAudioChannelLayoutTag_Ogg_4_0](coreaudiotypes/kaudiochannellayouttag_ogg_4_0.md)
- [kAudioChannelLayoutTag_Ogg_5_0](coreaudiotypes/kaudiochannellayouttag_ogg_5_0.md)
- [kAudioChannelLayoutTag_Ogg_5_1](coreaudiotypes/kaudiochannellayouttag_ogg_5_1.md)
- [kAudioChannelLayoutTag_Ogg_6_1](coreaudiotypes/kaudiochannellayouttag_ogg_6_1.md)
- [kAudioChannelLayoutTag_Ogg_7_1](coreaudiotypes/kaudiochannellayouttag_ogg_7_1.md)
- [kAudioFormatAPAC](coreaudiotypes/kaudioformatapac.md)
- [kAudio_BadFilePathError](coreaudiotypes/kaudio_badfilepatherror.md)
- [kAudio_FilePermissionError](coreaudiotypes/kaudio_filepermissionerror.md)
- [kAudio_NoError](coreaudiotypes/kaudio_noerror.md)
- [kAudio_TooManyFilesOpenError](coreaudiotypes/kaudio_toomanyfilesopenerror.md)

# Core Audio Types (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Use specialized data types to interact with audio streams, complex buffers, and audiovisual timestamps.

<a id="overview"></a>

## Overview

The Core Audio Types framework declares common data types and constants that other Core Audio interfaces use. This framework also includes several convenience functions.

If you’re unfamiliar with the specialized terminology regarding the manipulation of audio data, refer to [Core Audio Glossary](https://developer.apple.com/library/archive/documentation/MusicAudio/Reference/CoreAudioGlossary/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004453).

## Topics

### Buffers

- [AudioBuffer](coreaudiotypes/audiobuffer.md): A structure that holds a buffer of audio data.
- [AudioBufferList](coreaudiotypes/audiobufferlist.md): A structure that stores a variable-length array of audio buffers.

### Channels

- [AudioChannelDescription](coreaudiotypes/audiochanneldescription.md): A structure that describes a channel of audio data.
- [AudioChannelLayout](coreaudiotypes/audiochannellayout.md): A structure that specifies a channel layout in a file or in hardware.

### Codecs

- [AudioClassDescription](coreaudiotypes/audioclassdescription.md): A structure that describes an audio codec.

### Audio Time

- [AudioTimeStamp](coreaudiotypes/audiotimestamp.md): A structure that represents a timestamp value.
- [AudioTimeStampFlags](coreaudiotypes/audiotimestampflags.md): A structure that represents flags for a timestamp.

### SMPTE Time

- [SMPTETime](coreaudiotypes/smptetime.md): A structure that defines an SMPTE time value.
- [SMPTETimeFlags](coreaudiotypes/smptetimeflags.md): A structure that defines SMPTE time flags.
- [SMPTETimeType](coreaudiotypes/smptetimetype.md): Constants that define SMPTE time types.

### Values

- [AudioValueRange](coreaudiotypes/audiovaluerange.md): A structure that represents a continuous range of values.
- [AudioValueTranslation](coreaudiotypes/audiovaluetranslation.md): A structure that stores buffers to use in translation operations.

### Streams

- [AudioStreamBasicDescription](coreaudiotypes/audiostreambasicdescription.md): A format specification for an audio stream.
- [AudioStreamPacketDescription](coreaudiotypes/audiostreampacketdescription.md): A value that describes a packet in a buffer of audio data.
- [AudioFormatFlags](coreaudiotypes/audioformatflags.md): A type definition for audio format flags.
- [AudioFormatID](coreaudiotypes/audioformatid.md): A type definition for audio format identifiers.
- [kAudioStreamAnyRate](coreaudiotypes/kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.
- [MPEG4ObjectID](coreaudiotypes/mpeg4objectid.md): Deprecated. Constants that define the type of MPEG-4 audio data.

### Common Types

- [AVAudioInteger](coreaudiotypes/avaudiointeger.md): An integer type for audio operations.
- [AVAudioUInteger](coreaudiotypes/avaudiouinteger.md): An unsigned integer type for audio operations.
- [AudioSessionID](coreaudiotypes/audiosessionid.md): A unique identifier of an audio session.
- [kAudioUnitSampleFractionBits](coreaudiotypes/kaudiounitsamplefractionbits.md): The number of fractional bits in fixed-point samples.
- [AVAudioSessionErrorInsufficientPriority](coreaudiotypes/avaudiosessionerrorinsufficientpriority.md): Deprecated. An error code that indicates the app isn’t allowed to set the audio category because it’s in use by another app.
- [COREAUDIOTYPES_VERSION](coreaudiotypes/coreaudiotypes_version.md): A value that represents the Core Audio Types version.
- [AudioSampleType](coreaudiotypes/audiosampletype.md): Deprecated. The canonical audio data sample type for input and output.
- [AudioUnitSampleType](coreaudiotypes/audiounitsampletype.md): Deprecated. The canonical audio data sample type for audio processing.
- [AudioFormatListItem](coreaudiotypes/audioformatlistitem.md)

### Errors

- [kAudio_ParamError](coreaudiotypes/kaudio_paramerror.md): An error in the parameter list of the function.
- [kAudio_MemFullError](coreaudiotypes/kaudio_memfullerror.md): An error that indicates that the heap zone is full.
- [kAudio_FileNotFoundError](coreaudiotypes/kaudio_filenotfounderror.md): An error that indicates the file wasn’t found.
- [kAudio_UnimplementedError](coreaudiotypes/kaudio_unimplementederror.md): An error that indicates the app called an unimplemented system function.

### Reference

- [CoreAudioTypes Enumerations](coreaudiotypes/coreaudiotypes-enumerations.md)

### Structures

- [AudioStreamPacketDependencyDescription](coreaudiotypes/audiostreampacketdependencydescription.md)

### Macros

- [CA_CANONICAL_DEPRECATED](coreaudiotypes/ca_canonical_deprecated.md)
- [CA_REALTIME_API](coreaudiotypes/ca_realtime_api.md)
- [TestAudioFormatNativeEndian](coreaudiotypes/testaudioformatnativeendian.md)

### Enumeration Cases

- [kAudioChannelLayoutTag_Ogg_3_0](coreaudiotypes/kaudiochannellayouttag_ogg_3_0.md)
- [kAudioChannelLayoutTag_Ogg_4_0](coreaudiotypes/kaudiochannellayouttag_ogg_4_0.md)
- [kAudioChannelLayoutTag_Ogg_5_0](coreaudiotypes/kaudiochannellayouttag_ogg_5_0.md)
- [kAudioChannelLayoutTag_Ogg_5_1](coreaudiotypes/kaudiochannellayouttag_ogg_5_1.md)
- [kAudioChannelLayoutTag_Ogg_6_1](coreaudiotypes/kaudiochannellayouttag_ogg_6_1.md)
- [kAudioChannelLayoutTag_Ogg_7_1](coreaudiotypes/kaudiochannellayouttag_ogg_7_1.md)
- [kAudioFormatAPAC](coreaudiotypes/kaudioformatapac.md)
- [kAudio_BadFilePathError](coreaudiotypes/kaudio_badfilepatherror.md)
- [kAudio_FilePermissionError](coreaudiotypes/kaudio_filepermissionerror.md)
- [kAudio_NoError](coreaudiotypes/kaudio_noerror.md)
- [kAudio_TooManyFilesOpenError](coreaudiotypes/kaudio_toomanyfilesopenerror.md)

### Enumerations

- [AVAudioSessionErrorCode](coreaudiotypes/avaudiosession/errorcode.md): Codes that describe error conditions that may occur when performing audio session operations.
