> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilemarker](https://developer.apple.com/documentation/audiotoolbox/audiofilemarker)

# AudioFileMarker (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Annotates a position in an audio file.

## Declaration

```swift
struct AudioFileMarker
```

## Topics

### Initializers

- [init()](audiofilemarker/init%28%29.md)
- [init(mFramePosition:mName:mMarkerID:mSMPTETime:mType:mReserved:mChannel:)](audiofilemarker/init%28mframeposition_mname_mmarkerid_msmptetime_mtype_mreserved_mchannel_%29.md)

### Instance Properties

- [mChannel](audiofilemarker/mchannel.md): The channel number referred to by the marker. Set to `0` if the marker applies to all channels.
- [mFramePosition](audiofilemarker/mframeposition.md): The frame in the file, counting from the start of the audio data.
- [mMarkerID](audiofilemarker/mmarkerid.md): A unique ID for the marker.
- [mName](audiofilemarker/mname.md): The name of the marker.
- [mReserved](audiofilemarker/mreserved.md): A reserved field. Set to `0`.
- [mSMPTETime](audiofilemarker/msmptetime.md): The SMPTE time for this marker.
- [mType](audiofilemarker/mtype.md): The marker type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

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
- [AudioFileMarkerList](audiofilemarkerlist.md): A list of markers associated with an audio file, including their SMPTE time type, the number of markers, and the markers themselves.
- [AudioFileRegion](audiofileregion.md): An audio file region specifies a segment of audio data.
- [AudioFileRegionList](audiofileregionlist.md): A list of the audio file regions in a file.
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
- [AudioBytePacketTranslation](audiobytepackettranslation.md): A data structure used by the [kAudioFilePropertyByteToPacket](kaudiofilepropertybytetopacket.md) and [kAudioFilePropertyPacketToByte](kaudiofilepropertypackettobyte.md) properties.
- [AudioFilePacketTableInfo](audiofilepackettableinfo.md): Contains information about the number of valid frames in a file and where they begin and end.

# AudioFileMarker (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Annotates a position in an audio file.

## Declaration

```objectivec
struct AudioFileMarker;
```

## Topics

### Instance Properties

- [mChannel](audiofilemarker/mchannel.md): The channel number referred to by the marker. Set to `0` if the marker applies to all channels.
- [mFramePosition](audiofilemarker/mframeposition.md): The frame in the file, counting from the start of the audio data.
- [mMarkerID](audiofilemarker/mmarkerid.md): A unique ID for the marker.
- [mName](audiofilemarker/mname.md): The name of the marker.
- [mReserved](audiofilemarker/mreserved.md): A reserved field. Set to `0`.
- [mSMPTETime](audiofilemarker/msmptetime.md): The SMPTE time for this marker.
- [mType](audiofilemarker/mtype.md): The marker type.

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
- [AudioFileMarkerList](audiofilemarkerlist.md): A list of markers associated with an audio file, including their SMPTE time type, the number of markers, and the markers themselves.
- [AudioFileRegion](audiofileregion.md): An audio file region specifies a segment of audio data.
- [AudioFileRegionList](audiofileregionlist.md): A list of the audio file regions in a file.
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
