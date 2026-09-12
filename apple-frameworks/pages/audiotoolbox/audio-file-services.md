> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-file-services](https://developer.apple.com/documentation/audiotoolbox/audio-file-services)

# Audio File Services (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Read or write a variety of audio data to or from disk or a memory buffer.

<a id="overview"></a>

## Overview

This document describes Audio File Services, a C programming interface that enables you to read or write a wide variety of audio data to or from disk or a memory buffer.

With Audio File Services you can:

- Create, initialize, open, and close audio files
- Read and write audio files
- Optimize audio files
- Work with user data and global information

## Topics

### Creating and Initializing Audio Files

- [AudioFileCreateWithURL(\_:\_:\_:\_:\_:)](audiofilecreatewithurl%28__________%29.md): Creates a new audio file, or initializes an existing file, specified by a URL.
- [AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofileinitializewithcallbacks%28__________________%29.md): Deletes the content of an existing file and assigns callbacks to the audio file object.

### Opening and Closing Audio Files

- [AudioFileOpenURL(\_:\_:\_:\_:)](audiofileopenurl%28________%29.md): Open an existing audio file specified by a URL.
- [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md): Opens an existing file with callbacks you provide.
- [AudioFileClose(\_:)](audiofileclose%28__%29.md): Closes an audio file.

### Reading and Writing Audio Files

- [AudioFileReadBytes(\_:\_:\_:\_:\_:)](audiofilereadbytes%28__________%29.md): Reads bytes of audio data from an audio file.
- [AudioFileWriteBytes(\_:\_:\_:\_:\_:)](audiofilewritebytes%28__________%29.md): Writes bytes of audio data to an audio file.
- [AudioFileReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpacketdata%28______________%29.md): Reads packets of audio data from an audio file.
- [AudioFileWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilewritepackets%28______________%29.md): Writes packets of audio data to an audio data file.

### Getting and Setting Audio File Properties

- [AudioFileGetProperty(\_:\_:\_:\_:)](audiofilegetproperty%28________%29.md): Gets the value of an audio file property.
- [AudioFileGetPropertyInfo(\_:\_:\_:\_:)](audiofilegetpropertyinfo%28________%29.md): Gets information about an audio file property, including the size of the property value and whether the value is writable.
- [AudioFileSetProperty(\_:\_:\_:\_:)](audiofilesetproperty%28________%29.md): Sets the value of an audio file property

### Working with User Data

- [AudioFileCountUserData(\_:\_:\_:)](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize(\_:\_:\_:\_:)](audiofilegetuserdatasize%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataSize64(\_:\_:\_:\_:)](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserData(\_:\_:\_:\_:\_:)](audiofilegetuserdata%28__________%29.md): Gets a chunk from an audio file.
- [AudioFileGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:)](audiofilegetuserdataatoffset%28____________%29.md): Gets part of the data from a chunk in an audio file.
- [AudioFileSetUserData(\_:\_:\_:\_:\_:)](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.
- [AudioFileRemoveUserData(\_:\_:\_:)](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.

### Working with Global Information

- [AudioFileGetGlobalInfoSize(\_:\_:\_:\_:)](audiofilegetglobalinfosize%28________%29.md): Gets the size of a global audio file property.
- [AudioFileGetGlobalInfo(\_:\_:\_:\_:\_:)](audiofilegetglobalinfo%28__________%29.md): Copies the value of a global property into a buffer.

### Optimizing Audio Files

- [AudioFileOptimize(\_:)](audiofileoptimize%28__%29.md): Consolidates audio data and performs other internal optimizations of the file structure.

### Parsing Audio File Content

- [NextAudioFileRegion(\_:)](nextaudiofileregion%28__%29.md): Finds the next audio file region in a region list.
- [NumAudioFileMarkersToNumBytes(\_:)](numaudiofilemarkerstonumbytes%28__%29.md): Returns the number of bytes corresponding to a specified number of audio file markers.
- [NumBytesToNumAudioFileMarkers(\_:)](numbytestonumaudiofilemarkers%28__%29.md): A macro that returns the number of audio file markers represented by a specified number of bytes.

### Callbacks

- [AudioFile_ReadProc](audiofile_readproc.md): Reads audio data when used in conjunction with the [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofileinitializewithcallbacks%28__________________%29.md) functions.)
- [AudioFile_WriteProc](audiofile_writeproc.md): A callback for writing file data when used in conjunction with the [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileCreateWithURL(\_:\_:\_:\_:\_:)](audiofilecreatewithurl%28__________%29.md) functions.
- [AudioFile_GetSizeProc](audiofile_getsizeproc.md): Gets file data size.
- [AudioFile_SetSizeProc](audiofile_setsizeproc.md): Sets file data size.

### Data Types

- [AudioBytePacketTranslationFlags](audiobytepackettranslationflags.md)
- [AudioFileFlags](audiofileflags.md)
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [AudioFileStreamParseFlags](audiofilestreamparseflags.md)
- [AudioFileStreamPropertyFlags](audiofilestreampropertyflags.md)
- [AudioFileStreamSeekFlags](audiofilestreamseekflags.md)
- [AudioFileID](audiofileid.md): An opaque data type that represents an audio file object.
- [AudioFilePropertyID](audiofilepropertyid.md): An audio file property identifier.
- [AudioFile_SMPTE_Time](audiofile_smpte_time.md): A data structure for describing SMPTE (Society of Motion Picture and Television Engineers) time.
- [AudioFileMarker](audiofilemarker.md): Annotates a position in an audio file.
- [AudioFileMarkerList](audiofilemarkerlist.md): A list of markers associated with an audio file, including their SMPTE time type, the number of markers, and the markers themselves.
- [AudioFileRegion](audiofileregion.md): An audio file region specifies a segment of audio data.
- [AudioFileRegionList](audiofileregionlist.md): A list of the audio file regions in a file.
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
- [AudioBytePacketTranslation](audiobytepackettranslation.md): A data structure used by the [kAudioFilePropertyByteToPacket](kaudiofilepropertybytetopacket.md) and [kAudioFilePropertyPacketToByte](kaudiofilepropertypackettobyte.md) properties.
- [AudioFilePacketTableInfo](audiofilepackettableinfo.md): Contains information about the number of valid frames in a file and where they begin and end.
- [AudioFileTypeAndFormatID](audiofiletypeandformatid.md): A specifier for the constant[kAudioFileGlobalInfo_AvailableStreamDescriptionsForFormat](kaudiofileglobalinfo_availablestreamdescriptionsforformat.md).
- [AudioIndependentPacketTranslation](audioindependentpackettranslation.md)
- [AudioPacketDependencyInfoTranslation](audiopacketdependencyinfotranslation.md)
- [AudioPacketRangeByteCountTranslation](audiopacketrangebytecounttranslation.md)
- [AudioPacketRollDistanceTranslation](audiopacketrolldistancetranslation.md)

### Enumerations

- [AudioBytePacketTranslationFlags](audiobytepackettranslationflags.md)
- [AudioFileFlags](audiofileflags.md)
- [AudioFilePermissions](audiofilepermissions.md): Flags for use when opening an audio file.
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [AudioFileStreamParseFlags](audiofilestreamparseflags.md)
- [AudioFileStreamPropertyFlags](audiofilestreampropertyflags.md)
- [AudioFileStreamSeekFlags](audiofilestreamseekflags.md)

### Constants

- [AudioFileTypeID](audiofiletypeid.md): Operating system constants that indicate the type of file to be written or a hint about what type of file to expect from data provided.
- [Audio File Creation Flags](audio_file_creation_flags.md): Flags to set when creating an audio file.
- [AudioFilePermissions](audiofilepermissions.md): Flags for use when opening an audio file.
- [Audio File Loop Direction Constants](1576494-audio-file-loop-direction-consta.md): The playback direction of a looped segment of an audio file.
- [Audio File Marker Types](1576492-audio-file-marker-types.md): A type of marker within a file used in the `mType` field of the [AudioFileMarker](audiofilemarker.md) structure.
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [Audio File Packet Translation Flags](audio_file_packet_translation_flags.md): Flags specified in a packet translation structure.
- [Info String Keys](info-string-keys.md): Key values of properties to get and set using Audio File Services functions and provide a common way to get the same information out of several different kinds of files.
- [Audio File Properties](1576499-audio-file-properties.md): Properties used by the functions described in getting and setting pieces of data in audio files. See Working with Global Information for details.
- [Audio File Global Info Properties](1576495-audio-file-global-info-propertie.md): Access these properties using the functions described in Working with Global Information.

### Result Codes

This table lists the result codes defined for Audio File Services.

- [kAudioFileUnspecifiedError](kaudiofileunspecifiederror.md): An unspecified error has occurred.
- [kAudioFileUnsupportedFileTypeError](kaudiofileunsupportedfiletypeerror.md): The file type is not supported.
- [kAudioFileUnsupportedDataFormatError](kaudiofileunsupporteddataformaterror.md): The data format is not supported by this file type.
- [kAudioFileUnsupportedPropertyError](kaudiofileunsupportedpropertyerror.md): The property is not supported.
- [kAudioFileBadPropertySizeError](kaudiofilebadpropertysizeerror.md): The size of the property data was not correct.
- [kAudioFilePermissionsError](kaudiofilepermissionserror.md): The operation violated the file permissions. For example, an attempt was made to write to a file opened with the `kAudioFileReadPermission` constant.
- [kAudioFileNotOptimizedError](kaudiofilenotoptimizederror.md): The chunks following the audio data chunk are preventing the extension of the audio data chunk. To write more data, you must optimize the file.
- [kAudioFileInvalidChunkError](kaudiofileinvalidchunkerror.md): Either the chunk does not exist in the file or it is not supported by the file.
- [kAudioFileDoesNotAllow64BitDataSizeError](kaudiofiledoesnotallow64bitdatasizeerror.md): The file offset was too large for the file type. The AIFF and WAVE file format types have 32-bit file size limits.
- [kAudioFileInvalidPacketOffsetError](kaudiofileinvalidpacketoffseterror.md): A packet offset was past the end of the file, or not at the end of the file when a VBR format was written, or a corrupt packet size was read when the packet table was built.
- [kAudioFileInvalidFileError](kaudiofileinvalidfileerror.md): The file is malformed, or otherwise not a valid instance of an audio file of its type.
- [kAudioFileOperationNotSupportedError](kaudiofileoperationnotsupportederror.md): The operation cannot be performed.
- [kAudioFileNotOpenError](kaudiofilenotopenerror.md): The file is closed.
- [kAudioFileEndOfFileError](kaudiofileendoffileerror.md): End of file.
- [kAudioFilePositionError](kaudiofilepositionerror.md): Invalid file position.
- [kAudioFileFileNotFoundError](kaudiofilefilenotfounderror.md): File not found.

## See Also

### Audio Files and Formats

- [Audio Format Services](audio-format-services.md): Access information about audio formats and codecs.
- [Extended Audio File Services](extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Stream Services](audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Audio File Components](audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.

# Audio File Services (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Read or write a variety of audio data to or from disk or a memory buffer.

<a id="overview"></a>

## Overview

This document describes Audio File Services, a C programming interface that enables you to read or write a wide variety of audio data to or from disk or a memory buffer.

With Audio File Services you can:

- Create, initialize, open, and close audio files
- Read and write audio files
- Optimize audio files
- Work with user data and global information

## Topics

### Creating and Initializing Audio Files

- [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md): Creates a new audio file, or initializes an existing file, specified by a URL.
- [AudioFileInitializeWithCallbacks](audiofileinitializewithcallbacks%28__________________%29.md): Deletes the content of an existing file and assigns callbacks to the audio file object.

### Opening and Closing Audio Files

- [AudioFileOpenURL](audiofileopenurl%28________%29.md): Open an existing audio file specified by a URL.
- [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md): Opens an existing file with callbacks you provide.
- [AudioFileClose](audiofileclose%28__%29.md): Closes an audio file.

### Reading and Writing Audio Files

- [AudioFileReadBytes](audiofilereadbytes%28__________%29.md): Reads bytes of audio data from an audio file.
- [AudioFileWriteBytes](audiofilewritebytes%28__________%29.md): Writes bytes of audio data to an audio file.
- [AudioFileReadPacketData](audiofilereadpacketdata%28______________%29.md): Reads packets of audio data from an audio file.
- [AudioFileWritePackets](audiofilewritepackets%28______________%29.md): Writes packets of audio data to an audio data file.

### Getting and Setting Audio File Properties

- [AudioFileGetProperty](audiofilegetproperty%28________%29.md): Gets the value of an audio file property.
- [AudioFileGetPropertyInfo](audiofilegetpropertyinfo%28________%29.md): Gets information about an audio file property, including the size of the property value and whether the value is writable.
- [AudioFileSetProperty](audiofilesetproperty%28________%29.md): Sets the value of an audio file property

### Working with User Data

- [AudioFileCountUserData](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize](audiofilegetuserdatasize%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataSize64](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserData](audiofilegetuserdata%28__________%29.md): Gets a chunk from an audio file.
- [AudioFileGetUserDataAtOffset](audiofilegetuserdataatoffset%28____________%29.md): Gets part of the data from a chunk in an audio file.
- [AudioFileSetUserData](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.
- [AudioFileRemoveUserData](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.

### Working with Global Information

- [AudioFileGetGlobalInfoSize](audiofilegetglobalinfosize%28________%29.md): Gets the size of a global audio file property.
- [AudioFileGetGlobalInfo](audiofilegetglobalinfo%28__________%29.md): Copies the value of a global property into a buffer.

### Optimizing Audio Files

- [AudioFileOptimize](audiofileoptimize%28__%29.md): Consolidates audio data and performs other internal optimizations of the file structure.

### Parsing Audio File Content

- [NextAudioFileRegion](nextaudiofileregion%28__%29.md): Finds the next audio file region in a region list.
- [NumAudioFileMarkersToNumBytes](numaudiofilemarkerstonumbytes%28__%29.md): Returns the number of bytes corresponding to a specified number of audio file markers.
- [NumBytesToNumAudioFileMarkers](numbytestonumaudiofilemarkers%28__%29.md): A macro that returns the number of audio file markers represented by a specified number of bytes.

### Callbacks

- [AudioFile_ReadProc](audiofile_readproc.md): Reads audio data when used in conjunction with the [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileInitializeWithCallbacks](audiofileinitializewithcallbacks%28__________________%29.md) functions.)
- [AudioFile_WriteProc](audiofile_writeproc.md): A callback for writing file data when used in conjunction with the [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md) functions.
- [AudioFile_GetSizeProc](audiofile_getsizeproc.md): Gets file data size.
- [AudioFile_SetSizeProc](audiofile_setsizeproc.md): Sets file data size.

### Data Types

- [AudioBytePacketTranslationFlags](audiobytepackettranslationflags.md)
- [AudioFileFDFTable](audiofilefdftable.md)
- [AudioFileFDFTableExtended](audiofilefdftableextended.md)
- [AudioFileFlags](audiofileflags.md)
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [AudioFileStreamParseFlags](audiofilestreamparseflags.md)
- [AudioFileStreamPropertyFlags](audiofilestreampropertyflags.md)
- [AudioFileStreamSeekFlags](audiofilestreamseekflags.md)
- [AudioFileID](audiofileid.md): An opaque data type that represents an audio file object.
- [AudioFilePropertyID](audiofilepropertyid.md): An audio file property identifier.
- [AudioFile_SMPTE_Time](audiofile_smpte_time.md): A data structure for describing SMPTE (Society of Motion Picture and Television Engineers) time.
- [AudioFileMarker](audiofilemarker.md): Annotates a position in an audio file.
- [AudioFileMarkerList](audiofilemarkerlist.md): A list of markers associated with an audio file, including their SMPTE time type, the number of markers, and the markers themselves.
- [AudioFileRegion](audiofileregion.md): An audio file region specifies a segment of audio data.
- [AudioFileRegionList](audiofileregionlist.md): A list of the audio file regions in a file.
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
- [AudioBytePacketTranslation](audiobytepackettranslation.md): A data structure used by the [kAudioFilePropertyByteToPacket](kaudiofilepropertybytetopacket.md) and [kAudioFilePropertyPacketToByte](kaudiofilepropertypackettobyte.md) properties.
- [AudioFilePacketTableInfo](audiofilepackettableinfo.md): Contains information about the number of valid frames in a file and where they begin and end.
- [AudioFileTypeAndFormatID](audiofiletypeandformatid.md): A specifier for the constant[kAudioFileGlobalInfo_AvailableStreamDescriptionsForFormat](kaudiofileglobalinfo_availablestreamdescriptionsforformat.md).
- [AudioIndependentPacketTranslation](audioindependentpackettranslation.md)
- [AudioPacketDependencyInfoTranslation](audiopacketdependencyinfotranslation.md)
- [AudioPacketRangeByteCountTranslation](audiopacketrangebytecounttranslation.md)
- [AudioPacketRollDistanceTranslation](audiopacketrolldistancetranslation.md)

### Enumerations

- [AudioBytePacketTranslationFlags](audiobytepackettranslationflags.md)
- [AudioFileFlags](audiofileflags.md)
- [AudioFilePermissions](audiofilepermissions.md): Flags for use when opening an audio file.
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [AudioFileStreamParseFlags](audiofilestreamparseflags.md)
- [AudioFileStreamPropertyFlags](audiofilestreampropertyflags.md)
- [AudioFileStreamSeekFlags](audiofilestreamseekflags.md)

### Constants

- [AudioFileTypeID](audiofiletypeid.md): Operating system constants that indicate the type of file to be written or a hint about what type of file to expect from data provided.
- [Audio File Creation Flags](audio_file_creation_flags.md): Flags to set when creating an audio file.
- [AudioFilePermissions](audiofilepermissions.md): Flags for use when opening an audio file.
- [Audio File Loop Direction Constants](1576494-audio-file-loop-direction-consta.md): The playback direction of a looped segment of an audio file.
- [Audio File Marker Types](1576492-audio-file-marker-types.md): A type of marker within a file used in the `mType` field of the [AudioFileMarker](audiofilemarker.md) structure.
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [Audio File Packet Translation Flags](audio_file_packet_translation_flags.md): Flags specified in a packet translation structure.
- [Info String Keys](info-string-keys.md): Key values of properties to get and set using Audio File Services functions and provide a common way to get the same information out of several different kinds of files.
- [Audio File Properties](1576499-audio-file-properties.md): Properties used by the functions described in getting and setting pieces of data in audio files. See Working with Global Information for details.
- [Audio File Global Info Properties](1576495-audio-file-global-info-propertie.md): Access these properties using the functions described in Working with Global Information.

### Result Codes

This table lists the result codes defined for Audio File Services.

- [kAudioFileUnspecifiedError](kaudiofileunspecifiederror.md): An unspecified error has occurred.
- [kAudioFileUnsupportedFileTypeError](kaudiofileunsupportedfiletypeerror.md): The file type is not supported.
- [kAudioFileUnsupportedDataFormatError](kaudiofileunsupporteddataformaterror.md): The data format is not supported by this file type.
- [kAudioFileUnsupportedPropertyError](kaudiofileunsupportedpropertyerror.md): The property is not supported.
- [kAudioFileBadPropertySizeError](kaudiofilebadpropertysizeerror.md): The size of the property data was not correct.
- [kAudioFilePermissionsError](kaudiofilepermissionserror.md): The operation violated the file permissions. For example, an attempt was made to write to a file opened with the `kAudioFileReadPermission` constant.
- [kAudioFileNotOptimizedError](kaudiofilenotoptimizederror.md): The chunks following the audio data chunk are preventing the extension of the audio data chunk. To write more data, you must optimize the file.
- [kAudioFileInvalidChunkError](kaudiofileinvalidchunkerror.md): Either the chunk does not exist in the file or it is not supported by the file.
- [kAudioFileDoesNotAllow64BitDataSizeError](kaudiofiledoesnotallow64bitdatasizeerror.md): The file offset was too large for the file type. The AIFF and WAVE file format types have 32-bit file size limits.
- [kAudioFileInvalidPacketOffsetError](kaudiofileinvalidpacketoffseterror.md): A packet offset was past the end of the file, or not at the end of the file when a VBR format was written, or a corrupt packet size was read when the packet table was built.
- [kAudioFileInvalidFileError](kaudiofileinvalidfileerror.md): The file is malformed, or otherwise not a valid instance of an audio file of its type.
- [kAudioFileOperationNotSupportedError](kaudiofileoperationnotsupportederror.md): The operation cannot be performed.
- [kAudioFileNotOpenError](kaudiofilenotopenerror.md): The file is closed.
- [kAudioFileEndOfFileError](kaudiofileendoffileerror.md): End of file.
- [kAudioFilePositionError](kaudiofilepositionerror.md): Invalid file position.
- [kAudioFileFileNotFoundError](kaudiofilefilenotfounderror.md): File not found.

## See Also

### Audio Files and Formats

- [Audio Format Services](audio-format-services.md): Access information about audio formats and codecs.
- [Extended Audio File Services](extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Stream Services](audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Audio File Components](audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.
