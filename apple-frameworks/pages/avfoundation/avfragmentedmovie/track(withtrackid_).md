> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedmovie/track(withtrackid:)](https://developer.apple.com/documentation/avfoundation/avfragmentedmovie/track(withtrackid:))

# track(withTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · watchOS 1.0+ (deprecated in 9.0)

Retrieves a track in the movie that contains the specified identifier.

> Use loadTrack(withTrackID:) instead

## Declaration

```swift
func track(withTrackID trackID: CMPersistentTrackID) -> AVFragmentedMovieTrack?
```

## Parameters

- `trackID`: The persistent track identifier.

<a id="return-value"></a>

## Return Value

A movie track, or `nil` if there is no track with the identifier.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a track asynchronously using [loadTrack(withTrackID:completionHandler:)](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a movie contains.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.

# trackWithTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · watchOS 6.0+ (deprecated in 11.0)

Retrieves a track in the movie that contains the specified identifier.

> Use loadTrack(withTrackID:) instead

## Declaration

```objectivec
- (AVFragmentedMovieTrack *) trackWithTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `trackID`: The persistent track identifier.

<a id="return-value"></a>

## Return Value

A movie track, or `nil` if there is no track with the identifier.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a track asynchronously using [loadTrackWithTrackID:completionHandler:](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a movie contains.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.
