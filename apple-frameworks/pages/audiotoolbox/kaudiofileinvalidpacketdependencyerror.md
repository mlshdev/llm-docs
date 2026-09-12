> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiofileinvalidpacketdependencyerror](https://developer.apple.com/documentation/audiotoolbox/kaudiofileinvalidpacketdependencyerror)

# kAudioFileInvalidPacketDependencyError (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
var kAudioFileInvalidPacketDependencyError: OSStatus { get }
```

## See Also

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

# kAudioFileInvalidPacketDependencyError (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
kAudioFileInvalidPacketDependencyError
```

## See Also

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
