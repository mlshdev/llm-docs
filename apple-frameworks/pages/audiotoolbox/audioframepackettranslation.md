> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioframepackettranslation](https://developer.apple.com/documentation/audiotoolbox/audioframepackettranslation)

# AudioFramePacketTranslation (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that specifies frame and packet translations.

## Declaration

```swift
struct AudioFramePacketTranslation
```

<a id="overview"></a>

## Overview

A data structure used by the [kAudioFilePropertyPacketToFrame](kaudiofilepropertypackettoframe.md) and [kAudioFilePropertyFrameToPacket](kaudiofilepropertyframetopacket.md) properties.

## Topics

### Initializers

- [init()](audioframepackettranslation/init%28%29.md)
- [init(mFrame:mPacket:mFrameOffsetInPacket:)](audioframepackettranslation/init%28mframe_mpacket_mframeoffsetinpacket_%29.md)

### Instance Properties

- [mFrame](audioframepackettranslation/mframe.md): A frame number.
- [mFrameOffsetInPacket](audioframepackettranslation/mframeoffsetinpacket.md): A frame offset in a packet.
- [mPacket](audioframepackettranslation/mpacket.md): A packet number.

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
- [AudioBytePacketTranslation](audiobytepackettranslation.md): A data structure used by the [kAudioFilePropertyByteToPacket](kaudiofilepropertybytetopacket.md) and [kAudioFilePropertyPacketToByte](kaudiofilepropertypackettobyte.md) properties.
- [AudioFilePacketTableInfo](audiofilepackettableinfo.md): Contains information about the number of valid frames in a file and where they begin and end.

# AudioFramePacketTranslation (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that specifies frame and packet translations.

## Declaration

```objectivec
struct AudioFramePacketTranslation;
```

<a id="overview"></a>

## Overview

A data structure used by the [kAudioFilePropertyPacketToFrame](kaudiofilepropertypackettoframe.md) and [kAudioFilePropertyFrameToPacket](kaudiofilepropertyframetopacket.md) properties.

## Topics

### Instance Properties

- [mFrame](audioframepackettranslation/mframe.md): A frame number.
- [mFrameOffsetInPacket](audioframepackettranslation/mframeoffsetinpacket.md): A frame offset in a packet.
- [mPacket](audioframepackettranslation/mpacket.md): A packet number.

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
