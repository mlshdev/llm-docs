> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/track(withtrackid:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/track(withtrackid:))

# track(withTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Retrieves a track in the movie that contains the specified identifier.

## Declaration

```swift
func track(withTrackID trackID: CMPersistentTrackID) -> AVMutableMovieTrack?
```

## Parameters

- `trackID`: The track identifier for the requested track.

<a id="return-value"></a>

## Return Value

A movie track, or `nil` if there is no track with the identifier.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a track asynchronously using [loadTrack(withTrackID:completionHandler:)](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a movie contains.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.
- [unusedTrackID()](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

# trackWithTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Retrieves a track in the movie that contains the specified identifier.

## Declaration

```objectivec
- (AVMutableMovieTrack *) trackWithTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `trackID`: The track identifier for the requested track.

<a id="return-value"></a>

## Return Value

A movie track, or `nil` if there is no track with the identifier.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a track asynchronously using [loadTrackWithTrackID:completionHandler:](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a movie contains.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.
- [unusedTrackID](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.
