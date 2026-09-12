> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/tracks(withmediacharacteristic:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/tracks(withmediacharacteristic:))

# tracks(withMediaCharacteristic:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns tracks that contain media of a specified characteristic.

## Declaration

```swift
func tracks(withMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) -> [AVMutableCompositionTrack]
```

## Parameters

- `mediaCharacteristic`: The media characteristic of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of composition tracks, which is empty if there are no matching tracks.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method. Load tracks asynchronously using [loadTracks(withMediaCharacteristic:completionHandler:)](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [track(withTrackID:)](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.

# tracksWithMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns tracks that contain media of a specified characteristic.

## Declaration

```objectivec
- (NSArray<AVMutableCompositionTrack *> *) tracksWithMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `mediaCharacteristic`: The media characteristic of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of composition tracks, which is empty if there are no matching tracks.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method. Load tracks asynchronously using [loadTracksWithMediaCharacteristic:completionHandler:](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
