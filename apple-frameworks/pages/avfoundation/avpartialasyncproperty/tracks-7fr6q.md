> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/tracks-7fr6q

# tracks

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The tracks that a movie contains.

## Declaration

```swift
static var tracks: AVAsyncProperty<Root, [AVFragmentedMovieTrack]> { get }
```

## See Also

### Loading tracks

- [loadTrack(withTrackID:completionHandler:)](../avfragmentedmovie/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](../avfragmentedmovie/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](../avfragmentedmovie/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.
