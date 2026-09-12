> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofiletypeandformatid](https://developer.apple.com/documentation/audiotoolbox/audiofiletypeandformatid)

# AudioFileTypeAndFormatID (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A specifier for the constant[kAudioFileGlobalInfo_AvailableStreamDescriptionsForFormat](kaudiofileglobalinfo_availablestreamdescriptionsforformat.md).

## Declaration

```swift
struct AudioFileTypeAndFormatID
```

<a id="overview"></a>

## Overview

This structure specifies a desired audio file type and data format ID so you can obtain a list of stream descriptions of available formats.

## Topics

### Initializers

- [init()](audiofiletypeandformatid/init%28%29.md)
- [init(mFileType:mFormatID:)](audiofiletypeandformatid/init%28mfiletype_mformatid_%29.md)

### Instance Properties

- [mFileType](audiofiletypeandformatid/mfiletype.md): A four-character code for the file type.
- [mFormatID](audiofiletypeandformatid/mformatid.md): A four-character code for the format ID such as `kAudioFormatLinearPCM`, `kAudioFormatMPEG4AAC`, and so forth. (See the `AudioFormat.h` header file for declarations.)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

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

# AudioFileTypeAndFormatID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A specifier for the constant[kAudioFileGlobalInfo_AvailableStreamDescriptionsForFormat](kaudiofileglobalinfo_availablestreamdescriptionsforformat.md).

## Declaration

```objectivec
struct AudioFileTypeAndFormatID;
```

<a id="overview"></a>

## Overview

This structure specifies a desired audio file type and data format ID so you can obtain a list of stream descriptions of available formats.

## Topics

### Instance Properties

- [mFileType](audiofiletypeandformatid/mfiletype.md): A four-character code for the file type.
- [mFormatID](audiofiletypeandformatid/mformatid.md): A four-character code for the format ID such as `kAudioFormatLinearPCM`, `kAudioFormatMPEG4AAC`, and so forth. (See the `AudioFormat.h` header file for declarations.)

## See Also

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
