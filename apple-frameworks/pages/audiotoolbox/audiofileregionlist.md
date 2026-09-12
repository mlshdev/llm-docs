> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileregionlist](https://developer.apple.com/documentation/audiotoolbox/audiofileregionlist)

# AudioFileRegionList (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A list of the audio file regions in a file.

## Declaration

```swift
struct AudioFileRegionList
```

<a id="overview"></a>

## Overview

This structure is used by the [kAudioFilePropertyRegionList](kaudiofilepropertyregionlist.md) property.

## Topics

### Initializers

- [init()](audiofileregionlist/init%28%29.md)
- [init(mSMPTE_TimeType:mNumberRegions:mRegions:)](audiofileregionlist/init%28msmpte_timetype_mnumberregions_mregions_%29.md)

### Instance Properties

- [mNumberRegions](audiofileregionlist/mnumberregions.md): The number of regions in the list specified in the `mRegions` parameter.
- [mRegions](audiofileregionlist/mregions.md): A variable length array of audio file regions.
- [mSMPTE_TimeType](audiofileregionlist/msmpte_timetype.md): The SMPTE timing scheme used in the file. See Core Audio’s `CAFFile.h` header file for the values used here. For more information, see *Core Audio Overview*.

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
- [AudioFileMarker](audiofilemarker.md): Annotates a position in an audio file.
- [AudioFileMarkerList](audiofilemarkerlist.md): A list of markers associated with an audio file, including their SMPTE time type, the number of markers, and the markers themselves.
- [AudioFileRegion](audiofileregion.md): An audio file region specifies a segment of audio data.
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
- [AudioBytePacketTranslation](audiobytepackettranslation.md): A data structure used by the [kAudioFilePropertyByteToPacket](kaudiofilepropertybytetopacket.md) and [kAudioFilePropertyPacketToByte](kaudiofilepropertypackettobyte.md) properties.
- [AudioFilePacketTableInfo](audiofilepackettableinfo.md): Contains information about the number of valid frames in a file and where they begin and end.

# AudioFileRegionList (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A list of the audio file regions in a file.

## Declaration

```objectivec
struct AudioFileRegionList;
```

<a id="overview"></a>

## Overview

This structure is used by the [kAudioFilePropertyRegionList](kaudiofilepropertyregionlist.md) property.

## Topics

### Instance Properties

- [mNumberRegions](audiofileregionlist/mnumberregions.md): The number of regions in the list specified in the `mRegions` parameter.
- [mRegions](audiofileregionlist/mregions.md): A variable length array of audio file regions.
- [mSMPTE_TimeType](audiofileregionlist/msmpte_timetype.md): The SMPTE timing scheme used in the file. See Core Audio’s `CAFFile.h` header file for the values used here. For more information, see *Core Audio Overview*.

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
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
