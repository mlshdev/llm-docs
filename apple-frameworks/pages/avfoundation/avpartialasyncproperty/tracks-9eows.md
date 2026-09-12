> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/tracks-9eows](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/tracks-9eows)

# tracks

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The tracks that a composition contains.

## Declaration

```swift
static var tracks: AVAsyncProperty<Root, [AVCompositionTrack]> { get }
```

## See Also

### Loading tracks

- [loadTrack(withTrackID:completionHandler:)](../avcomposition/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](../avcomposition/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](../avcomposition/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.
