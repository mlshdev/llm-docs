> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileregionflags](https://developer.apple.com/documentation/audiotoolbox/audiofileregionflags)

# AudioFileRegionFlags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags that specify a playback direction for an audio file region structure.

## Declaration

```swift
struct AudioFileRegionFlags
```

<a id="overview"></a>

## Overview

You can set one or more of these flags. For example, if both `kAudioFileRegionFlag_LoopEnable` and `kAudioFileRegionFlag_PlayForward` are set, the region plays as a forward loop. If only  `kAudioFileRegionFlag_PlayForward` is set, the region is played forward once. if both `kAudioFileRegionFlag_PlayForward` and `kAudioFileRegionFlag_PlayBackward` are set, the region plays forward then backward, then forward.

## Topics

### Constants

- [loopEnable](audiofileregionflags/loopenable.md): If set, the region is looped. You must set one or both of the remaining flags must also be set for the region to be looped.
- [playBackward](audiofileregionflags/playbackward.md): If set, the region is played backward.
- [playForward](audiofileregionflags/playforward.md): If set, the region is played forward.

### Initializers

- [init(rawValue:)](audiofileregionflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Data Types

- [AudioBytePacketTranslationFlags](audiobytepackettranslationflags.md)
- [AudioFileFlags](audiofileflags.md)
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

# AudioFileRegionFlags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags that specify a playback direction for an audio file region structure.

## Declaration

```objectivec
enum AudioFileRegionFlags : UInt32;
```

<a id="overview"></a>

## Overview

You can set one or more of these flags. For example, if both `kAudioFileRegionFlag_LoopEnable` and `kAudioFileRegionFlag_PlayForward` are set, the region plays as a forward loop. If only  `kAudioFileRegionFlag_PlayForward` is set, the region is played forward once. if both `kAudioFileRegionFlag_PlayForward` and `kAudioFileRegionFlag_PlayBackward` are set, the region plays forward then backward, then forward.

## Topics

### Constants

- [kAudioFileRegionFlag_LoopEnable](audiofileregionflags/loopenable.md): If set, the region is looped. You must set one or both of the remaining flags must also be set for the region to be looped.
- [kAudioFileRegionFlag_PlayBackward](audiofileregionflags/playbackward.md): If set, the region is played backward.
- [kAudioFileRegionFlag_PlayForward](audiofileregionflags/playforward.md): If set, the region is played forward.

## See Also

### Data Types

- [AudioBytePacketTranslationFlags](audiobytepackettranslationflags.md)
- [AudioFileFDFTable](audiofilefdftable.md)
- [AudioFileFDFTableExtended](audiofilefdftableextended.md)
- [AudioFileFlags](audiofileflags.md)
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
