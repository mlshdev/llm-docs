> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedasset/tracks(withmediatype:)](https://developer.apple.com/documentation/avfoundation/avfragmentedasset/tracks(withmediatype:))

# tracks(withMediaType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns tracks that present media of a specified type.

> Use [loadTracks(withMediaType:completionHandler:)](loadtracks%28withmediatype_completionhandler_%29.md) instead.

## Declaration

```swift
func tracks(withMediaType mediaType: AVMediaType) -> [AVFragmentedAssetTrack]
```

## Parameters

- `mediaType`: The media type according to which the asset filters its tracks. For valid values see [AVMediaType](../avmediatype.md).

<a id="return-value"></a>

## Return Value

An array of tracks of a specific media characteristic.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this method in iOS 15, tvOS 15, and macOS 12 or later. Load tracks asynchronously using [loadTracks(withMediaType:completionHandler:)](loadtracks%28withmediatype_completionhandler_%29.md) instead.

You may call this method without blocking the current thread after you’ve asynchronously loaded the [tracks](../avasset/tracks.md) property.

## See Also

### Accessing tracks

- [tracks](tracks.md): Deprecated. The tracks an asset contains.
- [track(withTrackID:)](track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns tracks that present media of a specified characteristic.

# tracksWithMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns tracks that present media of a specified type.

> Use [loadTracksWithMediaType:completionHandler:](loadtracks%28withmediatype_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (NSArray<AVFragmentedAssetTrack *> *) tracksWithMediaType:(AVMediaType) mediaType;
```

## Parameters

- `mediaType`: The media type according to which the asset filters its tracks. For valid values see [AVMediaType](../avmediatype.md).

<a id="return-value"></a>

## Return Value

An array of tracks of a specific media characteristic.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this method in iOS 15, tvOS 15, and macOS 12 or later. Load tracks asynchronously using [loadTracksWithMediaType:completionHandler:](loadtracks%28withmediatype_completionhandler_%29.md) instead.

You may call this method without blocking the current thread after you’ve asynchronously loaded the [tracks](../avasset/tracks.md) property.

## See Also

### Accessing tracks

- [tracks](tracks.md): Deprecated. The tracks an asset contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns tracks that present media of a specified characteristic.
