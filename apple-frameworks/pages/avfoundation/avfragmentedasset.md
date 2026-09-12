> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedasset](https://developer.apple.com/documentation/avfoundation/avfragmentedasset)

# AVFragmentedAsset (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An asset with a duration that the system can extend without modifying its existing media data.

## Declaration

```swift
class AVFragmentedAsset
```

<a id="overview"></a>

## Overview

By using an `mvex` box in their `moov` box, QuickTime movie files and MPEG-4 files can indicate that they accommodate additional fragments. To determine whether a fragmented asset can monitor the addition of fragments, check the value of its [canContainFragments](avasset/cancontainfragments.md) property.

Associate a fragmented asset with an instance of [AVFragmentedAssetMinder](avfragmentedassetminder.md) to know when the system appends new fragments. When it has an associated asset minder, [AVFragmentedAssetTrack](avfragmentedassettrack.md) posts [AVAssetDurationDidChangeNotification](avassetdurationdidchangenotification.md) notifications whenever it detects new fragments. It may also post [AVAssetContainsFragmentsDidChangeNotification](avassetcontainsfragmentsdidchangenotification.md) and [AVAssetWasDefragmentedNotification](avassetwasdefragmentednotification.md), as the documentation of those notifications explains.

## Topics

### Loading tracks

- [tracks](avpartialasyncproperty/tracks-9z3j9.md): Conforms when `Root` inherits `AVFragmentedAsset`. The tracks an asset contains.
- [loadTrack(withTrackID:completionHandler:)](avfragmentedasset/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](avfragmentedasset/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](avfragmentedasset/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

- [tracks](avfragmentedasset/tracks.md): Deprecated. The tracks an asset contains.
- [track(withTrackID:)](avfragmentedasset/track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](avfragmentedasset/tracks%28withmediatype_%29.md): Deprecated. Returns tracks that present media of a specified type.
- [tracks(withMediaCharacteristic:)](avfragmentedasset/tracks%28withmediacharacteristic_%29.md): Deprecated. Returns tracks that present media of a specified characteristic.

### Initializers

- [init(URL:options:)](avfragmentedasset/init%28url_options_%29.md)

## Relationships

### Inherits From

- [AVURLAsset](avurlasset.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [AVContentKeyRecipient](avcontentkeyrecipient.md)
- [AVFragmentMinding](avfragmentminding.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fragmented assets

- [AVFragmentedAssetTrack](avfragmentedassettrack.md): An object that provides the track-level interface to inspect a fragmented asset’s media tracks.
- [AVFragmentedAssetMinder](avfragmentedassetminder.md): An object that periodically checks whether the system adds new fragments to a fragmented asset.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.

# AVFragmentedAsset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An asset with a duration that the system can extend without modifying its existing media data.

## Declaration

```objectivec
@interface AVFragmentedAsset : AVURLAsset
```

<a id="overview"></a>

## Overview

By using an `mvex` box in their `moov` box, QuickTime movie files and MPEG-4 files can indicate that they accommodate additional fragments. To determine whether a fragmented asset can monitor the addition of fragments, check the value of its [canContainFragments](avasset/cancontainfragments.md) property.

Associate a fragmented asset with an instance of [AVFragmentedAssetMinder](avfragmentedassetminder.md) to know when the system appends new fragments. When it has an associated asset minder, [AVFragmentedAssetTrack](avfragmentedassettrack.md) posts [AVAssetDurationDidChangeNotification](avassetdurationdidchangenotification.md) notifications whenever it detects new fragments. It may also post [AVAssetContainsFragmentsDidChangeNotification](avassetcontainsfragmentsdidchangenotification.md) and [AVAssetWasDefragmentedNotification](avassetwasdefragmentednotification.md), as the documentation of those notifications explains.

## Topics

### Creating a fragmented asset

- [fragmentedAssetWithURL:options:](avfragmentedasset/fragmentedassetwithurl_options_.md): Creates a fragmented asset for the media at the specified URL.

### Loading tracks

- [loadTrackWithTrackID:completionHandler:](avfragmentedasset/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracksWithMediaType:completionHandler:](avfragmentedasset/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracksWithMediaCharacteristic:completionHandler:](avfragmentedasset/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

- [tracks](avfragmentedasset/tracks.md): Deprecated. The tracks an asset contains.
- [trackWithTrackID:](avfragmentedasset/track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracksWithMediaType:](avfragmentedasset/tracks%28withmediatype_%29.md): Deprecated. Returns tracks that present media of a specified type.
- [tracksWithMediaCharacteristic:](avfragmentedasset/tracks%28withmediacharacteristic_%29.md): Deprecated. Returns tracks that present media of a specified characteristic.

## Relationships

### Inherits From

- [AVURLAsset](avurlasset.md)

### Conforms To

- [AVFragmentMinding](avfragmentminding.md)

## See Also

### Fragmented assets

- [AVFragmentedAssetTrack](avfragmentedassettrack.md): An object that provides the track-level interface to inspect a fragmented asset’s media tracks.
- [AVFragmentedAssetMinder](avfragmentedassetminder.md): An object that periodically checks whether the system adds new fragments to a fragmented asset.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.
