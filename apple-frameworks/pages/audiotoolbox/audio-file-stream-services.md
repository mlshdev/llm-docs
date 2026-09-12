> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-file-stream-services](https://developer.apple.com/documentation/audiotoolbox/audio-file-stream-services)

# Audio File Stream Services (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Parse streamed audio files as the data arrives on the user’s computer.

<a id="overview"></a>

## Overview

Audio File Stream Services provides the interface for parsing streamed audio files—in which only a limited window of data is available at a time.

Audio file streams, by nature, are not random access. When you request data from a stream, earlier data might no longer be accessible and later data might not yet be available. In addition, the data you obtain (and then provide to a parser) might include partial packets. To parse streamed audio data, then, a parser must remember data from partially satisfied requests, and must be able to wait for the remainder of that data. In other words, a parser must be able to suspend parsing as needed and then resume where it left off.

To use a parser, you pass data from a streamed audio file, as you acquire it, to the parser. When the parser has a complete packet of audio data or a complete property, it invokes a callback function. Your callbacks then process the parsed data—such as by playing it or writing it to disk.

Here, in outline form, is a typical usage pattern for an audio file stream parser:

1. Create a new audio file stream parser by calling the [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md) function. Pass pointers to your callback functions for audio data and metadata ([AudioFileStream_PacketsProc](audiofilestream_packetsproc.md) and [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md)). The [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md) function gives you a reference to the new parser.
2. Acquire some streamed data. Call the [AudioFileStreamParseBytes(\_:\_:\_:\_:)](audiofilestreamparsebytes%28________%29.md) function when you have data to pass to the parser. Send the data to the parser sequentially and, if possible, without gaps.
3. When the parser acquires a usable buffer of audio data, it invokes your audio data callback. Your callback can then play the data, write it to a file, or otherwise process it.
4. When the parser acquires metadata, it invokes your property callback—which in turn can obtain the property value by calling the [AudioFileStreamGetPropertyInfo(\_:\_:\_:\_:)](audiofilestreamgetpropertyinfo%28________%29.md) and [AudioFileStreamGetProperty(\_:\_:\_:\_:)](audiofilestreamgetproperty%28________%29.md) functions.
5. When finished parsing a stream, call the [AudioFileStreamClose(\_:)](audiofilestreamclose%28__%29.md) function to close and deallocate the parser.

Audio File Stream Services supports the following audio data types:

- AIFF
- AIFC
- WAVE
- CAF
- NeXT
- ADTS
- MPEG Audio Layer 3
- AAC

## Topics

### Opening Audio File Streams

- [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

### Supplying Data to the Parser

- [AudioFileStreamParseBytes(\_:\_:\_:\_:)](audiofilestreamparsebytes%28________%29.md): Passes audio file stream data to the parser.

### Seeking Packets in the Data Stream

- [AudioFileStreamSeek(\_:\_:\_:\_:)](audiofilestreamseek%28________%29.md): Provides a byte offset for a specified packet in the data stream.

### Working with Data Stream Property Information

- [AudioFileStreamGetPropertyInfo(\_:\_:\_:\_:)](audiofilestreamgetpropertyinfo%28________%29.md): Retrieves information about a property value.
- [AudioFileStreamGetProperty(\_:\_:\_:\_:)](audiofilestreamgetproperty%28________%29.md): Retrieves the value of the specified property.
- [AudioFileStreamSetProperty(\_:\_:\_:\_:)](audiofilestreamsetproperty%28________%29.md): Sets the value of the specified property.

### Closing an Audio File Stream

- [AudioFileStreamClose(\_:)](audiofilestreamclose%28__%29.md): Closes and deallocates the specified audio file stream parser.

### Callbacks

- [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md): Invoked by an audio file stream parser when it finds a property value in the audio file stream.
- [AudioFileStream_PacketsProc](audiofilestream_packetsproc.md): Invoked by an audio file stream parser when it finds audio data in the audio file stream.

### Data Types

- [AudioFileStreamPropertyID](audiofilestreampropertyid.md): Uniquely identifies an audio file stream property.
- [AudioFileStreamID](audiofilestreamid.md): Defines an opaque data type that represents an audio file stream parser.

### Enumerations

- [Audio File Stream Errors](1391572-audio-file-stream-errors.md)
- [Audio File Types](1576497-audio-file-types.md)

### Constants

- [Audio File Stream Flags](audio-file-stream-flags.md): Flags set by the property listener callback and the [AudioFileStreamParseBytes(\_:\_:\_:\_:)](audiofilestreamparsebytes%28________%29.md) function.
- [Audio File Stream Properties](1391506-audio-file-stream-properties.md): Audio file stream properties contain information that you can use to help interpret the audio data in a stream.

### Result Codes

This table lists the result codes defined for Audio File Stream Services.

- [Audio File Errors](1576500-audio-file-errors.md)
- [kAudioFileStreamError_UnsupportedFileType](kaudiofilestreamerror_unsupportedfiletype.md): The specified file type is not supported.
- [kAudioFileStreamError_UnsupportedDataFormat](kaudiofilestreamerror_unsupporteddataformat.md): The data format is not supported by the specified file type.
- [kAudioFileStreamError_UnsupportedProperty](kaudiofilestreamerror_unsupportedproperty.md): The property is not supported.
- [kAudioFileStreamError_BadPropertySize](kaudiofilestreamerror_badpropertysize.md): The size of the buffer you provided for property data was not correct.
- [kAudioFileStreamError_NotOptimized](kaudiofilestreamerror_notoptimized.md): It is not possible to produce output packets because the streamed audio file’s packet table or other defining information is not present or appears after the audio data.
- [kAudioFileStreamError_InvalidPacketOffset](kaudiofilestreamerror_invalidpacketoffset.md): A packet offset was less than `0`, or past the end of the file, or a corrupt packet size was read when building the packet table.
- [kAudioFileStreamError_InvalidFile](kaudiofilestreamerror_invalidfile.md): The file is malformed, not a valid instance of an audio file of its type, or not recognized as an audio file.
- [kAudioFileStreamError_ValueUnknown](kaudiofilestreamerror_valueunknown.md): The property value is not present in this file before the audio data.
- [kAudioFileStreamError_DataUnavailable](kaudiofilestreamerror_dataunavailable.md): The amount of data provided to the parser was insufficient to produce any result.
- [kAudioFileStreamError_IllegalOperation](kaudiofilestreamerror_illegaloperation.md): An illegal operation was attempted.
- [kAudioFileStreamError_UnspecifiedError](kaudiofilestreamerror_unspecifiederror.md): An unspecified error has occurred.
- [kAudioFileStreamError_DiscontinuityCantRecover](kaudiofilestreamerror_discontinuitycantrecover.md): A discontinuity has occurred in the audio data, and Audio File Stream Services cannot recover.

## See Also

### Audio Files and Formats

- [Audio Format Services](audio-format-services.md): Access information about audio formats and codecs.
- [Audio File Services](audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Extended Audio File Services](extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Components](audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.

# Audio File Stream Services (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Parse streamed audio files as the data arrives on the user’s computer.

<a id="overview"></a>

## Overview

Audio File Stream Services provides the interface for parsing streamed audio files—in which only a limited window of data is available at a time.

Audio file streams, by nature, are not random access. When you request data from a stream, earlier data might no longer be accessible and later data might not yet be available. In addition, the data you obtain (and then provide to a parser) might include partial packets. To parse streamed audio data, then, a parser must remember data from partially satisfied requests, and must be able to wait for the remainder of that data. In other words, a parser must be able to suspend parsing as needed and then resume where it left off.

To use a parser, you pass data from a streamed audio file, as you acquire it, to the parser. When the parser has a complete packet of audio data or a complete property, it invokes a callback function. Your callbacks then process the parsed data—such as by playing it or writing it to disk.

Here, in outline form, is a typical usage pattern for an audio file stream parser:

1. Create a new audio file stream parser by calling the [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md) function. Pass pointers to your callback functions for audio data and metadata ([AudioFileStream_PacketsProc](audiofilestream_packetsproc.md) and [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md)). The [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md) function gives you a reference to the new parser.
2. Acquire some streamed data. Call the [AudioFileStreamParseBytes](audiofilestreamparsebytes%28________%29.md) function when you have data to pass to the parser. Send the data to the parser sequentially and, if possible, without gaps.
3. When the parser acquires a usable buffer of audio data, it invokes your audio data callback. Your callback can then play the data, write it to a file, or otherwise process it.
4. When the parser acquires metadata, it invokes your property callback—which in turn can obtain the property value by calling the [AudioFileStreamGetPropertyInfo](audiofilestreamgetpropertyinfo%28________%29.md) and [AudioFileStreamGetProperty](audiofilestreamgetproperty%28________%29.md) functions.
5. When finished parsing a stream, call the [AudioFileStreamClose](audiofilestreamclose%28__%29.md) function to close and deallocate the parser.

Audio File Stream Services supports the following audio data types:

- AIFF
- AIFC
- WAVE
- CAF
- NeXT
- ADTS
- MPEG Audio Layer 3
- AAC

## Topics

### Opening Audio File Streams

- [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

### Supplying Data to the Parser

- [AudioFileStreamParseBytes](audiofilestreamparsebytes%28________%29.md): Passes audio file stream data to the parser.

### Seeking Packets in the Data Stream

- [AudioFileStreamSeek](audiofilestreamseek%28________%29.md): Provides a byte offset for a specified packet in the data stream.

### Working with Data Stream Property Information

- [AudioFileStreamGetPropertyInfo](audiofilestreamgetpropertyinfo%28________%29.md): Retrieves information about a property value.
- [AudioFileStreamGetProperty](audiofilestreamgetproperty%28________%29.md): Retrieves the value of the specified property.
- [AudioFileStreamSetProperty](audiofilestreamsetproperty%28________%29.md): Sets the value of the specified property.

### Closing an Audio File Stream

- [AudioFileStreamClose](audiofilestreamclose%28__%29.md): Closes and deallocates the specified audio file stream parser.

### Callbacks

- [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md): Invoked by an audio file stream parser when it finds a property value in the audio file stream.
- [AudioFileStream_PacketsProc](audiofilestream_packetsproc.md): Invoked by an audio file stream parser when it finds audio data in the audio file stream.

### Data Types

- [AudioFileStreamPropertyID](audiofilestreampropertyid.md): Uniquely identifies an audio file stream property.
- [AudioFileStreamID](audiofilestreamid.md): Defines an opaque data type that represents an audio file stream parser.

### Enumerations

- [Audio File Stream Errors](1391572-audio-file-stream-errors.md)
- [Audio File Types](1576497-audio-file-types.md)

### Constants

- [Audio File Stream Flags](audio-file-stream-flags.md): Flags set by the property listener callback and the [AudioFileStreamParseBytes](audiofilestreamparsebytes%28________%29.md) function.
- [Audio File Stream Properties](1391506-audio-file-stream-properties.md): Audio file stream properties contain information that you can use to help interpret the audio data in a stream.

### Result Codes

This table lists the result codes defined for Audio File Stream Services.

- [Audio File Errors](1576500-audio-file-errors.md)
- [kAudioFileStreamError_UnsupportedFileType](kaudiofilestreamerror_unsupportedfiletype.md): The specified file type is not supported.
- [kAudioFileStreamError_UnsupportedDataFormat](kaudiofilestreamerror_unsupporteddataformat.md): The data format is not supported by the specified file type.
- [kAudioFileStreamError_UnsupportedProperty](kaudiofilestreamerror_unsupportedproperty.md): The property is not supported.
- [kAudioFileStreamError_BadPropertySize](kaudiofilestreamerror_badpropertysize.md): The size of the buffer you provided for property data was not correct.
- [kAudioFileStreamError_NotOptimized](kaudiofilestreamerror_notoptimized.md): It is not possible to produce output packets because the streamed audio file’s packet table or other defining information is not present or appears after the audio data.
- [kAudioFileStreamError_InvalidPacketOffset](kaudiofilestreamerror_invalidpacketoffset.md): A packet offset was less than `0`, or past the end of the file, or a corrupt packet size was read when building the packet table.
- [kAudioFileStreamError_InvalidFile](kaudiofilestreamerror_invalidfile.md): The file is malformed, not a valid instance of an audio file of its type, or not recognized as an audio file.
- [kAudioFileStreamError_ValueUnknown](kaudiofilestreamerror_valueunknown.md): The property value is not present in this file before the audio data.
- [kAudioFileStreamError_DataUnavailable](kaudiofilestreamerror_dataunavailable.md): The amount of data provided to the parser was insufficient to produce any result.
- [kAudioFileStreamError_IllegalOperation](kaudiofilestreamerror_illegaloperation.md): An illegal operation was attempted.
- [kAudioFileStreamError_UnspecifiedError](kaudiofilestreamerror_unspecifiederror.md): An unspecified error has occurred.
- [kAudioFileStreamError_DiscontinuityCantRecover](kaudiofilestreamerror_discontinuitycantrecover.md): A discontinuity has occurred in the audio data, and Audio File Stream Services cannot recover.

## See Also

### Audio Files and Formats

- [Audio Format Services](audio-format-services.md): Access information about audio formats and codecs.
- [Audio File Services](audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Extended Audio File Services](extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Components](audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.
