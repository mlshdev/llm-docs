> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/tracks(withmediatype:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/tracks(withmediatype:))

# tracks(withMediaType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Retrieves tracks in the movie that present media of the specified type.

## Declaration

```swift
func tracks(withMediaType mediaType: AVMediaType) -> [AVMutableMovieTrack]
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
- [track(withTrackID:)](track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.
- [unusedTrackID()](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

# tracksWithMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Retrieves tracks in the movie that present media of the specified type.

## Declaration

```objectivec
- (NSArray<AVMutableMovieTrack *> *) tracksWithMediaType:(AVMediaType) mediaType;
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
- [trackWithTrackID:](track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.
- [unusedTrackID](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.
