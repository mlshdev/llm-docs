> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset-async-properties](https://developer.apple.com/documentation/avfoundation/avasset-async-properties)

# AVAsset (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Asynchronous properties for assets.

## Topics

### Loading duration and timing

- [duration](avpartialasyncproperty/duration.md): Conforms when `Root` inherits `AVAsset`. A time value that represents the duration of the asset.
- [providesPreciseDurationAndTiming](avpartialasyncproperty/providesprecisedurationandtiming.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](avpartialasyncproperty/minimumtimeoffsetfromlive.md): Conforms when `Root` inherits `AVAsset`. A time value that indicates how closely playback follows the latest live stream content.

### Loading tracks

- [tracks](avpartialasyncproperty/tracks-48zyw.md): Conforms when `Root` inherits `AVAsset`. The tracks of media that an asset contains.

### Loading track groups

- [trackGroups](avpartialasyncproperty/trackgroups.md): Conforms when `Root` inherits `AVAsset`. The track groups an asset contains.

### Loading metadata

- [metadata](avpartialasyncproperty/metadata-16qej.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for all metadata identifiers.
- [commonMetadata](avpartialasyncproperty/commonmetadata-3j3n4.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for common metadata identifiers.
- [availableMetadataFormats](avpartialasyncproperty/availablemetadataformats-4yiq8.md): Conforms when `Root` inherits `AVAsset`. The formats of metadata that an asset contains.
- [creationDate](avpartialasyncproperty/creationdate.md): Conforms when `Root` inherits `AVAsset`. A metadata item that indicates the creation date of an asset.
- [lyrics](avpartialasyncproperty/lyrics.md): Conforms when `Root` inherits `AVAsset`. The lyrics of the asset in a language suitable for the current locale.

### Loading suitability

- [isPlayable](avpartialasyncproperty/isplayable-45h5v.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether an asset contains playable content.
- [isExportable](avpartialasyncproperty/isexportable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can export an asset using an export session.
- [isReadable](avpartialasyncproperty/isreadable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isComposable](avpartialasyncproperty/iscomposable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can use the asset in a media composition.
- [isCompatibleWithSavedPhotosAlbum](avpartialasyncproperty/iscompatiblewithsavedphotosalbum.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can write the asset to the Saved Photos album.
- [isCompatibleWithAirPlayVideo](avpartialasyncproperty/iscompatiblewithairplayvideo.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset is compatible with AirPlay Video.

### Loading asset preferences

- [preferredRate](avpartialasyncproperty/preferredrate.md): Conforms when `Root` inherits `AVAsset`. The asset’s rate preference for playing its media.
- [preferredTransform](avpartialasyncproperty/preferredtransform-80d13.md): Conforms when `Root` inherits `AVAsset`. The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredVolume](avpartialasyncproperty/preferredvolume-20mb3.md): Conforms when `Root` inherits `AVAsset`. The asset’s volume preference for playing its audible media.
- [preferredDisplayCriteria](avpartialasyncproperty/preferreddisplaycriteria.md): Conforms when `Root` inherits `AVAsset`. The asset’s display mode preference for optimal playback of its content.

### Loading media selections

- [allMediaSelections](avpartialasyncproperty/allmediaselections.md): Conforms when `Root` inherits `AVAsset`. The available media selections for an asset.
- [preferredMediaSelection](avpartialasyncproperty/preferredmediaselection.md): Conforms when `Root` inherits `AVAsset`. The default media selections for the media selection groups of an asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](avpartialasyncproperty/availablemediacharacteristicswithmediaselectionoptions.md): Conforms when `Root` inherits `AVAsset`. The media characteristics that provide media selection options.

### Loading chapter metadata

- [availableChapterLocales](avpartialasyncproperty/availablechapterlocales.md): Conforms when `Root` inherits `AVAsset`. The locales of an asset’s chapter metadata.

### Loading content protections

- [hasProtectedContent](avpartialasyncproperty/hasprotectedcontent.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset contains protected content.

### Loading fragment support

- [canContainFragments](avpartialasyncproperty/cancontainfragments.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can extend the asset by fragments.
- [containsFragments](avpartialasyncproperty/containsfragments.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](avpartialasyncproperty/overalldurationhint.md): Conforms when `Root` inherits `AVAsset`. A hint to the total duration of fragments that currently exist or may exist in the future.

## See Also

### Loading properties

- [AVAssetTrack](avassettrack-async-properties.md): Asynchronous properties for asset tracks.
- [AVURLAsset](avurlasset-async-properties.md): Asynchronous properties for URL assets.
- [AVFragmentedAsset](avfragmentedasset-async-properties.md): Asynchronous properties for fragmented assets.
- [AVMetadataItem](avmetadataitem-async-properties.md): Asynchronous properties for metadata items.
- [AVComposition](avcomposition-async-properties.md): Asynchronous properties for compositions.
- [AVMutableComposition](avmutablecomposition-async-properties.md): Asynchronous properties for mutable compositions.
- [AVMovie](avmovie-async-properties.md): Asynchronous properties for movies.
- [AVMutableMovie](avmutablemovie-async-properties.md): Asynchronous properties for mutable movies.
- [AVFragmentedMovie](avfragmentedmovie-async-properties.md): Asynchronous properties for fragmented movies.

# AVAsset (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Asynchronous properties for assets.

## See Also

### Loading properties

- [AVAssetTrack](avassettrack-async-properties.md): Asynchronous properties for asset tracks.
- [AVURLAsset](avurlasset-async-properties.md): Asynchronous properties for URL assets.
- [AVFragmentedAsset](avfragmentedasset-async-properties.md): Asynchronous properties for fragmented assets.
- [AVMetadataItem](avmetadataitem-async-properties.md): Asynchronous properties for metadata items.
- [AVComposition](avcomposition-async-properties.md): Asynchronous properties for compositions.
- [AVMutableComposition](avmutablecomposition-async-properties.md): Asynchronous properties for mutable compositions.
- [AVMovie](avmovie-async-properties.md): Asynchronous properties for movies.
- [AVMutableMovie](avmutablemovie-async-properties.md): Asynchronous properties for mutable movies.
- [AVFragmentedMovie](avfragmentedmovie-async-properties.md): Asynchronous properties for fragmented movies.
