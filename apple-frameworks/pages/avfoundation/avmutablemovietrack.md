> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack)

# AVMutableMovieTrack (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A mutable track that conforms to the QuickTime or ISO base media file format.

## Declaration

```swift
class AVMutableMovieTrack
```

## Topics

### Managing time ranges

- [insertTimeRange(\_:of:at:copySampleData:)](avmutablemovietrack/inserttimerange%28__of_at_copysampledata_%29.md): Inserts a portion of an asset track into the target movie.
- [insertEmptyTimeRange(\_:)](avmutablemovietrack/insertemptytimerange%28__%29.md): Adds an empty time range to a track.
- [removeTimeRange(\_:)](avmutablemovietrack/removetimerange%28__%29.md): Removes the specified time range from a track.
- [scaleTimeRange(\_:toDuration:)](avmutablemovietrack/scaletimerange%28__toduration_%29.md): Changes the duration of a time range in a track.

### Appending sample data

- [append(\_:)](avmutablemovietrack/append%28__%29.md): Appends sample data to a media file and adds sample references for the added data to a track’s media sample tables.
- [append(\_:decodeTime:presentationTime:)](avmutablemovietrack/append%28__decodetime_presentationtime_%29.md): Deprecated. Appends sample data to a media file and adds sample references for the added data to a track’s media sample tables.
- [insertMediaTimeRange(\_:into:)](avmutablemovietrack/insertmediatimerange%28__into_%29.md): Inserts a reference to a media time range into a track.

### Accessing media chunks

- [preferredMediaChunkAlignment](avmutablemovietrack/preferredmediachunkalignment.md): The boundary for media chunk alignment for file types that support media chunk alignment.
- [preferredMediaChunkDuration](avmutablemovietrack/preferredmediachunkduration.md): The maximum duration to use for each chunk of sample data written to the file for file types that support media chunk duration.
- [preferredMediaChunkSize](avmutablemovietrack/preferredmediachunksize.md): The maximum size to use for each chunk of sample data written to the file for file types that support media chunk duration.

### Changing format descriptions

- [formatDescriptions](avmutablemovietrack/formatdescriptions.md): The format descriptions of the media samples that a track references.
- [replaceFormatDescription(\_:with:)](avmutablemovietrack/replaceformatdescription%28__with_%29.md): Replaces the track’s format description with a new format description.

### Configuring track information

- [isModified](avmutablemovietrack/ismodified.md): A Boolean value that indicates whether a track is in a modified state.
- [alternateGroupID](avmutablemovietrack/alternategroupid.md): A number that identifies the track as a member of a particular alternate group.
- [mediaDataStorage](avmutablemovietrack/mediadatastorage.md): A storage container for the media data to be added to a track.
- [sampleReferenceBaseURL](avmutablemovietrack/samplereferencebaseurl.md): The base URL for sample references.

### Accessing track information

- [isPlayable](avmutablemovietrack/isplayable.md): A Boolean value that indicates whether the track is playable in the current environment.
- [isDecodable](avmutablemovietrack/isdecodable.md): A Boolean value that indicates whether the track is decodable in the current environment.
- [isEnabled](avmutablemovietrack/isenabled.md): A Boolean value that indicates whether the track’s container enables it.
- [isSelfContained](avmutablemovietrack/isselfcontained.md): A Boolean value that indicates whether this track references sample data only within its container file.
- [hasProtectedContent](avmutablemovietrack/hasprotectedcontent.md): A Boolean value that indicates whether a track contains protected content.
- [totalSampleDataLength](avmutablemovietrack/totalsampledatalength.md): The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic(\_:)](avmutablemovietrack/hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the track references media with the specified media characteristic.

### Accessing temporal information

- [timeRange](avmutablemovietrack/timerange.md): The time range of the track within the overall timeline of the asset.
- [timescale](avmutablemovietrack/timescale.md): The time scale for tracks that contain the `moov` atom.
- [naturalTimeScale](avmutablemovietrack/naturaltimescale.md): The natural time scale of the media that a track references.
- [estimatedDataRate](avmutablemovietrack/estimateddatarate.md): The estimated data rate, in bits per second, of the media that the track references.
- [samplePresentationTime(forTrackTime:)](avmutablemovietrack/samplepresentationtime%28fortracktime_%29.md): Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

### Accessing language support

- [languageCode](avmutablemovietrack/languagecode.md): The language code of the track.
- [extendedLanguageTag](avmutablemovietrack/extendedlanguagetag.md): The language tag of the track.

### Accessing visual characteristics

- [naturalSize](avmutablemovietrack/naturalsize.md): The dimensions used to display the visual media data for the track.
- [preferredTransform](avmutablemovietrack/preferredtransform.md): The transform performed on the visual media data of the track for display purposes.
- [layer](avmutablemovietrack/layer.md): The layer level for the visual media of the track.
- [cleanApertureDimensions](avmutablemovietrack/cleanaperturedimensions.md): The clean aperture dimension of the track.
- [productionApertureDimensions](avmutablemovietrack/productionaperturedimensions.md): The production aperture dimensions of the track.
- [encodedPixelsDimensions](avmutablemovietrack/encodedpixelsdimensions.md): The encoded pixels dimensions of the track.

### Accessing audible characteristics

- [preferredVolume](avmutablemovietrack/preferredvolume.md): The preferred volume for the audible medata data of the track.
- [hasAudioSampleDependencies](avmutablemovietrack/hasaudiosampledependencies.md): A Boolean value that indicates whether the track has sample dependencies.

### Accessing frame-based characteristics

- [nominalFrameRate](avmutablemovietrack/nominalframerate.md): The frame rate of the track, in frames per second.
- [minFrameDuration](avmutablemovietrack/minframeduration.md): The minimum duration of the track’s frames.
- [requiresFrameReordering](avmutablemovietrack/requiresframereordering.md): A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.

### Accessing metadata

- [metadata](avmutablemovietrack/metadata.md): An array of metadata stored by the track.
- [commonMetadata](avmutablemovietrack/commonmetadata.md): An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](avmutablemovietrack/availablemetadataformats.md): An array of metadata formats available for the track.
- [metadata(forFormat:)](avmutablemovietrack/metadata%28forformat_%29.md): Returns metadata items that a track contains for the specified format.

### Accessing track segments

- [segments](avmutablemovietrack/segments.md): The time mappings from the track’s media samples to its timeline.
- [segment(forTrackTime:)](avmutablemovietrack/segment%28fortracktime_%29.md): Returns a segment whose target time range contains, or is closest to, the specified track time.

### Managing track associations

- [availableTrackAssociationTypes](avmutablemovietrack/availabletrackassociationtypes.md): An array of association types that the track uses to associate with other tracks.
- [associatedTracks(ofType:)](avmutablemovietrack/associatedtracks%28oftype_%29.md): Returns an array of associated tracks that have the specified association type.
- [addTrackAssociation(to:type:)](avmutablemovietrack/addtrackassociation%28to_type_%29.md): Creates a specific type of track association between two tracks.
- [removeTrackAssociation(to:type:)](avmutablemovietrack/removetrackassociation%28to_type_%29.md): Removes a specific type of track association between two tracks.

### Determining sample cursor support

- [canProvideSampleCursors](avmutablemovietrack/canprovidesamplecursors.md): A Boolean value that indicates whether the track can provide instances of sample cursors to traverse its media samples and discover information.

## Relationships

### Inherits From

- [AVMovieTrack](avmovietrack.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Mutable movies

- [AVMutableMovie](avmutablemovie.md): A mutable object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.

# AVMutableMovieTrack (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A mutable track that conforms to the QuickTime or ISO base media file format.

## Declaration

```objectivec
@interface AVMutableMovieTrack : AVMovieTrack
```

## Topics

### Managing time ranges

- [insertTimeRange:ofTrack:atTime:copySampleData:error:](avmutablemovietrack/inserttimerange%28__of_at_copysampledata_%29.md): Inserts a portion of an asset track into the target movie.
- [insertEmptyTimeRange:](avmutablemovietrack/insertemptytimerange%28__%29.md): Adds an empty time range to a track.
- [removeTimeRange:](avmutablemovietrack/removetimerange%28__%29.md): Removes the specified time range from a track.
- [scaleTimeRange:toDuration:](avmutablemovietrack/scaletimerange%28__toduration_%29.md): Changes the duration of a time range in a track.

### Appending sample data

- [appendSampleBuffer:decodeTime:presentationTime:error:](avmutablemovietrack/append%28__decodetime_presentationtime_%29.md): Deprecated. Appends sample data to a media file and adds sample references for the added data to a track’s media sample tables.
- [insertMediaTimeRange:intoTimeRange:](avmutablemovietrack/insertmediatimerange%28__into_%29.md): Inserts a reference to a media time range into a track.

### Accessing media chunks

- [preferredMediaChunkAlignment](avmutablemovietrack/preferredmediachunkalignment.md): The boundary for media chunk alignment for file types that support media chunk alignment.
- [preferredMediaChunkDuration](avmutablemovietrack/preferredmediachunkduration.md): The maximum duration to use for each chunk of sample data written to the file for file types that support media chunk duration.
- [preferredMediaChunkSize](avmutablemovietrack/preferredmediachunksize.md): The maximum size to use for each chunk of sample data written to the file for file types that support media chunk duration.

### Changing format descriptions

- [replaceFormatDescription:withFormatDescription:](avmutablemovietrack/replaceformatdescription%28__with_%29.md): Replaces the track’s format description with a new format description.

### Configuring track information

- [modified](avmutablemovietrack/ismodified.md): A Boolean value that indicates whether a track is in a modified state.
- [alternateGroupID](avmutablemovietrack/alternategroupid.md): A number that identifies the track as a member of a particular alternate group.
- [mediaDataStorage](avmutablemovietrack/mediadatastorage.md): A storage container for the media data to be added to a track.
- [sampleReferenceBaseURL](avmutablemovietrack/samplereferencebaseurl.md): The base URL for sample references.

### Accessing track information

- [enabled](avmutablemovietrack/isenabled.md): A Boolean value that indicates whether the track’s container enables it.
- [hasProtectedContent](avmutablemovietrack/hasprotectedcontent.md): A Boolean value that indicates whether a track contains protected content.
- [hasMediaCharacteristic:](avmutablemovietrack/hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the track references media with the specified media characteristic.

### Accessing temporal information

- [timescale](avmutablemovietrack/timescale.md): The time scale for tracks that contain the `moov` atom.
- [samplePresentationTimeForTrackTime:](avmutablemovietrack/samplepresentationtime%28fortracktime_%29.md): Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

### Accessing language support

- [languageCode](avmutablemovietrack/languagecode.md): The language code of the track.
- [extendedLanguageTag](avmutablemovietrack/extendedlanguagetag.md): The language tag of the track.

### Accessing visual characteristics

- [naturalSize](avmutablemovietrack/naturalsize.md): The dimensions used to display the visual media data for the track.
- [preferredTransform](avmutablemovietrack/preferredtransform.md): The transform performed on the visual media data of the track for display purposes.
- [layer](avmutablemovietrack/layer.md): The layer level for the visual media of the track.
- [cleanApertureDimensions](avmutablemovietrack/cleanaperturedimensions.md): The clean aperture dimension of the track.
- [productionApertureDimensions](avmutablemovietrack/productionaperturedimensions.md): The production aperture dimensions of the track.
- [encodedPixelsDimensions](avmutablemovietrack/encodedpixelsdimensions.md): The encoded pixels dimensions of the track.

### Accessing audible characteristics

- [preferredVolume](avmutablemovietrack/preferredvolume.md): The preferred volume for the audible medata data of the track.

### Accessing metadata

- [metadata](avmutablemovietrack/metadata.md): An array of metadata stored by the track.
- [metadataForFormat:](avmutablemovietrack/metadata%28forformat_%29.md): Returns metadata items that a track contains for the specified format.

### Accessing track segments

- [segmentForTrackTime:](avmutablemovietrack/segment%28fortracktime_%29.md): Returns a segment whose target time range contains, or is closest to, the specified track time.

### Managing track associations

- [associatedTracksOfType:](avmutablemovietrack/associatedtracks%28oftype_%29.md): Returns an array of associated tracks that have the specified association type.
- [addTrackAssociationToTrack:type:](avmutablemovietrack/addtrackassociation%28to_type_%29.md): Creates a specific type of track association between two tracks.
- [removeTrackAssociationToTrack:type:](avmutablemovietrack/removetrackassociation%28to_type_%29.md): Removes a specific type of track association between two tracks.

## Relationships

### Inherits From

- [AVMovieTrack](avmovietrack.md)

## See Also

### Mutable movies

- [AVMutableMovie](avmutablemovie.md): A mutable object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.
