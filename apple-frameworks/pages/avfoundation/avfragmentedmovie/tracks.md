> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avfragmentedmovie/tracks

# tracks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The tracks that a movie contains.

## Declaration

```swift
var tracks: [AVFragmentedMovieTrack] { get }
```

## See Also

### Accessing tracks

- [track(withTrackID:)](track%28withtrackid_%29.md): Deprecated. Retrieves a track in the movie that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.

# tracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

The tracks that a movie contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVFragmentedMovieTrack *> * tracks;
```

## See Also

### Accessing tracks

- [trackWithTrackID:](track%28withtrackid_%29.md): Deprecated. Retrieves a track in the movie that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.
