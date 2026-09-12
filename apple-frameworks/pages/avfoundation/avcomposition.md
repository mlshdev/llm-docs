> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition](https://developer.apple.com/documentation/avfoundation/avcomposition)

# AVComposition (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that combines and arranges media from multiple assets into a single composite asset that you can play or process.

## Declaration

```swift
class AVComposition
```

<a id="overview"></a>

## Overview

A composition is a container for one or more tracks of media. Its tracks are instances of [AVCompositionTrack](avcompositiontrack.md) that present media of a uniform type like audio or video. A track itself is a container for one or more segments of media, which are instances of [AVCompositionTrackSegment](avcompositiontracksegment.md), a type that represents a region of media in the source track.

## Topics

### Loading tracks

- [tracks](avpartialasyncproperty/tracks-9eows.md): Conforms when `Root` inherits `AVComposition`. The tracks that a composition contains.
- [loadTrack(withTrackID:completionHandler:)](avcomposition/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](avcomposition/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](avcomposition/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avcomposition/tracks.md): The tracks that a composition contains.
- [track(withTrackID:)](avcomposition/track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](avcomposition/tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracks(withMediaCharacteristic:)](avcomposition/tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.
- [unusedTrackID()](avcomposition/unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

### Accessing track groups

- [trackGroups](avcomposition/trackgroups.md): The track groups an asset contains.

### Accessing duration and timing

- [duration](avcomposition/duration.md): A time value that indicates the asset’s duration.
- [providesPreciseDurationAndTiming](avcomposition/providesprecisedurationandtiming.md): A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](avcomposition/minimumtimeoffsetfromlive.md): A time value that indicates how closely playback follows the latest live stream content.

### Accessing metadata

- [metadata](avcomposition/metadata.md): An array of metadata items for all metadata identifiers for which a value is available.
- [commonMetadata](avcomposition/commonmetadata.md): The metadata items an asset contains for common metadata identifiers that provide a value.
- [availableMetadataFormats](avcomposition/availablemetadataformats.md): The metadata formats this asset contains.
- [metadata(forFormat:)](avcomposition/metadata%28forformat_%29.md): Returns an array of metadata items from the container with the specified format.
- [creationDate](avcomposition/creationdate.md): A metadata item that indicates the asset’s creation date.
- [lyrics](avcomposition/lyrics.md): The lyrics of the asset in a language suitable for the current locale.

### Determining suitability

- [isPlayable](avcomposition/isplayable.md): A Boolean value that indicates whether the asset has playable content.
- [isReadable](avcomposition/isreadable.md): A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isExportable](avcomposition/isexportable.md): A Boolean value that indicates whether you can export this asset using an export session.
- [isComposable](avcomposition/iscomposable.md): A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [isCompatibleWithAirPlayVideo](avcomposition/iscompatiblewithairplayvideo.md): A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [isCompatibleWithSavedPhotosAlbum](avcomposition/iscompatiblewithsavedphotosalbum.md): A Boolean value that indicates whether you can write the composition to the Saved Photos album.

### Inspecting preferences

- [preferredRate](avcomposition/preferredrate.md): The asset’s rate preference for playing its media.
- [preferredVolume](avcomposition/preferredvolume.md): The asset’s volume preference for playing its audible media.
- [preferredTransform](avcomposition/preferredtransform.md): The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredMediaSelection](avcomposition/preferredmediaselection.md): The default media selections for this asset’s media selection groups.
- [preferredDisplayCriteria](avcomposition/preferreddisplaycriteria.md): The asset’s display mode preference for optimal playback of its content.

### Accessing media selections

- [allMediaSelections](avcomposition/allmediaselections.md): The array of available media selections for this asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](avcomposition/availablemediacharacteristicswithmediaselectionoptions.md): An array of media characteristics for which a media selection option is available.
- [mediaSelectionGroup(forMediaCharacteristic:)](avcomposition/mediaselectiongroup%28formediacharacteristic_%29.md): Returns a media selection group that contains one or more options with the specified media characteristic.

### Accessing chapter metadata

- [availableChapterLocales](avcomposition/availablechapterlocales.md): The locales of the asset’s chapter metadata.
- [chapterMetadataGroups(bestMatchingPreferredLanguages:)](avcomposition/chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Returns an array of chapters with a locale that best matches the list of preferred languages.
- [chapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:)](avcomposition/chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Returns an array of chapters that contain the specified title locale and common keys.

### Accessing visual dimensions

- [naturalSize](avcomposition/naturalsize.md): The authored size of the visual portion of the composition.

### Accessing initialization options

- [urlAssetInitializationOptions](avcomposition/urlassetinitializationoptions.md): The options you used to create a composition.

### Determining content protections

- [hasProtectedContent](avcomposition/hasprotectedcontent.md): A Boolean value that indicates whether the asset contains protected content.

### Determining fragment support

- [canContainFragments](avcomposition/cancontainfragments.md): A Boolean value that indicates whether you can extend the asset by fragments.
- [containsFragments](avcomposition/containsfragments.md): A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](avcomposition/overalldurationhint.md): The total duration of fragments that currently exist, or may exist in the future.

## Relationships

### Inherits From

- [AVAsset](avasset.md)

### Inherited By

- [AVMutableComposition](avmutablecomposition.md)

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

### Compositions

- [AVCompositionTrack](avcompositiontrack.md): A track in a composition that presents media of a uniform type.
- [AVCompositionTrackSegment](avcompositiontracksegment.md): A track segment that maps a time from the source media track to the composition track.

# AVComposition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that combines and arranges media from multiple assets into a single composite asset that you can play or process.

## Declaration

```objectivec
@interface AVComposition : AVAsset
```

<a id="overview"></a>

## Overview

A composition is a container for one or more tracks of media. Its tracks are instances of [AVCompositionTrack](avcompositiontrack.md) that present media of a uniform type like audio or video. A track itself is a container for one or more segments of media, which are instances of [AVCompositionTrackSegment](avcompositiontracksegment.md), a type that represents a region of media in the source track.

## Topics

### Loading tracks

- [loadTrackWithTrackID:completionHandler:](avcomposition/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracksWithMediaType:completionHandler:](avcomposition/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracksWithMediaCharacteristic:completionHandler:](avcomposition/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avcomposition/tracks.md): The tracks that a composition contains.
- [trackWithTrackID:](avcomposition/track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracksWithMediaType:](avcomposition/tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](avcomposition/tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.
- [unusedTrackID](avcomposition/unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

### Accessing metadata

- [metadataForFormat:](avcomposition/metadata%28forformat_%29.md): Returns an array of metadata items from the container with the specified format.

### Accessing media selections

- [mediaSelectionGroupForMediaCharacteristic:](avcomposition/mediaselectiongroup%28formediacharacteristic_%29.md): Returns a media selection group that contains one or more options with the specified media characteristic.

### Accessing chapter metadata

- [chapterMetadataGroupsBestMatchingPreferredLanguages:](avcomposition/chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Returns an array of chapters with a locale that best matches the list of preferred languages.
- [chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:](avcomposition/chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Returns an array of chapters that contain the specified title locale and common keys.

### Accessing visual dimensions

- [naturalSize](avcomposition/naturalsize.md): The authored size of the visual portion of the composition.

### Accessing initialization options

- [URLAssetInitializationOptions](avcomposition/urlassetinitializationoptions.md): The options you used to create a composition.

## Relationships

### Inherits From

- [AVAsset](avasset.md)

### Inherited By

- [AVMutableComposition](avmutablecomposition.md)

### Conforms To

- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Compositions

- [AVCompositionTrack](avcompositiontrack.md): A track in a composition that presents media of a uniform type.
- [AVCompositionTrackSegment](avcompositiontracksegment.md): A track segment that maps a time from the source media track to the composition track.
