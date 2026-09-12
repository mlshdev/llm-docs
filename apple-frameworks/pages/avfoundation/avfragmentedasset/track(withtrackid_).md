> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedasset/track(withtrackid:)](https://developer.apple.com/documentation/avfoundation/avfragmentedasset/track(withtrackid:))

# track(withTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns a track that contains the specified identifier.

> Use [loadTrack(withTrackID:completionHandler:)](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## Declaration

```swift
func track(withTrackID trackID: CMPersistentTrackID) -> AVFragmentedAssetTrack?
```

## Parameters

- `trackID`: The identifier of the track to return.

<a id="return-value"></a>

## Return Value

A fragmented asset track, or `nil` if no track with the specified identifier is available.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this method in iOS 15, tvOS 15, and macOS 12 or later. Load a track asynchronously using [loadTrack(withTrackID:completionHandler:)](loadtrack%28withtrackid_completionhandler_%29.md) instead.

You may call this method without blocking the current thread after you’ve asynchronously loaded the [tracks](../avasset/tracks.md) property.

## See Also

### Accessing tracks

- [tracks](tracks.md): Deprecated. The tracks an asset contains.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Deprecated. Returns tracks that present media of a specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns tracks that present media of a specified characteristic.

# trackWithTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns a track that contains the specified identifier.

> Use [loadTrackWithTrackID:completionHandler:](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (AVFragmentedAssetTrack *) trackWithTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `trackID`: The identifier of the track to return.

<a id="return-value"></a>

## Return Value

A fragmented asset track, or `nil` if no track with the specified identifier is available.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this method in iOS 15, tvOS 15, and macOS 12 or later. Load a track asynchronously using [loadTrackWithTrackID:completionHandler:](loadtrack%28withtrackid_completionhandler_%29.md) instead.

You may call this method without blocking the current thread after you’ve asynchronously loaded the [tracks](../avasset/tracks.md) property.

## See Also

### Accessing tracks

- [tracks](tracks.md): Deprecated. The tracks an asset contains.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Deprecated. Returns tracks that present media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns tracks that present media of a specified characteristic.
