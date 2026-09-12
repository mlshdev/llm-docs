> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/media-assets](https://developer.apple.com/documentation/avfoundation/media-assets)

# Media assets (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Load media assets from files and streams to inspect their attributes, tracks, and embedded metadata.

## Topics

### Essentials

- [Loading media data asynchronously](loading-media-data-asynchronously.md): Build responsive apps by using language-level concurrency features to efficiently load media data.

### Assets

- [AVAsset](avasset.md): An object that models timed audiovisual media.
- [AVURLAsset](avurlasset.md): An asset that represents media at a local or remote URL.
- [AVAssetTrack](avassettrack.md): An object that models a track of media that an asset contains.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.
- [AVAssetTrackGroup](avassettrackgroup.md): A group of related tracks in an asset.

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMetadataItem](avmetadataitem.md): A metadata item for an audiovisual asset or one of its tracks.
- [AVMutableMetadataItem](avmutablemetadataitem.md): A mutable metadata item for an audiovisual asset or for one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.

### Property loading

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md): A protocol that defines the interface to load media data asynchronously.
- [AVAsyncProperty](avasyncproperty.md): An asynchronous property that constrains its type and value.
- [AVPartialAsyncProperty](avpartialasyncproperty.md): An asynchronous property that constrains its type.
- [AVAnyAsyncProperty](avanyasyncproperty.md): A base class for asynchronous properties.

### Fragmented assets

- [AVFragmentedAsset](avfragmentedasset.md): An asset with a duration that the system can extend without modifying its existing media data.
- [AVFragmentedAssetTrack](avfragmentedassettrack.md): An object that provides the track-level interface to inspect a fragmented asset’s media tracks.
- [AVFragmentedAssetMinder](avfragmentedassetminder.md): An object that periodically checks whether the system adds new fragments to a fragmented asset.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.

## See Also

### Common

- [Media reading and writing](media-reading-and-writing.md): Read images from video, export to alternative formats, and perform sample-level reading and writing of media data.
- [Media types and utilities](media-types-and-utilities.md): Identify the types of content and file formats that AVFoundation supports.
- [Video settings](video-settings.md): Configure video processing settings using standard key and value constants.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.

# Media assets (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Load media assets from files and streams to inspect their attributes, tracks, and embedded metadata.

## Topics

### Essentials

- [Loading media data asynchronously](loading-media-data-asynchronously.md): Build responsive apps by using language-level concurrency features to efficiently load media data.

### Assets

- [AVAsset](avasset.md): An object that models timed audiovisual media.
- [AVURLAsset](avurlasset.md): An asset that represents media at a local or remote URL.
- [AVAssetTrack](avassettrack.md): An object that models a track of media that an asset contains.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.
- [AVAssetTrackGroup](avassettrackgroup.md): A group of related tracks in an asset.

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMetadataItem](avmetadataitem.md): A metadata item for an audiovisual asset or one of its tracks.
- [AVMutableMetadataItem](avmutablemetadataitem.md): A mutable metadata item for an audiovisual asset or for one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.

### Property loading

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md): A protocol that defines the interface to load media data asynchronously.

### Fragmented assets

- [AVFragmentedAsset](avfragmentedasset.md): An asset with a duration that the system can extend without modifying its existing media data.
- [AVFragmentedAssetTrack](avfragmentedassettrack.md): An object that provides the track-level interface to inspect a fragmented asset’s media tracks.
- [AVFragmentedAssetMinder](avfragmentedassetminder.md): An object that periodically checks whether the system adds new fragments to a fragmented asset.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.

### Notifications

- [AVAssetChapterMetadataGroupsDidChangeNotification](avassetchaptermetadatagroupsdidchangenotification.md): Posted when the collection of arrays of timed metadata groups representing chapters of an AVAsset change and when any of the contents of the timed metadata groups change, but only for changes that occur after the status of the value of @“availableChapterLocales” has reached AVKeyValueStatusLoaded.
- [AVAssetContainsFragmentsDidChangeNotification](avassetcontainsfragmentsdidchangenotification.md): A notification the system posts when an asset’s fragments change.
- [AVAssetDurationDidChangeNotification](avassetdurationdidchangenotification.md): A notification the system posts when a fragmented asset minder observes a change to a fragmented asset’s duration.
- [AVAssetMediaSelectionGroupsDidChangeNotification](avassetmediaselectiongroupsdidchangenotification.md): Posted when the collection of media selection groups provided by an AVAsset changes and when any of the contents of its media selection groups change, but only for changes that occur after the status of the value of @“availableMediaCharacteristicsWithMediaSelectionOptions” has reached AVKeyValueStatusLoaded.
- [AVAssetTrackSegmentsDidChangeNotification](avassettracksegmentsdidchangenotification.md): Posted when the array of segments of an AVFragmentedAssetTrack changes while the associated instance of AVFragmentedAsset is being minded by an AVFragmentedAssetMinder, but only for changes that occur after the status of the value of @“segments” has reached AVKeyValueStatusLoaded.
- [AVAssetTrackTimeRangeDidChangeNotification](avassettracktimerangedidchangenotification.md): Posted when the timeRange of an AVFragmentedAssetTrack changes while the associated instance of AVFragmentedAsset is being minded by an AVFragmentedAssetMinder, but only for changes that occur after the status of the value of @“timeRange” has reached AVKeyValueStatusLoaded.
- [AVAssetTrackTrackAssociationsDidChangeNotification](avassettracktrackassociationsdidchangenotification.md): Posted when the collection of track associations of an AVAssetTrack changes, but only for changes that occur after the status of the value of @“availableTrackAssociationTypes” has reached AVKeyValueStatusLoaded.
- [AVAssetWasDefragmentedNotification](avassetwasdefragmentednotification.md): A notification the system posts when a fragmented asset minder observes that the system defragments the asset on disk.
- [AVFragmentedMovieContainsMovieFragmentsDidChangeNotification](avfragmentedmoviecontainsmoviefragmentsdidchangenotification.md): Posted after the value of @“containsMovieFragments” has already been loaded and the AVFragmentedMovie is added to an AVFragmentedMovieMinder, either when 1) movie fragments are detected in the movie file on disk after it had previously contained none or when 2) no movie fragments are detected in the movie file on disk after it had previously contained one or more.
- [AVFragmentedMovieDurationDidChangeNotification](avfragmentedmoviedurationdidchangenotification.md): Posted when the duration of an AVFragmentedMovie changes while it’s being minded by an AVFragmentedMovieMinder, but only for changes that occur after the status of the value of @“duration” has reached AVKeyValueStatusLoaded.
- [AVFragmentedMovieTrackSegmentsDidChangeNotification](avfragmentedmovietracksegmentsdidchangenotification.md)
- [AVFragmentedMovieTrackTimeRangeDidChangeNotification](avfragmentedmovietracktimerangedidchangenotification.md)
- [AVFragmentedMovieTrackTotalSampleDataLengthDidChangeNotification](avfragmentedmovietracktotalsampledatalengthdidchangenotification.md): Deprecated.
- [AVFragmentedMovieWasDefragmentedNotification](avfragmentedmoviewasdefragmentednotification.md): Posted when the movie file on disk is defragmented while an AVFragmentedMovie is being minded by an AVFragmentedMovieMinder, but only if the defragmentation occurs after the status of the value of @“canContainMovieFragments” has reached AVKeyValueStatusLoaded.

## See Also

### Common

- [Media reading and writing](media-reading-and-writing.md): Read images from video, export to alternative formats, and perform sample-level reading and writing of media data.
- [Media types and utilities](media-types-and-utilities.md): Identify the types of content and file formats that AVFoundation supports.
- [Video settings](video-settings.md): Configure video processing settings using standard key and value constants.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.
