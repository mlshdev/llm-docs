> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileregion](https://developer.apple.com/documentation/audiotoolbox/audiofileregion)

# AudioFileRegion (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An audio file region specifies a segment of audio data.

## Declaration

```swift
struct AudioFileRegion
```

<a id="overview"></a>

## Overview

Typically, a region consists of at least two markers designating the beginning and end of the segment. Other markers might define additional meta information such as sync point.

## Topics

### Initializers

- [init(mRegionID:mName:mFlags:mNumberMarkers:mMarkers:)](audiofileregion/init%28mregionid_mname_mflags_mnumbermarkers_mmarkers_%29.md)

### Instance Properties

- [mFlags](audiofileregion/mflags.md): Audio File Services region flags.
- [mMarkers](audiofileregion/mmarkers.md): An array of `mNumberMarkers` elements describing where the data in the region starts.
- [mName](audiofileregion/mname.md): The name of the region.
- [mNumberMarkers](audiofileregion/mnumbermarkers.md): The number of markers in the array specified in the `mMarkers` parameter.
- [mRegionID](audiofileregion/mregionid.md): A unique ID associated with the audio file region.

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
- [AudioFileRegionList](audiofileregionlist.md): A list of the audio file regions in a file.
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
- [AudioBytePacketTranslation](audiobytepackettranslation.md): A data structure used by the [kAudioFilePropertyByteToPacket](kaudiofilepropertybytetopacket.md) and [kAudioFilePropertyPacketToByte](kaudiofilepropertypackettobyte.md) properties.
- [AudioFilePacketTableInfo](audiofilepackettableinfo.md): Contains information about the number of valid frames in a file and where they begin and end.

# AudioFileRegion (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An audio file region specifies a segment of audio data.

## Declaration

```objectivec
struct AudioFileRegion;
```

<a id="overview"></a>

## Overview

Typically, a region consists of at least two markers designating the beginning and end of the segment. Other markers might define additional meta information such as sync point.

## Topics

### Instance Properties

- [mFlags](audiofileregion/mflags.md): Audio File Services region flags.
- [mMarkers](audiofileregion/mmarkers.md): An array of `mNumberMarkers` elements describing where the data in the region starts.
- [mName](audiofileregion/mname.md): The name of the region.
- [mNumberMarkers](audiofileregion/mnumbermarkers.md): The number of markers in the array specified in the `mMarkers` parameter.
- [mRegionID](audiofileregion/mregionid.md): A unique ID associated with the audio file region.

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
- [AudioFileRegionList](audiofileregionlist.md): A list of the audio file regions in a file.
- [AudioFramePacketTranslation](audioframepackettranslation.md): A structure that specifies frame and packet translations.
