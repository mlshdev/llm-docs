> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/tracks(withmediatype:)](https://developer.apple.com/documentation/avfoundation/avasset/tracks(withmediatype:))

# tracks(withMediaType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns tracks that contain media of a specified type.

> Use [loadTracks(withMediaType:completionHandler:)](loadtracks%28withmediatype_completionhandler_%29.md)

## Declaration

```swift
func tracks(withMediaType mediaType: AVMediaType) -> [AVAssetTrack]
```

## Parameters

- `mediaType`: The media type of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of tracks, which is empty if there are no tracks with the media type.

<a id="Discussion"></a>

## Discussion

\\You can call this method without blocking the current thread when the data in the [tracks](tracks.md) property is already loaded.

# tracksWithMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns tracks that contain media of a specified type.

> Use [loadTracksWithMediaType:completionHandler:](loadtracks%28withmediatype_completionhandler_%29.md)

## Declaration

```objectivec
- (NSArray<AVAssetTrack *> *) tracksWithMediaType:(AVMediaType) mediaType;
```

## Parameters

- `mediaType`: The media type of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of tracks, which is empty if there are no tracks with the media type.

<a id="Discussion"></a>

## Discussion

\\You can call this method without blocking the current thread when the data in the [tracks](tracks.md) property is already loaded.

## See Also

### Accessing tracks

- [tracks](tracks.md): Deprecated. The tracks an asset contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns an array of asset tracks matching the specified media characteristic.
- [unusedTrackID](unusedtrackid%28%29.md): Deprecated. Returns an identifier that no other tracks in the asset use.
