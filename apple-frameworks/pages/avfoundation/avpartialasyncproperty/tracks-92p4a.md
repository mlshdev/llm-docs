> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/tracks-92p4a](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/tracks-92p4a)

# tracks

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The tracks that a composition contains.

## Declaration

```swift
static var tracks: AVAsyncProperty<Root, [AVMutableCompositionTrack]> { get }
```

## See Also

### Loading tracks

- [loadTrack(withTrackID:completionHandler:)](../avmutablecomposition/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](../avmutablecomposition/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](../avmutablecomposition/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.
