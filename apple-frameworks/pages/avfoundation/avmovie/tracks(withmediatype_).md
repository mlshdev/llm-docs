> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/tracks(withmediatype:)](https://developer.apple.com/documentation/avfoundation/avmovie/tracks(withmediatype:))

# tracks(withMediaType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · watchOS 1.0+ (deprecated in 9.0)

Retrieves tracks in the movie that present media of the specified type.

> Use [loadTracks(withMediaType:completionHandler:)](loadtracks%28withmediatype_completionhandler_%29.md) instead.

## Declaration

```swift
func tracks(withMediaType mediaType: AVMediaType) -> [AVMovieTrack]
```

## Parameters

- `mediaType`: The media type of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of tracks, which is empty if there are no tracks with the media type.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load tracks asynchronously using [loadTracks(withMediaType:completionHandler:)](loadtracks%28withmediatype_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a movie contains.
- [track(withTrackID:)](track%28withtrackid_%29.md): Deprecated. Retrieves a track in the movie that contains the specified identifier.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.

# tracksWithMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · watchOS 6.0+ (deprecated in 11.0)

Retrieves tracks in the movie that present media of the specified type.

> Use [loadTracksWithMediaType:completionHandler:](loadtracks%28withmediatype_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (NSArray<AVMovieTrack *> *) tracksWithMediaType:(AVMediaType) mediaType;
```

## Parameters

- `mediaType`: The media type of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of tracks, which is empty if there are no tracks with the media type.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load tracks asynchronously using [loadTracksWithMediaType:completionHandler:](loadtracks%28withmediatype_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a movie contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Deprecated. Retrieves a track in the movie that contains the specified identifier.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.
