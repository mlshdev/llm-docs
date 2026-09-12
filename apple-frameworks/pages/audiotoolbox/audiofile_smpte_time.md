> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofile_smpte_time](https://developer.apple.com/documentation/audiotoolbox/audiofile_smpte_time)

# AudioFile_SMPTE_Time (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A data structure for describing SMPTE (Society of Motion Picture and Television Engineers) time.

## Declaration

```swift
struct AudioFile_SMPTE_Time
```

## Topics

### Initializers

- [init()](audiofile_smpte_time/init%28%29.md)
- [init(mHours:mMinutes:mSeconds:mFrames:mSubFrameSampleOffset:)](audiofile_smpte_time/init%28mhours_mminutes_mseconds_mframes_msubframesampleoffset_%29.md)

### Instance Properties

- [mFrames](audiofile_smpte_time/mframes.md): The frames.
- [mHours](audiofile_smpte_time/mhours.md): The hours.
- [mMinutes](audiofile_smpte_time/mminutes.md): The minutes.
- [mSeconds](audiofile_smpte_time/mseconds.md): The seconds.
- [mSubFrameSampleOffset](audiofile_smpte_time/msubframesampleoffset.md): The sample offset within a frame.

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
- [AudioFileMarker](audiofilemarker.md): Annotates a position in an audio file.
- [AudioFileMarkerList](audiofilemarkerlist.md): A list of markers associated with an audio file, including their SMPTE time type, the number of markers, and the markers themselves.
- [AudioFileRegion](audiofileregion.md): An audio file region specifies a segment of audio data.
- [AudioFileRegionList](audiofileregionlist.md): A list of the audio file regions in a file.
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
- [AudioBytePacketTranslation](audiobytepackettranslation.md): A data structure used by the [kAudioFilePropertyByteToPacket](kaudiofilepropertybytetopacket.md) and [kAudioFilePropertyPacketToByte](kaudiofilepropertypackettobyte.md) properties.
- [AudioFilePacketTableInfo](audiofilepackettableinfo.md): Contains information about the number of valid frames in a file and where they begin and end.

# AudioFile_SMPTE_Time (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A data structure for describing SMPTE (Society of Motion Picture and Television Engineers) time.

## Declaration

```objectivec
struct AudioFile_SMPTE_Time;
```

## Topics

### Instance Properties

- [mFrames](audiofile_smpte_time/mframes.md): The frames.
- [mHours](audiofile_smpte_time/mhours.md): The hours.
- [mMinutes](audiofile_smpte_time/mminutes.md): The minutes.
- [mSeconds](audiofile_smpte_time/mseconds.md): The seconds.
- [mSubFrameSampleOffset](audiofile_smpte_time/msubframesampleoffset.md): The sample offset within a frame.

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
- [AudioFileMarker](audiofilemarker.md): Annotates a position in an audio file.
- [AudioFileMarkerList](audiofilemarkerlist.md): A list of markers associated with an audio file, including their SMPTE time type, the number of markers, and the markers themselves.
- [AudioFileRegion](audiofileregion.md): An audio file region specifies a segment of audio data.
- [AudioFileRegionList](audiofileregionlist.md): A list of the audio file regions in a file.
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
