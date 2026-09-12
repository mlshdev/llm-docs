> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1576500-audio-file-errors](https://developer.apple.com/documentation/audiotoolbox/1576500-audio-file-errors)

# Audio File Errors

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

## Topics

### Constants

- [kAudioFileBadPropertySizeError](kaudiofilebadpropertysizeerror.md): The size of the property data was not correct.
- [kAudioFileDoesNotAllow64BitDataSizeError](kaudiofiledoesnotallow64bitdatasizeerror.md): The file offset was too large for the file type. The AIFF and WAVE file format types have 32-bit file size limits.
- [kAudioFileEndOfFileError](kaudiofileendoffileerror.md): End of file.
- [kAudioFileFileNotFoundError](kaudiofilefilenotfounderror.md): File not found.
- [kAudioFileInvalidChunkError](kaudiofileinvalidchunkerror.md): Either the chunk does not exist in the file or it is not supported by the file.
- [kAudioFileInvalidFileError](kaudiofileinvalidfileerror.md): The file is malformed, or otherwise not a valid instance of an audio file of its type.
- [kAudioFileInvalidPacketOffsetError](kaudiofileinvalidpacketoffseterror.md): A packet offset was past the end of the file, or not at the end of the file when a VBR format was written, or a corrupt packet size was read when the packet table was built.
- [kAudioFileNotOpenError](kaudiofilenotopenerror.md): The file is closed.
- [kAudioFileNotOptimizedError](kaudiofilenotoptimizederror.md): The chunks following the audio data chunk are preventing the extension of the audio data chunk. To write more data, you must optimize the file.
- [kAudioFileOperationNotSupportedError](kaudiofileoperationnotsupportederror.md): The operation cannot be performed.
- [kAudioFilePermissionsError](kaudiofilepermissionserror.md): The operation violated the file permissions. For example, an attempt was made to write to a file opened with the `kAudioFileReadPermission` constant.
- [kAudioFilePositionError](kaudiofilepositionerror.md): Invalid file position.
- [kAudioFileUnspecifiedError](kaudiofileunspecifiederror.md): An unspecified error has occurred.
- [kAudioFileUnsupportedDataFormatError](kaudiofileunsupporteddataformaterror.md): The data format is not supported by this file type.
- [kAudioFileUnsupportedFileTypeError](kaudiofileunsupportedfiletypeerror.md): The file type is not supported.
- [kAudioFileUnsupportedPropertyError](kaudiofileunsupportedpropertyerror.md): The property is not supported.
- [kAudioFileInvalidPacketDependencyError](kaudiofileinvalidpacketdependencyerror.md)

## See Also

### Result Codes

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
