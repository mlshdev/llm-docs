> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/tracks(withmediacharacteristic:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/tracks(withmediacharacteristic:))

# tracks(withMediaCharacteristic:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Retrieve tracks in the movie that present media of the specified characteristic.

## Declaration

```swift
func tracks(withMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) -> [AVMutableMovieTrack]
```

## Parameters

- `mediaCharacteristic`: The media characteristic of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of tracks, which is empty if there are no tracks with the media characteristic.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load tracks asynchronously using [loadTracks(withMediaCharacteristic:completionHandler:)](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a movie contains.
- [track(withTrackID:)](track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [unusedTrackID()](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

# tracksWithMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Retrieve tracks in the movie that present media of the specified characteristic.

## Declaration

```objectivec
- (NSArray<AVMutableMovieTrack *> *) tracksWithMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `mediaCharacteristic`: The media characteristic of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of tracks, which is empty if there are no tracks with the media characteristic.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load tracks asynchronously using [loadTracksWithMediaCharacteristic:completionHandler:](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a movie contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [unusedTrackID](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.
