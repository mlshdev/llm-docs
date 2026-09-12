> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack](https://developer.apple.com/documentation/avfoundation/avassettrack)

# AVAssetTrack (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that models a track of media that an asset contains.

## Declaration

```swift
class AVAssetTrack
```

## Mentioned In

- [Loading media data asynchronously](loading-media-data-asynchronously.md)
- [Tagging media with video color information](tagging-media-with-video-color-information.md)

<a id="overview"></a>

## Overview

An asset contains one or more tracks of media that the framework models using the [AVAssetTrack](avassettrack.md) class. A track object holds the uniformly typed media that an asset provides such as audio, video, or closed captions.

A track, like its containing [AVAsset](avasset.md), doesn’t load all of its media upon creation. Instead, it defers loading its data until you perform an operation that requires it. Because loading the data can take time, an asset track adopts the [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md) protocol so you can load its property values asynchronously by calling the [load(\_:isolation:)](avasynchronouskeyvalueloading/load%28__isolation_%29.md) method.

## Topics

### Identifying an asset track

- [trackID](avassettrack/trackid.md): The persistent unique identifier for this track.
- [mediaType](avassettrack/mediatype.md): The type of media that a track presents.
- [asset](avassettrack/asset.md): The asset object that contains this track.

### Loading track information

- [formatDescriptions](avpartialasyncproperty/formatdescriptions.md): Conforms when `Root` inherits `AVAssetTrack`. The format descriptions of the media samples that a track references.
- [isPlayable](avpartialasyncproperty/isplayable-6txa5.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track is playable in the current environment.
- [isDecodable](avpartialasyncproperty/isdecodable.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track is decodable in the current environment.
- [isEnabled](avpartialasyncproperty/isenabled.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track is in an enabled state.
- [isSelfContained](avpartialasyncproperty/isselfcontained.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track references sample data only within its container file.
- [totalSampleDataLength](avpartialasyncproperty/totalsampledatalength.md): Conforms when `Root` inherits `AVAssetTrack`. The total number of bytes of sample data the track requires.
- [mediaCharacteristics](avpartialasyncproperty/mediacharacteristics.md): Conforms when `Root` inherits `AVAssetTrack`. The media characteristics for the track.

### Loading temporal information

- [timeRange](avpartialasyncproperty/timerange.md): Conforms when `Root` inherits `AVAssetTrack`. The time range of the track within the overall timeline of the asset.
- [naturalTimeScale](avpartialasyncproperty/naturaltimescale.md): Conforms when `Root` inherits `AVAssetTrack`. The natural time scale of the media that a track references.
- [estimatedDataRate](avpartialasyncproperty/estimateddatarate.md): Conforms when `Root` inherits `AVAssetTrack`. The estimated data rate, in bits per second, of the media that the track references.

### Loading language support

- [languageCode](avpartialasyncproperty/languagecode.md): Conforms when `Root` inherits `AVAssetTrack`. The language code of the track.
- [extendedLanguageTag](avpartialasyncproperty/extendedlanguagetag.md): Conforms when `Root` inherits `AVAssetTrack`. The language tag of the track.

### Loading visual characteristics

- [naturalSize](avpartialasyncproperty/naturalsize.md): Conforms when `Root` inherits `AVAssetTrack`. The natural dimensions of the media data that the track references.
- [preferredTransform](avpartialasyncproperty/preferredtransform-90jdn.md): Conforms when `Root` inherits `AVAssetTrack`. The track’s transform preference to apply to its visual content during presentation or processing.

### Loading audible characteristics

- [preferredVolume](avpartialasyncproperty/preferredvolume-8q2yt.md): Conforms when `Root` inherits `AVAssetTrack`. The track’s volume preference for playing its audible media.
- [hasAudioSampleDependencies](avpartialasyncproperty/hasaudiosampledependencies.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track has sample dependencies.

### Loading frame-based characteristics

- [nominalFrameRate](avpartialasyncproperty/nominalframerate.md): Conforms when `Root` inherits `AVAssetTrack`. The frame rate of the track, in frames per second.
- [minFrameDuration](avpartialasyncproperty/minframeduration.md): Conforms when `Root` inherits `AVAssetTrack`. The minimum duration of the track’s frames.
- [requiresFrameReordering](avpartialasyncproperty/requiresframereordering.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.

### Loading metadata

- [metadata](avpartialasyncproperty/metadata-6e14c.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata items for all metadata identifiers that have a value.
- [commonMetadata](avpartialasyncproperty/commonmetadata-73m58.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](avpartialasyncproperty/availablemetadataformats-5p9xg.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata formats available for the track.
- [loadMetadata(for:completionHandler:)](avassettrack/loadmetadata%28for_completionhandler_%29.md): Loads metadata items that a track contains for the specified format.

### Loading track segments

- [segments](avpartialasyncproperty/segments.md): Conforms when `Root` inherits `AVAssetTrack`. The time mappings from the track’s media samples to its timeline.
- [loadSegment(forTrackTime:completionHandler:)](avassettrack/loadsegment%28fortracktime_completionhandler_%29.md): Loads a segment with a target time range that contains, or is closest to, the specified track time.
- [loadSamplePresentationTime(forTrackTime:completionHandler:)](avassettrack/loadsamplepresentationtime%28fortracktime_completionhandler_%29.md): Loads a sample presentation time that maps to the specified track time.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.

### Loading track associations

- [availableTrackAssociationTypes](avpartialasyncproperty/availabletrackassociationtypes.md): Conforms when `Root` inherits `AVAssetTrack`. An array of association types that the track uses to associate with other tracks.
- [loadAssociatedTracks(ofType:completionHandler:)](avassettrack/loadassociatedtracks%28oftype_completionhandler_%29.md): Loads associated tracks that have the specified association type.

### Creating sample cursors

- [makeSampleCursor(presentationTimeStamp:)](avassettrack/makesamplecursor%28presentationtimestamp_%29.md): Creates a sample cursor and positions it at or near the specified presentation timestamp.
- [makeSampleCursorAtFirstSampleInDecodeOrder()](avassettrack/makesamplecursoratfirstsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s first media sample in decode order.
- [makeSampleCursorAtLastSampleInDecodeOrder()](avassettrack/makesamplecursoratlastsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s last media sample in decode order.

### Deprecated

- [Deprecated symbols](avassettrack-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCompositionTrack](avcompositiontrack.md)
- [AVFragmentedAssetTrack](avfragmentedassettrack.md)
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

### Assets

- [AVAsset](avasset.md): An object that models timed audiovisual media.
- [AVURLAsset](avurlasset.md): An asset that represents media at a local or remote URL.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.
- [AVAssetTrackGroup](avassettrackgroup.md): A group of related tracks in an asset.

# AVAssetTrack (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that models a track of media that an asset contains.

## Declaration

```objectivec
@interface AVAssetTrack : NSObject
```

## Mentioned In

- [Loading media data asynchronously](loading-media-data-asynchronously.md)
- [Tagging media with video color information](tagging-media-with-video-color-information.md)

<a id="overview"></a>

## Overview

An asset contains one or more tracks of media that the framework models using the [AVAssetTrack](avassettrack.md) class. A track object holds the uniformly typed media that an asset provides such as audio, video, or closed captions.

A track, like its containing [AVAsset](avasset.md), doesn’t load all of its media upon creation. Instead, it defers loading its data until you perform an operation that requires it. Because loading the data can take time, an asset track adopts the [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md) protocol so you can load its property values asynchronously by calling the [load(\_:isolation:)](avasynchronouskeyvalueloading/load%28__isolation_%29.md) method.

## Topics

### Identifying an asset track

- [trackID](avassettrack/trackid.md): The persistent unique identifier for this track.
- [mediaType](avassettrack/mediatype.md): The type of media that a track presents.
- [asset](avassettrack/asset.md): The asset object that contains this track.

### Loading metadata

- [loadMetadataForFormat:completionHandler:](avassettrack/loadmetadata%28for_completionhandler_%29.md): Loads metadata items that a track contains for the specified format.

### Loading track segments

- [loadSegmentForTrackTime:completionHandler:](avassettrack/loadsegment%28fortracktime_completionhandler_%29.md): Loads a segment with a target time range that contains, or is closest to, the specified track time.
- [loadSamplePresentationTimeForTrackTime:completionHandler:](avassettrack/loadsamplepresentationtime%28fortracktime_completionhandler_%29.md): Loads a sample presentation time that maps to the specified track time.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.

### Loading track associations

- [loadAssociatedTracksOfType:completionHandler:](avassettrack/loadassociatedtracks%28oftype_completionhandler_%29.md): Loads associated tracks that have the specified association type.

### Accessing track information

- [formatDescriptions](avassettrack/formatdescriptions.md): Deprecated. The format descriptions of the media samples that a track references.
- [playable](avassettrack/isplayable.md): Deprecated. A Boolean value that indicates whether the track is playable in the current environment.
- [decodable](avassettrack/isdecodable.md): Deprecated. A Boolean value that indicates whether the track is decodable in the current environment.
- [enabled](avassettrack/isenabled.md): Deprecated. A Boolean value that indicates whether the track’s container enables it.
- [selfContained](avassettrack/isselfcontained.md): Deprecated. A Boolean value that indicates whether this track references sample data only within its container file.
- [totalSampleDataLength](avassettrack/totalsampledatalength.md): Deprecated. The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic:](avassettrack/hasmediacharacteristic%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the track references media with the specified media characteristic.

### Accessing temporal information

- [timeRange](avassettrack/timerange.md): Deprecated. The time range of the track within the overall timeline of the asset.
- [naturalTimeScale](avassettrack/naturaltimescale.md): Deprecated. The natural time scale of the media that a track references.
- [estimatedDataRate](avassettrack/estimateddatarate.md): Deprecated. The estimated data rate, in bits per second, of the media that the track references.
- [samplePresentationTimeForTrackTime:](avassettrack/samplepresentationtime%28fortracktime_%29.md): Deprecated. Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

### Accessing language support

- [languageCode](avassettrack/languagecode.md): Deprecated. The language code of the track.
- [extendedLanguageTag](avassettrack/extendedlanguagetag.md): Deprecated. The language tag of the track.

### Accessing visual characteristics

- [naturalSize](avassettrack/naturalsize.md): Deprecated. The natural dimensions of the media data that the track references.
- [preferredTransform](avassettrack/preferredtransform.md): Deprecated. The track’s transform preference to apply to its visual content during presentation or processing.

### Accessing audible characteristics

Prefer loading audible characteristics asynchronously using the symbols in Loading Audible Characteristics.

- [preferredVolume](avassettrack/preferredvolume.md): Deprecated. The track’s volume preference for playing its audible media.
- [hasAudioSampleDependencies](avassettrack/hasaudiosampledependencies.md): Deprecated. A Boolean value that indicates whether the track has sample dependencies.

### Accessing frame-based characteristics

Prefer loading frame-based characteristics asynchronously using the symbols in Loading Frame-Based Characteristics.

- [nominalFrameRate](avassettrack/nominalframerate.md): Deprecated. The frame rate of the track, in frames per second.
- [minFrameDuration](avassettrack/minframeduration.md): Deprecated. The minimum duration of the track’s frames.
- [requiresFrameReordering](avassettrack/requiresframereordering.md): Deprecated. A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.

### Accessing metadata

Prefer loading metadata asynchronously using the symbols in Loading Metadata.

- [metadata](avassettrack/metadata.md): Deprecated. An array of metadata items for all metadata identifiers that have a value.
- [commonMetadata](avassettrack/commonmetadata.md): Deprecated. An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](avassettrack/availablemetadataformats.md): Deprecated. An array of metadata formats available for the track.
- [metadataForFormat:](avassettrack/metadata%28forformat_%29.md): Deprecated. Returns metadata items that a track contains for the specified format.

### Accessing track segments

Prefer loading track segments asynchronously using the symbols in Loading Track Segments.

- [segments](avassettrack/segments.md): Deprecated. The time mappings from the track’s media samples to its timeline.
- [segmentForTrackTime:](avassettrack/segment%28fortracktime_%29.md): Deprecated. Retrieves a segment with a target time range that contains, or is closest to, the specified track time.

### Accessing track associations

Prefer loading track associations asynchronously using the symbols in Loading Track Associations.

- [availableTrackAssociationTypes](avassettrack/availabletrackassociationtypes.md): Deprecated. An array of association types that the track uses to associate with other tracks.
- [associatedTracksOfType:](avassettrack/associatedtracks%28oftype_%29.md): Deprecated. Returns an array of associated tracks that have the specified association type.
- [AVTrackAssociationType](avassettrack/associationtype.md): Constants that define track association types.

### Creating sample cursors

- [canProvideSampleCursors](avassettrack/canprovidesamplecursors.md): Deprecated. A Boolean value that indicates whether the track can provide instances of sample cursors to traverse its media samples and discover information.
- [makeSampleCursorWithPresentationTimeStamp:](avassettrack/makesamplecursor%28presentationtimestamp_%29.md): Creates a sample cursor and positions it at or near the specified presentation timestamp.
- [makeSampleCursorAtFirstSampleInDecodeOrder](avassettrack/makesamplecursoratfirstsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s first media sample in decode order.
- [makeSampleCursorAtLastSampleInDecodeOrder](avassettrack/makesamplecursoratlastsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s last media sample in decode order.

### Deprecated

- [Deprecated symbols](avassettrack-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCompositionTrack](avcompositiontrack.md)
- [AVFragmentedAssetTrack](avfragmentedassettrack.md)
- [AVMovieTrack](avmovietrack.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Assets

- [AVAsset](avasset.md): An object that models timed audiovisual media.
- [AVURLAsset](avurlasset.md): An asset that represents media at a local or remote URL.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.
- [AVAssetTrackGroup](avassettrackgroup.md): A group of related tracks in an asset.
