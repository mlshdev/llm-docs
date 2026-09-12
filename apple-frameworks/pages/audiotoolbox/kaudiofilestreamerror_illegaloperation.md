> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiofilestreamerror_illegaloperation](https://developer.apple.com/documentation/audiotoolbox/kaudiofilestreamerror_illegaloperation)

# kAudioFileStreamError_IllegalOperation (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An illegal operation was attempted.

## Declaration

```swift
var kAudioFileStreamError_IllegalOperation: OSStatus { get }
```

## See Also

### Result Codes

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
- [kAudioFileStreamError_UnspecifiedError](kaudiofilestreamerror_unspecifiederror.md): An unspecified error has occurred.
- [kAudioFileStreamError_DiscontinuityCantRecover](kaudiofilestreamerror_discontinuitycantrecover.md): A discontinuity has occurred in the audio data, and Audio File Stream Services cannot recover.

# kAudioFileStreamError_IllegalOperation (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An illegal operation was attempted.

## Declaration

```objectivec
kAudioFileStreamError_IllegalOperation
```

## See Also

### Result Codes

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
- [kAudioFileStreamError_UnspecifiedError](kaudiofilestreamerror_unspecifiederror.md): An unspecified error has occurred.
- [kAudioFileStreamError_DiscontinuityCantRecover](kaudiofilestreamerror_discontinuitycantrecover.md): A discontinuity has occurred in the audio data, and Audio File Stream Services cannot recover.
