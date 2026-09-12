> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie](https://developer.apple.com/documentation/avfoundation/avmutablemovie)

# AVMutableMovie (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A mutable object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.

## Declaration

```swift
class AVMutableMovie
```

<a id="overview"></a>

## Overview

This class is a mutable subclass of [AVMovie](avmovie.md) that provides methods that support movie editing. For example, you can use a mutable movie to copy media data from one track and paste it into another. You can also use this object to create track references from one track to another (for example, to set one track as a chapter track of another track). To perform editing operations on individual tracks, use the associated classes [AVMovieTrack](avmovietrack.md) and [AVMutableMovieTrack](avmutablemovietrack.md).

You use movie objects only when operating on format-specific features of a QuickTime or ISO base media file. You typically don’t use these classes to open and play QuickTime movie files or ISO base media files. Instead, you use [AVURLAsset](avurlasset.md) and [AVPlayerItem](avplayeritem.md).

When performing media insertions, a movie interleaves media data from tracks in the source asset to optimize the movie file for playback. However, performing a series of media insertions may result in a movie file that’s not optimally interleaved. You can optimize a movie file for playback by exporting it with an [AVAssetExportSession](avassetexportsession.md) object using the export preset [AVAssetExportPresetPassthrough](avassetexportpresetpassthrough.md), and setting the [shouldOptimizeForNetworkUse](avassetexportsession/shouldoptimizefornetworkuse.md) property value to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Creating a movie

- [init(url:options:error:)](avmutablemovie/init%28url_options_error_%29-8rnnj.md): Creates a mutable movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [init(data:options:error:)](avmutablemovie/init%28data_options_error_%29.md): Creates a mutable movie object from a movie stored in a data object.
- [init(settingsFrom:options:)](avmutablemovie/init%28settingsfrom_options_%29.md): Creates a mutable movie object without tracks.

### Configuring a movie

- [isModified](avmutablemovie/ismodified.md): A Boolean value that indicates whether the movie is in a modified state.
- [timescale](avmutablemovie/timescale.md): The time scale of the movie.
- [interleavingPeriod](avmutablemovie/interleavingperiod.md): A time period indicating the duration for interleaving runs of samples for each track.
- [defaultMediaDataStorage](avmutablemovie/defaultmediadatastorage.md): The default storage container for media data that you add to a movie.

### Loading tracks

- [tracks](avpartialasyncproperty/tracks-2lj40.md): Conforms when `Root` inherits `AVMutableMovie`. The tracks that a movie contains.
- [loadTrack(withTrackID:completionHandler:)](avmutablemovie/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](avmutablemovie/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](avmutablemovie/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avmutablemovie/tracks.md): The tracks that a movie contains.
- [track(withTrackID:)](avmutablemovie/track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracks(withMediaType:)](avmutablemovie/tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [tracks(withMediaCharacteristic:)](avmutablemovie/tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.
- [unusedTrackID()](avmutablemovie/unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

### Accessing track groups

- [trackGroups](avmutablemovie/trackgroups.md): The track groups an asset contains.

### Managing tracks

- [mutableTrack(compatibleWith:)](avmutablemovie/mutabletrack%28compatiblewith_%29.md): Provides a reference to a track from a mutable movie into which you can insert any time range.
- [addMutableTrack(withMediaType:copySettingsFrom:options:)](avmutablemovie/addmutabletrack%28withmediatype_copysettingsfrom_options_%29.md): Adds an empty track to the target movie.
- [addMutableTracksCopyingSettings(from:options:)](avmutablemovie/addmutabletrackscopyingsettings%28from_options_%29.md): Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.
- [removeTrack(\_:)](avmutablemovie/removetrack%28__%29.md): Removes the specified track from the target movie.

### Managing time ranges

- [insertEmptyTimeRange(\_:)](avmutablemovie/insertemptytimerange%28__%29.md): Adds an empty time range to a movie.
- [insertTimeRange(\_:of:at:copySampleData:)](avmutablemovie/inserttimerange%28__of_at_copysampledata_%29.md): Inserts all of the tracks in a specified time range of an asset into a movie.
- [scale(\_:toDuration:)](avmutablemovie/scale%28__toduration_%29.md): Changes the duration of a time range in a movie.
- [removeTimeRange(\_:)](avmutablemovie/removetimerange%28__%29.md): Removes the specified time range from a movie.

### Accessing duration and timing

- [duration](avmutablemovie/duration.md): A time value that indicates the asset’s duration.
- [providesPreciseDurationAndTiming](avmutablemovie/providesprecisedurationandtiming.md): A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](avmutablemovie/minimumtimeoffsetfromlive.md): A time value that indicates how closely playback follows the latest live stream content.

### Accessing metadata

- [metadata](avmutablemovie/metadata.md): An array of metadata items for all metadata identifiers for which a value is available.
- [commonMetadata](avmutablemovie/commonmetadata.md): The metadata items an asset contains for common metadata identifiers that provide a value.
- [availableMetadataFormats](avmutablemovie/availablemetadataformats.md): The metadata formats this asset contains.
- [metadata(forFormat:)](avmutablemovie/metadata%28forformat_%29.md): Returns an array of metadata items from the container with the specified format.
- [creationDate](avmutablemovie/creationdate.md): A metadata item that indicates the asset’s creation date.
- [lyrics](avmutablemovie/lyrics.md): The lyrics of the asset in a language suitable for the current locale.

### Determining suitability

- [isPlayable](avmutablemovie/isplayable.md): A Boolean value that indicates whether the asset has playable content.
- [isReadable](avmutablemovie/isreadable.md): A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isExportable](avmutablemovie/isexportable.md): A Boolean value that indicates whether you can export this asset using an export session.
- [isComposable](avmutablemovie/iscomposable.md): A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [isCompatibleWithAirPlayVideo](avmutablemovie/iscompatiblewithairplayvideo.md): A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [isCompatibleWithSavedPhotosAlbum](avmutablemovie/iscompatiblewithsavedphotosalbum.md): A Boolean value that indicates whether you can write the composition to the Saved Photos album.

### Inspecting preferences

- [preferredRate](avmutablemovie/preferredrate.md): The asset’s rate preference for playing its media.
- [preferredVolume](avmutablemovie/preferredvolume.md): The asset’s volume preference for playing its audible media.
- [preferredTransform](avmutablemovie/preferredtransform.md): The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredMediaSelection](avmutablemovie/preferredmediaselection.md): The default media selections for this asset’s media selection groups.

### Accessing media selections

- [allMediaSelections](avmutablemovie/allmediaselections.md): The array of available media selections for this asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](avmutablemovie/availablemediacharacteristicswithmediaselectionoptions.md): An array of media characteristics for which a media selection option is available.
- [mediaSelectionGroup(forMediaCharacteristic:)](avmutablemovie/mediaselectiongroup%28formediacharacteristic_%29.md): Returns a media selection group that contains one or more options with the specified media characteristic.

### Accessing chapter metadata

- [availableChapterLocales](avmutablemovie/availablechapterlocales.md): The locales of the asset’s chapter metadata.
- [chapterMetadataGroups(bestMatchingPreferredLanguages:)](avmutablemovie/chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Returns an array of chapters with a locale that best matches the list of preferred languages.
- [chapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:)](avmutablemovie/chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Returns an array of chapters that contain the specified title locale and common keys.

### Determining content protections

- [hasProtectedContent](avmutablemovie/hasprotectedcontent.md): A Boolean value that indicates whether the asset contains protected content.

### Determining fragment support

- [canContainFragments](avmutablemovie/cancontainfragments.md): A Boolean value that indicates whether you can extend the asset by fragments.
- [containsFragments](avmutablemovie/containsfragments.md): A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](avmutablemovie/overalldurationhint.md): The total duration of fragments that currently exist, or may exist in the future.

### Initializers

- [init(URL:options:error:)](avmutablemovie/init%28url_options_error_%29-1scrb.md)
- [init(URL:options:error:)](avmutablemovie/init%28url_options_error_%29-9is91.md)
- [init(data:options:)](avmutablemovie/init%28data_options_%29.md)
- [init(settingsFromMovie:options:)](avmutablemovie/init%28settingsfrommovie_options_%29-1soot.md)
- [init(settingsFromMovie:options:)](avmutablemovie/init%28settingsfrommovie_options_%29-6p8zv.md)

## Relationships

### Inherits From

- [AVMovie](avmovie.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Mutable movies

- [AVMutableMovieTrack](avmutablemovietrack.md): A mutable track that conforms to the QuickTime or ISO base media file format.

# AVMutableMovie (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A mutable object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.

## Declaration

```objectivec
@interface AVMutableMovie : AVMovie
```

<a id="overview"></a>

## Overview

This class is a mutable subclass of [AVMovie](avmovie.md) that provides methods that support movie editing. For example, you can use a mutable movie to copy media data from one track and paste it into another. You can also use this object to create track references from one track to another (for example, to set one track as a chapter track of another track). To perform editing operations on individual tracks, use the associated classes [AVMovieTrack](avmovietrack.md) and [AVMutableMovieTrack](avmutablemovietrack.md).

You use movie objects only when operating on format-specific features of a QuickTime or ISO base media file. You typically don’t use these classes to open and play QuickTime movie files or ISO base media files. Instead, you use [AVURLAsset](avurlasset.md) and [AVPlayerItem](avplayeritem.md).

When performing media insertions, a movie interleaves media data from tracks in the source asset to optimize the movie file for playback. However, performing a series of media insertions may result in a movie file that’s not optimally interleaved. You can optimize a movie file for playback by exporting it with an [AVAssetExportSession](avassetexportsession.md) object using the export preset [AVAssetExportPresetPassthrough](avassetexportpresetpassthrough.md), and setting the [shouldOptimizeForNetworkUse](avassetexportsession/shouldoptimizefornetworkuse.md) property value to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Creating a movie

- [movieWithURL:options:error:](avmutablemovie/moviewithurl_options_error_.md): Returns a new mutable movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [initWithURL:options:error:](avmutablemovie/init%28url_options_error_%29-8rnnj.md): Creates a mutable movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [movieWithData:options:error:](avmutablemovie/moviewithdata_options_error_.md): Returns a new mutable movie object from a movie stored in a data object.
- [initWithData:options:error:](avmutablemovie/init%28data_options_error_%29.md): Creates a mutable movie object from a movie stored in a data object.
- [movieWithSettingsFromMovie:options:error:](avmutablemovie/moviewithsettingsfrommovie_options_error_.md): Returns a new mutable movie object without tracks.
- [initWithSettingsFromMovie:options:error:](avmutablemovie/init%28settingsfrom_options_%29.md): Creates a mutable movie object without tracks.

### Configuring a movie

- [modified](avmutablemovie/ismodified.md): A Boolean value that indicates whether the movie is in a modified state.
- [timescale](avmutablemovie/timescale.md): The time scale of the movie.
- [interleavingPeriod](avmutablemovie/interleavingperiod.md): A time period indicating the duration for interleaving runs of samples for each track.
- [defaultMediaDataStorage](avmutablemovie/defaultmediadatastorage.md): The default storage container for media data that you add to a movie.

### Loading tracks

- [loadTrackWithTrackID:completionHandler:](avmutablemovie/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracksWithMediaType:completionHandler:](avmutablemovie/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracksWithMediaCharacteristic:completionHandler:](avmutablemovie/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avmutablemovie/tracks.md): The tracks that a movie contains.
- [trackWithTrackID:](avmutablemovie/track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracksWithMediaType:](avmutablemovie/tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [tracksWithMediaCharacteristic:](avmutablemovie/tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.
- [unusedTrackID](avmutablemovie/unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

### Managing tracks

- [mutableTrackCompatibleWithTrack:](avmutablemovie/mutabletrack%28compatiblewith_%29.md): Provides a reference to a track from a mutable movie into which you can insert any time range.
- [addMutableTrackWithMediaType:copySettingsFromTrack:options:](avmutablemovie/addmutabletrack%28withmediatype_copysettingsfrom_options_%29.md): Adds an empty track to the target movie.
- [addMutableTracksCopyingSettingsFromTracks:options:](avmutablemovie/addmutabletrackscopyingsettings%28from_options_%29.md): Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.
- [removeTrack:](avmutablemovie/removetrack%28__%29.md): Removes the specified track from the target movie.

### Managing time ranges

- [insertEmptyTimeRange:](avmutablemovie/insertemptytimerange%28__%29.md): Adds an empty time range to a movie.
- [insertTimeRange:ofAsset:atTime:copySampleData:error:](avmutablemovie/inserttimerange%28__of_at_copysampledata_%29.md): Inserts all of the tracks in a specified time range of an asset into a movie.
- [scaleTimeRange:toDuration:](avmutablemovie/scale%28__toduration_%29.md): Changes the duration of a time range in a movie.
- [removeTimeRange:](avmutablemovie/removetimerange%28__%29.md): Removes the specified time range from a movie.

### Accessing metadata

- [metadata](avmutablemovie/metadata.md): An array of metadata items for all metadata identifiers for which a value is available.
- [metadataForFormat:](avmutablemovie/metadata%28forformat_%29.md): Returns an array of metadata items from the container with the specified format.

### Inspecting preferences

- [preferredRate](avmutablemovie/preferredrate.md): The asset’s rate preference for playing its media.
- [preferredVolume](avmutablemovie/preferredvolume.md): The asset’s volume preference for playing its audible media.
- [preferredTransform](avmutablemovie/preferredtransform.md): The asset’s transform preference to apply to its visual content during presentation or processing.

### Accessing media selections

- [mediaSelectionGroupForMediaCharacteristic:](avmutablemovie/mediaselectiongroup%28formediacharacteristic_%29.md): Returns a media selection group that contains one or more options with the specified media characteristic.

### Accessing chapter metadata

- [chapterMetadataGroupsBestMatchingPreferredLanguages:](avmutablemovie/chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Returns an array of chapters with a locale that best matches the list of preferred languages.
- [chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:](avmutablemovie/chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Returns an array of chapters that contain the specified title locale and common keys.

## Relationships

### Inherits From

- [AVMovie](avmovie.md)

## See Also

### Mutable movies

- [AVMutableMovieTrack](avmutablemovietrack.md): A mutable track that conforms to the QuickTime or ISO base media file format.
