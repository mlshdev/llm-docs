> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/tracks](https://developer.apple.com/documentation/avfoundation/avmutablemovie/tracks)

# tracks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The tracks that a movie contains.

## Declaration

```swift
var tracks: [AVMutableMovieTrack] { get }
```

## See Also

### Accessing tracks

- [track(withTrackID:)](track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.
- [unusedTrackID()](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

# tracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The tracks that a movie contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMutableMovieTrack *> * tracks;
```

## See Also

### Accessing tracks

- [trackWithTrackID:](track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.
- [unusedTrackID](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.
