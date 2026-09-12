> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/track(withtrackid:)](https://developer.apple.com/documentation/avfoundation/avasset/track(withtrackid:))

# track(withTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns a track that contains the specified identifier.

> Use [loadTrack(withTrackID:completionHandler:)](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## Declaration

```swift
func track(withTrackID trackID: CMPersistentTrackID) -> AVAssetTrack?
```

## Parameters

- `trackID`: The identifier of the track to retrieve.

<a id="return-value"></a>

## Return Value

An asset track, or `nil` if there is no track with the identifier.

<a id="Discussion"></a>

## Discussion

You can call this method without blocking the current thread when the data in the [tracks](tracks.md) property is already loaded.

# trackWithTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns a track that contains the specified identifier.

> Use [loadTrackWithTrackID:completionHandler:](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (AVAssetTrack *) trackWithTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `trackID`: The identifier of the track to retrieve.

<a id="return-value"></a>

## Return Value

An asset track, or `nil` if there is no track with the identifier.

<a id="Discussion"></a>

## Discussion

You can call this method without blocking the current thread when the data in the [tracks](tracks.md) property is already loaded.

## See Also

### Accessing tracks

- [tracks](tracks.md): Deprecated. The tracks an asset contains.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Deprecated. Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns an array of asset tracks matching the specified media characteristic.
- [unusedTrackID](unusedtrackid%28%29.md): Deprecated. Returns an identifier that no other tracks in the asset use.
