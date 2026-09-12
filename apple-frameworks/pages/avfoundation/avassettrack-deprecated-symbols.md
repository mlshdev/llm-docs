> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack-deprecated-symbols](https://developer.apple.com/documentation/avfoundation/avassettrack-deprecated-symbols)

# Deprecated symbols (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Review unsupported symbols and their replacements.

<a id="overview"></a>

## Overview

[AVAssetTrack](avassettrack.md) doesn’t support using its synchronous property accessors that can block the calling thread. Instead, use the [load(\_:isolation:)](avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to load [AVAsyncProperty](avasyncproperty.md) values asynchronously.

## Topics

### Accessing track information

- [formatDescriptions](avassettrack/formatdescriptions.md): Deprecated. The format descriptions of the media samples that a track references.
- [isPlayable](avassettrack/isplayable.md): Deprecated. A Boolean value that indicates whether the track is playable in the current environment.
- [isDecodable](avassettrack/isdecodable.md): Deprecated. A Boolean value that indicates whether the track is decodable in the current environment.
- [isEnabled](avassettrack/isenabled.md): Deprecated. A Boolean value that indicates whether the track’s container enables it.
- [isSelfContained](avassettrack/isselfcontained.md): Deprecated. A Boolean value that indicates whether this track references sample data only within its container file.
- [totalSampleDataLength](avassettrack/totalsampledatalength.md): Deprecated. The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic(\_:)](avassettrack/hasmediacharacteristic%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the track references media with the specified media characteristic.

### Accessing temporal information

- [timeRange](avassettrack/timerange.md): Deprecated. The time range of the track within the overall timeline of the asset.
- [naturalTimeScale](avassettrack/naturaltimescale.md): Deprecated. The natural time scale of the media that a track references.
- [estimatedDataRate](avassettrack/estimateddatarate.md): Deprecated. The estimated data rate, in bits per second, of the media that the track references.

### Accessing language support

- [languageCode](avassettrack/languagecode.md): Deprecated. The language code of the track.
- [extendedLanguageTag](avassettrack/extendedlanguagetag.md): Deprecated. The language tag of the track.

### Accessing visual characteristics

- [naturalSize](avassettrack/naturalsize.md): Deprecated. The natural dimensions of the media data that the track references.
- [preferredTransform](avassettrack/preferredtransform.md): Deprecated. The track’s transform preference to apply to its visual content during presentation or processing.

### Accessing audible characteristics

- [preferredVolume](avassettrack/preferredvolume.md): Deprecated. The track’s volume preference for playing its audible media.
- [hasAudioSampleDependencies](avassettrack/hasaudiosampledependencies.md): Deprecated. A Boolean value that indicates whether the track has sample dependencies.

### Accessing frame-based characteristics

- [nominalFrameRate](avassettrack/nominalframerate.md): Deprecated. The frame rate of the track, in frames per second.
- [minFrameDuration](avassettrack/minframeduration.md): Deprecated. The minimum duration of the track’s frames.
- [requiresFrameReordering](avassettrack/requiresframereordering.md): Deprecated. A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.

### Accessing metadata

- [metadata](avassettrack/metadata.md): Deprecated. An array of metadata items for all metadata identifiers that have a value.
- [commonMetadata](avassettrack/commonmetadata.md): Deprecated. An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](avassettrack/availablemetadataformats.md): Deprecated. An array of metadata formats available for the track.
- [metadata(forFormat:)](avassettrack/metadata%28forformat_%29.md): Deprecated. Returns metadata items that a track contains for the specified format.

### Accessing track segments

- [segments](avassettrack/segments.md): Deprecated. The time mappings from the track’s media samples to its timeline.
- [segment(forTrackTime:)](avassettrack/segment%28fortracktime_%29.md): Deprecated. Retrieves a segment with a target time range that contains, or is closest to, the specified track time.
- [samplePresentationTime(forTrackTime:)](avassettrack/samplepresentationtime%28fortracktime_%29.md): Deprecated. Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

### Accessing track associations

- [availableTrackAssociationTypes](avassettrack/availabletrackassociationtypes.md): Deprecated. An array of association types that the track uses to associate with other tracks.
- [associatedTracks(ofType:)](avassettrack/associatedtracks%28oftype_%29.md): Deprecated. Returns an array of associated tracks that have the specified association type.

### Creating sample cursors

- [canProvideSampleCursors](avassettrack/canprovidesamplecursors.md): Deprecated. A Boolean value that indicates whether the track can provide instances of sample cursors to traverse its media samples and discover information.

# Deprecated symbols (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Review unsupported symbols and their replacements.

<a id="overview"></a>

## Overview

[AVAssetTrack](avassettrack.md) doesn’t support using its synchronous property accessors that can block the calling thread. Instead, use the [load(\_:isolation:)](avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to load [AVAsyncProperty](avasyncproperty.md) values asynchronously.

## Topics

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

### Accessing language support

- [languageCode](avassettrack/languagecode.md): Deprecated. The language code of the track.
- [extendedLanguageTag](avassettrack/extendedlanguagetag.md): Deprecated. The language tag of the track.

### Accessing visual characteristics

- [naturalSize](avassettrack/naturalsize.md): Deprecated. The natural dimensions of the media data that the track references.
- [preferredTransform](avassettrack/preferredtransform.md): Deprecated. The track’s transform preference to apply to its visual content during presentation or processing.

### Accessing audible characteristics

- [preferredVolume](avassettrack/preferredvolume.md): Deprecated. The track’s volume preference for playing its audible media.
- [hasAudioSampleDependencies](avassettrack/hasaudiosampledependencies.md): Deprecated. A Boolean value that indicates whether the track has sample dependencies.

### Accessing frame-based characteristics

- [nominalFrameRate](avassettrack/nominalframerate.md): Deprecated. The frame rate of the track, in frames per second.
- [minFrameDuration](avassettrack/minframeduration.md): Deprecated. The minimum duration of the track’s frames.
- [requiresFrameReordering](avassettrack/requiresframereordering.md): Deprecated. A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.

### Accessing metadata

- [metadata](avassettrack/metadata.md): Deprecated. An array of metadata items for all metadata identifiers that have a value.
- [commonMetadata](avassettrack/commonmetadata.md): Deprecated. An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](avassettrack/availablemetadataformats.md): Deprecated. An array of metadata formats available for the track.
- [metadataForFormat:](avassettrack/metadata%28forformat_%29.md): Deprecated. Returns metadata items that a track contains for the specified format.

### Accessing track segments

- [segments](avassettrack/segments.md): Deprecated. The time mappings from the track’s media samples to its timeline.
- [segmentForTrackTime:](avassettrack/segment%28fortracktime_%29.md): Deprecated. Retrieves a segment with a target time range that contains, or is closest to, the specified track time.
- [samplePresentationTimeForTrackTime:](avassettrack/samplepresentationtime%28fortracktime_%29.md): Deprecated. Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

### Accessing track associations

- [availableTrackAssociationTypes](avassettrack/availabletrackassociationtypes.md): Deprecated. An array of association types that the track uses to associate with other tracks.
- [associatedTracksOfType:](avassettrack/associatedtracks%28oftype_%29.md): Deprecated. Returns an array of associated tracks that have the specified association type.

### Creating sample cursors

- [canProvideSampleCursors](avassettrack/canprovidesamplecursors.md): Deprecated. A Boolean value that indicates whether the track can provide instances of sample cursors to traverse its media samples and discover information.
