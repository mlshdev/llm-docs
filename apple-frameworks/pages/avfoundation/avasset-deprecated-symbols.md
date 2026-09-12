> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset-deprecated-symbols](https://developer.apple.com/documentation/avfoundation/avasset-deprecated-symbols)

# Deprecated symbols (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Review unsupported symbols and their replacements.

<a id="overview"></a>

## Overview

[AVAsset](avasset.md) doesn’t support using its synchronous property accessors that can block the calling thread. Instead, use the [load(\_:isolation:)](avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to load [AVAsyncProperty](avasyncproperty.md) values asynchronously.

## Topics

### Accessing duration and timing

- [duration](avasset/duration.md): Deprecated. A time value that indicates the asset’s duration.
- [providesPreciseDurationAndTiming](avasset/providesprecisedurationandtiming.md): Deprecated. A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](avasset/minimumtimeoffsetfromlive.md): Deprecated. A time value that indicates how closely playback follows the latest live stream content.

### Accessing tracks

- [tracks](avasset/tracks.md): Deprecated. The tracks an asset contains.
- [track(withTrackID:)](avasset/track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](avasset/tracks%28withmediatype_%29.md): Deprecated. Returns tracks that contain media of a specified type.
- [tracks(withMediaCharacteristic:)](avasset/tracks%28withmediacharacteristic_%29.md): Deprecated. Returns an array of asset tracks matching the specified media characteristic.
- [unusedTrackID()](avasset/unusedtrackid%28%29.md): Deprecated. Returns an identifier that no other tracks in the asset use.

### Accessing track groups

- [trackGroups](avasset/trackgroups.md): Deprecated. The track groups an asset contains.

### Accessing metadata

- [metadata](avasset/metadata.md): Deprecated. An array of metadata items for all metadata identifiers for which a value is available.
- [commonMetadata](avasset/commonmetadata.md): Deprecated. The metadata items an asset contains for common metadata identifiers that provide a value.
- [availableMetadataFormats](avasset/availablemetadataformats.md): Deprecated. The metadata formats this asset contains.
- [metadata(forFormat:)](avasset/metadata%28forformat_%29.md): Deprecated. Returns an array of metadata items from the container with the specified format.
- [creationDate](avasset/creationdate.md): Deprecated. A metadata item that indicates the asset’s creation date.
- [lyrics](avasset/lyrics.md): Deprecated. The lyrics of the asset in a language suitable for the current locale.

### Accessing suitability

- [isPlayable](avasset/isplayable.md): Deprecated. A Boolean value that indicates whether the asset has playable content.
- [isExportable](avasset/isexportable.md): Deprecated. A Boolean value that indicates whether you can export this asset using an export session.
- [isReadable](avasset/isreadable.md): Deprecated. A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isComposable](avasset/iscomposable.md): Deprecated. A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [isCompatibleWithAirPlayVideo](avasset/iscompatiblewithairplayvideo.md): Deprecated. A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [isCompatibleWithSavedPhotosAlbum](avasset/iscompatiblewithsavedphotosalbum.md): Deprecated. A Boolean value that indicates whether you can write the asset to the Saved Photos album.

### Accessing asset preferences

Prefer loading access preferences asynchronously using the properties in Loading Asset Preferences.

- [preferredRate](avasset/preferredrate.md): Deprecated. The asset’s rate preference for playing its media.
- [preferredVolume](avasset/preferredvolume.md): Deprecated. The asset’s volume preference for playing its audible media.
- [preferredTransform](avasset/preferredtransform.md): Deprecated. The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredDisplayCriteria](avasset/preferreddisplaycriteria.md): Deprecated. The asset’s display mode preference for optimal playback of its content.
- [preferredMediaSelection](avasset/preferredmediaselection.md): Deprecated. The default media selections for this asset’s media selection groups.

### Accessing media selections

- [allMediaSelections](avasset/allmediaselections.md): Deprecated. The array of available media selections for this asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](avasset/availablemediacharacteristicswithmediaselectionoptions.md): Deprecated. An array of media characteristics for which a media selection option is available.
- [mediaSelectionGroup(forMediaCharacteristic:)](avasset/mediaselectiongroup%28formediacharacteristic_%29.md): Deprecated. Returns a media selection group that contains one or more options with the specified media characteristic.

### Accessing chapter metadata

- [availableChapterLocales](avasset/availablechapterlocales.md): Deprecated. The locales of the asset’s chapter metadata.
- [chapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:)](avasset/chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Deprecated. Returns an array of chapters that contain the specified title locale and common keys.
- [chapterMetadataGroups(bestMatchingPreferredLanguages:)](avasset/chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Deprecated. Returns an array of chapters with a locale that best matches the list of preferred languages.

### Accessing content protections

- [hasProtectedContent](avasset/hasprotectedcontent.md): Deprecated. A Boolean value that indicates whether the asset contains protected content.

### Accessing fragment support

- [canContainFragments](avasset/cancontainfragments.md): Deprecated. A Boolean value that indicates whether you can extend the asset by fragments.
- [containsFragments](avasset/containsfragments.md): Deprecated. A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](avasset/overalldurationhint.md): Deprecated. The total duration of fragments that currently exist, or may exist in the future.

### Inspecting visual attributes

- [naturalSize](avasset/naturalsize.md): Deprecated. The encoded or authored size of the visual portion of the asset.

# Deprecated symbols (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Review unsupported symbols and their replacements.

<a id="overview"></a>

## Overview

[AVAsset](avasset.md) doesn’t support using its synchronous property accessors that can block the calling thread. Instead, use the [load(\_:isolation:)](avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to load [AVAsyncProperty](avasyncproperty.md) values asynchronously.

## Topics

### Accessing duration and timing

- [duration](avasset/duration.md): Deprecated. A time value that indicates the asset’s duration.
- [providesPreciseDurationAndTiming](avasset/providesprecisedurationandtiming.md): Deprecated. A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](avasset/minimumtimeoffsetfromlive.md): Deprecated. A time value that indicates how closely playback follows the latest live stream content.

### Accessing tracks

- [tracks](avasset/tracks.md): Deprecated. The tracks an asset contains.
- [trackWithTrackID:](avasset/track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracksWithMediaType:](avasset/tracks%28withmediatype_%29.md): Deprecated. Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](avasset/tracks%28withmediacharacteristic_%29.md): Deprecated. Returns an array of asset tracks matching the specified media characteristic.
- [unusedTrackID](avasset/unusedtrackid%28%29.md): Deprecated. Returns an identifier that no other tracks in the asset use.

### Accessing track groups

- [trackGroups](avasset/trackgroups.md): Deprecated. The track groups an asset contains.

### Accessing metadata

- [metadata](avasset/metadata.md): Deprecated. An array of metadata items for all metadata identifiers for which a value is available.
- [commonMetadata](avasset/commonmetadata.md): Deprecated. The metadata items an asset contains for common metadata identifiers that provide a value.
- [availableMetadataFormats](avasset/availablemetadataformats.md): Deprecated. The metadata formats this asset contains.
- [metadataForFormat:](avasset/metadata%28forformat_%29.md): Deprecated. Returns an array of metadata items from the container with the specified format.
- [creationDate](avasset/creationdate.md): Deprecated. A metadata item that indicates the asset’s creation date.
- [lyrics](avasset/lyrics.md): Deprecated. The lyrics of the asset in a language suitable for the current locale.

### Accessing suitability

- [playable](avasset/isplayable.md): Deprecated. A Boolean value that indicates whether the asset has playable content.
- [exportable](avasset/isexportable.md): Deprecated. A Boolean value that indicates whether you can export this asset using an export session.
- [readable](avasset/isreadable.md): Deprecated. A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [composable](avasset/iscomposable.md): Deprecated. A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [compatibleWithAirPlayVideo](avasset/iscompatiblewithairplayvideo.md): Deprecated. A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [compatibleWithSavedPhotosAlbum](avasset/iscompatiblewithsavedphotosalbum.md): Deprecated. A Boolean value that indicates whether you can write the asset to the Saved Photos album.

### Accessing asset preferences

Prefer loading access preferences asynchronously using the properties in Loading Asset Preferences.

- [preferredRate](avasset/preferredrate.md): Deprecated. The asset’s rate preference for playing its media.
- [preferredVolume](avasset/preferredvolume.md): Deprecated. The asset’s volume preference for playing its audible media.
- [preferredTransform](avasset/preferredtransform.md): Deprecated. The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredDisplayCriteria](avasset/preferreddisplaycriteria.md): Deprecated. The asset’s display mode preference for optimal playback of its content.
- [preferredMediaSelection](avasset/preferredmediaselection.md): Deprecated. The default media selections for this asset’s media selection groups.

### Accessing media selections

- [allMediaSelections](avasset/allmediaselections.md): Deprecated. The array of available media selections for this asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](avasset/availablemediacharacteristicswithmediaselectionoptions.md): Deprecated. An array of media characteristics for which a media selection option is available.
- [mediaSelectionGroupForMediaCharacteristic:](avasset/mediaselectiongroup%28formediacharacteristic_%29.md): Deprecated. Returns a media selection group that contains one or more options with the specified media characteristic.

### Accessing chapter metadata

- [availableChapterLocales](avasset/availablechapterlocales.md): Deprecated. The locales of the asset’s chapter metadata.
- [chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:](avasset/chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Deprecated. Returns an array of chapters that contain the specified title locale and common keys.
- [chapterMetadataGroupsBestMatchingPreferredLanguages:](avasset/chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Deprecated. Returns an array of chapters with a locale that best matches the list of preferred languages.

### Accessing content protections

- [hasProtectedContent](avasset/hasprotectedcontent.md): Deprecated. A Boolean value that indicates whether the asset contains protected content.

### Accessing fragment support

- [canContainFragments](avasset/cancontainfragments.md): Deprecated. A Boolean value that indicates whether you can extend the asset by fragments.
- [containsFragments](avasset/containsfragments.md): Deprecated. A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](avasset/overalldurationhint.md): Deprecated. The total duration of fragments that currently exist, or may exist in the future.

### Inspecting visual attributes

- [naturalSize](avasset/naturalsize.md): Deprecated. The encoded or authored size of the visual portion of the asset.
