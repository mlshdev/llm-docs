> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/tracks-80a83](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/tracks-80a83)

# tracks

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The tracks that a movie contains.

## Declaration

```swift
static var tracks: AVAsyncProperty<Root, [AVMovieTrack]> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading tracks

- [loadTrack(withTrackID:completionHandler:)](../avmovie/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](../avmovie/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](../avmovie/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.
