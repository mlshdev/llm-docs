> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiofileinvalidpacketoffseterror](https://developer.apple.com/documentation/audiotoolbox/kaudiofileinvalidpacketoffseterror)

# kAudioFileInvalidPacketOffsetError (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A packet offset was past the end of the file, or not at the end of the file when a VBR format was written,  or a corrupt packet size was read when the packet table was built.

## Declaration

```swift
var kAudioFileInvalidPacketOffsetError: OSStatus { get }
```

## See Also

### Result Codes

- [kAudioFileUnspecifiedError](kaudiofileunspecifiederror.md): An unspecified error has occurred.
- [kAudioFileUnsupportedFileTypeError](kaudiofileunsupportedfiletypeerror.md): The file type is not supported.
- [kAudioFileUnsupportedDataFormatError](kaudiofileunsupporteddataformaterror.md): The data format is not supported by this file type.
- [kAudioFileUnsupportedPropertyError](kaudiofileunsupportedpropertyerror.md): The property is not supported.
- [kAudioFileBadPropertySizeError](kaudiofilebadpropertysizeerror.md): The size of the property data was not correct.
- [kAudioFilePermissionsError](kaudiofilepermissionserror.md): The operation violated the file permissions. For example, an attempt was made to write to a file opened with the `kAudioFileReadPermission` constant.
- [kAudioFileNotOptimizedError](kaudiofilenotoptimizederror.md): The chunks following the audio data chunk are preventing the extension of the audio data chunk. To write more data, you must optimize the file.
- [kAudioFileInvalidChunkError](kaudiofileinvalidchunkerror.md): Either the chunk does not exist in the file or it is not supported by the file.
- [kAudioFileDoesNotAllow64BitDataSizeError](kaudiofiledoesnotallow64bitdatasizeerror.md): The file offset was too large for the file type. The AIFF and WAVE file format types have 32-bit file size limits.
- [kAudioFileInvalidFileError](kaudiofileinvalidfileerror.md): The file is malformed, or otherwise not a valid instance of an audio file of its type.
- [kAudioFileOperationNotSupportedError](kaudiofileoperationnotsupportederror.md): The operation cannot be performed.
- [kAudioFileNotOpenError](kaudiofilenotopenerror.md): The file is closed.
- [kAudioFileEndOfFileError](kaudiofileendoffileerror.md): End of file.
- [kAudioFilePositionError](kaudiofilepositionerror.md): Invalid file position.
- [kAudioFileFileNotFoundError](kaudiofilefilenotfounderror.md): File not found.

# kAudioFileInvalidPacketOffsetError (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A packet offset was past the end of the file, or not at the end of the file when a VBR format was written,  or a corrupt packet size was read when the packet table was built.

## Declaration

```objectivec
kAudioFileInvalidPacketOffsetError
```

## See Also

### Result Codes

- [kAudioFileUnspecifiedError](kaudiofileunspecifiederror.md): An unspecified error has occurred.
- [kAudioFileUnsupportedFileTypeError](kaudiofileunsupportedfiletypeerror.md): The file type is not supported.
- [kAudioFileUnsupportedDataFormatError](kaudiofileunsupporteddataformaterror.md): The data format is not supported by this file type.
- [kAudioFileUnsupportedPropertyError](kaudiofileunsupportedpropertyerror.md): The property is not supported.
- [kAudioFileBadPropertySizeError](kaudiofilebadpropertysizeerror.md): The size of the property data was not correct.
- [kAudioFilePermissionsError](kaudiofilepermissionserror.md): The operation violated the file permissions. For example, an attempt was made to write to a file opened with the `kAudioFileReadPermission` constant.
- [kAudioFileNotOptimizedError](kaudiofilenotoptimizederror.md): The chunks following the audio data chunk are preventing the extension of the audio data chunk. To write more data, you must optimize the file.
- [kAudioFileInvalidChunkError](kaudiofileinvalidchunkerror.md): Either the chunk does not exist in the file or it is not supported by the file.
- [kAudioFileDoesNotAllow64BitDataSizeError](kaudiofiledoesnotallow64bitdatasizeerror.md): The file offset was too large for the file type. The AIFF and WAVE file format types have 32-bit file size limits.
- [kAudioFileInvalidFileError](kaudiofileinvalidfileerror.md): The file is malformed, or otherwise not a valid instance of an audio file of its type.
- [kAudioFileOperationNotSupportedError](kaudiofileoperationnotsupportederror.md): The operation cannot be performed.
- [kAudioFileNotOpenError](kaudiofilenotopenerror.md): The file is closed.
- [kAudioFileEndOfFileError](kaudiofileendoffileerror.md): End of file.
- [kAudioFilePositionError](kaudiofilepositionerror.md): Invalid file position.
- [kAudioFileFileNotFoundError](kaudiofilefilenotfounderror.md): File not found.
