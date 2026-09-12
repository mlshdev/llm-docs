> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extended-audio-file-services](https://developer.apple.com/documentation/audiotoolbox/extended-audio-file-services)

# Extended Audio File Services (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Read and write compressed files and linear PCM audio files using a simplified interface.

<a id="overview"></a>

## Overview

Extended Audio File Services provides simplified audio file access, combining features of Audio File Services and Audio Converter Services. It provides a unified interface for reading and writing compressed as well as linear PCM audio files.

## Topics

### Managing Extended Audio File Objects

- [ExtAudioFileCreateWithURL(\_:\_:\_:\_:\_:\_:)](extaudiofilecreatewithurl%28____________%29.md): Creates a new audio file and associates it with a new extended audio file object.
- [ExtAudioFileDispose(\_:)](extaudiofiledispose%28__%29.md): Disposes of an extended audio file object and closes the associated file.
- [ExtAudioFileOpenURL(\_:\_:)](extaudiofileopenurl%28____%29.md): Opens an existing audio file for reading, and associates it with a new extended audio file object.
- [ExtAudioFileWrapAudioFileID(\_:\_:\_:)](extaudiofilewrapaudiofileid%28______%29.md): Wraps an audio file object in an extended audio file object.

### Configuring Properties for Extended Audio File Objects

- [ExtAudioFileGetProperty(\_:\_:\_:\_:)](extaudiofilegetproperty%28________%29.md): Gets a property value from an extended audio file object.
- [ExtAudioFileGetPropertyInfo(\_:\_:\_:\_:)](extaudiofilegetpropertyinfo%28________%29.md): Gets information about an extended audio file object property.
- [ExtAudioFileSetProperty(\_:\_:\_:\_:)](extaudiofilesetproperty%28________%29.md): Sets a property value for an extended audio file object.

### Reading and Writing Audio Data

- [ExtAudioFileRead(\_:\_:\_:)](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileSeek(\_:\_:)](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileTell(\_:\_:)](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWrite(\_:\_:\_:)](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.
- [ExtAudioFileWriteAsync(\_:\_:\_:)](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.

### Data Types

- [ExtAudioFilePacketTableInfoOverride](extaudiofilepackettableinfooverride.md)
- [ExtAudioFileRef](extaudiofileref.md): An opaque structure representing an extended audio file object.
- [ExtAudioFilePropertyID](extaudiofilepropertyid.md): An audio file object property identifier.

### Constants

- [Extended Audio FIle Errors](1486883-extended-audio-file-errors.md)
- [Codec Unavailable Errors](1623673-codec-unavailable-errors.md)
- [Property Identifiers for Extended Audio File Objects](1486859-property-identifiers-for-extende.md)
- [Extended Audio File Packet Overrides](3547074-extended-audio-file-packet-overr.md)

### Result Codes

This table lists result codes defined for Extended Audio File Services.

- [kExtAudioFileError_CodecUnavailableInputConsumed](kextaudiofileerror_codecunavailableinputconsumed.md): The [ExtAudioFileWrite(\_:\_:\_:)](extaudiofilewrite%28______%29.md) function was interrupted and the last buffer that you provided was successfully written to disk.
- [kExtAudioFileError_CodecUnavailableInputNotConsumed](kextaudiofileerror_codecunavailableinputnotconsumed.md): The [ExtAudioFileWrite(\_:\_:\_:)](extaudiofilewrite%28______%29.md) function was interrupted and the last buffer that you provided was *not* successfully written to disk.
- [kExtAudioFileError_InvalidProperty](kextaudiofileerror_invalidproperty.md)
- [kExtAudioFileError_InvalidPropertySize](kextaudiofileerror_invalidpropertysize.md)
- [kExtAudioFileError_NonPCMClientFormat](kextaudiofileerror_nonpcmclientformat.md)
- [kExtAudioFileError_InvalidChannelMap](kextaudiofileerror_invalidchannelmap.md): The number of channels does not match the specified format.
- [kExtAudioFileError_InvalidOperationOrder](kextaudiofileerror_invalidoperationorder.md)
- [kExtAudioFileError_InvalidDataFormat](kextaudiofileerror_invaliddataformat.md)
- [kExtAudioFileError_MaxPacketSizeUnknown](kextaudiofileerror_maxpacketsizeunknown.md)
- [kExtAudioFileError_InvalidSeek](kextaudiofileerror_invalidseek.md): An attempt to write, or an offset, is out of bounds.
- [kExtAudioFileError_AsyncWriteTooLarge](kextaudiofileerror_asyncwritetoolarge.md)
- [kExtAudioFileError_AsyncWriteBufferOverflow](kextaudiofileerror_asyncwritebufferoverflow.md): An asynchronous write operation could not be completed in time.

## See Also

### Audio Files and Formats

- [Audio Format Services](audio-format-services.md): Access information about audio formats and codecs.
- [Audio File Services](audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Audio File Stream Services](audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Audio File Components](audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.

# Extended Audio File Services (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Read and write compressed files and linear PCM audio files using a simplified interface.

<a id="overview"></a>

## Overview

Extended Audio File Services provides simplified audio file access, combining features of Audio File Services and Audio Converter Services. It provides a unified interface for reading and writing compressed as well as linear PCM audio files.

## Topics

### Managing Extended Audio File Objects

- [ExtAudioFileCreateWithURL](extaudiofilecreatewithurl%28____________%29.md): Creates a new audio file and associates it with a new extended audio file object.
- [ExtAudioFileDispose](extaudiofiledispose%28__%29.md): Disposes of an extended audio file object and closes the associated file.
- [ExtAudioFileOpenURL](extaudiofileopenurl%28____%29.md): Opens an existing audio file for reading, and associates it with a new extended audio file object.
- [ExtAudioFileWrapAudioFileID](extaudiofilewrapaudiofileid%28______%29.md): Wraps an audio file object in an extended audio file object.

### Configuring Properties for Extended Audio File Objects

- [ExtAudioFileGetProperty](extaudiofilegetproperty%28________%29.md): Gets a property value from an extended audio file object.
- [ExtAudioFileGetPropertyInfo](extaudiofilegetpropertyinfo%28________%29.md): Gets information about an extended audio file object property.
- [ExtAudioFileSetProperty](extaudiofilesetproperty%28________%29.md): Sets a property value for an extended audio file object.

### Reading and Writing Audio Data

- [ExtAudioFileRead](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileSeek](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileTell](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWrite](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.
- [ExtAudioFileWriteAsync](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.

### Deprecated Functions

- [ExtAudioFileCreateNew](extaudiofilecreatenew.md): Deprecated. Deprecated. Use the [ExtAudioFileCreateWithURL](extaudiofilecreatewithurl%28____________%29.md) function instead.
- [ExtAudioFileOpen](extaudiofileopen.md): Deprecated. Deprecated. Use the [ExtAudioFileOpenURL](extaudiofileopenurl%28____%29.md) function instead.

### Data Types

- [ExtAudioFilePacketTableInfoOverride](extaudiofilepackettableinfooverride.md)
- [ExtAudioFileRef](extaudiofileref.md): An opaque structure representing an extended audio file object.
- [ExtAudioFilePropertyID](extaudiofilepropertyid.md): An audio file object property identifier.

### Constants

- [Extended Audio FIle Errors](1486883-extended-audio-file-errors.md)
- [Codec Unavailable Errors](1623673-codec-unavailable-errors.md)
- [Property Identifiers for Extended Audio File Objects](1486859-property-identifiers-for-extende.md)
- [Extended Audio File Packet Overrides](3547074-extended-audio-file-packet-overr.md)

### Result Codes

This table lists result codes defined for Extended Audio File Services.

- [kExtAudioFileError_CodecUnavailableInputConsumed](kextaudiofileerror_codecunavailableinputconsumed.md): The [ExtAudioFileWrite](extaudiofilewrite%28______%29.md) function was interrupted and the last buffer that you provided was successfully written to disk.
- [kExtAudioFileError_CodecUnavailableInputNotConsumed](kextaudiofileerror_codecunavailableinputnotconsumed.md): The [ExtAudioFileWrite](extaudiofilewrite%28______%29.md) function was interrupted and the last buffer that you provided was *not* successfully written to disk.
- [kExtAudioFileError_InvalidProperty](kextaudiofileerror_invalidproperty.md)
- [kExtAudioFileError_InvalidPropertySize](kextaudiofileerror_invalidpropertysize.md)
- [kExtAudioFileError_NonPCMClientFormat](kextaudiofileerror_nonpcmclientformat.md)
- [kExtAudioFileError_InvalidChannelMap](kextaudiofileerror_invalidchannelmap.md): The number of channels does not match the specified format.
- [kExtAudioFileError_InvalidOperationOrder](kextaudiofileerror_invalidoperationorder.md)
- [kExtAudioFileError_InvalidDataFormat](kextaudiofileerror_invaliddataformat.md)
- [kExtAudioFileError_MaxPacketSizeUnknown](kextaudiofileerror_maxpacketsizeunknown.md)
- [kExtAudioFileError_InvalidSeek](kextaudiofileerror_invalidseek.md): An attempt to write, or an offset, is out of bounds.
- [kExtAudioFileError_AsyncWriteTooLarge](kextaudiofileerror_asyncwritetoolarge.md)
- [kExtAudioFileError_AsyncWriteBufferOverflow](kextaudiofileerror_asyncwritebufferoverflow.md): An asynchronous write operation could not be completed in time.

## See Also

### Audio Files and Formats

- [Audio Format Services](audio-format-services.md): Access information about audio formats and codecs.
- [Audio File Services](audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Audio File Stream Services](audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Audio File Components](audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.
