> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedasset/tracks(withmediacharacteristic:)](https://developer.apple.com/documentation/avfoundation/avfragmentedasset/tracks(withmediacharacteristic:))

# tracks(withMediaCharacteristic:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns tracks that present media of a specified characteristic.

> Use [loadTracks(withMediaCharacteristic:completionHandler:)](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

## Declaration

```swift
func tracks(withMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) -> [AVFragmentedAssetTrack]
```

## Parameters

- `mediaCharacteristic`: The media characteristic according to which the asset filters its asset tracks. For valid values, see [AVMediaCharacteristic](../avmediacharacteristic.md).

<a id="return-value"></a>

## Return Value

An array of tracks of a specific media characteristic.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this method in iOS 15, tvOS 15, and macOS 12 or later. Load tracks asynchronously using [loadTracks(withMediaCharacteristic:completionHandler:)](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

You may call this method without blocking the current thread after you’ve asynchronously loaded the [tracks](../avasset/tracks.md) property.

## See Also

### Accessing tracks

- [tracks](tracks.md): Deprecated. The tracks an asset contains.
- [track(withTrackID:)](track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Deprecated. Returns tracks that present media of a specified type.

# tracksWithMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns tracks that present media of a specified characteristic.

> Use [loadTracksWithMediaCharacteristic:completionHandler:](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (NSArray<AVFragmentedAssetTrack *> *) tracksWithMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `mediaCharacteristic`: The media characteristic according to which the asset filters its asset tracks. For valid values, see [AVMediaCharacteristic](../avmediacharacteristic.md).

<a id="return-value"></a>

## Return Value

An array of tracks of a specific media characteristic.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this method in iOS 15, tvOS 15, and macOS 12 or later. Load tracks asynchronously using [loadTracksWithMediaCharacteristic:completionHandler:](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

You may call this method without blocking the current thread after you’ve asynchronously loaded the [tracks](../avasset/tracks.md) property.

## See Also

### Accessing tracks

- [tracks](tracks.md): Deprecated. The tracks an asset contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Deprecated. Returns tracks that present media of a specified type.
