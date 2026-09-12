> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset](https://developer.apple.com/documentation/avfoundation/avasset)

# AVAsset (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that models timed audiovisual media.

## Declaration

```swift
class AVAsset
```

## Mentioned In

- [Loading media data asynchronously](loading-media-data-asynchronously.md)
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md)
- [Exporting video to alternative formats](exporting-video-to-alternative-formats.md)
- [Implementing simple enhanced buffering for your content](implementing-simple-enhanced-buffering-for-your-content.md)
- [Retrieving media metadata](retrieving-media-metadata.md)

<a id="overview"></a>

## Overview

An asset models file-based media like a QuickTime movie or an MP3 audio file, and also media streamed using HTTP Live Streaming (HLS). An asset is a container object for one or more instances of [AVAssetTrack](avassettrack.md) that model the uniformly typed tracks of media. The most commonly used track types are audio and video, but assets may also contain supplementary tracks, like closed captions, subtitles, and timed metadata.

![A diagram of four rectangular items. The rectangle on the left represents AVAsset. A line connects it to three stacked rectangles on the right that represent AVAssetTrack (Video), AVAssetTrack (Audio), and AVAssetTrack (Subtitles) from top to bottom.](https://developer.apple.com/images/com.apple.avfoundation/media-3845943@2x.png)

You load the tracks for an asset by asynchronously loading its [tracks](avpartialasyncproperty/tracks-48zyw.md) property. In some cases, you may want to perform operations on a subset of an asset’s tracks rather than on its complete collection. For those situations, an asset provides methods to retrieve subsets of tracks according to particular criteria, such as identifier, media type, or characteristic.

## Topics

### Creating an asset

- [init(url:)](avasset/init%28url_%29-42gl8.md): Deprecated. Creates an asset that models the media at the specified URL.

### Loading duration and timing

- [duration](avpartialasyncproperty/duration.md): Conforms when `Root` inherits `AVAsset`. A time value that represents the duration of the asset.
- [providesPreciseDurationAndTiming](avpartialasyncproperty/providesprecisedurationandtiming.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](avpartialasyncproperty/minimumtimeoffsetfromlive.md): Conforms when `Root` inherits `AVAsset`. A time value that indicates how closely playback follows the latest live stream content.

### Loading tracks

- [tracks](avpartialasyncproperty/tracks-48zyw.md): Conforms when `Root` inherits `AVAsset`. The tracks of media that an asset contains.
- [loadTrack(withTrackID:completionHandler:)](avasset/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](avasset/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](avasset/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.
- [findUnusedTrackID(completionHandler:)](avasset/findunusedtrackid%28completionhandler_%29.md): Loads an identifier that no other track in the asset uses.

### Loading track groups

- [trackGroups](avpartialasyncproperty/trackgroups.md): Conforms when `Root` inherits `AVAsset`. The track groups an asset contains.

### Loading metadata

- [metadata](avpartialasyncproperty/metadata-16qej.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for all metadata identifiers.
- [commonMetadata](avpartialasyncproperty/commonmetadata-3j3n4.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for common metadata identifiers.
- [availableMetadataFormats](avpartialasyncproperty/availablemetadataformats-4yiq8.md): Conforms when `Root` inherits `AVAsset`. The formats of metadata that an asset contains.
- [loadMetadata(for:completionHandler:)](avasset/loadmetadata%28for_completionhandler_%29.md): Loads an array of metadata items that the asset contains for the specified format.
- [creationDate](avpartialasyncproperty/creationdate.md): Conforms when `Root` inherits `AVAsset`. A metadata item that indicates the creation date of an asset.
- [lyrics](avpartialasyncproperty/lyrics.md): Conforms when `Root` inherits `AVAsset`. The lyrics of the asset in a language suitable for the current locale.

### Loading suitability

Query the suitability properties to determine an asset’s support for various purposes, even if only under a specific set of conditions.

- [isPlayable](avpartialasyncproperty/isplayable-45h5v.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether an asset contains playable content.
- [isExportable](avpartialasyncproperty/isexportable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can export an asset using an export session.
- [isReadable](avpartialasyncproperty/isreadable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isComposable](avpartialasyncproperty/iscomposable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can use the asset in a media composition.
- [isCompatibleWithAirPlayVideo](avpartialasyncproperty/iscompatiblewithairplayvideo.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [isCompatibleWithSavedPhotosAlbum](avpartialasyncproperty/iscompatiblewithsavedphotosalbum.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can write the asset to the Saved Photos album.

### Loading asset preferences

- [preferredRate](avpartialasyncproperty/preferredrate.md): Conforms when `Root` inherits `AVAsset`. The asset’s rate preference for playing its media.
- [preferredVolume](avpartialasyncproperty/preferredvolume-20mb3.md): Conforms when `Root` inherits `AVAsset`. The asset’s volume preference for playing its audible media.
- [preferredTransform](avpartialasyncproperty/preferredtransform-80d13.md): Conforms when `Root` inherits `AVAsset`. The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredDisplayCriteria](avpartialasyncproperty/preferreddisplaycriteria.md): Conforms when `Root` inherits `AVAsset`. The asset’s display mode preference for optimal playback of its content.
- [AVDisplayCriteria](avdisplaycriteria.md): An object the system uses to guide the selection of a display mode in tvOS.

### Loading media selections

- [allMediaSelections](avpartialasyncproperty/allmediaselections.md): Conforms when `Root` inherits `AVAsset`. The available media selections for an asset.
- [preferredMediaSelection](avpartialasyncproperty/preferredmediaselection.md): Conforms when `Root` inherits `AVAsset`. The default media selections for the media selection groups of an asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](avpartialasyncproperty/availablemediacharacteristicswithmediaselectionoptions.md): Conforms when `Root` inherits `AVAsset`. The media characteristics that provide media selection options.
- [loadMediaSelectionGroup(for:completionHandler:)](avasset/loadmediaselectiongroup%28for_completionhandler_%29.md): Loads a media selection group that contains one or more options with the specified media characteristic.

### Loading chapter metadata

- [availableChapterLocales](avpartialasyncproperty/availablechapterlocales.md): Conforms when `Root` inherits `AVAsset`. The locales of an asset’s chapter metadata.
- [loadChapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:)](avasset/loadchaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Loads chapter metadata that contains the specified title locale and common keys.
- [loadChapterMetadataGroups(bestMatchingPreferredLanguages:completionHandler:)](avasset/loadchaptermetadatagroups%28bestmatchingpreferredlanguages_completionhandler_%29.md): Loads chapter metadata with a locale that best matches the list of preferred languages.

### Loading content protections

- [hasProtectedContent](avpartialasyncproperty/hasprotectedcontent.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset contains protected content.

### Loading fragment support

- [canContainFragments](avpartialasyncproperty/cancontainfragments.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can extend the asset by fragments.
- [containsFragments](avpartialasyncproperty/containsfragments.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](avpartialasyncproperty/overalldurationhint.md): Conforms when `Root` inherits `AVAsset`. A hint to the total duration of fragments that currently exist or may exist in the future.

### Canceling property loading

- [cancelLoading()](avasset/cancelloading%28%29.md): Cancels all pending requests to asynchronously load property values.

### Retrieving reference restrictions

- [referenceRestrictions](avasset/referencerestrictions.md): The restrictions that an asset places on how it resolves references to external media.
- [AVAssetReferenceRestrictions](avassetreferencerestrictions.md): Restrictions to use when resolving references to external media data.

### Deprecated

- [Deprecated symbols](avasset-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Initializers

- [init(URL:)](avasset/init%28url_%29-8cql6.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVComposition](avcomposition.md)
- [AVMovie](avmovie.md)
- [AVURLAsset](avurlasset.md)

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

- [AVURLAsset](avurlasset.md): An asset that represents media at a local or remote URL.
- [AVAssetTrack](avassettrack.md): An object that models a track of media that an asset contains.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.
- [AVAssetTrackGroup](avassettrackgroup.md): A group of related tracks in an asset.

# AVAsset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that models timed audiovisual media.

## Declaration

```objectivec
@interface AVAsset : NSObject
```

## Mentioned In

- [Loading media data asynchronously](loading-media-data-asynchronously.md)
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md)
- [Exporting video to alternative formats](exporting-video-to-alternative-formats.md)
- [Implementing simple enhanced buffering for your content](implementing-simple-enhanced-buffering-for-your-content.md)
- [Retrieving media metadata](retrieving-media-metadata.md)

<a id="overview"></a>

## Overview

An asset models file-based media like a QuickTime movie or an MP3 audio file, and also media streamed using HTTP Live Streaming (HLS). An asset is a container object for one or more instances of [AVAssetTrack](avassettrack.md) that model the uniformly typed tracks of media. The most commonly used track types are audio and video, but assets may also contain supplementary tracks, like closed captions, subtitles, and timed metadata.

![A diagram of four rectangular items. The rectangle on the left represents AVAsset. A line connects it to three stacked rectangles on the right that represent AVAssetTrack (Video), AVAssetTrack (Audio), and AVAssetTrack (Subtitles) from top to bottom.](https://developer.apple.com/images/com.apple.avfoundation/media-3845943@2x.png)

You load the tracks for an asset by asynchronously loading its [tracks](avpartialasyncproperty/tracks-48zyw.md) property. In some cases, you may want to perform operations on a subset of an asset’s tracks rather than on its complete collection. For those situations, an asset provides methods to retrieve subsets of tracks according to particular criteria, such as identifier, media type, or characteristic.

## Topics

### Creating an asset

- [assetWithURL:](avasset/init%28url_%29-42gl8.md): Deprecated. Creates an asset that models the media at the specified URL.

### Loading tracks

- [loadTrackWithTrackID:completionHandler:](avasset/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracksWithMediaType:completionHandler:](avasset/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracksWithMediaCharacteristic:completionHandler:](avasset/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.
- [findUnusedTrackIDWithCompletionHandler:](avasset/findunusedtrackid%28completionhandler_%29.md): Loads an identifier that no other track in the asset uses.

### Loading metadata

- [loadMetadataForFormat:completionHandler:](avasset/loadmetadata%28for_completionhandler_%29.md): Loads an array of metadata items that the asset contains for the specified format.

### Loading asset preferences

- [AVDisplayCriteria](avdisplaycriteria.md): An object the system uses to guide the selection of a display mode in tvOS.

### Loading media selections

- [loadMediaSelectionGroupForMediaCharacteristic:completionHandler:](avasset/loadmediaselectiongroup%28for_completionhandler_%29.md): Loads a media selection group that contains one or more options with the specified media characteristic.

### Loading chapter metadata

- [loadChapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:completionHandler:](avasset/loadchaptermetadatagroupswithtitlelocale_containingitemswithcommonkeys_completionhandler_.md): Loads chapter metadata that contains the specified title locale and common keys.
- [loadChapterMetadataGroupsBestMatchingPreferredLanguages:completionHandler:](avasset/loadchaptermetadatagroups%28bestmatchingpreferredlanguages_completionhandler_%29.md): Loads chapter metadata with a locale that best matches the list of preferred languages.

### Canceling property loading

- [cancelLoading](avasset/cancelloading%28%29.md): Cancels all pending requests to asynchronously load property values.

### Retrieving reference restrictions

- [referenceRestrictions](avasset/referencerestrictions.md): The restrictions that an asset places on how it resolves references to external media.
- [AVAssetReferenceRestrictions](avassetreferencerestrictions.md): Restrictions to use when resolving references to external media data.

### Deprecated

- [Deprecated symbols](avasset-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Accessing duration and timing

- [duration](avasset/duration.md): Deprecated. A time value that indicates the asset’s duration.
- [providesPreciseDurationAndTiming](avasset/providesprecisedurationandtiming.md): Deprecated. A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](avasset/minimumtimeoffsetfromlive.md): Deprecated. A time value that indicates how closely playback follows the latest live stream content.

### Accessing tracks

Prefer loading tracks asynchronously using the symbols in Loading Tracks.

- [tracks](avasset/tracks.md): Deprecated. The tracks an asset contains.
- [trackWithTrackID:](avasset/track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracksWithMediaType:](avasset/tracks%28withmediatype_%29.md): Deprecated. Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](avasset/tracks%28withmediacharacteristic_%29.md): Deprecated. Returns an array of asset tracks matching the specified media characteristic.
- [unusedTrackID](avasset/unusedtrackid%28%29.md): Deprecated. Returns an identifier that no other tracks in the asset use.

### Accessing track groups

Prefer loading track groups asynchronously using the properties in Loading Track Groups.

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

- [preferredRate](avasset/preferredrate.md): Deprecated. The asset’s rate preference for playing its media.
- [preferredVolume](avasset/preferredvolume.md): Deprecated. The asset’s volume preference for playing its audible media.
- [preferredTransform](avasset/preferredtransform.md): Deprecated. The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredMediaSelection](avasset/preferredmediaselection.md): Deprecated. The default media selections for this asset’s media selection groups.
- [preferredDisplayCriteria](avasset/preferreddisplaycriteria.md): Deprecated. The asset’s display mode preference for optimal playback of its content.
- [AVDisplayCriteria](avdisplaycriteria.md): An object the system uses to guide the selection of a display mode in tvOS.

### Accessing media selections

Prefer loading media selections asynchronously using the properties and methods in Loading Media Selections.

- [allMediaSelections](avasset/allmediaselections.md): Deprecated. The array of available media selections for this asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](avasset/availablemediacharacteristicswithmediaselectionoptions.md): Deprecated. An array of media characteristics for which a media selection option is available.
- [mediaSelectionGroupForMediaCharacteristic:](avasset/mediaselectiongroup%28formediacharacteristic_%29.md): Deprecated. Returns a media selection group that contains one or more options with the specified media characteristic.

### Accessing chapter metadata

Prefer loading chapter metadata asynchronously using the symbols in Loading Chapter Metadata.

- [availableChapterLocales](avasset/availablechapterlocales.md): Deprecated. The locales of the asset’s chapter metadata.
- [chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:](avasset/chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Deprecated. Returns an array of chapters that contain the specified title locale and common keys.
- [chapterMetadataGroupsBestMatchingPreferredLanguages:](avasset/chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Deprecated. Returns an array of chapters with a locale that best matches the list of preferred languages.

### Accessing content protections

Prefer loading content protections asynchronously using the properties in Loading Content Protections.

- [hasProtectedContent](avasset/hasprotectedcontent.md): Deprecated. A Boolean value that indicates whether the asset contains protected content.

### Accessing fragment support

Prefer determining fragment support asynchronously using the properties in Loading Fragment Support.

- [canContainFragments](avasset/cancontainfragments.md): Deprecated. A Boolean value that indicates whether you can extend the asset by fragments.
- [containsFragments](avasset/containsfragments.md): Deprecated. A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](avasset/overalldurationhint.md): Deprecated. The total duration of fragments that currently exist, or may exist in the future.

### Inspecting visual attributes

- [naturalSize](avasset/naturalsize.md): Deprecated. The encoded or authored size of the visual portion of the asset.

### Instance Properties

- [constituentFileURLs](avasset/constituentfileurls.md): The list of file URLs that collectively represent the media asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVComposition](avcomposition.md)
- [AVMovie](avmovie.md)
- [AVURLAsset](avurlasset.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Assets

- [AVURLAsset](avurlasset.md): An asset that represents media at a local or remote URL.
- [AVAssetTrack](avassettrack.md): An object that models a track of media that an asset contains.
- [AVAssetTrackSegment](avassettracksegment.md): An object that represents a time range segment of an asset track.
- [AVAssetTrackGroup](avassettrackgroup.md): A group of related tracks in an asset.
