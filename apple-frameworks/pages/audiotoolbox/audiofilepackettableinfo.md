> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilepackettableinfo](https://developer.apple.com/documentation/audiotoolbox/audiofilepackettableinfo)

# AudioFilePacketTableInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Contains information about the number of valid frames in a file and where they begin and end.

## Declaration

```swift
struct AudioFilePacketTableInfo
```

<a id="overview"></a>

## Overview

Some data formats might have packets with contents that are not completely valid, but that represent priming or remainder frames not intended for playback. For example, a file with 100 packets of AAC is nominally 1024 \* 100 = 102400 frames of data. However, the first 2112 frames might be priming frames.

A number of remainder frames might be added to pad out to a full packet of 1024 frames. Discard the priming and remainder frames.

The total number of packets in the file times the frames per packet (or counting each packet’s frames individually for a variable frames per packet format) minus `mPrimingFrames`, minus `mRemainderFrames`, should equal `mNumberValidFrames`.

## Topics

### Initializers

- [init()](audiofilepackettableinfo/init%28%29.md)
- [init(mNumberValidFrames:mPrimingFrames:mRemainderFrames:)](audiofilepackettableinfo/init%28mnumbervalidframes_mprimingframes_mremainderframes_%29.md)

### Instance Properties

- [mNumberValidFrames](audiofilepackettableinfo/mnumbervalidframes.md): The number of valid frames in the file.
- [mPrimingFrames](audiofilepackettableinfo/mprimingframes.md): The number of invalid frames at the beginning of the file.
- [mRemainderFrames](audiofilepackettableinfo/mremainderframes.md): The number of invalid frames at the end of the file.

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

# AudioFilePacketTableInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Contains information about the number of valid frames in a file and where they begin and end.

## Declaration

```objectivec
struct AudioFilePacketTableInfo;
```

<a id="overview"></a>

## Overview

Some data formats might have packets with contents that are not completely valid, but that represent priming or remainder frames not intended for playback. For example, a file with 100 packets of AAC is nominally 1024 \* 100 = 102400 frames of data. However, the first 2112 frames might be priming frames.

A number of remainder frames might be added to pad out to a full packet of 1024 frames. Discard the priming and remainder frames.

The total number of packets in the file times the frames per packet (or counting each packet’s frames individually for a variable frames per packet format) minus `mPrimingFrames`, minus `mRemainderFrames`, should equal `mNumberValidFrames`.

## Topics

### Instance Properties

- [mNumberValidFrames](audiofilepackettableinfo/mnumbervalidframes.md): The number of valid frames in the file.
- [mPrimingFrames](audiofilepackettableinfo/mprimingframes.md): The number of invalid frames at the beginning of the file.
- [mRemainderFrames](audiofilepackettableinfo/mremainderframes.md): The number of invalid frames at the end of the file.

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
